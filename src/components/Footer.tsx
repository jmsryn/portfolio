import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Mail, href: 'mailto:hello@jrgaid.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/jmsryn', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/jmsryn', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} James Ryan Gaid
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={s.label}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
