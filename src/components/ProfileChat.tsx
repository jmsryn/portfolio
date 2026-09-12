'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, Loader2, MessageCircle, RotateCcw, X } from 'lucide-react';
import { answerProfileQuestion, isProfileAnswer, MAX_QUESTION_LENGTH, STARTER_QUESTIONS, WELCOME_MESSAGE, type ProfileAnswer } from '@/lib/profile-guide';
import '@/styles/profile-chat.css';

type Message = { id: number; role: 'visitor' | 'guide'; text: string; sources?: ProfileAnswer['sources']; ai?: boolean };
const greeting: Message = { id: 0, role: 'guide', text: WELCOME_MESSAGE };

export default function ProfileChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [suggestions, setSuggestions] = useState(STARTER_QUESTIONS);
  const [mode, setMode] = useState<'checking' | 'profile' | 'openai'>('checking');
  const [isLoading, setIsLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const requestRef = useRef<AbortController | null>(null);

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
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: fallback.text, sources: fallback.sources }]);
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
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: data.text, sources: data.sources, ai: 'mode' in data && data.mode === 'openai' }]);
      setSuggestions(data.suggestions);
      setNotice('notice' in data && typeof data.notice === 'string' ? data.notice : '');
    } catch {
      if (requestRef.current !== controller) return;
      setMessages(previous => [...previous, { id: nextId.current++, role: 'guide', text: fallback.text, sources: fallback.sources }]);
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
    setIsOpen(false);
  }

  return (
    <div className="profile-chat">
      <button ref={launcherRef} className="profile-chat-launcher" onClick={() => setIsOpen(true)} aria-haspopup="dialog" aria-expanded={isOpen} aria-controls="profile-chat-dialog">
        <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />
        <span>Ask about James</span>
      </button>

      <dialog ref={dialogRef} id="profile-chat-dialog" className="profile-chat-dialog" aria-labelledby="profile-chat-title" aria-describedby="profile-chat-description"
        onCancel={close}
        onClose={() => { setIsOpen(false); launcherRef.current?.focus(); }}
        onKeyDown={event => {
          // Keep the site's global command shortcut from opening another dialog over this one.
          if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            event.stopPropagation();
          }
        }}>
        <div className="profile-chat-panel">
          <header className="profile-chat-header">
            <div><h2 id="profile-chat-title">About James</h2><p id="profile-chat-description">A guide to his résumé & portfolio</p></div>
            <div className="profile-chat-actions">
              <button type="button" onClick={reset} aria-label="Start a new chat" title="Start a new chat"><RotateCcw size={16} /></button>
              <button type="button" onClick={close} aria-label="Close profile chat" title="Close"><X size={19} /></button>
            </div>
          </header>

          <div ref={transcriptRef} className="profile-chat-transcript" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabIndex={0}>
            {messages.map(message => <div key={message.id} className={`profile-chat-message profile-chat-message--${message.role}`}>
              <span className="profile-chat-speaker">{message.role === 'visitor' ? 'You' : message.ai ? 'AI portfolio guide' : 'Portfolio guide'}</span>
              <p>{message.text}</p>
              {message.sources && message.sources.length > 0 && <div className="profile-chat-sources" aria-label="Sources and related links">
                {message.sources.map(source => <a key={source.href} href={source.href}
                  target={source.href.startsWith('https://') ? '_blank' : undefined}
                  rel={source.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                  onClick={() => { if (source.href.startsWith('/')) close(); }}>
                  {source.label}<ArrowUpRight size={12} aria-hidden="true" />
                </a>)}
              </div>}
            </div>)}
            {isLoading && <div className="profile-chat-loading" role="status"><Loader2 size={14} className="animate-spin" aria-hidden="true" />Checking James’s profile…<button type="button" onClick={() => { cancel(); setNotice('Answer stopped. You can ask another question.'); }}>Stop</button></div>}
          </div>

          <div className="profile-chat-suggestions" aria-label="Suggested questions">
            {suggestions.map(question => <button type="button" key={question} disabled={isLoading || mode === 'checking'} onClick={() => send(question)}>{question}<ArrowUpRight size={13} aria-hidden="true" /></button>)}
          </div>

          {notice && <p className="profile-chat-notice" role="status">{notice}</p>}
          <form className="profile-chat-form" onSubmit={event => { event.preventDefault(); send(draft); }}>
            <label className="sr-only" htmlFor="profile-chat-question">Ask a question about James</label>
            <div className="profile-chat-input-row">
              <input ref={inputRef} id="profile-chat-question" name="question" value={draft} onChange={event => setDraft(event.target.value)} maxLength={MAX_QUESTION_LENGTH} placeholder="Ask about his QA background…" autoComplete="off" enterKeyHint="send" />
              <button type="submit" disabled={!draft.trim() || isLoading || mode === 'checking'} aria-label="Send question"><ArrowUp size={18} /></button>
            </div>
            <p className="profile-chat-note">{mode === 'openai' ? 'AI can make mistakes. Sending shares this chat with OpenAI.' : mode === 'checking' ? 'Getting the profile guide ready…' : 'Profile-based answers. Messages aren’t saved.'}</p>
          </form>
        </div>
      </dialog>
    </div>
  );
}
