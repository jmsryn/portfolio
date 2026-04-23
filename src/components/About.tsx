export default function About() {
  return (
    <section id="about">
      <h2 className="text-lg font-semibold text-foreground font-sans mb-3">
        <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>about
      </h2>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          I&apos;m a Quality Assurance Engineer with 3+ years of experience specializing
          in test automation, security testing, and performance engineering. I build
          robust testing frameworks and integrate them into CI/CD pipelines to ensure
          software quality at scale.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          My expertise spans end-to-end testing with Playwright and Cypress, API testing,
          OWASP security assessments, and building maintainable test architectures. I work
          with teams to establish quality gates that catch issues early and ship with
          confidence.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Currently working at Amihan Solutions on Oracle APEX-based applications.
          Pursuing the PJPT certification to deepen my security testing expertise.
        </p>
      </div>
    </section>
  );
}
