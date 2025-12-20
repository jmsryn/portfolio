'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Zap, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

// Tech stack with icons (using emoji for simplicity, could be replaced with actual icons)
const techStack = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Playwright', icon: '🎭' },
  { name: 'Cypress', icon: '🌲' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Azure', icon: '☁️' },
  { name: 'Git', icon: '🔀' },
];

const skills = [
  {
    category: 'Testing Frameworks',
    items: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'TestRail', 'JIRA'],
    icon: CheckCircle2,
  },
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'C#', 'TypeScript', 'GraphQL'],
    icon: Code,
  },
  {
    category: 'Security Testing',
    items: ['OWASP Top 10', 'Penetration Testing', 'Burp Suite'],
    icon: Shield,
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'Git', 'GitHub Actions', 'AzureDevOps', 'Linux', 'API Testing'],
    icon: Zap,
  }
];

// Calculate years of experience dynamically
const calculateExperience = () => {
  const startDate = new Date('2022-06-01'); // Started June 2022
  const now = new Date();
  const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

export default function About() {
  const yearsExp = calculateExperience();

  return (
    <SectionWrapper>
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                About
              </h2>
              <div className="h-px w-12 bg-primary" />
            </motion.div>

            {/* Experience highlight */}
            <motion.div
              className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-3xl font-light text-primary">{yearsExp}+</span>
              <span className="text-sm text-muted-foreground">Years of Experience</span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-light">
                I&apos;m a Quality Assurance Engineer with {yearsExp}+ years of experience in test automation, security testing, and quality engineering.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light">
                My expertise spans web application testing, API testing, security assessments, and building maintainable test frameworks integrated into CI/CD pipelines.
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm text-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-6 text-foreground">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup) => {
                  const Icon = skillGroup.icon;
                  return (
                    <div
                      key={skillGroup.category}
                      className="card-enhanced p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                        <h4 className="text-base font-medium text-foreground">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
