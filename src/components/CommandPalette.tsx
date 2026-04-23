'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Search,
  User,
  Briefcase,
  Folder,
  Mail,
  Github,
  Linkedin,
  Download,
  Copy,
  Sun,
  Moon,
  Terminal,
  Sparkles,
  CornerDownLeft,
  IdCard as IdCardIcon,
} from 'lucide-react';

type CmdItem = {
  id: string;
  label: string;
  hint?: string;
  group: 'Navigate' | 'Actions' | 'Social' | 'Theme' | 'Fun';
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string;
  run: () => void;
};

const EMAIL = 'hello@jrgaid.com';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIdx(0);
  }, []);

  const goto = useCallback(
    (hash: string) => {
      if (hash.startsWith('#')) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        router.push(hash);
      }
      close();
    },
    [router, close]
  );

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* ignore */
    }
    close();
  }, [close]);

  const items: CmdItem[] = useMemo(
    () => [
      {
        id: 'nav-about',
        label: 'Go to About',
        hint: '#about',
        group: 'Navigate',
        icon: User,
        keywords: 'about bio intro',
        run: () => goto('#about'),
      },
      {
        id: 'nav-experience',
        label: 'Go to Experience',
        hint: '#experience',
        group: 'Navigate',
        icon: Briefcase,
        keywords: 'experience work jobs',
        run: () => goto('#experience'),
      },
      {
        id: 'nav-projects',
        label: 'Go to Projects',
        hint: '#projects',
        group: 'Navigate',
        icon: Folder,
        keywords: 'projects portfolio work',
        run: () => goto('#projects'),
      },
      {
        id: 'nav-contact',
        label: 'Go to Contact',
        hint: '#contact',
        group: 'Navigate',
        icon: Mail,
        keywords: 'contact hire reach email form',
        run: () => goto('#contact'),
      },
      {
        id: 'nav-resume',
        label: 'Recruiter mode (one-page resume)',
        hint: '/resume',
        group: 'Navigate',
        icon: IdCardIcon,
        keywords: 'resume cv recruiter one-pager printable',
        run: () => goto('/resume'),
      },
      {
        id: 'action-cv',
        label: 'Download CV (PDF)',
        group: 'Actions',
        icon: Download,
        keywords: 'cv resume pdf download',
        run: () => {
          window.open('/files/James%20Ryan%20Gaid%20-%20CV1.pdf', '_blank');
          close();
        },
      },
      {
        id: 'action-email',
        label: 'Send me an email',
        hint: EMAIL,
        group: 'Actions',
        icon: Mail,
        keywords: 'email contact message hire',
        run: () => {
          window.location.href = `mailto:${EMAIL}`;
          close();
        },
      },
      {
        id: 'action-copy-email',
        label: 'Copy email to clipboard',
        hint: EMAIL,
        group: 'Actions',
        icon: Copy,
        keywords: 'copy email clipboard address',
        run: copyEmail,
      },
      {
        id: 'social-github',
        label: 'GitHub → jmsryn',
        group: 'Social',
        icon: Github,
        keywords: 'github code repos source',
        run: () => {
          window.open('https://github.com/jmsryn', '_blank');
          close();
        },
      },
      {
        id: 'social-linkedin',
        label: 'LinkedIn → jmsryn',
        group: 'Social',
        icon: Linkedin,
        keywords: 'linkedin professional network',
        run: () => {
          window.open('https://linkedin.com/in/jmsryn', '_blank');
          close();
        },
      },
      {
        id: 'theme-light',
        label: 'Theme: Light',
        group: 'Theme',
        icon: Sun,
        keywords: 'theme light mode bright',
        run: () => {
          setTheme('light');
          close();
        },
      },
      {
        id: 'theme-dark',
        label: 'Theme: Dark',
        group: 'Theme',
        icon: Moon,
        keywords: 'theme dark mode night',
        run: () => {
          setTheme('dark');
          close();
        },
      },
      {
        id: 'theme-system',
        label: 'Theme: System',
        group: 'Theme',
        icon: resolvedTheme === 'dark' ? Moon : Sun,
        keywords: 'theme system auto',
        run: () => {
          setTheme('system');
          close();
        },
      },
      {
        id: 'fun-whoami',
        label: 'whoami',
        hint: 'james — qa · sdet · security',
        group: 'Fun',
        icon: Terminal,
        keywords: 'whoami identity command',
        run: () => {
          // eslint-disable-next-line no-console
          console.log(
            '%cjames ryan gaid%c\nqa & test engineer · security enthusiast\nhello@jrgaid.com',
            'font-weight:bold;font-size:14px;color:#10b981',
            'color:inherit'
          );
          close();
        },
      },
      {
        id: 'fun-hire',
        label: 'sudo hire-me',
        hint: 'opens the contact form',
        group: 'Fun',
        icon: Sparkles,
        keywords: 'hire sudo job work',
        run: () => goto('#contact'),
      },
    ],
    [goto, close, copyEmail, setTheme, resolvedTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.hint ?? ''} ${i.keywords ?? ''} ${i.group}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, CmdItem[]> = {};
    filtered.forEach((i) => {
      (groups[i.group] ??= []).push(i);
    });
    return Object.entries(groups) as [CmdItem['group'], CmdItem[]][];
  }, [filtered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === '/' && !open) {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName?.toLowerCase();
        const editable = target?.isContentEditable;
        if (tag !== 'input' && tag !== 'textarea' && !editable) {
          e.preventDefault();
          setOpen(true);
        }
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${activeIdx}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx, open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[activeIdx]?.run();
    }
  };

  if (!open) return null;

  let globalIdx = -1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />

      <div className="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground/60"
            aria-label="Search commands"
          />
          <kbd className="hidden sm:inline-flex font-mono text-[10px] text-muted-foreground px-1.5 py-0.5 bg-muted border border-border rounded">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[50vh] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              <Terminal className="w-5 h-5 mx-auto mb-2 opacity-40" />
              <p>
                command not found:{' '}
                <span className="font-mono text-foreground">{query || '∅'}</span>
              </p>
            </div>
          )}

          {grouped.map(([group, rows]) => (
            <div key={group} className="py-1">
              <div className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                {group}
              </div>
              {rows.map((row) => {
                globalIdx += 1;
                const idx = globalIdx;
                const Icon = row.icon;
                const active = idx === activeIdx;
                return (
                  <button
                    key={row.id}
                    data-idx={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={row.run}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors ${
                      active ? 'bg-muted text-foreground' : 'text-foreground/80 hover:bg-muted/60'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-muted-foreground" />
                    <span className="flex-1 truncate">{row.label}</span>
                    {row.hint && (
                      <span className="font-mono text-[10px] text-muted-foreground/70 truncate max-w-[160px]">
                        {row.hint}
                      </span>
                    )}
                    {active && <CornerDownLeft className="w-3 h-3 text-muted-foreground" />}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-3 py-2 border-t border-border bg-muted/30 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-card border border-border rounded">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-card border border-border rounded">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-card border border-border rounded">esc</kbd> close
            </span>
          </div>
          <span className="hidden sm:inline">{filtered.length} results</span>
        </div>
      </div>
    </div>
  );
}
