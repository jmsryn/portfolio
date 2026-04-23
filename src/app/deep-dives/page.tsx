import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Terminal as TerminalIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Deep Dives · Coming Soon',
  description: 'Deep Dives is temporarily paused. Check back soon.',
  robots: { index: false, follow: true },
};

export default function DeepDivesComingSoon() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-xl rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted/40">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">
            guest@jrgaid.com: ~/deep-dives
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
            <span className="text-foreground">cat deep-dives/status.txt</span>
          </div>

          <div className="pl-1 text-foreground/90 space-y-1">
            <div className="inline-flex items-center gap-2 text-amber-500">
              <Clock className="w-3.5 h-3.5" />
              <span>status: paused</span>
            </div>
            <p className="text-muted-foreground">
              Deep Dives is on hold while I sharpen the format. New write-ups are
              being drafted — expect long-form notes on test architecture, CI
              quality gates, and a bit of security tinkering.
            </p>
          </div>

          <div className="pt-2">
            <span className="text-emerald-500">guest</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-sky-500">jrgaid</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-foreground">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">echo &quot;meanwhile...&quot;</span>
          </div>

          <ul className="pl-4 space-y-1.5 text-foreground/85">
            <li>
              <Link href="/#projects" className="hover:text-foreground group inline-flex items-center gap-2">
                <span className="text-muted-foreground/60">→</span>
                <span className="text-emerald-500 group-hover:underline underline-offset-2">
                  check the projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-foreground group inline-flex items-center gap-2">
                <span className="text-muted-foreground/60">→</span>
                <span className="text-emerald-500 group-hover:underline underline-offset-2">
                  read the experience
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-foreground group inline-flex items-center gap-2">
                <span className="text-muted-foreground/60">→</span>
                <span className="text-emerald-500 group-hover:underline underline-offset-2">
                  say hi
                </span>
              </Link>
            </li>
          </ul>

          <div className="pt-4 border-t border-border/70">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              back to portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
