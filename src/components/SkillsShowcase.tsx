'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Selenium', level: 90, category: 'Automation' },
  { name: 'Cypress', level: 85, category: 'Automation' },
  { name: 'Playwright', level: 80, category: 'Automation' },
  { name: 'JavaScript', level: 85, category: 'Programming' },
  { name: 'TypeScript', level: 80, category: 'Programming' },
  { name: 'Python', level: 75, category: 'Programming' },
  { name: 'API Testing', level: 90, category: 'Testing' },
  { name: 'Performance Testing', level: 80, category: 'Testing' },
  { name: 'Security Testing', level: 85, category: 'Security' },
  { name: 'CI/CD', level: 80, category: 'DevOps' },
];

export default function SkillsShowcase() {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <SectionWrapper>
      <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="mb-12">
          <motion.div
            className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ➜ ~ <span className="text-gray-900 dark:text-white">skills</span>
            <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/70"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
