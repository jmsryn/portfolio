/** Public answers curated from /resume and the portfolio. Update alongside those pages.
 * Also serves as the source material for optional server-side AI replies.
 * The local matcher never executes visitor text or uses it to construct links or facts.
 */
export type ProfileSource = { label: string; href: string };
export type ProfileAnswer = { text: string; sources: ProfileSource[]; suggestions: string[] };
type Topic = ProfileAnswer & { id: string; phrases: string[] };

const resume = { label: 'Read résumé', href: '/resume' };
const experience = { label: 'QA experience', href: '/#experience' };
const skills = { label: 'Testing toolkit', href: '/#techstack' };
const projects = { label: 'Hobby projects', href: '/#projects' };
const contact = { label: 'Email James', href: 'mailto:hello@jrgaid.com' };

export const STARTER_QUESTIONS = ['What is his QA experience?', 'Which testing tools does he use?', 'Tell me about his hobby projects', 'How can I contact him?'];
export const MAX_QUESTION_LENGTH = 400;
export const WELCOME_MESSAGE = 'Hi! I can help you explore James’s QA background, testing skills, education, and hobby projects. What would you like to know?';

const topics: Topic[] = [
  {
    id: 'identity', phrases: ['who is', 'about james', 'about him', 'about yourself', 'introduce', 'background', 'summary', 'overview', 'developer', 'software engineer', 'vibe coding', 'qa or dev'],
    text: 'James Ryan Gaid is a QA Engineer and SDET based in the Philippines. His professional focus is manual testing, test automation, API testing, and quality assurance. He also explores hobby apps through AI-assisted vibe coding; those projects are separate from his professional QA experience.',
    sources: [resume, projects], suggestions: ['What is his QA experience?', 'Which testing tools does he use?'],
  },
  {
    id: 'experience', phrases: ['experience', 'career', 'work history', 'employment', 'previous roles', 'previous jobs', 'worked', 'years', 'companies'],
    text: 'His résumé lists QA roles since 2022:\n\n• QA & Test Engineer, Amihan Solutions (2026–present)\n• Junior SDET, Theoria Medical (2025–2026)\n• SQA Engineer, Theoria Medical (2023–2025)\n• Lead QA Engineer, Innovuze Solutions (2023)\n• QA Engineer, Innovuze Solutions (2022–2023)\n\nHis work spans manual and automated testing, API coverage, CI quality gates, and QA team leadership.',
    sources: [experience, resume], suggestions: ['What does he do at Amihan?', 'What did he achieve at Theoria?'],
  },
  {
    id: 'current', phrases: ['amihan', 'current role', 'currently', 'current job', 'now working', 'work now', 'work today', 'where does he work', 'where do you work', 'oracle', 'apex'],
    text: 'James is a QA & Test Engineer at Amihan Solutions, listed as 2026–present. He works on Oracle APEX applications, leads end-to-end and API test coverage across releases, and designs Playwright frameworks with CI quality gates.',
    sources: [experience], suggestions: ['Which testing tools does he use?', 'What did he achieve at Theoria?'],
  },
  {
    id: 'theoria', phrases: ['theoria', 'achievement', 'impact', 'results', '40', 'regression', 'release validation', 'healthcare', 'clinical'],
    text: 'At Theoria Medical, James progressed from SQA Engineer to Junior SDET. His résumé reports roughly 40% less release-validation time after building automated regression suites. He connected Playwright with GitHub Actions for PR-level test reporting and worked with developers on test-first workflows and reducing flaky tests.',
    sources: [resume, experience], suggestions: ['Does he have leadership experience?', 'Which testing tools does he use?'],
  },
  {
    id: 'leadership', phrases: ['leadership', 'lead qa', 'innovuze', 'mentor', 'management', 'manage a team', 'led a team', 'triage'],
    text: 'At Innovuze Solutions, James worked as a QA Engineer (2022–2023) and Lead QA Engineer (2023). He authored API and UI tests with Postman and Selenium, mentored the QA team, and established bug triage, test-case standards, and a reporting cadence. The résumé does not specify team size.',
    sources: [experience], suggestions: ['What is his QA experience?', 'What did he achieve at Theoria?'],
  },
  {
    id: 'skills', phrases: ['tools', 'toolkit', 'tech stack', 'skills', 'technologies', 'playwright', 'cypress', 'selenium', 'automation', 'automated testing', 'manual testing', 'exploratory', 'postman', 'apidog', 'api testing', 'k6', 'performance', 'allure', 'xray', 'qase'],
    text: 'His listed testing tools are Playwright, Cypress, Selenium, K6, Postman, and APIDog. He uses Allure, Xray, and Qase for reporting and test management. His QA experience includes exploratory and manual testing, API and UI testing, maintainable automation frameworks, regression testing, and CI quality gates.',
    sources: [skills, resume], suggestions: ['What are his CI/CD skills?', 'What is his security background?'],
  },
  {
    id: 'languages', phrases: ['language', 'typescript', 'javascript', 'python', 'coding skills', 'programming'],
    text: 'James’s résumé lists JavaScript, TypeScript, and Python. His professional coding work is focused on test automation and testing frameworks. His portfolio apps are AI-assisted hobby projects, not evidence of professional product-development roles.',
    sources: [skills, projects], suggestions: ['Which testing tools does he use?', 'Tell me about his hobby projects'],
  },
  {
    id: 'devops', phrases: ['ci cd', 'cicd', 'devops', 'pipeline', 'github actions', 'docker', 'jenkins', 'azure', 'quality gates'],
    text: 'His toolkit includes GitHub Actions, Docker, Azure DevOps, Jenkins, Git, and Jira. At Theoria Medical, he integrated Playwright and GitHub Actions with PR-level test reporting. At Amihan Solutions, his work includes Playwright frameworks with CI quality gates.',
    sources: [skills, experience], suggestions: ['What did he achieve at Theoria?', 'What does he do at Amihan?'],
  },
  {
    id: 'security', phrases: ['security', 'owasp', 'burp', 'penetration', 'pentest', 'hacking'],
    text: 'James lists OWASP security assessments, OWASP ZAP, and Burp Suite among his interests and skills. His credentials include Cisco CyberOps Associate and TCM Security’s Web App Security & Testing. He is pursuing PJPT; it is listed as in progress, not a completed certification.',
    sources: [{ label: 'Credentials', href: '/#certifications' }, skills], suggestions: ['Which certifications does he hold?', 'Where did he study?'],
  },
  {
    id: 'credentials', phrases: ['certification', 'certifications', 'certified', 'credential', 'credentials', 'certificate', 'qualifications', 'pjpt', 'cyberops', 'tcm', 'applitools'],
    text: 'His profile lists:\n\n• CyberOps Associate, Cisco (2022)\n• Web App Security & Testing, TCM Security (2023)\n• Introduction to Playwright, Applitools (2024)\n• PJPT, TCM Security: in progress\n\nPJPT is not listed as completed.',
    sources: [{ label: 'Credentials & certificate links', href: '/#certifications' }], suggestions: ['What is his security background?', 'Where did he study?'],
  },
  {
    id: 'education', phrases: ['education', 'study', 'studied', 'university', 'college', 'school', 'degree', 'graduated', 'graduate', 'capstone', 'dict', 'ustp'],
    text: 'James earned a BS in Information Technology at the University of Science and Technology of Southern Philippines (2018–2022). His portfolio also lists third place in a DICT hacking competition and a Bureau of Fisheries Management System capstone.',
    sources: [{ label: 'Education', href: '/#education' }, resume], suggestions: ['Which certifications does he hold?', 'What is his QA experience?'],
  },
  {
    id: 'projects', phrases: ['projects', 'hobby', 'hobbies', 'side projects', 'built', 'building', 'apps', 'portfolio projects'],
    text: 'His personal projects include AutoTestGen (AI-assisted test case generation), Sillage (fragrance curation), and Gunita (guest photos for celebrations). He also has a Sillage E2E testing suite using Playwright. The apps are AI-assisted hobby projects; his career and job search focus on QA and SDET work.',
    sources: [projects], suggestions: ['What is Gunita?', 'Tell me about Sillage', 'What is AutoTestGen?'],
  },
  {
    id: 'gunita', phrases: ['gunita', 'photography', 'guest photo', 'celebration'],
    text: 'Gunita is James’s AI-assisted hobby project for guest photos at celebrations. Guests scan a QR code, take photos in their browser, and view the shared album when the host reveals it.',
    sources: [{ label: 'Visit Gunita', href: 'https://getgunita.com/' }, projects], suggestions: ['Tell me about his hobby projects', 'What is his QA experience?'],
  },
  {
    id: 'sillage', phrases: ['sillage', 'fragrance', 'perfume'],
    text: 'Sillage is an AI-powered fragrance curator and an AI-assisted hobby project. James also maintains a separate personal Playwright E2E testing suite for Sillage. The application is a hobby build; the suite demonstrates his interest in test automation.',
    sources: [{ label: 'Visit Sillage', href: 'https://mysillage.me' }, { label: 'Playwright suite', href: 'https://github.com/jmsryn/mysillage-playwright' }], suggestions: ['What is Gunita?', 'Which testing tools does he use?'],
  },
  {
    id: 'autotestgen', phrases: ['autotestgen', 'testai', 'test case generator', 'test generation'],
    text: 'AutoTestGen is an AI-assisted hobby project that generates test cases from requirements. It reflects James’s interest in exploring tools for testing alongside his professional QA work.',
    sources: [{ label: 'Visit AutoTestGen', href: 'https://testai.jrgaid.com' }, projects], suggestions: ['Tell me about his hobby projects', 'What is his QA experience?'],
  },
  {
    id: 'location', phrases: ['based', 'location', 'live', 'country', 'philippines', 'remote', 'timezone', 'time zone'],
    text: 'James’s résumé lists the Philippines and remote work. His portfolio says he is open to QA and SDET opportunities. Exact working hours, relocation preferences, and time-zone overlap should be confirmed with him directly.',
    sources: [resume, contact], suggestions: ['How can I contact him?', 'What is his QA experience?'],
  },
  {
    id: 'contact', phrases: ['contact', 'email', 'reach', 'hire', 'hiring', 'available', 'availability', 'opportunity', 'opportunities', 'recruit', 'linkedin', 'github', 'get in touch'],
    text: 'James’s portfolio says he is open to QA Engineer and SDET opportunities. You can email hello@jrgaid.com or connect on LinkedIn. Please confirm his current availability, start date, and role preferences directly with him.',
    sources: [contact, { label: 'LinkedIn', href: 'https://linkedin.com/in/jmsryn' }, { label: 'GitHub', href: 'https://github.com/jmsryn' }], suggestions: ['What is his QA experience?', 'Can I download his résumé?'],
  },
  {
    id: 'resume', phrases: ['resume', 'cv', 'download', 'pdf'],
    text: 'You can read James’s résumé online or download the existing PDF. It covers his QA roles, test automation skills, education, and credentials.',
    sources: [resume, { label: 'Download CV (PDF)', href: '/files/James%20Ryan%20Gaid%20-%20CV1.pdf' }], suggestions: ['What is his QA experience?', 'How can I contact him?'],
  },
];

export const PROFILE_KNOWLEDGE = topics.map(({ id, text, sources }) => ({ id, text, sources }));

export function isProfileAnswer(value: unknown): value is ProfileAnswer {
  if (typeof value !== 'object' || value === null) return false;
  const answer = value as Partial<ProfileAnswer>;
  return typeof answer.text === 'string' && answer.text.length > 0 && answer.text.length <= 2400
    && Array.isArray(answer.suggestions) && answer.suggestions.length <= 4
    && answer.suggestions.every(question => typeof question === 'string' && question.length > 0 && question.length <= MAX_QUESTION_LENGTH)
    && Array.isArray(answer.sources) && answer.sources.length <= 4
    && answer.sources.every(source => source && typeof source.label === 'string' && PROFILE_KNOWLEDGE.some(fact => fact.sources.some(known => known.href === source.href)));
}

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function hasPhrase(question: string, phrase: string) {
  return (` ${question} `).includes(` ${normalize(phrase)} `);
}

/** Select only authored, sourced answers. An unmatched question never creates new facts. */
export function answerProfileQuestion(input: string): ProfileAnswer {
  if (!input.trim() || input.length > MAX_QUESTION_LENGTH) {
    return { text: `Please ask a question of up to ${MAX_QUESTION_LENGTH} characters about James’s profile.`, sources: [], suggestions: STARTER_QUESTIONS };
  }
  const question = normalize(input);
  if (/^(hi|hello|hey|hello there|good morning|good evening)$/.test(question)) {
    return { text: WELCOME_MESSAGE, sources: [], suggestions: STARTER_QUESTIONS };
  }
  if (/^(thanks|thank you|thank you so much|cheers)$/.test(question)) {
    return { text: 'You’re welcome! You can also read his résumé or contact James directly.', sources: [resume, contact], suggestions: STARTER_QUESTIONS };
  }
  if (['who are you', 'are you james', 'are you ai', 'are you a bot'].includes(question)) {
    return { text: 'I’m a profile-based guide, not James. I match questions to prepared answers from his public résumé and portfolio. To speak with James, use his email.', sources: [contact], suggestions: STARTER_QUESTIONS };
  }
  // These details are not published; do not infer them from skills or job titles.
  const unpublished = ['salary', 'compensation', 'pay', 'rate', 'notice period', 'start date', 'visa', 'sponsorship', 'phone', 'address', 'birthday', 'age', 'married', 'family', 'religion', 'password', 'secret', 'api key', 'private', 'weakness', 'fired'];
  if (unpublished.some(phrase => hasPhrase(question, phrase))) {
    return { text: 'That detail isn’t documented in James’s public résumé or portfolio. Please ask him directly; I can only share the information published in his profile.', sources: [contact], suggestions: STARTER_QUESTIONS };
  }
  const matches = topics.map(topic => ({ topic, score: topic.phrases.reduce((score, phrase) => hasPhrase(question, phrase) ? Math.max(score, normalize(phrase).split(' ').length + 1) : score, 0) }))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score || Number(a.topic.id === 'identity') - Number(b.topic.id === 'identity'));
  // Named subjects beat broad words such as "experience" or "projects".
  const named = matches.find(({ topic }) => ['gunita', 'sillage', 'autotestgen', 'current', 'theoria', 'leadership', 'credentials', 'education'].includes(topic.id));
  const selected = named?.topic ?? matches[0]?.topic;
  if (selected) return { text: selected.text, sources: selected.sources, suggestions: selected.suggestions };
  return { text: 'I couldn’t find an answer to that in James’s public profile. I can help with his QA experience, testing tools, education, credentials, hobby projects, or contact details.', sources: [resume, contact], suggestions: STARTER_QUESTIONS };
}
