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

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
  }, [messages, pending, error]);

  async function send(question) {
    question = question.trim();
    if (!question || pending) return;
    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/forward-vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.answer) throw new Error(data?.error || "Something went wrong. Please try again.");
      setMessages((m) => [...m, { role: "assistant", content: data.answer, sources: data.sources }]);
    } catch (err) {
      // Drop the unanswered question and put it back in the box so it can be resent.
      setMessages((m) => m.slice(0, -1));
      setInput(question);
      setError(err.message);
    } finally {
      setPending(false);
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
    <div className="flex flex-col w-full max-w-[880px] mx-auto rounded-[16px] bg-primary-gray/60 border border-white/10 overflow-hidden">
      <div
        ref={logRef}
        className="flex flex-col gap-[16px] h-[60vh] min-h-[360px] overflow-y-auto p-[16px] md:p-[24px]"
        aria-live="polite"
      >
        {empty && (
          <div className="flex flex-col gap-[16px] m-auto items-center text-center max-w-[520px]">
            <p className="text-white/60">Try one of these, or ask your own question.</p>
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
                <div className="flex flex-wrap gap-[6px] pl-[4px]">
                  {m.sources.map((s, j) => (
                    <a
                      key={j}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-[260px] truncate rounded-full bg-white/[0.06] px-[10px] py-[4px] text-[12px] text-white/60 hover:text-white"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ),
        )}

        {pending && (
          <div className="self-start flex items-center gap-[6px] rounded-[16px] rounded-bl-[4px] bg-white/[0.06] px-[16px] py-[14px]" aria-label="Assistant is typing">
            {[0, 150, 300].map((d) => (
              <span key={d} className="h-[6px] w-[6px] rounded-full bg-white/60 animate-bounce" style={{ animationDelay: `${d}ms` }} />
            ))}
          </div>
        )}

        {error && (
          <div role="alert" className="self-center rounded-[10px] border border-primary-red/50 bg-primary-red/10 px-[14px] py-[8px] text-[14px] text-white/90">
            {error}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-end gap-[8px] border-t border-white/10 p-[12px] md:p-[16px]"
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
      <p className="px-[16px] pb-[12px] text-[12px] text-white/40">
        AI-generated answers can be wrong. For anything official, check with the Forward Vision team.
      </p>
    </div>
  );
}
