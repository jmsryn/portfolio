'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, User, Briefcase, FolderOpen, GraduationCap, Award, Mail, Sparkles, ChevronRight, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SpotifyNowPlaying from './SpotifyNowPlaying';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { name: 'About', href: '#about', icon: User, color: 'from-purple-500 to-pink-500' },
  { name: 'Experience', href: '#experience', icon: Briefcase, color: 'from-orange-500 to-red-500' },
  { name: 'Projects', href: '#projects', icon: FolderOpen, color: 'from-green-500 to-emerald-500' },
  { name: 'Education', href: '#education', icon: GraduationCap, color: 'from-indigo-500 to-blue-500' },
  { name: 'Certifications', href: '#certifications', icon: Award, color: 'from-yellow-500 to-orange-500' },
  { name: 'Contact', href: '#contact', icon: Mail, color: 'from-pink-500 to-rose-500' },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  // Scroll progress
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
      {/* Desktop Floating Dock Navigation */}
      <motion.nav
        className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40 hidden lg:block floating-nav"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          {/* Glassmorphic dock container */}
          <div className="relative bg-card/40 backdrop-blur-2xl border border-border/30 rounded-3xl px-6 py-4 shadow-2xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />

            <ul className="relative flex items-center gap-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1) && item.href.startsWith('#');
                const isHovered = hoveredIndex === index;

                return (
                  <li key={item.name}>
                    <motion.button
                      onClick={() => handleNavClick(item)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group relative flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-primary/20'
                          : 'hover:bg-muted/50'
                      }`}
                      whileHover={{ y: -8, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.05, duration: 0.4 }}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                          layoutId="activeDot"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Icon container */}
                      <motion.div
                        className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-br ${item.color} shadow-lg shadow-primary/30`
                            : 'bg-muted/30 group-hover:bg-muted/50'
                        }`}
                        animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-muted-foreground group-hover:text-primary'
                        }`} />
                        
                        {/* Hover glow effect */}
                        {isHovered && !isActive && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-20 blur-md`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </motion.div>

                      {/* Label */}
                      <motion.span
                        className={`text-[10px] font-medium transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: isHovered || isActive ? 1 : 0.6, y: 0 }}
                      >
                        {item.name}
                      </motion.span>

                      {/* Tooltip on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap pointer-events-none"
                            initial={{ opacity: 0, y: 5, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.8 }}
                          >
                            {item.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45 -mt-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </li>
                );
              })}
            </ul>

            {/* Scroll progress indicator */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-muted/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full"
                style={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Theme toggle - separate floating button */}
          <motion.div
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-[60]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          >
            <div className="bg-card/40 backdrop-blur-2xl border border-border/30 rounded-2xl p-3 shadow-xl relative">
              <ThemeToggle />
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Sheet Style */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/70 backdrop-blur-md z-[60] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden bg-card/95 backdrop-blur-2xl border-t border-border/50 rounded-t-3xl shadow-2xl"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
              </div>

              <div className="px-6 pb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg text-foreground">Navigate</h2>
                      <p className="text-xs text-muted-foreground">{Math.round(scrollProgress)}% scrolled</p>
                    </div>
                  </div>
                  <ThemeToggle />
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.slice(1) && item.href.startsWith('#');

                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-br ${item.color} text-white shadow-lg`
                            : 'bg-muted/30 hover:bg-muted/50 text-foreground'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-primary'}`} />
                        <span className="font-medium text-sm flex-1 text-left">{item.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <ChevronRight className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Spotify */}
                <div className="pt-4 border-t border-border/50">
                  <SpotifyNowPlaying compact />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-toggle fixed bottom-6 right-6 z-[80] lg:hidden bg-card/90 backdrop-blur-2xl border border-border/50 rounded-2xl p-4 shadow-2xl"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation"
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
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
