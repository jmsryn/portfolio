'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="mailto:hello@jrgaid.site"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} James Ryan Gaid
          </p>
        </div>
      </div>
    </footer>
  );
}
