'use client';

import { motion } from 'framer-motion';
import { 
  Building2, Calendar, MapPin, Users, CheckCircle2, Briefcase 
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const experiences = [
  {
    title: 'Quality Assurance Engineer',
    company: 'Theoria Medical',
    location: 'Remote',
    period: 'June 2023 – Present',
    type: 'Full-time',
    description: 'Leading test automation efforts and maintaining CI/CD pipelines while executing API, performance, and penetration tests.',
    achievements: [
      'Developed and maintained automated testing frameworks',
      'Implemented CI/CD testing integration',
      'Performed security testing and vulnerability assessments',
      'Collaborated with development teams on quality improvements'
    ],
    technologies: ['Cypress', 'Playwright', 'K6', 'OWASP ZAP', 'Docker', 'Postman', 'Jira', 'Qase'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Lead Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    location: 'Remote',
    period: 'Dec 2022 – Jun 2023',
    type: 'Full-time',
    description: 'Led the QA team and managed testing processes across projects. Mentored junior testers and maintained automation scripts.',
    achievements: [
      'Led QA efforts across multiple client projects',
      'Established standardized testing procedures',
      'Implemented code review processes',
      'Developed onboarding program for new team members'
    ],
    technologies: ['Selenium WebDriver', 'Postman', 'MySQL', 'Git', 'Azure DevOps', 'Cypress'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    location: 'Remote',
    period: 'Jun 2022 – Dec 2022',
    type: 'Full-time',
    description: 'Performed manual and automated testing on web platforms. Collaborated closely with developers to resolve bugs early in the SDLC.',
    achievements: [
      'Conducted systematic testing of web applications',
      'Created comprehensive test documentation',
      'Collaborated with development teams on testing practices',
      'Participated in architectural reviews for testability'
    ],
    technologies: ['Selenium WebDriver', 'Postman', 'MySQL', 'Git', 'Azure DevOps', 'Cypress'],
    color: 'from-green-500 to-emerald-500'
  },
];

export default function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <motion.h2
            className="text-balance text-center mb-16 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-0.5"></div>

            <div className="space-y-6 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-start gap-4 md:gap-8`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline node - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <motion.div
                      className="card-enhanced p-4 sm:p-6 group relative"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    >
                      {/* Mobile timeline indicator */}
                      <div className="md:hidden absolute -left-2 top-6 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      
                      {/* Header */}
                      <div className={`flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{exp.company}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 flex-shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-3 sm:mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>

            {/* Timeline end - desktop only */}
            <motion.div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
