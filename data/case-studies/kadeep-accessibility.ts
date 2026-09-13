export const kadeepAccessibilityStudy = {
  slug: "kadeep-accessibility",
  seoTitle: "KaDeep Accessibility — What do I fix first?",
  seoDescription:
    "Case study: how Ridhi Jolly shipped KaDeep Accessibility — 396 WCAG 2.2 checks, a 0–100 score, ADA / 508 / EN 301 549 matrices, a sprint plan, and a real result on xactload.com (89/100, 0 Critical / 0 Serious).",
  eyebrow: "Case study 03 · KaDeep · B2B SaaS · Developer tools · Compliance",
  title: "KaDeep Accessibility — What do I fix first?",
  subtitle:
    "Teams do not need another 300-row dump. They need three things, in order, with time estimates.",
  hero:
    "I watched the same broken workflow over and over: run a scan, get a CSV, feel overwhelmed, do nothing. The tools were not the problem. Nobody was answering the only question that unblocks a team — what do I fix first? I built the product that does.",
  role:
    "Product Manager / Accessibility Lead — I owned problem definition, ICP and jobs-to-be-done, product narrative, MVP scope, scoring and prioritization logic, compliance framing (WCAG / ADA / Section 508 / EN 301 549), packaging, and go-to-market with engineering.",
  scope: "Problem framing through packaging — scan, score, plan, AI fix, re-scan",
  team: "Founder/CEO, Head of Engineering, Accessibility Lead",
  live: {
    label: "accessibility.kadeep.ai",
    href: "https://accessibility.kadeep.ai/",
  },
  loop: {
    situation:
      "Teams run a scan, get a 300-row dump, and close the tab. Legal and procurement want evidence, not intentions. Detection was not the gap. The first move was.",
    options: [
      {
        title: "Stamp compliant / not compliant",
        dies: "A legal claim we cannot stand behind. Buyers asked for it. I almost shipped it. That would have been the product-killing decision.",
      },
      {
        title: "Another scanner / raw axe dump",
        dies: "Same freeze. Fast signal, no site picture, no legal lens, no backlog. We would be a bookmark, not a habit.",
      },
      {
        title: "Translation layer — never stamp",
        dies: "Keep axe-core as the engine of record. Invent the score, the matrices, the P1/P2 plan, and the PDF. This is what shipped.",
        chosen: true,
      },
    ],
    decided:
      "axe-core for trust. KaDeep Extended for WCAG 2.2. Product language is this scan’s pass/fail — not a certificate. AI writes patches. Humans review.",
    result:
      "xactload.com: 89/100 Good, 0 Critical / 0 Serious, one heading-order fix (~10 min), 14-page PDF. kadeep.ai: 49/100, 149 violations, 9 pages, 55 components — and a two-sprint score plan, labeled a projection.",
    miss: "I almost shipped the stamp. I also let “49 → 100 in two sprints” sound like a promise. It is a score plan, not a certificate.",
    northStar: {
      label: "Time-to-first-actionable-plan",
      definition:
        "URL in → a P1 list with hours and projected score, under two minutes. If we lose to Lighthouse on time-to-insight, we lose the wedge.",
    },
    guardrail: {
      label: "Overclaim",
      definition:
        "“Compliant” vs “this scan’s pass/fail against WCAG 2.1 AA.” Same violations. Completely different legal exposure.",
    },
    notInstrumented: [
      {
        label: "Free → Pro conversion",
        why: "Early-stage. I will not invent a rate. The packaging hypothesis is: free answers risk, paid sells the plan and the PDF.",
      },
      {
        label: "Re-scan within 14 days",
        why: "Would prove the loop is a habit. Not measured on a published cohort yet.",
      },
      {
        label: "Hours saved vs consultant",
        why: "xactload.com is a score snapshot, not a before/after time study. Next measurement, not a claim.",
      },
    ],
    whoLoses:
      "Legal and procurement, if we imply a certificate. The engineer, if the plan is still a dump. The user who needs the site, if the team closes the tab again.",
  },
  thesis:
    "Accessibility should be as operational as performance or security — scan, understand, prioritize, fix, re-scan — in an afternoon, not a quarter.",
  problemLead:
    "Most sites fail basic accessibility — not because developers do not care. They open an audit, see hundreds of violations, and close the tab. The backlog grows. The people who need an accessible web still cannot use it. ADA Title II/III, Section 508, and the European Accessibility Act make that freeze expensive: legal and procurement want evidence, not intentions. The market still forces a bad choice.",
  marketOptions: [
    {
      title: "Manual consultant audit",
      gets: "Credibility, VPAT-ready narrative",
      loses: "$5k–$15k, 4–8 weeks, stale the day you ship",
    },
    {
      title: "Raw axe / Lighthouse",
      gets: "Fast technical signal",
      loses: "No site picture, no legal mapping, no backlog",
    },
    {
      title: "Spreadsheet + hero engineer",
      gets: "Temporary progress",
      loses: "Does not scale. Knowledge walks out.",
    },
  ],
  jobs: [
    { question: "Am I at risk?", answer: "One number a VP can understand." },
    { question: "Where is the risk?", answer: "Which pages, which criteria, which law." },
    { question: "What do we do this sprint?", answer: "Ranked work with effort and score impact." },
    { question: "Did we actually get better?", answer: "Re-scan and prove the delta." },
  ],
  insightQuote: "Teams do not need more data. They need three things, in order, with time estimates.",
  insight:
    "axe-core already detects well. The job is turning rule IDs into a first move: which selector, which criterion, how long, what the score does. If the product stopped at a violation list, we would be another scanner. The moat is answering “what do I fix first?” — then proving the delta.",
  personas: [
    {
      persona: "Front-end engineer",
      job: "Fix the right HTML/CSS this week",
      fail: "axe messages without a patch or selector context",
    },
    {
      persona: "QA",
      job: "Regression-test accessibility like any other quality gate",
      fail: "Manual checklists that rot",
    },
    {
      persona: "Product / Scrum lead",
      job: "Sequence work by impact, not alphabet",
      fail: "200-row CSV with no score projection",
    },
    {
      persona: "Legal / compliance",
      job: "Show ADA, 508, or EAA posture for procurement",
      fail: "One WCAG grid that does not match the framework they were asked for",
    },
    {
      persona: "Agency / consultant",
      job: "Hand a client a roadmap, not a dump",
      fail: "Audits that die in email",
    },
  ],
  nonNegotiables: [
    "Keep axe-core as the engine of record (trust), and extend it for WCAG 2.2 rather than inventing a new checker.",
    "Invent the product layer — score, site map, framework matrices, P1/P2 plan, Fix with AI.",
    "Be honest that automation is not a full expert audit. High-stakes releases still need human review of complex UX. Overclaiming would kill enterprise trust.",
  ],
  goals: [
    {
      layer: "Product goal",
      text: "A public URL in → health score, issue inventory, conformance view, and sprint-ready plan out, in under two minutes.",
    },
    {
      layer: "Business goal",
      text: "A free “aha” scan that proves value, then Pro/Team for depth, AI fixes, PDF proof, and JSON export.",
    },
  ],
  successMetrics: [
    {
      metric: "Time to first insight",
      why: "If this is slower than Lighthouse, we lose",
      target: "< 2 minutes to a scored report",
    },
    {
      metric: "Comprehension",
      why: "A PM can explain risk without an a11y specialist",
      target: "One 0–100 score + severity split",
    },
    {
      metric: "Actionability",
      why: "Engineering picks work from the product",
      target: "P1/P2 plan with WCAG refs + hours",
    },
    {
      metric: "Trust",
      why: "Legal / procurement will take the artifact seriously",
      target: "Criterion-level pass/fail + ADA / 508 / EAA views",
    },
    {
      metric: "Retention loop",
      why: "They come back after they fix",
      target: "Re-scan + score history",
    },
  ],
  measuringNext:
    "xactload.com is the first external score I will put on a page. Next I am measuring first-scan completion, Free → Pro, % of runs that open Fix Plan / Fix with AI, and re-scan within 14 days. No invented conversion rate.",
  wedge: {
    wedge: "Public-site automated audit for teams on modern front-end stacks.",
    expansion: "Authenticated flows, fail-the-build on score drop, VPAT, team workflows.",
    notNow: "Full manual audit marketplace, design-file linting, native apps.",
  },
  tradeoffs: [
    {
      title: "JS-rendered crawl over static HTML",
      text: "SPAs are the default customer. Crawls run on Apify Cloud like a real browser, even though it costs more than a cheap HTTP fetch.",
    },
    {
      title: "Site picture over single-page score",
      text: "A homepage of 90 with a broken /login is false comfort. Free: up to 9 pages, depth 2. Pro/Team raise the cap.",
    },
    {
      title: "Weighted score, not raw violation count",
      text: "40 contrast issues on a blog template is not one unlabeled submit on checkout. Critical/Serious move the number more than Moderate/Minor.",
    },
    {
      title: "One scan, many legal lenses",
      text: "Buyers ask ADA, Section 508, or EAA — not “WCAG” in the abstract. Same axe output, different criterion maps. No re-crawl per framework.",
    },
    {
      title: "AI as a fixer, not an oracle",
      text: "Models generate patches with WCAG context. The developer reviews the diff. Legal risk and hallucination stay in the right place.",
    },
  ],
  packaging: [
    {
      tier: "Free",
      price: "Prove risk",
      detail: "1 site, 9 pages, 1 scan/month, score + issue list + WCAG 2.1 mapping",
    },
    {
      tier: "Pro",
      price: "$49/mo",
      detail: "5 sites, 50 pages, unlimited scans, WCAG 2.2 + fix plan, Fix with AI, JSON + API",
    },
    {
      tier: "Team",
      price: "$149/mo",
      detail: "Unlimited sites, 200 pages, PDF reports, custom rules, collaboration",
    },
  ],
  journey: "Paste URL → crawl → 396 checks → AI analysis + score → priority plan → Fix with AI → re-scan.",
  shipped: [
    {
      number: "01",
      title: "Scanner and health score",
      text: "axe-core (90+ rules per page) plus KaDeep Extended — 396 WCAG 2.2 checks total. Every violation carries selector, snippet, impact, and a mapped success criterion. Health score 0–100: green ≥80, amber 60–79, red <60. JSON export so teams can pipe results into the tools they already run.",
    },
    {
      number: "02",
      title: "Compliance, not just issues",
      text: "WCAG 2.1 AA matrix as the default “are we AA?” view. ADA view (WCAG 2.1 AA, DOJ practice). Section 508 view (WCAG 2.0 AA). EAA / EN 301 549 view. Level A / AA / AAA counts plus WCAG 2.2 extended findings. In-product limitation: automation catches the majority of technical failures; it does not replace expert review of complex interaction design. That sentence is a product decision, not a disclaimer afterthought.",
    },
    {
      number: "03",
      title: "Structure map",
      text: "Multi-page crawl becomes a map: URL, depth, page score, issue count. Product and content can see /blog is fine and /login is the hotspot. Fix with AI starts from a node, not a global dump.",
    },
    {
      number: "04",
      title: "Priority fix plan",
      text: "P1 is Critical + Serious — unblock real users and the legal baseline. P2 is Moderate — finish the score climb. Minor is batched, not mixed into the same sprint. Each task carries WCAG ID, effort hours, and a projected score after the sprint. Live-shaped example on kadeep.ai: 49 → 64 in Sprint 1 (critical + serious), 64 → 100 in Sprint 2. Those are score projections for planning — not a certificate, and not “full compliance.”",
    },
    {
      number: "05",
      title: "Fix with AI",
      text: "For a selected violation the model returns corrected HTML and a short note. Copy-to-IDE, not auto-commit. Pro/Team only — paid depth, not the free teaser.",
    },
    {
      number: "06",
      title: "Re-scan as the operating rhythm",
      text: "Baseline → ship P1 → re-scan → ship P2 → monitor deploys. Score history is the artifact release managers and compliance officers can keep. A fail-the-build hook is on the roadmap — not a shipped gate.",
    },
  ],
  decisionQuote:
    "Keep axe-core as the engine of record. Invent the translation layer. Never stamp “compliant.”",
  decisionWhy:
    "The tempting product is an AI auditor that replaces consultants. That is a long, credibility-destroying road. Detection was already solved. I scoped a wedge: public-site automated audit, score and matrices a VP and a lawyer can both read, P1/P2 a PM can sequence, patches an engineer can review. “Compliant” vs “this scan’s pass/fail against WCAG 2.1 AA” is the difference between a useful tool and a liability.",
  howIWorked: [
    {
      title: "Discovery",
      text: "I mapped buyer language (ADA, VPAT, EAA, “are we AA?”) to what an automated engine can actually assert. A single compliant/not-compliant stamp would be a legal claim we cannot stand behind. Product language is conformance evidence from this scan, not a certificate.",
    },
    {
      title: "Scoring",
      text: "Weighted pass/fail so the number is stable and explainable. A score that jumps 30 points because we changed a formula is worse than a slightly conservative score.",
    },
    {
      title: "Information architecture",
      text: "One run, tabbed: Summary, Issues, Structure, Priority, Resources, Logs. Different personas land in different tabs. That avoided three separate products.",
    },
    {
      title: "Trust UX",
      text: "Scan progress, failure states, URL normalization, deep-scan as an explicit choice. A broken first scan is a lost customer. Accessibility tools are judged on whether they feel rigorous.",
    },
    {
      title: "GTM as product",
      text: "Marketing pages are part of the system — Scanner, Compliance, Structure Map, Fix Plan, Fix with AI, Re-scan — so a buyer enters from their job. Pricing is sequenced to the same loop. Free answers “am I at risk?” Paid answers “fix it and prove it.”",
    },
  ],
  proof: {
    title: "Real result — xactload.com",
    score: "89/100",
    grade: "Good",
    facts: [
      { value: "0", label: "Critical / Serious" },
      { value: "1", label: "Fix left — heading order, ~10 min" },
      { value: "14", label: "Page PDF audit, one click" },
    ],
    note: "A live site, not a demo. Same scan a buyer can attach to a legal or procurement response.",
  },
  selfScan: {
    title: "Ran it on kadeep.ai",
    score: "49/100",
    facts: [
      { value: "149", label: "Violations across 9 pages" },
      { value: "55", label: "Components — fix one selector, fix it everywhere" },
      { value: "290", label: "Checks passing" },
    ],
    plan: "Sprint 1: 49 → 64 (critical + serious). Sprint 2: 64 → 100. Score plan — not a legal certificate.",
  },
  outcomes: [
    { value: "89", label: "xactload.com score", detail: "Good. 0 Critical / 0 Serious. One heading-order fix left." },
    { value: "49", label: "kadeep.ai starting score", detail: "149 violations, 9 pages, 55 components — and a two-sprint plan." },
    { value: "396", label: "WCAG 2.2 checks", detail: "axe-core plus KaDeep Extended — engine of record, not a new checker." },
    { value: "3", label: "Legal lenses", detail: "WCAG 2.1 AA, ADA, Section 508, EAA — one crawl, four matrices." },
    { value: "P1 / P2", label: "Sprint plan", detail: "Impact, hours, projected score — not a 200-row CSV." },
    { value: "14-pg", label: "PDF audit", detail: "The artifact you attach to a legal or procurement response." },
  ],
  outcomeNarrative:
    "What exists because of this work: a full accessibility surface — public marketing, authenticated workspace, run history, detailed run report — and a pipeline from URL to Apify crawl to axe-core + extended checks to score, matrices, plan, AI fix, and PDF. The first external proof is xactload.com. Qualitative: accessibility moved from a specialist report that arrives too late, to a workflow a PM can start, an engineer can execute, and a compliance stakeholder can read — from the same scan.",
  screenshots: [
    {
      frame: "a11y-score" as const,
      alt: "KaDeep Accessibility hero with a 49/100 health score, issue list, and 396 WCAG 2.2 checks.",
      caption: "URL in. One number a VP can read: 49/100, 149 issues, 9 pages, 396 checks.",
    },
    {
      frame: "a11y-suite" as const,
      alt: "Six-product suite: scanner, compliance audit, structure map, fix plan, Fix with AI, re-scan.",
      caption: "One run, many jobs — scanner, compliance, map, plan, AI fix, re-scan.",
    },
    {
      frame: "a11y-scanner" as const,
      alt: "Scanner narrative: 396 WCAG 2.2 checks via axe-core on Apify Cloud, with a 49/100 health score broken down by severity.",
      caption: "JS-rendered crawl on Apify. Weighted score, not a raw violation count.",
    },
    {
      frame: "a11y-plan" as const,
      alt: "Sprint-ready fix plan showing 49 to 64 after P1 and 100 after P2, with WCAG-referenced tasks.",
      caption: "P1/P2 with hours, WCAG IDs, and projected score. Planning estimates, not contracts.",
    },
    {
      frame: "a11y-map" as const,
      alt: "Component-level issue map ranking DOM selectors by violation count, with 55 components identified.",
      caption: "Issues mapped to selectors, not just pages — so an engineer knows what to open.",
    },
    {
      frame: "a11y-table" as const,
      alt: "Extended WCAG 2.2 findings table plus testing tools: axe-core, KaDeep Extended, and Apify Cloud.",
      caption: "Criterion-level evidence, plus an honest stack: axe-core for trust, KaDeep Extended for 2.2.",
    },
  ],
  miss:
    "I almost shipped a single “compliant / not compliant” stamp because buyers asked for it. That would have been a legal claim we cannot stand behind. The product language is this scan’s pass/fail — and I should have written that sentence into the first mock, not after legal review. I also let “49 → 100 in two sprints” sound like a promise. It is a score projection. If I do not say that out loud, procurement hears a certificate.",
  risks: [
    "Automated coverage is incomplete by definition — cognitive load, complex ARIA, visual design judgment.",
    "Score can be gamed if teams only fix what the crawler sees.",
    "AI patches can be wrong. Review is mandatory.",
    "Legal frameworks share WCAG but are not identical. A matrix is evidence, not a lawyer.",
  ],
  next: [
    "Side-by-side scan diff (Team roadmap).",
    "Authenticated / logged-in crawl for app shells.",
    "Fail-the-build on score drop or new Critical — not shipped yet.",
    "A before/after hours-saved study on top of the xactload.com score snapshot.",
    "Manual-review checklist on top of automation for AAA / high-risk flows.",
  ],
  learned: [
    "Teams do not need more data. They need “3 things, in order, with time estimates.” That is the product.",
    "Adding ADA + EAA matrices turned accessibility from a design conversation into a legal one. Same violations — completely different urgency in the room.",
    "49/100 is discouraging. “49 → 100 in two sprints” is a plan. The plan has to stay labeled as a score projection, or it becomes a liability.",
    "In compliance products, language is a feature. “Compliant” vs “this scan’s pass/fail against WCAG 2.1 AA” is the difference between a useful tool and a lawsuit.",
    "AI should shrink time-to-fix, not replace judgment. Free answers one question only: how bad is it, and where?",
  ],
  closer:
    "If you have ever closed an accessibility audit tab because you did not know where to start — that is who I built this for. We crawl with a real browser, run 396 WCAG 2.2 checks, and turn that into a 0–100 score, ADA / 508 / EAA matrices, a P1/P2 sprint plan, and a PDF. I owned the problem framing, the scoring and compliance model, packaging, and the workflow from URL to re-scan. The bet: if a PM can start it and an engineer can finish the first three fixes in an afternoon, accessibility becomes a habit instead of a project.",
  diagram: {
    label: "The operating loop",
    steps: [
      { title: "Scan", detail: "Real-browser crawl. 396 WCAG 2.2 checks." },
      { title: "Score", detail: "0–100, weighted. Site map, not one page." },
      { title: "Plan", detail: "P1/P2 with hours and projected score." },
      { title: "Fix + re-scan", detail: "AI patch, human review, prove the delta." },
    ],
  },
};
