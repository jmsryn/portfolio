'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const experiences = [
  {
    title: 'Quality Assurance Engineer',
    company: 'Theoria Medical',
    period: 'June 2023 – Present',
    description:
      'Leading test automation efforts and maintaining CI/CD pipelines while executing API, performance, and penetration tests.',
    impact: 'Reduced regression testing time by 30% through automation.', // Placeholder for quantifiable impact
    contributions: [ // Placeholder for technical contributions
      'Implemented a new test automation framework using Cypress.',
      'Integrated automated tests into the CI/CD pipeline using GitHub Actions.',
      'Developed and executed performance tests using JMeter.',
      'Conducted penetration tests and reported vulnerabilities.',
    ],
  },
  {
    title: 'Lead Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    period: 'Dec 2022 – Jun 2023',
    description:
      'Led the QA team and managed testing processes across projects. Mentored junior testers and maintained automation scripts.',
    impact: 'Improved test coverage by 20% across key projects.', // Placeholder for quantifiable impact
    contributions: [ // Placeholder for technical contributions
      'Managed and prioritized testing activities for multiple projects.',
      'Mentored and trained junior QA engineers on testing best practices and tools.',
      'Maintained and updated existing test automation scripts.',
    ],
  },
  {
    title: 'Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    period: 'Jun 2022 – Dec 2022',
    description:
      'Performed manual and automated testing on web platforms. Collaborated closely with developers to resolve bugs early in the SDLC.',
    impact: 'Reduced bug escape rate by 15% through early bug detection.', // Placeholder for quantifiable impact
    contributions: [ // Placeholder for technical contributions
      'Executed manual and automated test cases for web applications.',
      'Collaborated with developers to identify and resolve defects.',
      'Participated in test plan creation and test case design.',
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <motion.div
            className="flex-1 text-left"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <div className="text-lg md:text-xl text-muted-foreground mb-4 space-y-4">
              <p>
                With <strong>over 2 years</strong> of dedicated experience in Quality Assurance, I specialize in building robust testing frameworks and ensuring high-quality software delivery.
              </p>
              <p>
                My expertise spans:
              </p>
              <ul className="list-disc list-inside">
                <li>Comprehensive Test Automation (Web, API)</li>
                <li>Performance and Security Testing</li>
                <li>CI/CD Pipeline Integration and Management</li>
                <li>Cross-functional Collaboration with Development Teams</li>
                <li>Mentoring and Leading QA Efforts</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Section (Timeline) */}
          <div className="flex-1">
            <div className="relative border-l border-muted pl-6 space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute left-[-1.9rem] top-2 w-3 h-3 bg-primary rounded-full" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>

                  {/* New sections for impact and contributions */}
                  {exp.impact && (
                    <div className="mt-2">
                      <h4 className="text-md font-semibold text-foreground">Impact:</h4>
                      <p className="text-muted-foreground">{exp.impact}</p>
                    </div>
                  )}

                  {exp.contributions && exp.contributions.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-md font-semibold text-foreground">Technical Contributions:</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {exp.contributions.map((contribution, index) => (
                          <li key={index}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
