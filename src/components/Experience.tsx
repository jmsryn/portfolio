'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp
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
    period: 'June 2023 – December 2025',
    type: 'Full-time',
    description: 'Progressed from Software Quality Assurance Engineer to Jr. Software Development Engineer in Test, expanding expertise in test automation and development practices.',
    roles: [
      {
        title: 'Jr. Software Development Engineer in Test',
        period: 'June 2025 – December 2025',
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
                Experience
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent mb-8" />
            </motion.div>

            <div className="space-y-12">
              {experiences.map((exp: Experience, index: number) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border" />
                  )}

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        className="w-14 h-14 rounded-xl border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      </motion.div>
                      {index < experiences.length - 1 && (
                        <div className="absolute left-1/2 top-14 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2" />
                      )}
                    </div>

                    <motion.div
                      className="flex-1 pb-16"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-light text-foreground mb-3">
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/50">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/50">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {exp.roles && (
                        <div className="space-y-6">
                          {(expandedRolesByExp[index] ? exp.roles : exp.roles.slice(0, 1)).map((role: Role, roleIndex: number) => {
                            const globalRoleIndex = expandedRolesByExp[index] ? roleIndex : roleIndex;
                            const key = `${index}-${globalRoleIndex}`;
                            const isAchExpanded = Boolean(expandedAchievementsByRole[key]);
                            const visibleAchievements = isAchExpanded ? role.achievements : role.achievements.slice(0, 4);
                            const hasMoreAchievements = role.achievements.length > 4;
                            
                            return (
                              <motion.div
                                key={globalRoleIndex}
                                className="space-y-4 mb-4 p-5 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xl font-medium text-foreground">
                                      {role.title}
                                    </h4>
                                    <span className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                      {role.period}
                                    </span>
                                  </div>
                                  <p className="text-muted-foreground leading-relaxed font-light">
                                    {role.description}
                                  </p>
                                </div>

                                {visibleAchievements.length > 0 && (
                                  <div>
                                    <h5 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                                      <div className="w-1 h-4 bg-primary rounded-full" />
                                      Key Achievements
                                    </h5>
                                    <ul className="space-y-3">
                                      {visibleAchievements.map((achievement: string, i: number) => (
                                        <motion.li
                                          key={i}
                                          className="flex items-start gap-3 text-muted-foreground group"
                                          initial={{ opacity: 0, x: -10 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.3, delay: i * 0.05 }}
                                        >
                                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                          <span className="leading-relaxed">{achievement}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                    {hasMoreAchievements && (
                                      <button
                                        type="button"
                                        onClick={() => toggleAchievements(index, globalRoleIndex)}
                                        className="mt-3 text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                                      >
                                        {isAchExpanded ? (
                                          <>
                                            <ChevronUp className="w-4 h-4" />
                                            Show fewer
                                          </>
                                        ) : (
                                          <>
                                            <ChevronDown className="w-4 h-4" />
                                            Show more ({role.achievements.length - 4} more)
                                          </>
                                        )}
                                      </button>
                                    )}
                                  </div>
                                )}

                                <div>
                                  <h5 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-4 bg-primary rounded-full" />
                                    Technologies
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech: string) => (
                                      <motion.span
                                        key={tech}
                                        className="px-3 py-1.5 text-sm bg-muted/50 text-foreground border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        {tech}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}

                          {exp.roles.length > 1 && (
                            <button
                              type="button"
                              onClick={() => toggleOlderRoles(index)}
                              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                            >
                              {expandedRolesByExp[index] ? (
                                <>
                                  <ChevronUp className="w-4 h-4" />
                                  Hide older roles
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4" />
                                  Show older roles ({exp.roles.length - 1} more)
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
