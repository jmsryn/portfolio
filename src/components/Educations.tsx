import { GraduationCap } from 'lucide-react';

const education = {
  degree: 'B.S. Information Technology',
  institution: 'University of Science and Technology of Southern Philippines',
  period: '2018 – 2022',
  description:
    'Focused on Software Engineering and QA practices. Participated in competitive programming and inter-university hacking competitions hosted by DICT.',
  achievements: [
    'Capstone project on Bureau of Fisheries Management System',
    '3rd place in DICT hacking competition',
  ],
};

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-border">
      <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">Education</h2>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
          <GraduationCap className="w-5 h-5 text-muted-foreground" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground font-sans mb-0.5">
            {education.degree}
          </h3>
          <p className="text-sm text-muted-foreground mb-1">{education.institution}</p>
          <p className="text-xs text-muted-foreground mb-3">{education.period}</p>

          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {education.description}
          </p>

          <ul className="space-y-1.5">
            {education.achievements.map((a, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
