'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      <motion.button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-12 right-0 bg-background/90 backdrop-blur-md shadow-lg rounded-lg p-4 border border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <ThemeToggle />
            </div>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 px-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
