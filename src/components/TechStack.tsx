import SectionHeading from './SectionHeading';

const stack = {
  Testing: ['Playwright', 'Cypress', 'Selenium', 'K6', 'Postman', 'APIDog'],
  'Reporting & Management': ['Allure', 'Xray', 'Qase'],
  Languages: ['JavaScript', 'TypeScript', 'Python'],
  'DevOps & Tooling': ['Docker', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'Git', 'Jira'],
  Security: ['OWASP ZAP', 'Burp Suite'],
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-14 md:py-20 border-t border-border">
      <SectionHeading index="02" title="Stack" />

      <div className="divide-y divide-border/60">
        {Object.entries(stack).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 first:pt-0"
          >
            <h3 className="text-sm font-medium text-foreground sm:w-40 shrink-0">
              {category}
            </h3>
            <p className="text-base text-muted-foreground">
              {items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
