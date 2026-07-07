import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="pt-4 lg:pt-0 pb-14 md:pb-20 scroll-mt-24">
      <SectionHeading index="01" title="About" />

      <p className="font-display text-2xl md:text-3xl leading-snug text-foreground max-w-3xl mb-6 text-balance">
        I build robust testing frameworks and integrate them into CI/CD
        pipelines so teams can ship software with confidence.
      </p>

      <div className="max-w-2xl space-y-4">
        <p>
          I&apos;m a Quality Assurance Engineer with 3+ years of experience.
          My expertise spans end-to-end testing with Playwright and Cypress,
          API testing, OWASP security assessments, and building maintainable
          test architectures. I work with teams to establish quality gates
          that catch issues early.
        </p>

        <p>
          Currently working at Amihan Solutions on Oracle APEX-based
          applications. Pursuing the PJPT certification to deepen my security
          testing expertise.
        </p>
      </div>
    </section>
  );
}
