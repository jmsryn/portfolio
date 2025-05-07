'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              href="mailto:jamesgaid.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://github.com/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jmsryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </motion.a>
          </div>

          <div className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
            <p>&copy; {new Date().getFullYear()} James Ryan Gaid. All rights reserved.</p>
          </div>

          <div className="mt-2 text-xs text-muted-foreground/70 flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>using Next.js & Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
