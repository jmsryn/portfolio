'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Shield, Code, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const skills = [
  {
    category: 'Testing Frameworks',
    items: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'TestRail', 'JIRA'],
    icon: CheckCircle2,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'TypeScript', 'SQL'],
    icon: Code,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Security Testing',
    items: ['OWASP Top 10', 'Penetration Testing', 'Burp Suite', 'SAST/DAST'],
    icon: Shield,
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Linux', 'API Testing'],
    icon: Zap,
    color: 'from-green-500/20 to-emerald-500/20',
  }
];

const metrics = [
  { label: 'Years Experience', value: '3+', icon: TrendingUp, color: 'text-blue-500' },
  { label: 'Focus Area', value: 'Test Automation', icon: CheckCircle2, color: 'text-green-500' },
  { label: 'Team Collaboration', value: 'Cross-functional', icon: Users, color: 'text-purple-500' },
  { label: 'CI/CD Integration', value: 'Expert', icon: Zap, color: 'text-orange-500' },
];

export default function About() {
  return (
    <SectionWrapper>
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                About
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent mb-6" />
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {/* Metrics Cards */}
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="card-enhanced p-5 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-2xl font-light text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Description */}
            <motion.div
              className="mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-light">
                I&apos;m a Quality Assurance Engineer specializing in test automation, security testing, and quality engineering. 
                With over 3 years of experience, I build robust testing frameworks and ensure software quality across the entire development lifecycle.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light">
                My expertise spans web application testing, API testing, security assessments, and test automation. 
                I&apos;m passionate about creating maintainable test suites, integrating quality gates into CI/CD pipelines, 
                and collaborating with cross-functional teams to deliver high-quality software.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-light mb-6 text-foreground">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => {
                  const Icon = skillGroup.icon;
                  return (
                    <motion.div
                      key={skillGroup.category}
                      className="card-enhanced p-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center border border-border/50`}>
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-base font-medium text-foreground">
                          {skillGroup.category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {skillGroup.items.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1.5 text-sm bg-muted/50 text-foreground border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
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
