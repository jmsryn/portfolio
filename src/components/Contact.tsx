'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <div className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contact Me
        </motion.h2>
      </div>

      <motion.p
        className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Whether you&apos;re hiring, collaborating, or just want to say hi — I&apos;m always open!
      </motion.p>

      <motion.div
        className="space-y-4 bg-card rounded-md p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="mailto:jamesgaid.dev@gmail.com"
          className="inline-flex items-center gap-2 text-primary text-lg font-medium hover:underline transition"
        >
          <Mail className="w-5 h-5" />
          jamesgaid.dev@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/jmsryn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://linkedin.com/in/jmsryn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
