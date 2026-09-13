import type { ProductFrameId } from "./product-frames";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Achievement = {
  metric?: string;
  metricLabel?: string;
  text: string;
};

export type Job = {
  title: string;
  dates: string;
  tenure: string;
  workMode: string;
  skills: string[];
  bullets: string[];
};

export type ExperienceOrg = {
  company: string;
  employment: string;
  location: string;
  roles: Job[];
};

export type Project = {
  name: string;
  stack: string[];
  problem: string;
  action: string;
  outcome: string;
  github?: string;
  live?: string;
  kicker: string;
  theme: "campus" | "stream";
};

export type ResearchPaper = {
  title: string;
  officialTitle: string;
  venue: string;
  dates: string;
  badge: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  details: string[];
};

export type Award = {
  title: string;
  detail: string;
};

export const site = {
  name: "Ridhi Jolly",
  title: "AI Product Manager",
  tagline:
    "I took KaDeep Studios from framing to production — dual-engine automation, TestStudios (a no-code QA agent), and Accessibility across WCAG 2.2, ADA/508, and EN 301 549. Skills-first AI. IEEE-published.",
  seoTitle: "Ridhi Jolly — AI Product Manager",
  seoDescription:
    "AI Product Manager. Shipped KaDeep Studios, TestStudios, and Accessibility — skills-first automation, a no-code QA agent, and compliance without a fake “compliant” stamp. Open to AI / platform PM seats in India, Canada, and the UAE. IEEE-published.",
  url: "https://ridhijolly.com",
  locale: "en_IN",
  location: "Mumbai, India",
  availability: "Open to AI / platform PM · India, Canada, UAE",
};

export const links = {
  email: "ridhi.jolly03@gmail.com",
  phone: "+91-9013177111",
  phoneHref: "tel:+919013177111",
  linkedin: "https://www.linkedin.com/in/ridhijolly",
  github: "https://github.com/jollyridhi",
  leetcode: "https://leetcode.com/u/ridhi9",
  resume: "/resume.pdf",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Resume", href: links.resume },
  { label: "Contact", href: "#contact" },
];

export const heroScan = "Engineer → PM. Three products shipped in nine months.";

export const heroCtas: SocialLink[] = [
  { label: "See the work", href: "/#case-studies" },
  { label: "Resume", href: links.resume },
];

export const heroLoop = [
  { title: "Playbooks first", detail: "Deterministic skills take the common path." },
  { title: "True miss?", detail: "If the UI actually moved, then spend the model." },
  { title: "LLM second", detail: "Cost sits on novelty — not on everyday churn." },
];

export const heroStats = [
  { value: "100+", label: "QA + product seats", detail: "Analytics adopted internally" },
  { value: "25%", label: "Faster release", detail: "Three core modules" },
  { value: "89", label: "xactload.com score", detail: "0 Critical / 0 Serious" },
  { value: "IEEE", label: "Peer-reviewed", detail: "94.6% accuracy · 97.1% F1" },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I sit with engineering, QA, and the person who has to defend the release. Frame the problem, put a cost on the model, ship a loop a team will actually run.",
    "The decisions live in the case studies. I want the next seat in AI, platform, or developer tools — India, Canada, or the UAE.",
  ],
  principles: [
    { title: "Frame first", text: "ICP before the feature list." },
    { title: "Cost the model", text: "Playbooks run. The LLM pays for true misses." },
    { title: "Language is a feature", text: "Evidence from this scan. Never a fake stamp." },
    { title: "Own the miss", text: "If I was wrong, it is on the page." },
  ],
};

export type CaseStudy = {
  id: string;
  number: string;
  product: string;
  title: string;
  line: string;
  role: string;
  problem: string;
  approach: string;
  decisionQuote: string;
  decisionWhy: string;
  impact: string;
  metrics: { value: string; label: string }[];
  href?: string;
  cta?: string;
  coverFrame: ProductFrameId;
  coverAlt: string;
  liveHref?: string;
  liveLabel?: string;
  diagram: {
    label: string;
    steps: { title: string; detail: string }[];
  };
};

export const caseStudiesIntro = {
  eyebrow: "Work",
  title: "Three products. One bet: the model is not the product.",
  description: "Decision, tradeoff, miss. Open a study when you have a minute.",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "kadeep-studios",
    number: "01",
    product: "KaDeep Studios",
    title: "Low-code that survives the real web",
    line: "Record or generate a test. Skills play first. The model only runs on a true miss.",
    href: "/case-studies/kadeep-studios",
    cta: "Read the study",
    coverFrame: "studios-create",
    coverAlt: "KaDeep Studios create surface — record a flow or generate with AI.",
    liveHref: "https://studios.kadeep.ai",
    liveLabel: "studios.kadeep.ai",
    role: "AI Product Manager — create, AI generate, skills-first playback, heal + evidence, OTP, RBAC.",
    problem:
      "Locators died when the UI shifted. LLM-first healing made spend track volatility. Maintenance was the product. Nobody treated it that way.",
    approach:
      "Dual-engine automation first (Playwright + native macOS), then self-healing, then Accessibility as its own product. One roadmap.",
    decisionQuote: "Skills-first, LLM-second.",
    decisionWhy:
      "If every flake calls a model, cost tracks UI churn and recovery becomes a black box. Playbooks first. Claude only on a true miss.",
    impact: "100+ internal QA and product seats. 25% faster release across three modules.",
    metrics: [
      { value: "100+", label: "Internal seats" },
      { value: "25%", label: "Faster release" },
      { value: "OTP", label: "Auth in-product" },
    ],
    diagram: {
      label: "Two-stage self-healing",
      steps: [
        { title: "UI change", detail: "Locator or assertion fails." },
        { title: "Playbook", detail: "Deterministic recovery first." },
        { title: "LLM", detail: "Only if the playbook misses." },
      ],
    },
  },
  {
    id: "test-studios",
    number: "02",
    product: "TestStudios",
    title: "Testing becomes a conversation",
    line: "Plain English in. The agent plans, drives a real browser or device, and returns a structured report — no scripts.",
    href: "/case-studies/test-studios",
    cta: "Read the study",
    coverFrame: "studios-pro",
    coverAlt: "TestStudios home — chat composer, project sidebar, Plan New Idea.",
    liveHref: "https://kadeep.ai",
    liveLabel: "kadeep.ai",
    role: "AI Product Manager — chat as authoring, Plan mode, live view, HITL, web + mobile in one desktop app.",
    problem:
      "Cypress and Appium still ask someone to maintain scripts. Web and mobile live in two toolchains. Non-technical testers bounce.",
    approach:
      "Chat-first agent on the same skills-first architecture: describe, approve a plan, watch it drive, remember the product.",
    decisionQuote: "Remove the scripting layer. Plan, then drive.",
    decisionWhy:
      "Low-code still thinks in locators. A fully unsupervised agent is a demo. Conversation with a plan you can reject is the shippable product.",
    impact: "English in → structured bug report. Web and mobile in one macOS app. Zero selectors.",
    metrics: [
      { value: "0", label: "Scripts to start" },
      { value: "2", label: "Platforms, one app" },
      { value: "Plan", label: "Before it clicks" },
    ],
    diagram: {
      label: "No-code agent loop",
      steps: [
        { title: "Describe", detail: "A test or a bug in English." },
        { title: "Plan", detail: "Approve before anything is driven." },
        { title: "Drive", detail: "Live browser or device. Remember." },
      ],
    },
  },
  {
    id: "accessibility-product",
    number: "03",
    product: "KaDeep Accessibility",
    title: "What do I fix first?",
    line: "A 0–100 score, legal lenses, and a P1/P2 plan — not another 300-row dump.",
    href: "/case-studies/kadeep-accessibility",
    cta: "Read the study",
    coverFrame: "a11y-plan",
    coverAlt: "KaDeep Accessibility sprint plan — P1/P2 fixes with hours and WCAG mapping.",
    liveHref: "https://accessibility.kadeep.ai/",
    liveLabel: "accessibility.kadeep.ai",
    role: "Product Manager / Accessibility Lead — scoring, WCAG / ADA / 508 / EN 301 549, packaging, URL → re-scan.",
    problem:
      "Teams run a scan, get a 300-row dump, and close the tab. Detection was never the bottleneck. The first move was.",
    approach:
      "Keep axe-core as the engine of record. Invent the score, matrices, and sprint plan. Never stamp “compliant.”",
    decisionQuote: "Never stamp “compliant.”",
    decisionWhy:
      "A single stamp is a legal claim we cannot stand behind. One scan, many lenses. AI writes patches. Humans review.",
    impact: "xactload.com: 89/100, 0 Critical / 0 Serious. 396 WCAG 2.2 checks shipped.",
    metrics: [
      { value: "89", label: "xactload.com" },
      { value: "0", label: "Critical / Serious" },
      { value: "396", label: "WCAG 2.2 checks" },
    ],
    diagram: {
      label: "Operating loop",
      steps: [
        { title: "Scan", detail: "URL in. Real-browser crawl." },
        { title: "Score", detail: "0–100, weighted by impact." },
        { title: "Plan", detail: "P1/P2 with hours. Then fix." },
      ],
    },
  },
];

export const marquee = [
  "KaDeep Studios",
  "TestStudios",
  "Accessibility",
  "Skills-first",
  "Plan, then drive",
  "WCAG 2.2",
  "IEEE published",
  "India · Canada · UAE",
];

export const experience: ExperienceOrg = {
  company: "KaDeep AI",
  employment: "Full-time · 9 mos",
  location: "Mumbai, Maharashtra, India",
  roles: [
    {
      title: "AI Product Manager",
      dates: "Aug 2026 – Present",
      tenure: "2 mos",
      workMode: "Hybrid",
      skills: ["Software Product Management", "Artificial Intelligence (AI)"],
      bullets: [
        "Own the product loop across Studios, TestStudios, and Accessibility — one roadmap with founder and engineering, not four parallel plans.",
        "Skills-first, LLM-second: playbooks recover first so model cost sits on true misses. Analytics adopted by 100+ QA and product seats; 25% faster release across three modules.",
      ],
    },
    {
      title: "Product Engineer",
      dates: "Jan 2026 – Aug 2026",
      tenure: "8 mos",
      workMode: "On-site",
      skills: ["Product Management"],
      bullets: [
        "Led end-to-end ownership of the company-wide accessibility module — defined implementation strategy, standards, and workflows, and drove cross-team execution from planning to production.",
      ],
    },
  ],
};

export const experienceProof = [
  { value: "4", label: "Surfaces, one roadmap", text: "Automation, healing, Accessibility, TestStudios — sequenced, not parallel." },
  { value: "100+", label: "Seats on analytics", text: "Pass-rate, heal, release-readiness. 80+ bugs caught before they blocked a ship." },
  { value: "9", label: "Months at KaDeep", text: "Engineer first, then PM. Same products. Different seat in the room." },
];

export const projects: Project[] = [
  {
    name: "CampusNext",
    kicker: "0-to-1 campus ops",
    theme: "campus",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    problem: "Event clashes lived in spreadsheets. Councils double-booked rooms.",
    action: "RICE to cut a 0-to-1 calendar MVP instead of a campus OS.",
    outcome: "Live with 3 student councils in under 6 weeks.",
    github: "https://github.com/jollyridhi",
  },
  {
    name: "SwitchStream",
    kicker: "Live rooms that retain",
    theme: "stream",
    stack: ["Next.js", "Prisma", "LiveKit"],
    problem: "Rooms were up. Retention leaked through unmoderated chat.",
    action: "North-star = creator retention. Shipped moderation plus follow/block.",
    outcome: "A stack creators could host — not a streaming demo.",
    github: "https://github.com/jollyridhi/Switch_Stream",
  },
];

export const research: ResearchPaper = {
  title: "Multi-Model Sentiment Analysis for E-commerce",
  officialTitle:
    "Enhancing Sentiment Analysis and Predictive Modeling of E-commerce Using Multi-Model Fusion of BERT, GNN, and LightGBM",
  venue: "IEEE Conference Publication",
  dates: "Mar–May 2025",
  badge: "IEEE Published",
  summary:
    "An ML pipeline that turns reviews into merchandising insight. Peer-reviewed. Accuracy is on that evaluation set — not a production SLA.",
  highlights: [
    "BERT + Graph Neural Nets + LightGBM, beating XGBoost and Random Forest on the same set.",
    "Designed as a pipeline a merchandising team can run, not a one-off notebook.",
  ],
  metrics: [
    { value: "94.6%", label: "Accuracy" },
    { value: "97.1%", label: "F1 score" },
  ],
  href: "https://doi.org/10.1109/inspect67393.2025.11350602",
};

export const skills: SkillGroup[] = [
  {
    category: "Product",
    items: ["Problem framing", "Roadmapping", "PRDs", "RICE", "Packaging & GTM"],
  },
  {
    category: "AI product",
    items: ["Skills-before-LLM", "Cost per miss", "NL authoring", "Agent loops", "Evals"],
  },
  {
    category: "Compliance",
    items: ["WCAG 2.2", "ADA / 508", "EN 301 549", "VPAT"],
  },
  {
    category: "In the repo",
    items: ["TypeScript", "Next.js", "Playwright", "Figma", "Jira"],
  },
];

export const education: EducationItem = {
  school: "Bennett University",
  degree: "B.Tech, Computer Science and Engineering",
  dates: "Sep 2022 – Jun 2026",
  details: ["Dean’s List", "CGPA 8.32 / 10"],
};

export const awards: Award[] = [
  {
    title: "Dean’s List",
    detail: "Bennett University — selective academic honour.",
  },
  {
    title: "HackEye’24 runner-up",
    detail: "National hackathon. Shipped and pitched in 24 hours.",
  },
  {
    title: "LeetCode 1679+",
    detail: "500+ problems. AIR 282, Coding Ninjas Premier League DSA 2023.",
  },
];

export const contact = {
  heading: "Let’s talk about the role",
  intro:
    "Hiring an AI or platform PM who has already shipped generation, healing, a no-code agent, and accessibility — write. India, Canada, UAE.",
  formNote: "Send a note. It lands in Ridhi’s inbox. Nothing is stored on this site.",
};

export function adjacentStudies(id: string) {
  const index = caseStudies.findIndex((study) => study.id === id);
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next = index >= 0 && index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;
  return {
    prev: prev?.href ? { href: prev.href, label: prev.product } : undefined,
    next: next?.href ? { href: next.href, label: next.product } : undefined,
  };
}

export const footer = {
  accessibility:
    "Built toward WCAG 2.1 AA: skip link, landmarks, keyboard, visible focus, labeled controls, reduced motion. No third-party audit of this site.",
};
