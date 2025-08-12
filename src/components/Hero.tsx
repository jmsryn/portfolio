'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, PlayCircle } from 'lucide-react';
import { BackgroundSwitcher } from '@/components/ui/background-switcher';
import { BugOverlay } from '@/components/ui/bug-overlay';
import Terminal from './Terminal'; // Import the Terminal component
// SpotifyNowPlaying intentionally removed from Hero; shown in Footer only

export default function Hero() {

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden w-full mx-auto"
    >
      {/* Background switcher with multiple options */}
      <BackgroundSwitcher />

      {/* Spotify Now Playing removed from Hero to reduce crowding; appears in Footer */}

      {/* Background elements removed for performance */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={false}
        animate={undefined}
        transition={undefined}
      >
        <motion.h1
          className="font-mono text-primary text-sm sm:text-base mb-3 flex items-center justify-center gap-2 flex-wrap"
          initial={false}
          animate={undefined}
          transition={undefined}
        >
          ➜ ~ <span className="font-semibold text-foreground">jamesgaid@sec</span>
          <span className="text-green-500">●</span>
          <span className="text-xs sm:text-sm text-muted-foreground">online</span>
        </motion.h1>

        {/* Name with gradient text */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground"
          initial={false}
          animate={undefined}
          transition={undefined}
        >
          {"{James Ryan Gaid}"}
        </motion.h2>

        {/* Roles with typewriter effect */}
        <motion.p
          className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
          initial={false}
          animate={undefined}
          transition={undefined}
        >
          QA Engineer • Automation Specialist •<br className="sm:hidden" /> Security Enthusiast
          <span className="inline-block w-[5px] h-[1em] bg-foreground animate-blink align-middle ml-1"></span>
        </motion.p>

        {/* Terminal component */}
        <motion.div
          initial={false}
          animate={undefined}
          transition={undefined}
          className="mt-6 sm:mt-8 mb-6 sm:mb-8 w-full max-w-lg mx-auto"
        >
          <Terminal 
            commands={[
              './initialize_system.sh', 
              'Loading QA Engineer profile...', 
              'Skills: ✓ Loaded',
              'Experience: ✓ Ready',
              'Projects: ✓ Available',
              'System ready. Welcome!'
            ]} 
            loop={true} 
          />
        </motion.div>


        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={false}
          animate={undefined}
          transition={undefined}
        >
          <motion.a
            href="/files/James%20Ryan%20Gaid%20-%20Resume4.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-md text-sm font-mono transition-all duration-300
                      text-primary-foreground bg-primary hover:bg-primary/90
                      border border-primary/50 shadow-md hover:shadow-lg w-full sm:w-auto min-h-[44px]"
            whileHover={undefined}
            whileTap={undefined}
          >
            <Download className="w-4 h-4 text-primary-foreground" />
            ./Download_CV.pdf
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-md text-sm font-mono transition-all duration-300
                      text-primary bg-primary/10 hover:bg-primary/20
                      border border-primary/20 shadow-md hover:shadow-lg w-full sm:w-auto min-h-[44px]"
            whileHover={undefined}
            whileTap={undefined}
          >
            <Mail className="w-4 h-4" />
            ./Contact_Me
          </motion.a>

          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 rounded-md text-sm font-mono transition-all duration-300
                      text-muted-foreground border border-border hover:bg-primary/5 hover:border-primary/30 hover:text-primary w-full sm:w-auto min-h-[44px]"
            whileHover={undefined}
            whileTap={undefined}
          >
            <PlayCircle className="w-4 h-4" />
            ./View_Work
          </motion.a>
        </motion.div>

        {/* Availability status */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 text-green-600 border border-green-500/20 rounded-full text-xs sm:text-sm"
          initial={false}
          animate={undefined}
          transition={undefined}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-center">Available for new opportunities</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        initial={false}
        animate={undefined}
        transition={undefined}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Discover More</span>
          <motion.div
            className="p-2 rounded-full border border-muted-foreground/30 hover:border-primary hover:text-primary transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            animate={undefined}
            transition={undefined}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
