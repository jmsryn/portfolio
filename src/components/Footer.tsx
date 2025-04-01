'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8 px-4 text-center text-sm text-muted-foreground">
      <div className="flex justify-center gap-6 mb-4">
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-5 h-5 hover:text-primary transition" />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-primary transition" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-primary transition" />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} James Ryan Gaid. All rights reserved.</p>
    </footer>
  );
}
