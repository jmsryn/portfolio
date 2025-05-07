'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function SideNav() {
  const [active, setActive] = useState<string | null>('home'); // Default to "Home"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection: string | null = null;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          // Use getBoundingClientRect() to check the visibility of the section
          const rect = (section as HTMLElement).getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = item.href;
          }
        }
      }

      // If the user hasn't scrolled far enough, set active to "home"
      if (!currentSection && scrollY <= 100) {
        currentSection = 'home';
      }

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-48 flex-col justify-center px-6 z-50">
      <motion.div
        className="p-4 rounded-2xl backdrop-blur-md bg-background/80 border border-border shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-4 text-sm relative">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`block pl-3 py-1.5 transition-all duration-200 font-medium rounded-md
                    ${isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
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
      </motion.div>
    </nav>
  );
}
