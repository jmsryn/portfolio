const stack = {
  'Test automation': ['Playwright', 'Cypress', 'Selenium', 'K6', 'Postman', 'APIDog'],
  'Languages': ['TypeScript', 'JavaScript', 'Python'],
  'CI/CD & tooling': ['GitHub Actions', 'Docker', 'Azure DevOps', 'Jenkins', 'Git', 'Jira'],
  'Security & reporting': ['OWASP ZAP', 'Burp Suite', 'Allure', 'Xray', 'Qase'],
};

export default function TechStack() {
  return <section id="techstack" className="stack-section"><h2>The tools behind it.</h2><div className="stack-groups">{Object.entries(stack).map(([category, items]) => <div key={category}><h3>{category}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>;
}
