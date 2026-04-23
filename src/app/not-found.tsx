'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Home, Folder, User, Mail, Terminal as TerminalIcon } from 'lucide-react';

const SUGGESTIONS = [
  { href: '/', label: 'home', icon: Home, cmd: 'cd ~' },
  { href: '/#about', label: 'about', icon: User, cmd: 'cat ~/about.md' },
  { href: '/#projects', label: 'projects', icon: Folder, cmd: 'ls ~/projects' },
  { href: '/#contact', label: 'contact', icon: Mail, cmd: 'mail hello@jrgaid.com' },
];

export default function NotFound() {
  const pathname = usePathname();
  const [blink, setBlink] = useState(true);
  const [now, setNow] = useState('');

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 550);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setNow(new Date().toString());
  }, []);

  const target = pathname || '/unknown';

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-2xl rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted/40">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">
            guest@jrgaid.com: ~{target}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground/70">
            <TerminalIcon className="w-3 h-3" /> bash
          </span>
        </div>

        <div className="p-5 md:p-6 font-mono text-[13px] leading-relaxed space-y-3">
          <div>
            <span className="text-emerald-500">guest</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-sky-500">jrgaid</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-foreground">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">cd {target}</span>
          </div>

          <div className="text-destructive">
            bash: cd: {target}: No such file or directory
          </div>

          <div className="pt-1 text-muted-foreground">
            <span className="text-foreground">error</span> 404 · route not mounted ·{' '}
            <span className="text-muted-foreground/70">{now}</span>
          </div>

          <div className="pt-2">
            <span className="text-emerald-500">guest</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-sky-500">jrgaid</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-foreground">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">ls --suggested</span>
          </div>

          <ul className="pl-4 space-y-1.5 pt-1">
            {SUGGESTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                >
                  <s.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                  <span className="text-emerald-500">{s.label}/</span>
                  <span className="text-muted-foreground/60">— {s.cmd}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <span className="text-emerald-500">guest</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-sky-500">jrgaid</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-foreground">~</span>
            <span className="text-muted-foreground">$ </span>
            <span
              className={`inline-block w-2 h-4 align-[-2px] bg-foreground ${
                blink ? 'opacity-100' : 'opacity-0'
              } transition-opacity`}
              aria-hidden
            />
          </div>

          <div className="pt-4 text-[11px] text-muted-foreground">
            tip: press{' '}
            <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-foreground">
              ⌘K
            </kbd>{' '}
            /{' '}
            <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-foreground">
              Ctrl K
            </kbd>{' '}
            to jump anywhere.
          </div>
        </div>
      </div>
    </main>
  );
}
