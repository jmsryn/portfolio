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

      <dl className="mt-10 grid grid-cols-3 gap-px max-w-2xl bg-border/60 border border-border/60 rounded-lg overflow-hidden">
        {[
          { value: '3+', label: 'Years in QA & automation' },
          { value: '~40%', label: 'Faster release validation' },
          { value: '5', label: 'QA & SDET roles shipped' },
        ].map((stat) => (
          <div key={stat.label} className="bg-background px-4 py-5">
            <dt className="font-display text-3xl md:text-4xl text-foreground tabular-nums leading-none">
              {stat.value}
            </dt>
            <dd className="mt-2 text-xs text-muted-foreground leading-snug">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
