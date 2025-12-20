'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const education = {
  degree: 'B.S. Information Technology',
  institution: 'University of Science and Technology of Southern Philippines',
  period: '2018 – 2022',
  description: 'Focused on Software Engineering, QA practices, and participated in competitive programming.',
  achievements: [
    'Capstone project on Beauru on Fisheries Management System',
    'Participated in inter-university hacking competitions hosted by DICT',
    '3rd place in DICT hacking competition',
  ],
};

export default function Education() {
  return (
    <SectionWrapper>
      <section id="education" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Education
              </h2>
              <div className="h-px w-12 bg-primary" />
            </motion.div>

            {/* Education Card */}
            <motion.div
              className="card-enhanced p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {education.description}
              </p>

              <div className="border-t border-border pt-4">
                <h4 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wider">
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
