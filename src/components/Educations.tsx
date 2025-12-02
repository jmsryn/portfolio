'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const education = {
  degree: 'B.S. Information Technology',
  institution: 'University of Science and Technology of Southern Philippines',
  period: '2020 – 2024',
  description: 'Focused on Software Engineering, QA practices, and participated in competitive programming and coding competitions.',
  achievements: [
    'Dean\'s List honors for multiple semesters',
    'Capstone project on automated web application testing',
    'Participated in inter-university coding competitions',
  ],
};

export default function Education() {
  return (
    <SectionWrapper>
      <section id="education" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
                Education
              </h2>
              <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent mb-8" />
            </motion.div>

            {/* Education Card */}
            <motion.div
              className="card-enhanced p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <GraduationCap className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                {education.description}
              </p>

              {education.achievements && education.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                    <ul className="space-y-3">
                      {education.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
