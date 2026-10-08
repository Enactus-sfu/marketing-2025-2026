"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const SUGGESTIONS = [
  "When and where is the pitch competition?",
  "How is the final pitch judged?",
  "What should our needs assessment cover?",
  "Help me sharpen our sustainability idea",
];

// Renders the small subset of Markdown the bot produces (paragraphs, lists, bold,
// italics, inline code, links) as React elements, so no raw HTML is injected.
function renderInline(text, keyPrefix) {
  const pattern = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\)|https?:\/\/[^\s)]+)/g;
  const parts = [];
  let last = 0;
  let match;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("**")) {
      parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      parts.push(
        <code key={key} className="rounded bg-black/40 px-[4px] py-[1px] text-[0.9em]">
          {token.slice(1, -1)}
        </code>,
      );
    } else if (token.startsWith("[")) {
      const [, label, href] = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      parts.push(
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-primary-yellow underline">
          {label}
        </a>,
      );
    } else if (token.startsWith("http")) {
      parts.push(
        <a key={key} href={token} target="_blank" rel="noopener noreferrer" className="text-primary-yellow underline break-all">
          {token}
        </a>,
      );
    } else {
      parts.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Markdown({ text }) {
  const blocks = [];
  let list = null;
  const flush = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    blocks.push(
      <Tag key={`b${blocks.length}`} className={`${list.ordered ? "list-decimal" : "list-disc"} pl-[20px] flex flex-col gap-[4px]`}>
        {list.items.map((item, j) => (
          <li key={j}>{renderInline(item, `l${blocks.length}-${j}`)}</li>
        ))}
      </Tag>,
    );
    list = null;
  };

  for (const raw of text.split("\n")) {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*[-*•]\s+(.*)/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)/);
    if (bullet || numbered) {
      const ordered = Boolean(numbered);
      if (list && list.ordered !== ordered) flush();
      if (!list) list = { ordered, items: [] };
      list.items.push((bullet || numbered)[1]);
      continue;
    }
    flush();
    if (!line.trim()) continue;
    const heading = line.match(/^#{1,6}\s+(.*)/);
    blocks.push(
      heading ? (
        <p key={`b${blocks.length}`} className="font-[600]">
          {renderInline(heading[1], `h${blocks.length}`)}
        </p>
      ) : (
        <p key={`b${blocks.length}`}>{renderInline(line, `p${blocks.length}`)}</p>
      ),
    );
  }
  flush();
  return <div className="flex flex-col gap-[10px]">{blocks}</div>;
}

// The bot cites knowledge-base passages as [K1]; those ids mean nothing to site visitors.
// While the answer is still streaming, a citation can be cut off mid-way, so a dangling "[K" goes too.
function stripCitations(text, { partial = false } = {}) {
  const clean = text.replace(/\s?(\[K\d+\])+/g, "");
  return partial ? clean.replace(/\s?\[K?\d*$/, "") : clean;
}

const BOT_FAILED = "The assistant couldn't answer right now. Please try again.";

// Reads the bot's reply as it streams in: one JSON event per line (status, delta, reset, done, error).
// `onProgress(text, status)` fires as the answer grows; resolves with the finished answer and its sources.
// An older bot build sends a single JSON object instead of events; that is accepted too.
async function readAnswer(body, onProgress) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let content = "";
  let final = null;
  const handle = (line) => {
    if (!line.trim()) return;
    let event;
    try {
      event = JSON.parse(line);
    } catch {
      throw new Error(BOT_FAILED);
    }
    if (event.type === "status") {
      onProgress(content, event.status);
    } else if (event.type === "delta") {
      content += event.text;
      onProgress(content, "");
    } else if (event.type === "reset") {
      content = "";
      onProgress(content, "");
    } else if (event.type === "error") {
      throw new Error(BOT_FAILED);
    } else if (typeof event.answer === "string") {
      final = event;
    }
  };
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    lines.forEach(handle);
  }
  handle(buffer);
  if (!final) throw new Error(BOT_FAILED);
  // Event documents first, then web pages; titles trimmed like "(stream brief)". At most 4.
  const seen = new Set();
  const sources = [];
  for (const src of Array.isArray(final.sources) ? final.sources : []) {
    const title = String(src?.title || src?.url || "").replace(/\s*\(.*?\)\s*$/, "").trim();
    const url = typeof src?.url === "string" && /^https?:\/\//.test(src.url) ? src.url : null;
    if (!title || seen.has(title)) continue;
    seen.add(title);
    sources.push({ title, url });
  }
  return { answer: stripCitations(final.answer), sources: sources.slice(0, 4) };
}

export default function Chat() {
  const [messages, setMessages] = useState([]);
  // The reply being written right now: text so far, plus what the bot is doing before any text arrives.
  const [live, setLive] = useState(null);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
  }, [messages, live, error]);

  async function send(question) {
    question = question.trim();
    if (!question || pending) return;
    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setPending(true);
    setError(null);
    setLive({ content: "", status: "Thinking…" });
    try {
      const res = await fetch("/api/forward-vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      const { answer, sources } = await readAnswer(res.body, (content, status) => setLive({ content, status }));
      setMessages((m) => [...m, { role: "assistant", content: answer, sources }]);
    } catch (err) {
      // Drop the unanswered question and put it back in the box so it can be resent.
      setMessages((m) => m.slice(0, -1));
      setInput(question);
      setError(err.message);
    } finally {
      setPending(false);
      setLive(null);
      inputRef.current?.focus();
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(input);
    }
  }

  const empty = messages.length === 0;

  return (
    <div className="flex flex-col w-full h-full">
      <div ref={logRef} className="flex-1 overflow-y-auto" aria-live="polite">
        <div className="flex flex-col gap-[16px] w-full max-w-[880px] min-h-full mx-auto p-[16px] md:p-[24px]">
        {empty && (
          <div className="flex flex-col gap-[16px] m-auto items-center text-center max-w-[560px]">
            <h1 className="text-[28px] md:text-[36px] leading-tight">Ask the Forward Vision Assistant</h1>
            <p className="text-white/60">Questions about your stream, the event, or your team&apos;s idea. Try one of these, or ask your own.</p>
            <div className="flex flex-wrap justify-center gap-[8px]">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-white/20 px-[14px] py-[8px] text-[14px] text-white/80 hover:border-primary-red hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="self-end max-w-[85%] rounded-[16px] rounded-br-[4px] bg-secondary-red px-[16px] py-[10px] text-white whitespace-pre-wrap break-words">
              {m.content}
            </div>
          ) : (
            <div key={i} className="self-start max-w-[90%] flex flex-col gap-[8px]">
              <div className="rounded-[16px] rounded-bl-[4px] bg-white/[0.06] px-[16px] py-[12px] text-white/90 break-words">
                <Markdown text={m.content} />
              </div>
              {m.sources?.length > 0 && (
                <p className="pl-[4px] text-[13px] italic text-white/50">
                  Sources:{" "}
                  {m.sources.map((s, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && " · "}
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                          {s.title}
                        </a>
                      ) : (
                        s.title
                      )}
                    </React.Fragment>
                  ))}
                </p>
              )}
            </div>
          ),
        )}

        {live && (
          <div className="self-start max-w-[90%] flex flex-col gap-[8px]">
            {live.content && (
              <div className="rounded-[16px] rounded-bl-[4px] bg-white/[0.06] px-[16px] py-[12px] text-white/90 break-words" aria-hidden="true">
                <Markdown text={stripCitations(live.content, { partial: true })} />
              </div>
            )}
            <p className="fv-shimmer pl-[4px] text-[14px] text-white/70">{live.status || "Writing…"}</p>
          </div>
        )}

        {error && (
          <div role="alert" className="self-center rounded-[10px] border border-primary-red/50 bg-primary-red/10 px-[14px] py-[8px] text-[14px] text-white/90">
            {error}
          </div>
        )}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-end gap-[8px] w-[calc(100%-32px)] max-w-[880px] mx-auto mt-[8px] rounded-[16px] border border-white/15 bg-primary-gray/60 p-[8px] md:p-[10px]"
      >
        <label htmlFor="fv-question" className="sr-only">
          Your question
        </label>
        <textarea
          id="fv-question"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          maxLength={1000}
          placeholder="Ask about Forward Vision…"
          className="flex-1 resize-none bg-transparent px-[8px] py-[10px] text-[16px] text-white placeholder:text-white/40 outline-none max-h-[160px] field-sizing-content"
        />
        <button
          type="submit"
          disabled={pending || !input.trim()}
          aria-label="Send"
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-secondary-red text-white transition-colors duration-200 hover:bg-primary-red disabled:bg-white/10 disabled:text-white/30 cursor-pointer disabled:cursor-default"
        >
          <MdArrowUpward className="text-[22px]" />
        </button>
      </form>
      <p className="w-full max-w-[880px] mx-auto px-[16px] pt-[8px] pb-[12px] text-center text-[12px] text-white/40">
        AI-generated answers can be wrong. For anything official, check with the Forward Vision team.
      </p>
    </div>
  );
}
