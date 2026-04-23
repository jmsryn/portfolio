const stack = {
  Testing: ['Playwright', 'Cypress', 'Selenium', 'K6', 'Postman', 'APIDog'],
  Languages: ['JavaScript', 'TypeScript', 'Python'],
  'DevOps & Cloud': ['Docker', 'GitHub Actions', 'Azure DevOps', 'Git', 'Jira'],
  Security: ['OWASP ZAP', 'Burp Suite'],
};

export default function TechStack() {
  return (
    <section id="techstack">
      <h2 className="text-lg font-semibold text-foreground font-sans mb-4">
        <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>stack
      </h2>

      <div className="space-y-3">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-foreground mb-1.5 font-sans">
              {category}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5">
              {items.map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
