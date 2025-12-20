'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

const webProjects: Project[] = [
  {
    title: 'AutoTestGen - AI Test Case Generator',
    description: 'AI-powered test automation framework for generating and maintaining test cases for web applications. Integrates with CI/CD pipelines.',
    tags: ['Cypress', 'Playwright', 'JavaScript', 'GitHub Actions', 'AI'],
    github: 'https://github.com/jmsryn',
    demo: 'https://testai.jrgaid.site',
  },
  {
    title: 'Smart Money Tracker - AI Finance Assistant',
    description: 'Personal finance management application with AI-powered insights and recommendations. Track expenses and analyze spending patterns.',
    tags: ['AI', 'Finance', 'Web App', 'Analytics'],
    github: 'https://github.com/jmsryn',
    demo: 'https://smartmoney.jrgaid.site',
  },
  {
    title: 'Sillage - AI Curator',
    description: 'AI-powered fragrance collection management platform with weather-smart recommendations and layering combinations.',
    tags: ['AI', 'React', 'Web App', 'Recommendations'],
    github: 'https://github.com/jmsryn',
    demo: 'https://mysillage.me',
  }
];

const qaProjects: Project[] = [
  {
    title: 'Sillage - Playwright E2E Automation',
    description: 'Comprehensive end-to-end testing suite for the MySillage platform ensuring reliability and performance.',
    tags: ['Playwright', 'TypeScript', 'E2E Testing', 'CI/CD'],
    github: 'https://github.com/jmsryn/mysillage-playwright',
    demo: 'https://github.com/jmsryn/mysillage-playwright',
  }
];

export default function ProjectsGrid() {
  return (
    <SectionWrapper>
      <section id="projects" className="section-padding">
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
                Projects
              </h2>
              <div className="h-px w-12 bg-primary" />
            </motion.div>

            {/* Web Applications */}
            <div className="mb-16">
              <motion.h3
                className="text-2xl font-light mb-8 text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Web Applications - Vibe Coded
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {webProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-enhanced p-6"
                  >
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-muted text-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* QA & Automation */}
            <div>
              <motion.h3
                className="text-2xl font-light mb-8 text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                QA & Automation
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {qaProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-enhanced p-6"
                  >
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs bg-muted text-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Repo
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
