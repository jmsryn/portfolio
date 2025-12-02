'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center relative w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden py-12"
    >
      {/* Hero-specific gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Modern badge with glow effect */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary/20 rounded-full bg-card/60 backdrop-blur-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-foreground">Available for opportunities</span>
        </motion.div>

        {/* Name with modern typography */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 text-foreground tracking-tight leading-[0.9]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">James Ryan</span>
          <span className="block bg-gradient-to-r from-foreground via-foreground to-primary/60 bg-clip-text text-transparent">
            Gaid
          </span>
        </motion.h1>

        {/* Title with subtle animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-3 tracking-wide">
            Quality Assurance Engineer
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/70">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Test Automation • Security • CI/CD</span>
          </div>
        </motion.div>

        {/* Brief description */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Specializing in test automation, security testing, and quality engineering. 
          Building robust testing frameworks and ensuring software quality across the development lifecycle.
        </motion.p>

        {/* Key highlights with modern design */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { icon: CheckCircle2, text: 'Test Automation' },
            { icon: CheckCircle2, text: 'Security Testing' },
            { icon: CheckCircle2, text: 'CI/CD Integration' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modern CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
            download
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-primary-foreground bg-primary hover:bg-primary/90 border border-primary shadow-lg hover:shadow-xl min-h-[44px]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-foreground bg-card/60 backdrop-blur-xl hover:bg-card/80 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl min-h-[44px]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Modern scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-muted-foreground/70 uppercase tracking-widest font-medium group-hover:text-primary transition-colors">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
          <ArrowDown className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
