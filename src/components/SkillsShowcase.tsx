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
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent"
          initial={false}
          whileInView={undefined}
          transition={undefined}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              initial={false}
              whileInView={undefined}
              transition={undefined}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
