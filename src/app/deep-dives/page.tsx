'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';

export default function DeepDives() {
  return (
    <SectionWrapper>
      <section id="deep-dives" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.div
            className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ➜ ~ <span className="text-gray-900 dark:text-white">deep-dives</span>
            <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Deep Dives
          </motion.h2>
        </div>

        {/* Placeholder for deep dive content */}
        <div className="text-center text-muted-foreground">
          <p>Content for technical deep dives will go here.</p>
        </div>
      </section>
    </SectionWrapper>
  );
}