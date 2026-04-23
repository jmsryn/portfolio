'use client';

import { useEffect, useState } from 'react';

type Row = { k: string; v: string };

export default function SignalPanel({ className = '' }: { className?: string }) {
  const [time, setTime] = useState<string>('--:--');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const fmt = d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'Asia/Manila',
        hour12: true,
      });
      setTime(`${fmt} PHT`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const rows: Row[] = [
    { k: 'local', v: time },
    { k: 'status', v: 'online · open to work' },
    { k: 'role', v: 'qa engineer · sdet' },
    { k: 'stack', v: 'playwright · cypress · typescript' },
    { k: 'shortcut', v: 'press ⌘K to jump anywhere' },
  ];

  return (
    <section className={`flex flex-col ${className}`}>
      <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
        <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>
        signal
      </h2>

      <div className="flex-1 rounded-md border border-border bg-card/40 p-4 font-mono text-[11px] flex flex-col">
        {/* live header */}
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/70">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground/80 uppercase tracking-[0.2em] text-[10px]">
              live
            </span>
          </div>
          <span className="text-muted-foreground/50 uppercase tracking-[0.2em] text-[10px]">
            signal.log
          </span>
        </div>

        {/* key/value rows (stretches to fill) */}
        <dl className="flex-1 flex flex-col justify-center gap-2">
          {rows.map((r) => (
            <div key={r.k} className="flex items-baseline gap-3">
              <dt className="text-muted-foreground/60 w-20 shrink-0">{r.k}</dt>
              <dd className="text-foreground/90 min-w-0 truncate">{r.v}</dd>
            </div>
          ))}
        </dl>

        {/* prompt line */}
        <div className="pt-3 mt-3 border-t border-border/70 flex items-center gap-1.5">
          <span className="text-emerald-500">$</span>
          <span className="text-muted-foreground">awaiting input</span>
          <span
            className="inline-block w-1.5 h-3 bg-foreground/80 ml-0.5 animate-pulse"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
