'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const roles = ['Quality Assurance Engineer', 'SDET'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background overflow-hidden"
    >
      {/* Background decoration - optional grid or noise could go here */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Availability Status as a raw badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 mb-12 border-2 border-border bg-card text-sm font-mono tracking-widest text-primary uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="w-3 h-3 bg-primary animate-pulse" />
          <span>System Online: Available</span>
        </motion.div>

        {/* Name - Massive & Broken */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-foreground tracking-tighter leading-[0.9] uppercase mix-blend-difference"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
        >
          James Ryan
          <br />
          <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/0" style={{ WebkitTextStroke: '2px var(--foreground)' }}>
            Gaid
          </span>
        </motion.h1>

        {/* Typing effect title - Monospace & Glitchy */}
        <motion.div
          className="h-10 sm:h-12 mb-8 flex items-center justify-center font-mono text-xl sm:text-2xl text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>&gt; </span>
          <span className="mx-2">{displayText}</span>
          <span className="animate-blink bg-primary w-3 h-6 block" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-sans border-l-4 border-primary pl-6 text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="block text-foreground font-bold mb-2 uppercase tracking-wide text-sm">Target Status:</span>
          Specializing in test automation, security testing, and quality engineering. Currently architecting AI-powered testing tools and pursuing Practical Junior Penetration Tester certification by TCM Security.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
            download
            className="btn-neon w-full sm:w-auto group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Initialize Download
          </a>

          <a
            href="#contact"
            className="btn-outline-brutalist w-full sm:w-auto group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Establish Contact
          </a>
        </motion.div>

        {/* Social links - Raw Icons */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { href: "https://github.com/jmsryn", label: "GitHub" },
            { href: "https://linkedin.com/in/jmsryn", label: "LinkedIn" }
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-muted/20 border border-transparent hover:border-primary transition-all duration-300"
              aria-label={social.label}
            >
              {social.label === "GitHub" ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              )}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with hard edges */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] [writing-mode:vertical-rl] text-muted-foreground">Scroll Down</span>
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
