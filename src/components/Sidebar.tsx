'use client';

import { useEffect, useState } from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'techstack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com/jmsryn', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jmsryn', icon: Linkedin, label: 'LinkedIn' },
];

export default function Sidebar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-2/5 lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to work · Remote
          </span>
          <ThemeToggle />
        </div>

        <h1 className="text-4xl md:text-5xl leading-[1.05] text-foreground mb-4">
          James Ryan Gaid
        </h1>
        <p className="text-lg font-medium text-foreground/90 mb-3">
          QA Engineer · SDET
        </p>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          Test automation, security testing, and performance engineering for
          teams that ship with confidence.
        </p>

        <nav className="hidden lg:block mt-16" aria-label="Section navigation">
          <ul className="space-y-4">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-4"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? 'w-14 bg-foreground'
                          : 'w-8 bg-muted-foreground/40 group-hover:w-14 group-hover:bg-foreground'
                      }`}
                    />
                    <span
                      className={`text-xs font-mono uppercase tracking-[0.15em] transition-colors ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 lg:mt-0 flex flex-col gap-4">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="mailto:hello@jrgaid.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@jrgaid.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
