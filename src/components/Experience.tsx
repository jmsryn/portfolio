'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Calendar, MapPin, CheckCircle2, Briefcase 
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Experience {
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  roles: Role[];
  technologies: string[];
  color: string;
}

const experiences = [
  {
    company: 'Theoria Medical',
    location: 'Remote',
    period: 'June 2023 – Present',
    type: 'Full-time',
    description: 'Progressed from Software Quality Assurance Engineer to Jr. Software Development Engineer in Test, expanding expertise in test automation and development practices.',
    roles: [
      {
        title: 'Jr. Software Development Engineer in Test',
        period: 'June 2025 – Present',
        description: 'Write and maintain automated test scripts in Playwright for UI, API, and integration layers under senior guidance. Execute existing regression and smoke suites in CI and report results.',
        achievements: [
          'Write and maintain automated test scripts in Playwright for UI, API, and integration layers under senior guidance',
          'Execute existing regression and smoke suites in CI and report results in Jira or TestRail',
          'Debug test failures, isolate environment vs. code issues, and attach logs, or screenshots to tickets',
          'Update test data sets for local and cloud test environments',
          'Participate in sprint planning, daily stand-ups, and retros to understand acceptance criteria and refine test cases early',
          'Monitor flaky tests and rerun or quarantine them while collaborating with devs to stabilize root causes',
          'Document new test scenarios, create simple wiki pages, and peer-review PRs for coding standards and readability'
        ]
      },
      {
        title: 'Software Quality Assurance Engineer',
        period: 'June 2023 – July 2025',
        description: 'Led test automation efforts and maintained CI/CD pipelines while executing API, performance, and penetration tests.',
        achievements: [
          'Developed and maintained automated testing frameworks',
          'Implemented CI/CD testing integration',
          'Performed security testing and vulnerability assessments',
          'Collaborated with development teams on quality improvements'
        ]
      }
    ],
    technologies: ['Cypress', 'Playwright', 'K6', 'OWASP ZAP', 'Docker', 'Postman', 'Jira', 'Qase', 'TestRail'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'Innovuze Solutions Inc.',
    location: 'Remote',
    period: 'Jun 2022 – Jun 2023',
    type: 'Full-time',
    description: 'Progressed from Quality Assurance Engineer to Lead Quality Assurance Engineer, demonstrating growth in technical leadership and team management capabilities.',
    roles: [
      {
        title: 'Lead Quality Assurance Engineer',
        period: 'Dec 2022 – Jun 2023',
        description: 'Led the QA team and managed testing processes across projects. Mentored junior testers and maintained automation scripts.',
        achievements: [
          'Led QA efforts across multiple client projects',
          'Established standardized testing procedures',
          'Implemented code review processes',
          'Developed onboarding program for new team members'
        ]
      },
      {
        title: 'Quality Assurance Engineer',
        period: 'Jun 2022 – Dec 2022',
        description: 'Performed manual and automated testing on web platforms. Collaborated closely with developers to resolve bugs early in the SDLC.',
        achievements: [
          'Conducted systematic testing of web applications',
          'Created comprehensive test documentation',
          'Collaborated with development teams on testing practices',
          'Participated in architectural reviews for testability'
        ]
      }
    ],
    technologies: ['Selenium WebDriver', 'Postman', 'MySQL', 'Git', 'Azure DevOps', 'Cypress'],
    color: 'from-purple-500 to-pink-500'
  },
];

export default function Experience() {
  const [expandedRolesByExp, setExpandedRolesByExp] = useState<Record<number, boolean>>({});
  const [expandedAchievementsByRole, setExpandedAchievementsByRole] = useState<Record<string, boolean>>({});

  const toggleOlderRoles = (expIndex: number) => {
    setExpandedRolesByExp((prev) => ({ ...prev, [expIndex]: !prev[expIndex] }));
  };

  const toggleAchievements = (expIndex: number, roleIndex: number) => {
    const key = `${expIndex}-${roleIndex}`;
    setExpandedAchievementsByRole((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              {experiences.map((exp: Experience, index: number) => (
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
                          {/* For multi-role companies */}
                          {exp.roles && (
                            <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                              {exp.roles[0].title}
                              <span className="text-sm text-muted-foreground font-normal ml-2">
                                (Promoted from {exp.roles[exp.roles.length - 1].title})
                              </span>
                            </h3>
                          )}
                          
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

                      {/* For multi-role companies - show roles with achievements (collapsed older roles) */}
                      {exp.roles && (
                        <div className="mb-3 sm:mb-4 space-y-4">
                          {(expandedRolesByExp[index] ? exp.roles : exp.roles.slice(0, 1)).map((role: Role, roleIndex: number) => {
                            const globalRoleIndex = expandedRolesByExp[index] ? roleIndex : roleIndex; // roleIndex is correct for shown slice
                            const key = `${index}-${globalRoleIndex}`;
                            const isAchExpanded = Boolean(expandedAchievementsByRole[key]);
                            const visibleAchievements = isAchExpanded ? role.achievements : role.achievements.slice(0, 3);
                            const hasMoreAchievements = role.achievements.length > 3;
                            return (
                              <div key={globalRoleIndex} className="border-l-2 border-primary/20 pl-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="text-sm font-medium text-foreground">{role.title}</h4>
                                  <span className="text-xs text-muted-foreground">({role.period})</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                                  {role.description}
                                </p>
                                <ul className="space-y-1">
                                  {visibleAchievements.map((achievement: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="leading-relaxed">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                                {hasMoreAchievements && (
                                  <button
                                    type="button"
                                    className="mt-2 text-xs text-primary hover:text-primary/80"
                                    onClick={() => toggleAchievements(index, globalRoleIndex)}
                                  >
                                    {isAchExpanded ? 'Show fewer' : 'Show more'}
                                  </button>
                                )}
                              </div>
                            );
                          })}

                          {exp.roles.length > 1 && (
                            <div className="pt-2">
                              <button
                                type="button"
                                className="text-xs text-primary hover:text-primary/80"
                                onClick={() => toggleOlderRoles(index)}
                              >
                                {expandedRolesByExp[index] ? 'Hide older roles' : 'Show older roles'}
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.technologies.map((tech: string) => (
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
