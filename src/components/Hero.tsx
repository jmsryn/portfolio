'use client';

import { MapPin, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
  return (
    <section id="hero" className="pt-10 md:pt-16 pb-8 border-b border-border mb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <h1 className="text-3xl md:text-4xl font-display tracking-tight text-foreground">
              James Ryan Gaid
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-sm">Philippines, Remote</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 mb-5">
            {['QA Engineer', 'SDET', 'Test Automation'].map((role) => (
              <span
                key={role}
                className="px-2.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
            <a
              href="mailto:hello@jrgaid.site"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Send Email
            </a>
            <a
              href="/deep-dives"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Deep Dives
            </a>
          </div>
        </div>

        <div className="flex md:flex-col items-center gap-2">
          <ThemeToggle />
          {[
            { href: 'https://github.com/jmsryn', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/jmsryn', icon: Linkedin, label: 'LinkedIn' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
