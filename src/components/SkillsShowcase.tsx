'use client';

import { motion } from 'framer-motion';
import {
  TestTube, Shield, Code, Server
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const skillCategories = [
  {
    title: "Testing Frameworks",
    icon: <TestTube className="w-8 h-8" />,
    skills: ["Selenium", "Cypress", "Playwright", "Jest", "Mocha"]
  },
  {
    title: "Security Testing",
    icon: <Shield className="w-8 h-8" />,
    skills: ["OWASP Top 10", "Penetration Testing", "Burp Suite", "Vulnerability Assessment"]
  },
  {
    title: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: ["JavaScript", "Python", "TypeScript", "Java", "SQL"]
  },
  {
    title: "DevOps & CI/CD",
    icon: <Server className="w-8 h-8" />,
    skills: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Linux"]
  }
];

export default function SkillsShowcase() {
  return (
    <SectionWrapper>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground inline-block px-4 border-2 border-foreground bg-primary/10">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="brutalist-card bg-card p-6 flex flex-col items-center text-center hover:bg-muted/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-primary mb-6 p-4 border-2 border-primary rounded-full">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl text-foreground mb-6 uppercase tracking-wide border-b-2 border-border pb-2 w-full">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 border border-muted-foreground/30 text-muted-foreground font-mono uppercase hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
