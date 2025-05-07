'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const education = {
  degree: 'B.S. Information Technology',
  institution: 'University of Science and Technology of Southern Philippines',
  period: '2020 – 2024',
  description: 'Focused on Software Engineering, QA practices, and participated in competitive programming and coding competitions.',
  impact: 'Achieved Dean\'s List honors for multiple semesters.', // Placeholder for quantifiable impact
  contributions: [ // Placeholder for technical contributions
    'Developed a capstone project on automated web application testing.',
    'Participated in inter-university coding competitions.',
    'Contributed to open-source projects as part of coursework.',
  ],
};

export default function Education() {
  return (
    <SectionWrapper>
    <section
      id="education"
      className="py-20 px-4 max-w-3xl mx-auto"
    >
      <div className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative border-l border-muted pl-6"
      >
        <div className="absolute left-[-0.4rem] top-2 w-3 h-3 bg-primary rounded-full" />
        <h3 className="text-xl font-semibold">
          {education.degree}
        </h3>
        <p className="text-sm text-muted-foreground">
            {education.institution} • {education.period}
        </p>
        <p className="mt-2 text-muted-foreground">
          {education.description}
        </p>

        {/* New sections for impact and contributions */}
        {education.impact && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-foreground">Impact:</h4>
            <p className="text-muted-foreground">{education.impact}</p>
          </div>
        )}

        {education.contributions && education.contributions.length > 0 && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-foreground">Technical Contributions:</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {education.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </section>
    </SectionWrapper>
  );
}
