'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'MnyTrax: Financial Tracker',
    description: 'Personal finance management application for tracking expenses, income, and financial goals.',
    tags: ['React', 'Nodejs', 'MongoDB', 'AI'],
    // Using a placeholder image URL that represents a financial tracker website
    image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Financial+Tracker',
    github: 'https://github.com/jmsryn',
    demo: 'https://financial.jrgaid.site',
    challenges: [], // Placeholder for technical challenges
    solutions: [], // Placeholder for innovative solutions
    testing: [], // Placeholder for testing methodologies
    impact: '', // Placeholder for impact of work
    problemSolving: '', // Placeholder for problem-solving details
    security: '', // Placeholder for security considerations
    technicalDepth: '', // Placeholder for technical depth
    postmortem: '' // Placeholder for postmortem/lessons learned
  },
  {
    title: 'AutoTestGen: AI Test Case Generator',
    description: 'AI-powered tool that automatically generates test cases for web applications.',
    tags: ['React', 'Nodejs', 'OpenAI', 'AI'],
    // Using a placeholder image URL that represents an AI/testing tool
    image: 'https://placehold.co/600x400/10b981/ffffff?text=AI+Test+Generator',
    github: 'https://github.com/jmsryn',
    demo: 'https://autotestgen.jrgaid.site',
    challenges: [],
    solutions: [],
    testing: [],
    impact: '',
    problemSolving: '',
    security: '',
    technicalDepth: '',
    postmortem: ''
  },
  {
    title: 'Element Selector Tool',
    description: 'Chrome extension for QA engineers to easily select and generate selectors for web elements.',
    tags: ['JavaScript', 'Chrome API', 'CSS', 'AI'],
    // Using a placeholder image URL that represents a web development tool
    image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Element+Selector',
    github: 'https://github.com/jmsryn',
    demo: '#',
    challenges: [],
    solutions: [],
    testing: [],
    impact: '',
    problemSolving: '',
    security: '',
    technicalDepth: '',
    postmortem: ''
  },
  {
    title: 'All-in Security Tool',
    description: 'Comprehensive security testing suite for identifying vulnerabilities in web applications.',
    tags: ['Python', 'Security', 'OWASP'],
    // Using a placeholder image URL that represents cybersecurity
    image: 'https://placehold.co/600x400/ef4444/ffffff?text=Security+Tool',
    github: 'https://github.com/jmsryn',
    demo: '#',
    challenges: [],
    solutions: [],
    testing: [],
    impact: '',
    problemSolving: '',
    security: '',
    technicalDepth: '',
    postmortem: ''
  }
];

export default function ProjectsGrid() {
  return (
    <SectionWrapper>
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Work
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Project image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Project title and links */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-white backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project description */}
              <div className="p-4">
                <p className="text-muted-foreground">{project.description}</p>

                {/* New sections for technical details */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Challenges:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && project.solutions.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Solutions:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.testing && project.testing.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Testing Methodologies:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {project.testing.map((methodology, index) => (
                        <li key={index}>{methodology}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.impact && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Impact:</h4>
                    <p className="text-muted-foreground">{project.impact}</p>
                  </div>
                )}

                {project.problemSolving && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Problem Solving:</h4>
                    <p className="text-muted-foreground">{project.problemSolving}</p>
                  </div>
                )}

                {project.security && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Security Considerations:</h4>
                    <p className="text-muted-foreground">{project.security}</p>
                  </div>
                )}

                {project.technicalDepth && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Technical Depth:</h4>
                    <p className="text-muted-foreground">{project.technicalDepth}</p>
                  </div>
                )}

                {project.postmortem && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-foreground">Postmortem/Lessons Learned:</h4>
                    <p className="text-muted-foreground">{project.postmortem}</p>
                  </div>
                )}

                <div className="flex justify-end gap-3 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
