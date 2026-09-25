'use client';

import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { ArrowUp, ArrowUpRight, Briefcase, FlaskConical, Mail, RotateCcw, Wrench, X, type LucideIcon } from 'lucide-react';
import { answerProfileQuestion, isProfileAnswer, MAX_QUESTION_LENGTH, STARTER_QUESTIONS, WELCOME_MESSAGE, type ProfileAnswer } from '@/lib/profile-guide';
import ChatMascot from './ChatMascot';
import '@/styles/profile-chat.css';

type Message = { id: number; role: 'visitor' | 'guide'; text: string; sources?: ProfileAnswer['sources']; ai?: boolean; animate?: boolean };
const greeting: Message = { id: 0, role: 'guide', text: WELCOME_MESSAGE };
const STARTER_ICONS: LucideIcon[] = [Briefcase, Wrench, FlaskConical, Mail];

/* The tile glyph echoes the hero's quality field: a scan passes across a small matrix. */
function TileGlyph({ cols, rows, className }: { cols: number; rows: number; className: string }) {
  return (
    <span className={className} aria-hidden="true" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: cols * rows }, (_, i) => <span key={i} style={{ ['--c' as string]: i % cols }} />)}
    </span>
  );
}

function renderInline(text: string) {
  // Drop a dangling "**" while an answer is still typing out.
  const safe = text.split('**').length % 2 === 0 ? text.replace(/\*\*(?!.*\*\*)/, '') : text;
  return safe.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') && part.length > 4 ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

const BULLET = /^\s*[•*-]\s+/;

// Answers are plain text: blank-line paragraphs, "•" bullet lines, occasional **bold**.
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n{2,}/).map((block, b) => {
        const groups: { list: boolean; lines: string[] }[] = [];
        block.split('\n').filter(line => line.trim()).forEach(line => {
          const list = BULLET.test(line);
          const last = groups[groups.length - 1];
          if (last && last.list === list) last.lines.push(list ? line.replace(BULLET, '') : line);
          else groups.push({ list, lines: [list ? line.replace(BULLET, '') : line] });
        });
        return groups.map((group, g) => group.list
          ? <ul key={`${b}-${g}`}>{group.lines.map((line, i) => <li key={i}>{renderInline(line)}</li>)}</ul>
          : <p key={`${b}-${g}`}>{group.lines.map((line, i) => <Fragment key={i}>{i > 0 && <br />}{renderInline(line)}</Fragment>)}</p>);
      })}
    </>
  );
}

function GuideMessage({ message, onNavigate }: { message: Message; onNavigate: () => void }) {
  const tokens = useMemo(() => message.text.split(/(\s+)/), [message.text]);
  const total = useMemo(() => tokens.filter(token => token.trim()).length, [tokens]);
  const [shown, setShown] = useState(message.animate ? 0 : total);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!message.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(total);
      return;
    }
    // Roughly 60 ticks whatever the length, so long answers don't drag.
    const step = Math.max(1, Math.ceil(total / 60));
    let count = 0;
    const timer = setInterval(() => {
      count = Math.min(total, count + step);
      setShown(count);
      if (count >= total) clearInterval(timer);
    }, 26);
    return () => clearInterval(timer);
  }, [message.animate, total]);

  useEffect(() => {
    const transcript = root.current?.closest('.profile-chat-transcript');
    if (transcript && transcript.scrollHeight - transcript.scrollTop - transcript.clientHeight < 120) {
      transcript.scrollTop = transcript.scrollHeight;
    }
  }, [shown]);

  const done = shown >= total;
  const visible = useMemo(() => {
    if (done) return message.text;
    let words = 0;
    let out = '';
    for (const token of tokens) {
      if (token.trim() && ++words > shown) break;
      out += token;
    }
    return out;
  }, [done, message.text, shown, tokens]);

  return (
    <div ref={root} className="profile-chat-message profile-chat-message--guide">
      <span className="sr-only">{message.ai ? 'AI portfolio guide: ' : 'Portfolio guide: '}{message.text}</span>
      <div className="profile-chat-rich" aria-hidden="true">
        <RichText text={visible} />
        {!done && <span className="profile-chat-caret" />}
      </div>
      {done && message.sources && message.sources.length > 0 && (
        <div className="profile-chat-sources" aria-label="Sources and related links">
          {message.sources.map(source => (
            <a key={source.href} href={source.href}
              target={source.href.startsWith('https://') ? '_blank' : undefined}
              rel={source.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
              onClick={() => { if (source.href.startsWith('/')) onNavigate(); }}>
              {source.label}<ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfileChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [suggestions, setSuggestions] = useState(STARTER_QUESTIONS);
  const [mode, setMode] = useState<'checking' | 'profile' | 'openai'>('checking');
  const [isLoading, setIsLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [compact, setCompact] = useState(false);
  const [happy, setHappy] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const requestRef = useRef<AbortController | null>(null);

  // The launcher shows its label near the top of the page, then tucks into an icon.
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The mascot smiles briefly whenever a fresh answer lands.
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.role !== 'guide' || !last.animate) return;
    setHappy(true);
    const timer = setTimeout(() => setHappy(false), 2400);
    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    if (!isOpen || mode !== 'checking') return;
    const controller = new AbortController();
    fetch('/api/chat', { signal: controller.signal, cache: 'no-store' })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (!controller.signal.aborted) setMode(data?.mode === 'openai' ? 'openai' : 'profile'); })
      .catch(() => { if (!controller.signal.aborted) setMode('profile'); });
    return () => controller.abort();
  }, [isOpen, mode]);

  useEffect(() => () => {
    const pending = requestRef.current;
    requestRef.current = null;
    pending?.abort();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  async function send(question: string) {
    const trimmed = question.trim();
    if (!trimmed || trimmed.length > MAX_QUESTION_LENGTH || requestRef.current || mode === 'checking') return;
    const fallback = answerProfileQuestion(trimmed);
    const visitor: Message = { id: nextId.current++, role: 'visitor', text: trimmed };
    // Bound memory; the conversation exists only while this page remains open.
    setMessages(previous => [...previous.slice(-38), visitor]);
    setDraft('');
    setNotice('');
    inputRef.current?.focus();
    if (mode === 'profile') {
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: fallback.text, sources: fallback.sources, animate: true }]);
      setSuggestions(fallback.suggestions);
      return;
    }
    const controller = new AbortController();
    requestRef.current = controller;
    setIsLoading(true);
    const timeout = setTimeout(() => controller.abort('timeout'), 25_000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({ question: trimmed, history: messages.filter(message => message.id !== 0).slice(-6).map(message => ({ role: message.role === 'visitor' ? 'user' : 'assistant', content: message.text })) }),
      });
      if (!response.ok) throw new Error('Chat unavailable');
      const data = await response.json();
      if (!isProfileAnswer(data)) throw new Error('Invalid chat response');
      if (requestRef.current !== controller) return;
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: data.text, sources: data.sources, ai: 'mode' in data && data.mode === 'openai', animate: true }]);
      setSuggestions(data.suggestions);
      setNotice('notice' in data && typeof data.notice === 'string' ? data.notice : '');
    } catch {
      if (requestRef.current !== controller) return;
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: fallback.text, sources: fallback.sources, animate: true }]);
      setSuggestions(fallback.suggestions);
      setNotice('AI chat is unavailable. Showing a profile-based answer instead.');
    } finally {
      clearTimeout(timeout);
      if (requestRef.current === controller) { requestRef.current = null; setIsLoading(false); }
    }
  }

  function cancel() {
    requestRef.current?.abort();
    requestRef.current = null;
    setIsLoading(false);
  }

  function reset() {
    cancel();
    setMessages([greeting]);
    setSuggestions(STARTER_QUESTIONS);
    setDraft('');
    setNotice('');
    inputRef.current?.focus();
  }

  function close() {
    if (isClosing || !isOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 150);
  }

  const isFresh = messages.length === 1;
  const asked = new Set(messages.filter(message => message.role === 'visitor').map(message => message.text));
  const followUps = suggestions.filter(question => !asked.has(question));
  const disabled = isLoading || mode === 'checking';
  const mood = isLoading ? 'thinking' : happy ? 'happy' : 'idle';
  const status = mode === 'openai' ? 'AI guide · replies in seconds' : mode === 'checking' ? 'Getting ready…' : 'Profile guide · instant answers';

  let starters: ReactNode = null;
  if (isFresh) {
    starters = (
      <div className="profile-chat-starters" aria-label="Suggested questions">
        {STARTER_QUESTIONS.map((question, i) => {
          const Icon = STARTER_ICONS[i] ?? ArrowUpRight;
          return (
            <button type="button" key={question} disabled={disabled} onClick={() => send(question)}>
              <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
              <span>{question}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="profile-chat">
      <div className={`profile-chat-launcher-wrap t-tt-wrap ${isOpen ? 'is-open' : ''} ${compact ? 'is-compact' : ''}`}>
        <button
          ref={launcherRef}
          type="button"
          className="profile-chat-launcher t-tt-trigger"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls="profile-chat-dialog"
          aria-label="Ask about James"
        >
          <ChatMascot size={34} />
          <span className="profile-chat-launcher-label" aria-hidden="true">Ask about James</span>
        </button>
        <span className="profile-chat-tooltip t-tt" role="tooltip">
          Ask about James
        </span>
      </div>

      <dialog
        ref={dialogRef}
        id="profile-chat-dialog"
        className={`profile-chat-dialog ${isClosing ? 'is-closing' : ''}`}
        aria-labelledby="profile-chat-title"
        aria-describedby="profile-chat-description"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => {
          setIsOpen(false);
          setIsClosing(false);
          launcherRef.current?.focus();
        }}
        onKeyDown={(event) => {
          // Keep the site's global command shortcut from opening another dialog over this one.
          if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        <div className="profile-chat-panel">
          <header className="profile-chat-header">
            <div className="profile-chat-identity">
              <span className="profile-chat-avatar" aria-hidden="true">
                <ChatMascot mood={mood} size={34} />
              </span>
              <div>
                <h2 id="profile-chat-title">Ask about James</h2>
                <p id="profile-chat-description"><span className="profile-chat-live" aria-hidden="true" />{status}</p>
              </div>
            </div>
            <div className="profile-chat-actions">
              <button type="button" onClick={reset} aria-label="Start a new chat" title="Start a new chat"><RotateCcw size={16} /></button>
              <button type="button" onClick={close} aria-label="Close profile chat" title="Close"><X size={19} /></button>
            </div>
          </header>

          <div ref={transcriptRef} className="profile-chat-transcript" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabIndex={0}>
            {messages.map(message => message.role === 'visitor'
              ? <div key={message.id} className="profile-chat-message profile-chat-message--visitor"><span className="sr-only">You: </span><p>{message.text}</p></div>
              : <GuideMessage key={message.id} message={message} onNavigate={close} />)}
            {starters}
            {isLoading && (
              <div className="profile-chat-loading" role="status">
                <TileGlyph cols={6} rows={1} className="profile-chat-thinking" />
                <span className="t-shimmer-text">Checking James’s profile…</span>
                <button type="button" onClick={() => { cancel(); setNotice('Answer stopped. You can ask another question.'); }}>Stop</button>
              </div>
            )}
          </div>

          {!isFresh && followUps.length > 0 && (
            <div className="profile-chat-suggestions" aria-label="Suggested questions">
              {followUps.map(question => <button type="button" key={question} disabled={disabled} onClick={() => send(question)}>{question}<ArrowUpRight size={13} aria-hidden="true" /></button>)}
            </div>
          )}

          {notice && <p className="profile-chat-notice" role="status">{notice}</p>}
          <form className="profile-chat-form" onSubmit={event => { event.preventDefault(); send(draft); }}>
            <label className="sr-only" htmlFor="profile-chat-question">Ask a question about James</label>
            <div className="profile-chat-input-row">
              <input ref={inputRef} id="profile-chat-question" name="question" value={draft} onChange={event => setDraft(event.target.value)} maxLength={MAX_QUESTION_LENGTH} placeholder="Ask about his QA background…" autoComplete="off" enterKeyHint="send" />
              <button type="submit" disabled={!draft.trim() || disabled} aria-label="Send question"><ArrowUp size={18} /></button>
            </div>
            <p className="profile-chat-note">{mode === 'openai' ? 'AI can make mistakes. Sending shares this chat with OpenAI.' : mode === 'checking' ? 'Getting the profile guide ready…' : 'Profile-based answers. Messages aren’t saved.'}</p>
          </form>
        </div>
      </dialog>
    </div>
  );
}
