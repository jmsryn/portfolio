'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function SideNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection: string | null = null;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop - 120;
          if (scrollY >= offsetTop) {
            currentSection = item.href;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-48 flex-col justify-center px-6">
      <ul className="space-y-4 text-sm relative">
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className={`block pl-3 py-1 transition-all duration-200 font-medium 
                  ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.name}
              </a>

              {isActive && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
      <div className="pt-6">
    <ThemeToggle />
  </div>
    </nav>
  );
}
