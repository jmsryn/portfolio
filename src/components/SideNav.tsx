'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, GraduationCap, Award, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
  { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <FolderOpen className="w-4 h-4" /> },
  { name: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
  { name: 'Certifications', href: '#certifications', icon: <Award className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress (throttled via rAF)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section via IntersectionObserver (avoids per-scroll DOM reads)
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
        // Pick most visible section
        const mostVisible = Array.from(visibilityRatioById.entries()).sort((a, b) => b[1] - a[1])[0];
        if (mostVisible && mostVisible[1] > 0) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        root: null,
        // Focus a band around viewport center
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-nav') && !target.closest('.mobile-nav-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
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
      {/* Top progress bar removed (global ScrollProgress component renders it) */}

      {/* Desktop Navigation */}
      <motion.nav
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="glass rounded-2xl p-4 shadow-xl">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute left-0 w-1 h-full bg-primary-foreground rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle in Desktop Nav */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-nav-toggle fixed top-6 right-6 z-[80] lg:hidden glass rounded-xl p-3 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Menu */}
            <motion.nav
              className="mobile-nav fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-card/95 backdrop-blur-md border-l border-border z-[70] lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-lg text-foreground">Navigation</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jump to any section
                    </p>
                  </div>
                  <ThemeToggle />
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`group relative flex items-center gap-4 w-full px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                            activeSection === item.href.slice(1)
                              ? 'bg-primary text-primary-foreground shadow-lg'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                        >
                          <span className="transition-transform duration-300 group-hover:scale-110">
                            {item.icon}
                          </span>
                          <span className="font-medium">{item.name}</span>
                          
                          {/* Active indicator */}
                          {activeSection === item.href.slice(1) && (
                            <motion.div
                              className="absolute left-0 w-1 h-full bg-primary-foreground rounded-r-full"
                              layoutId="mobileActiveIndicator"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Scroll Progress
                    </p>
                     <div className="mt-2 w-full bg-muted rounded-full h-2 overflow-hidden">
                       <div
                         className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                         style={{ width: `${Math.round(scrollProgress)}%`, transition: 'width 120ms linear' }}
                       />
                     </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.round(scrollProgress)}% Complete
                    </p>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
