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

export type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  achievements: Achievement[];
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
    "Early-career AI and platform PM. I frame the problem, put a cost on the model, and ship a loop a team will run. Two live products. I want that seat at a larger scale.",
  seoTitle: "Ridhi Jolly — AI Product Manager",
  seoDescription:
    "Early-career AI and platform PM. Shipped two live products at KaDeep — Studios and Accessibility. Skills-first AI, honest compliance language. IEEE-published ML researcher.",
  url: "https://ridhijolly.com",
  locale: "en_IN",
  location: "Mumbai / New Delhi, India",
  availability: "Open to AI and platform PM roles",
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
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroStrip = [
  "KaDeep Studios",
  "KaDeep Accessibility",
  "Skills-first self-healing",
  "396 WCAG 2.2 checks",
  "NL test generation",
  "IEEE published",
  "Dual-engine automation",
  "P1 / P2 sprint plans",
];

export const heroCtas: SocialLink[] = [
  { label: "Case studies", href: "/#case-studies" },
  { label: "View Resume", href: links.resume },
  { label: "LinkedIn", href: links.linkedin, external: true },
  { label: "Email", href: `mailto:${links.email}` },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I sit between engineering, QA, and the person who has to defend the release. My job is to turn a messy ask into a product with a tradeoff I can defend — not a feature list, not a model demo.",
    "I am early-career and 0-to-1. I have shipped two live products at KaDeep. The decisions live in the case studies. This page is how I work, and the seat I want next: AI, platform, or developer-tools PM.",
    "IEEE-published on a merchandising ML pipeline if you want the research receipt. I do not lead with it.",
  ],
  principles: [
    { title: "Frame first", text: "Problem and ICP before the feature list." },
    { title: "Cost the model", text: "Playbooks run. The LLM spends budget only on true misses." },
    { title: "Language is a feature", text: "Evidence from this scan. Never a fake “compliant” stamp." },
    { title: "Own the miss", text: "If I was wrong, it is in the case study. Not buried." },
  ],
};

export type CaseStudy = {
  id: string;
  number: string;
  product: string;
  title: string;
  role: string;
  problem: string;
  approach: string;
  decisionQuote: string;
  decisionWhy: string;
  impact: string;
  metrics: { value: string; label: string }[];
  href?: string;
  cta?: string;
  cover: string;
  coverAlt: string;
  liveHref?: string;
  liveLabel?: string;
  diagram: {
    label: string;
    steps: { title: string; detail: string }[];
  };
};

export const caseStudiesIntro = {
  eyebrow: "Case studies",
  title: "How the product actually got decided.",
  description:
    "Two live products. Read the decision and the miss. Numbers on a card appear only here — not again on Experience.",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "kadeep-studios",
    number: "01",
    product: "KaDeep Studios",
    title: "Low-code automation that survives the real web",
    href: "/case-studies/kadeep-studios",
    cta: "Read the full case study",
    cover: "/case-studies/kadeep/01-create.png",
    coverAlt: "KaDeep Studios create surface — record a flow, pick an engine, and start a suite.",
    liveHref: "https://studios.kadeep.ai",
    liveLabel: "studios.kadeep.ai",
    role:
      "AI Product Manager — owned the create surface, AI generate, skills-first playback, two-stage heal + evidence, OTP inbox, and v0.5 access / RBAC.",
    problem:
      "Enterprise QA teams needed a low-code way to author, run, and maintain automated tests across both web and native desktop apps. The tools they already had failed in the same two places: locators died the moment a UI shifted, and teams that leaned fully on an LLM paid for every flake in API spend. Maintenance was the product. Nobody was treating it that way.",
    approach:
      "I sequenced automation first (Playwright web + native macOS), then AI self-healing, then accessibility as its own product — so we did not invent the whole platform in one sprint. One roadmap. Founder and engineering in the same review, not three plans that never meet.",
    decisionQuote:
      "Skills-first, LLM-second. Deterministic playbooks attempt recovery first. The model is invoked only on a true miss.",
    decisionWhy:
      "This is a cost and reliability decision, not a model-preference decision. If every flake calls an LLM, spend tracks UI volatility — the worst possible unit economics — and the recovery path becomes a black box no QA lead can explain to a release manager. Playbooks make the common path cheap, inspectable, and repeatable. The LLM stays a last resort, so cost stays attached to genuine novelty instead of everyday churn.",
    impact:
      "Analytics and build diagnostics are in production with 100+ internal QA and product users. Release turnaround dropped 25% across three core modules after we redesigned QA to catch regressions before ship.",
    metrics: [
      { value: "100+", label: "Internal QA + product users" },
      { value: "25%", label: "Faster release, 3 modules" },
      { value: "Live", label: "studios.kadeep.ai" },
      { value: "OTP", label: "Auth as a product surface" },
    ],
    diagram: {
      label: "Two-stage self-healing flow",
      steps: [
        {
          title: "UI change detected",
          detail: "A locator or assertion fails under churn.",
        },
        {
          title: "Skills-based playbook",
          detail: "Deterministic recovery runs first.",
        },
        {
          title: "LLM fallback",
          detail: "The model is called only if the playbook misses.",
        },
      ],
    },
  },
  {
    id: "accessibility-product",
    number: "02",
    product: "KaDeep Accessibility",
    title: "What do I fix first?",
    href: "/case-studies/kadeep-accessibility",
    cta: "Read the full case study",
    cover: "/case-studies/accessibility/01-hero.png",
    coverAlt: "KaDeep Accessibility hero with a 49/100 health score and 396 WCAG 2.2 checks.",
    liveHref: "https://accessibility.kadeep.ai/",
    liveLabel: "accessibility.kadeep.ai",
    role:
      "Product Manager / Accessibility Lead — owned problem definition, scoring and compliance model, packaging, and the URL → re-scan workflow.",
    problem:
      "Most sites fail basic accessibility — not because teams do not care. They run a scan, get a 300-row dump, and have no first move. So they close the tab. Detection was never the bottleneck. The missing product was: what do I fix first?",
    approach:
      "I scoped a wedge, not an AI auditor that replaces consultants: keep axe-core as the engine of record, invent the product layer — 0–100 score, ADA / 508 / EAA matrices, P1/P2 plan, Fix with AI — and stay honest that automation is not a full expert audit.",
    decisionQuote:
      "Keep axe-core as the engine of record. Invent the translation layer. Never stamp “compliant.”",
    decisionWhy:
      "A single compliant/not-compliant stamp is a legal claim we cannot stand behind. One scan, many lenses. AI writes patches; humans review. Free answers “am I at risk?” Paid answers “fix it and prove it.”",
    impact:
      "xactload.com: 89/100 (Good), 0 Critical / 0 Serious, one heading-order fix (~10 min), and a 14-page PDF in one click. Same product on kadeep.ai: 49/100, 149 violations, a two-sprint score plan. Early — I will not invent a conversion rate.",
    metrics: [
      { value: "89", label: "xactload.com health score" },
      { value: "0", label: "Critical / Serious there" },
      { value: "396", label: "WCAG 2.2 checks shipped" },
      { value: "3", label: "Legal lenses, one crawl" },
    ],
    diagram: {
      label: "Accessibility operating loop",
      steps: [
        { title: "Scan", detail: "URL in. Real-browser crawl." },
        { title: "Score", detail: "0–100, weighted by impact." },
        { title: "Plan", detail: "P1/P2 with hours and WCAG." },
        { title: "Fix", detail: "AI patches. Then re-scan." },
      ],
    },
  },
];

export const experience: Role[] = [
  {
    company: "KaDeep Technologies",
    title: "AI Product Manager",
    dates: "Feb 2026 – Present",
    location: "Mumbai (On-site)",
    summary:
      "Early-career 0-to-1. I sat with the founder and engineering and sequenced two products on one timeline. The decisions are in the case studies. This is how I operated.",
    achievements: [
      {
        text: "Sequenced the work: dual-engine automation first, then self-healing, then Accessibility as its own product — so we did not try to invent a platform in one sprint.",
      },
      {
        text: "Held one roadmap and one review with founder + engineering. Named surfaces had an owner. I did not run three parallel plans.",
      },
      {
        text: "Sat in QA and product reviews on the analytics we shipped — pass-rate, heal, release readiness — so a number on a dashboard had a person attached to it.",
      },
      {
        text: "Wrote the product language for compliance: evidence from this scan, not a certificate. Packaging: Free answers risk; Pro/Team sell the plan and the proof.",
      },
    ],
  },
];

export const experienceHighlights = [
  { value: "2", label: "Live products I owned" },
  { value: "0-to-1", label: "Early-career, founder + eng" },
  { value: "IEEE", label: "Peer-reviewed paper" },
  { value: "IN", label: "Mumbai · open to AI / platform PM" },
];

export const projects: Project[] = [
  {
    name: "CampusNext",
    kicker: "0-to-1 campus ops",
    theme: "campus",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    problem:
      "Campus event clashes lived in spreadsheets. Student councils were double-booking rooms and losing attendance to last-minute conflicts.",
    action:
      "Framed clash resolution as the core problem, used RICE to cut scope, and shipped a 0-to-1 live calendar MVP instead of a full campus OS.",
    outcome:
      "Live with 3 student councils in under 6 weeks. One shared calendar replaced spreadsheet scheduling.",
  },
  {
    name: "SwitchStream",
    kicker: "Live rooms that retain",
    theme: "stream",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind", "MySQL", "LiveKit"],
    problem:
      "Creator live rooms were technically up, but retention leaked through unmoderated chat and no social graph — viewers came once and did not come back.",
    action:
      "Set creator retention as the north-star. Shipped chat moderation plus follow/block so rooms felt safe enough to return to.",
    outcome:
      "Stable live stack under real concurrent rooms — a product creators could actually host, not just a streaming demo.",
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
    "Conference paper: an ML pipeline that turns e-commerce reviews into merchandising insights. Peer-reviewed by IEEE. Accuracy is on that evaluation set — not a production SLA.",
  highlights: [
    "BERT embeddings for contextual language, Graph Neural Networks for review structure, LightGBM for scalable classification.",
    "Beat XGBoost and Random Forest baselines on the same evaluation set.",
    "Designed as a modular pipeline a merchandising team can run, not a one-off notebook.",
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
    items: [
      "Problem framing",
      "Roadmapping",
      "PRDs",
      "RICE / scope cuts",
      "Multi-persona IA",
      "Packaging & GTM",
    ],
  },
  {
    category: "AI product",
    items: [
      "Skills-before-LLM",
      "Cost per miss",
      "Human-in-the-loop",
      "NL authoring",
      "Self-healing with evidence",
    ],
  },
  {
    category: "Fluency — I can sit in the repo",
    items: ["TypeScript", "React / Next.js", "Playwright", "Figma", "Jira"],
  },
];

export const education: EducationItem = {
  school: "Bennett University",
  degree: "B.Tech, Computer Science and Engineering",
  dates: "Sep 2022 – Jun 2026",
  details: [
    "Dean's List Awardee",
    "CGPA 8.32 / 10",
    "HackEye'24 runner-up — shipped and pitched a product in 24 hours.",
  ],
};

export const awards: Award[] = [];

export const contact = {
  heading: "Let's talk about the role",
  intro:
    "If you are hiring an AI or platform PM who has already shipped generation, healing, and accessibility as products — write. I read every note.",
  formNote:
    "Send opens a draft to me. If Mail does not launch, use Gmail or copy the note. Nothing is stored on this site.",
};

export const footer = {
  accessibility:
    "Built toward WCAG 2.1 AA: skip link, landmarks, keyboard navigation, visible focus, labeled controls, and reduced-motion support. I have not published a third-party audit of this site.",
};
