'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, User, Briefcase, FolderOpen, GraduationCap, Award, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const router = useRouter();

  // Active section detection
  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const visibilityRatioById = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          visibilityRatioById.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        const mostVisible = Array.from(visibilityRatioById.entries()).sort((a, b) => b[1] - a[1])[0];
        if (mostVisible && mostVisible[1] > 0) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    if (item.href.startsWith('/')) {
      router.push(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.floating-nav') && !target.closest('.nav-toggle')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation - Clean minimal dock */}
      <motion.nav
        className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40 hidden lg:block floating-nav"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="flex items-center gap-1 bg-card/95 backdrop-blur-sm border border-border rounded-full px-2 py-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                aria-label={item.name}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}

          <div className="w-px h-6 bg-border mx-1" />

          <div className="px-1">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-card border-t border-border rounded-t-2xl"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-muted rounded-full" />
              </div>

              <div className="px-4 pb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium text-foreground">Navigation</h2>
                  <ThemeToggle />
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.slice(1);

                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted/30 text-foreground hover:bg-muted/50'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-toggle fixed bottom-6 right-6 z-[100] lg:hidden bg-primary text-primary-foreground rounded-full p-4 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </motion.button>
    </>
  );
}
