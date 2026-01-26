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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
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
      if (isOpen && !target.closest('.floating-nav') && !target.closest('.nav-toggle') && !target.closest('.mobile-nav-sheet')) {
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
      {/* Desktop Navigation - Vertical Floating Sidebar */}
      <motion.nav
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 floating-nav"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2 p-2 bg-background/50 backdrop-blur-md border border-border/50 rounded-none shadow-xl relative">
          {/* Decorative line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20" />

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);

            return (
              <div key={item.name} className="group relative flex items-center">
                <button
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center justify-center w-12 h-12 transition-all duration-300 border border-transparent ${isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1 -translate-y-1'
                    : 'text-muted-foreground hover:text-primary hover:border-primary hover:bg-muted/10'
                    }`}
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5" />
                </button>

                {/* Hover Label */}
                <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-card border border-border px-3 py-1 text-xs font-mono uppercase tracking-wider text-foreground whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>

                {/* Active Indicator Line for non-active items */}
                {isActive && (
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-primary" />
                )}
              </div>
            );
          })}

          <div className="h-px w-full bg-border my-2" />

          <div className="flex justify-center">
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
              className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-card border-t border-border rounded-t-2xl mobile-nav-sheet"
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
