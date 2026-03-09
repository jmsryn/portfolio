'use client';

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import SpotifyNowPlaying from './SpotifyNowPlaying';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-foreground py-16 px-4 bg-background relative overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* CTA Section */}
        <div className="w-full mb-12 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-foreground uppercase mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="text-muted-foreground font-mono text-sm mb-6 max-w-md mx-auto">
            Open for new opportunities in QA Engineering, Test Automation, and Security Testing.
          </p>
          <a
            href="#contact"
            className="btn-neon inline-flex items-center gap-2 group"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Quick Navigation */}
        <div className="w-full mb-12 border-t border-b border-border py-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Watermark */}
        <h2 className="text-[12vw] leading-none font-black text-foreground/5 pointer-events-none select-none">
          JMSRYN
        </h2>

        <div className="flex flex-col items-center gap-8 -mt-8 md:-mt-16 z-10">
          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: Mail, href: "mailto:hello@jrgaid.site", label: "Email" },
              { icon: Github, href: "https://github.com/jmsryn", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/jmsryn", label: "LinkedIn" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--primary)]"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center space-y-4 w-full flex flex-col items-center">
            <div className="w-full max-w-xs">
              <SpotifyNowPlaying />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                © {new Date().getFullYear()} James Ryan Gaid
              </p>
              <p className="text-xs text-muted-foreground/50">
                System Stable. End of Line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
