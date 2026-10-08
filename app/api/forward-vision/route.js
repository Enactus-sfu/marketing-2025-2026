// Relays chat questions from /forward-vision to the Forward Vision bot (Enactus-sfu/fv-bot).
// The bot keeps its own knowledge index and prompt doc; this route only forwards the
// question so the bot's API secret never reaches the browser.

const BOT_URL = process.env.FV_BOT_URL || "https://fv-bot.vercel.app";
const BOT_SECRET = process.env.FV_BOT_SECRET;

const MAX_QUESTION_CHARS = 1000;
const MAX_HISTORY = 10;

// Best-effort per-IP limit. Serverless instances don't share memory, so this only
// slows down a single abuser; it is not a hard cap on bot spend.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

// The bot's tool loop (knowledge search, web search) can take a while.
export const maxDuration = 60;

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "You're sending questions too quickly. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question) return Response.json({ error: "Please type a question." }, { status: 400 });
  if (question.length > MAX_QUESTION_CHARS) {
    return Response.json({ error: `Questions must be under ${MAX_QUESTION_CHARS} characters.` }, { status: 400 });
  }

  const history = Array.isArray(body.history)
    ? body.history
        .filter((t) => (t?.role === "user" || t?.role === "assistant") && typeof t.content === "string")
        .slice(-MAX_HISTORY)
        .map((t) => ({ role: t.role, content: t.content.slice(0, 4000) }))
    : [];

  try {
    const res = await fetch(`${BOT_URL}/api/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(BOT_SECRET ? { Authorization: `Bearer ${BOT_SECRET}` } : {}),
      },
      body: JSON.stringify({ question, history, format: "markdown" }),
      signal: AbortSignal.timeout(58_000),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || typeof data?.answer !== "string") {
      console.error("[forward-vision] bot error", res.status, data?.error);
      return Response.json({ error: "The assistant couldn't answer right now. Please try again." }, { status: 502 });
    }
    const sources = Array.isArray(data.sources)
      ? data.sources
          .filter((s) => s?.kind === "web" && typeof s.url === "string" && /^https?:\/\//.test(s.url))
          .map((s) => ({ title: String(s.title || s.url), url: s.url }))
      : [];
    // The bot cites knowledge-base passages as [K1]; those ids mean nothing to site visitors.
    const answer = data.answer.replace(/\s?(\[K\d+\])+/g, "");
    return Response.json({ answer, sources });
  } catch (err) {
    console.error("[forward-vision] request failed", err);
    return Response.json({ error: "The assistant took too long to respond. Please try again." }, { status: 504 });
  }
}
