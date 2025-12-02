'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import SpotifyNowPlaying from './SpotifyNowPlaying';

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:hello@jrgaid.site"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="mb-6 flex justify-center">
            <SpotifyNowPlaying />
          </div>

          <div className="text-sm text-muted-foreground text-center">
            <p>&copy; {new Date().getFullYear()} James Ryan Gaid</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
