'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, TestTube, Shield } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  outcome?: string;
  featured?: boolean;
  type: 'automation' | 'security' | 'framework';
};

const projects: Project[] = [
  {
    title: 'AutoTestGen',
    description: 'AI-powered test automation framework for generating and maintaining test cases for web applications. Integrates with CI/CD pipelines and supports multiple testing frameworks.',
    tags: ['Cypress', 'Playwright', 'JavaScript', 'GitHub Actions', 'AI', 'CI/CD'],
    github: 'https://github.com/jmsryn',
    demo: 'https://testai.jrgaid.site',
    featured: true,
    type: 'automation',
  },
  {
    title: 'Smart Money Tracker with AI',
    description: 'Personal finance management application with AI-powered insights and recommendations. Track expenses, analyze spending patterns, and get intelligent financial advice.',
    tags: ['AI', 'Finance', 'Web App', 'Analytics', 'Machine Learning'],
    github: 'https://github.com/jmsryn',
    demo: 'https://smartmoney.jrgaid.site',
    featured: true,
    type: 'automation',
  },
  {
    title: 'Fragrance Collection with AI Recommendation',
    description: 'AI-powered fragrance collection management platform. Track your collection, get weather-smart recommendations, discover layering combinations, and visualize your olfactory journey.',
    tags: ['AI', 'React', 'Web App', 'Recommendations', 'Analytics'],
    github: 'https://github.com/jmsryn',
    demo: 'https://mysillage.me',
    featured: true,
    type: 'automation',
  },
  {
    title: 'E2E Test Framework',
    description: 'End-to-end testing framework built with Playwright for web applications. Features parallel execution, visual regression testing, and comprehensive reporting.',
    tags: ['Playwright', 'TypeScript', 'Docker', 'CI/CD', 'Reporting'],
    github: 'https://github.com/jmsryn',
    demo: 'https://e2e.jrgaid.site',
    featured: false,
    type: 'framework',
  }
];

export default function ProjectsGrid() {
  const featured = projects.filter(p => p.featured);
  const more = projects.filter(p => !p.featured);
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'automation':
        return <TestTube className="w-5 h-5" />;
      case 'security':
        return <Shield className="w-5 h-5" />;
      default:
        return <TestTube className="w-5 h-5" />;
    }
  };

  return (
    <SectionWrapper>
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Projects
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent mb-6" />
            </motion.div>

            {/* Featured Projects */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featured.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="card-enhanced p-6 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center text-primary"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {getIcon(project.type)}
                    </motion.div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-lg bg-muted/30 border border-border/50">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 font-light text-base">
                    {project.description}
                  </p>
                  
                  {project.outcome && (
                    <motion.div
                      className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-sm text-foreground font-medium">
                        <span className="text-primary">Impact: </span>
                        {project.outcome}
                      </p>
                    </motion.div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 text-xs bg-muted/50 text-foreground border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm border border-border/50 hover:border-primary hover:text-primary transition-all duration-200 rounded-lg hover:bg-primary/5"
                      whileHover={{ scale: 1.02, x: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Demo
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* More Projects */}
            {more.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-light mb-6 text-foreground">Additional Projects</h3>
                <div className="space-y-6">
                  {more.map((project) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="card-enhanced p-6 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-primary">
                            {getIcon(project.type)}
                          </div>
                          <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {project.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {project.outcome && (
                        <p className="text-sm text-foreground mb-4">
                          <span className="font-medium">Impact: </span>
                          {project.outcome}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 text-xs bg-muted/50 text-foreground border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-primary hover:underline"
                        >
                          View Code
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-primary hover:underline"
                        >
                          View Demo
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
