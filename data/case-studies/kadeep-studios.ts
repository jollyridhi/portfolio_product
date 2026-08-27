export const kadeepStudiosStudy = {
  slug: "kadeep-studios",
  seoTitle: "KaDeep Studios — Low-code automation that survives the real web",
  seoDescription:
    "Case study: how Ridhi Jolly took KaDeep Studios from problem framing to a dual-engine QA IDE — record or NL-generate, skills-first playback, two-stage self-healing, OTP, and audit-ready evidence.",
  eyebrow: "Case study 01 · KaDeep Technologies",
  title: "KaDeep Studios — Low-code automation that survives the real web",
  subtitle:
    "A dual-engine QA IDE where AI authors, skills play, and every run leaves evidence. BrowserStack-class authoring without making the model the test.",
  hero:
    "KaDeep Studios is a BrowserStack-class automation IDE: record a real user journey, generate one from natural language, or replay it on a schedule — with live step evidence, two-stage self-healing, and a built-in OTP inbox so login flows actually finish.",
  role:
    "AI Product Manager — I owned problem framing through production on named surfaces: the create / “what do you want to test today?” frame, AI generate with human-in-the-loop preview, skills-first playback, two-stage heal with an audit trail, the OTP inbox, build evidence, and v0.5 access / RBAC.",
  scope: "End-to-end product — authoring, execution, reporting, access",
  stack: [
    "React 19",
    "Vite",
    "Tailwind v4",
    "Zustand",
    "TanStack Query",
    "NestJS",
    "Playwright",
    "Socket.IO",
    "MongoDB",
    "Tauri 2 + Rust",
  ],
  live: {
    label: "studios.kadeep.ai",
    href: "https://studios.kadeep.ai",
  },
  loop: {
    situation:
      "Enterprise QA needed authoring that survives UI churn without turning every flake into an LLM invoice. v0.3 almost shipped the other way: hostname special-cases and model-first heal.",
    options: [
      {
        title: "Hostname special-case",
        dies: "Fixes today’s login drawer. The next site still breaks. I would have been selling a demo, not a product.",
      },
      {
        title: "LLM on every flake",
        dies: "Spend tracks UI volatility — the worst unit economics. Recovery becomes a black box no QA lead can explain to a release manager.",
      },
      {
        title: "Skills-first, LLM-second",
        dies: "Playbooks take the common path. The model is invoked only on a true miss, and the heal leaves evidence. This is what shipped.",
        chosen: true,
      },
    ],
    decided:
      "Deterministic playbooks attempt recovery first. Claude is the backup, not the first move. A heal the report cannot narrate is a product failure.",
    result:
      "Live at studios.kadeep.ai. Analytics adopted by 100+ internal QA and product users. Release turnaround dropped 25% across three core modules after we redesigned QA — I do not have the baseline week in writing. Booking.com 14-step replay ~66s. OTP is a product surface, not a ticket.",
    miss: "I treated OTP as an edge case until login demos kept dying. I also left the heal path under-explained — QA will not adopt a recovery they cannot narrate.",
    northStar: {
      label: "Trustworthy release signal",
      definition:
        "A lead can act on a scheduled suite without asking an SDET to watch the video. The buyer is a decision at the gate, not “more tests.”",
    },
    guardrail: {
      label: "Wrong-heal / false-green",
      definition:
        "A decoy click or silent rewrite that papers a real defect. Reporting heal-rate alone would be a fail. Wrong heal is worse than a red build.",
    },
    notInstrumented: [
      {
        label: "Playbook hit rate",
        why: "Stage-1 skill or fuzzy match ÷ locator failures. Would prove the LLM is not doing everyday work. Not on a dashboard yet.",
      },
      {
        label: "Cost per useful heal",
        why: "Token $ on stage-2 ÷ heals that passed post-verify and were kept. Cost per call is the wrong unit. Not instrumented.",
      },
      {
        label: "Weekly active authors",
        why: "100+ is seats and adopters, not weekly authors split by QA / PM / SDET. I will not dress the denominator.",
      },
    ],
    whoLoses:
      "The release manager, if a silent heal papers a defect. The SDET, if PMs flood the suite with NL tests nobody can maintain.",
  },
  desktop: "Desktop app (macOS + Windows)",
  problemLead:
    "Most teams sit in a bad middle. The actual job of QA is not “click the page once.” It is: capture a journey once, run it every night, survive UI churn, prove what happened, and let a PM author the happy path so the SDET can work on the hard cases.",
  problemCards: [
    {
      title: "Code-first is powerful and brittle",
      text: "Playwright and Cypress can do anything. A renamed button, a rebuilt login drawer, or a shadow-DOM date picker still burns a 45-second timeout and a night of CI. Only SDETs can author or repair it.",
    },
    {
      title: "AI computer-use is magical once",
      text: "Claude and agent browsers read a screenshot, improvise, and forget. No suite, no schedule, no baseline, no heal audit, no OTP. You cannot ship a release on “it worked in chat.”",
    },
    {
      title: "Incumbent low-code is web-only",
      text: "BrowserStack LCA and peers are cloud-taxed and still treat desktop apps and real auth loops as afterthoughts. Maintenance is the product. Nobody was treating it that way.",
    },
  ],
  insightQuote: "Repeatability beats improvisation.",
  insight:
    "An agent that figures out Booking.com from a screenshot is impressive. A test that finds the same “Osaka airports” control tomorrow — after the DOM moved — with a screenshot, a heal reason, and a pass/fail on a scheduled suite is what a QA org will pay for. So the product is not “AI that clicks.” It is an automation IDE with an agentic layer. The AI is a collaborator inside that loop, not a replacement for it.",
  layers: [
    { name: "Record / AI generate", job: "Get to a first executable test in minutes." },
    { name: "Edit", job: "Variables, modules, datasets, failure logic, visual checkpoints." },
    { name: "Play", job: "Skills first, then healing, then evidence." },
    { name: "Govern", job: "Versions, suites, environments, RBAC, shareable reports." },
  ],
  constraints: [
    {
      title: "Two engines, one UI",
      text: "Browser tests are Playwright in a Nest sidecar. Desktop tests are a Rust runtime (Accessibility API + CGEventTap + enigo) inside Tauri. The React app must not care which engine is live.",
    },
    {
      title: "Local-first, then SaaS",
      text: "The first shippable product is a .dmg / .exe that starts the sidecar, talks to Mongo, and records without a cloud account. Cloud, tunnels, and CI came after the core loop was real.",
    },
    {
      title: "Non-engineers author; engineers go deep",
      text: "A PM should paste a URL and describe a flow. An SDET should still get iframes, shadow DOM, locator strategy, heal metadata, and CI keys.",
    },
    {
      title: "Never hardcode a customer hostname",
      text: "Login sheets, OTP drawers, and MUI widgets have to be solved as situations, not as if hostname === shop-x.",
    },
    {
      title: "Access before AI",
      text: "Enterprise buyers will ask about tenancy before they ask about the model. Guessing a Mongo id must not return another project’s test.",
    },
  ],
  solutions: [
    {
      number: "01",
      title: "A conversational creation surface",
      text: "The first screen is not a table of test IDs. It is “Hey, what do you want to test today?” Paste a URL and record in a real Chromium window, or open Automate test with KaDeep AI: name, URL, preconditions, steps, expected outcome. An agent navigates, streams steps into a preview, and the human edits before save. That single frame sets the category: this is a studio, not a script runner.",
    },
    {
      number: "02",
      title: "A live recorder that feels like a product",
      text: "Recording is a persistent, headed browser plus a floating HUD: steps appear as they happen with thumbnails, pause / resume, validations, execute-till-here, drag-reorder after the fact. Desktop recording uses the same overlay language, gated on Accessibility + Input Monitoring. The hard UX problem: the user is interacting with their app, not ours. The overlay has to stay out of the way, stay readable, and still feel like KaDeep.",
    },
    {
      number: "03",
      title: "Dual-engine architecture, one store",
      text: "startRecording / startPlayback branch on recordingTarget / playerTarget. Socket.IO owns recorder:* / player:*. Tauri owns desktop:recorder:* / desktop:player:*. Shared types mean list, detail, and build views render both engines without a second product. The architectural bet: one mental model for “a test.” Web vs desktop is an implementation detail of the step, not a different app.",
    },
    {
      number: "04",
      title: "Skills-first playback — then AI",
      text: "v0.3 taught a painful lesson. A login drawer recorded as xpath-click → network-idle wait → skip Continue. The run looked “almost green” and wasted two minutes. The tempting fix was a hostname special-case. That does not help the next site. v0.4 inverted the stack: named skills run first (auth-sheet-fill, auth-vision, OTP, iframe/shadow, MUI, dialogs, page-ready). Fill by visible label. Do not xpath-click the input — that click closes the sheet. Read the field after fill. Empty password is a fail, not a green fill(). If a click is required, use a marked screenshot. Claude is the backup, not the first move.",
    },
    {
      number: "05",
      title: "Two-stage self-healing with an audit trail",
      text: "When a locator dies, stage 1 is fuzzy text / semantic match — fast, no LLM. Stage 2 is Claude/OpenRouter, only if stage 1 is below threshold. Verify the healed action actually changed the page. Persist original vs healed on the build result. Healing is scheduled before long Playwright retries so a drifted button does not burn the full step timeout. The report shows that a heal happened — which is what a regulated buyer wants, not a silent rewrite. Desktop has a parallel path: AX-descriptor healing from Rust, ingested through Nest.",
    },
    {
      number: "06",
      title: "The OTP loop that agents cannot finish",
      text: "Claude and Cursor stop at “check your email.” Studios ships a disposable inbox, routes mail into a shared inbox, and binds the code to a variable the next step can type. SMS OTP follows the same pattern. That is a product decision, not a model trick: auth is in-scope or the category is a toy.",
    },
    {
      number: "07",
      title: "Evidence, not vibes",
      text: "Every run is a Build: per-step pass/fail, screenshots, pixelmatch visual diffs, heal metadata, dataset-row tabs, AI “needs review” when confidence is low. Share links produce a read-only report. Slack / Jira / TestRail fire from an in-process event bus so a failed step can become a ticket without blocking the run. Suites snapshot environment + tests at trigger time. Editing a test after a nightly run cannot rewrite last night’s report.",
    },
    {
      number: "08",
      title: "Access as a first-class product (v0.5)",
      text: "By the time the automation loop was convincing, the next blocker was tenancy. Organization IAM vs project membership vs RBAC vs license vs entitlement ceiling. Resource-id routes resolve owning project, then admit — no more “guess the ObjectId.” Super Admin inspects access without joining the org. CI keys are hashed, scoped (run:test / run:suite), and never a JWT bypass of the project boundary. The Roles & Permissions grid is designed to tell the truth about what a template actually grants.",
    },
  ],
  decisionQuote:
    "Skills-first, LLM-second. Deterministic playbooks attempt recovery first. The model is invoked only on a true miss.",
  decisionWhy:
    "v0.3 almost shipped the other way — hostname special-cases and an LLM on every flake. That makes spend track UI volatility, and the recovery path becomes a black box no QA lead can explain to a release manager. Named skills make the common path cheap, inspectable, and repeatable. The LLM stays attached to genuine novelty. Same idea as a senior SDET: cheap playbooks before an expensive model.",
  screenshots: [
    {
      src: "/case-studies/kadeep/01-create.png",
      alt: "KaDeep Studios create surface: Start Recording plus Automate test with AI on the workspace dashboard.",
      caption: "Create surface — “what do you want to test today?” Record a URL or generate with KaDeep AI.",
      wide: true,
    },
    {
      src: "/case-studies/kadeep/02-ai-generate.png",
      alt: "KaDeep workspace with recent runs, OTP timeout evidence, and release-gate metrics.",
      caption: "Live workspace — pass/fail, OTP failures, and release-readiness metrics.",
    },
    {
      src: "/case-studies/kadeep/04-accessibility.png",
      alt: "Side-by-side product UI: rule-based matcher on the left and a natural-language AI step on the right.",
      caption: "Rules first, then plain English. The AI step shows parse → filter → act, not a black box.",
    },
    {
      src: "/case-studies/kadeep/03-self-heal.png",
      alt: "KaDeep marketing and product cards for AI authoring, self-heal rules-first, and managed cloud runs.",
      caption: "Agentic authoring and healing sit inside the IDE — rules first, AI only when needed.",
    },
    {
      src: "/case-studies/kadeep/05-schedule.png",
      alt: "Project locator rules marking hashed CSS as blocked and data-testid as preferred.",
      caption: "Locator truth as a project rule, inherited by the suite — not a per-test hotfix.",
    },
    {
      src: "/case-studies/kadeep/06-evidence.png",
      alt: "Jira and TestRail integrations plus failure cards that raise issues with build evidence attached.",
      caption: "Evidence leaves the run: tickets get the build link, screenshot, and video.",
    },
  ],
  principles: [
    "Author in the user’s world. Recording happens in their browser or app. Our chrome is a HUD, not a takeover.",
    "Preview before commit. AI never silently owns a test. Stream → edit → save.",
    "Show the machine’s work. Heal original vs new. AI thoughts + confidence. Needs-review is not a hidden fail.",
    "One object model. A step is a step. Browser, desktop, AI, and accessibility-scan are types, not products.",
    "Cheap intelligence first. Skills and fuzzy heal before an LLM invoice.",
    "Truthful empty and access states. If a feature is deferred, the UI should not pretend it ran.",
    "Keyboard for power users. / search, R record, P play, Esc stop.",
  ],
  hardProblems: [
    {
      title: "Real-time dual channel",
      text: "REST for CRUD, Socket.IO for record/play, Tauri events for desktop — all writing the same Zustand slices. If the socket is not bound to projectId before emit, recording silently dies. The “backend ready” footer is a trust signal, not decoration.",
    },
    {
      title: "Selector truth vs page chaos",
      text: "Stored selectors are un-pierced; iframe chains and shadow paths apply at playback. XPath cannot pierce shadow DOM. Skills exist because React Select, MUI, portal dialogs, and OTP sheets are not “a CSS selector.”",
    },
    {
      title: "Healing without lying",
      text: "A heal that clicks the wrong decoy is worse than a fail. Disambiguation + post-heal verification + audit fields are the product.",
    },
    {
      title: "Packaging a sidecar",
      text: "The first .dmg had to boot Nest + Playwright Chromium inside a Tauri shell so a tester could drag an app to /Applications instead of hoping two terminals and Mongo were correct. That is product design for a technical audience.",
    },
    {
      title: "RBAC that matches how companies work",
      text: "“Role” is four decisions stacked: IAM, project membership, license, entitlement. The UI has to explain that without a 2,000-word tooltip.",
    },
  ],
  outcomes: [
    { value: "< 3 min", label: "Time-to-first-test", detail: "Record or AI generate + edit, not days of Playwright scaffolding." },
    { value: "100+", label: "QA and product users", detail: "Analytics and build diagnostics adopted without a manual log pull." },
    { value: "25%", label: "Faster release turnaround", detail: "Across 3 core modules after we redesigned QA so regressions were caught before ship." },
    { value: "~66s", label: "14-step Booking.com replay", detail: "Real-web proof: flight search with live step results, not a demo script." },
    { value: "OTP", label: "Auth that agents cannot finish", detail: "Disposable inbox binds the code to the next step. Canva signup is the differentiator." },
    { value: "v0.5", label: "Access first", detail: "Resource-id routes resolve project, then admit. IDOR-style reads closed before tenants." },
  ],
  outcomeNarrative:
    "Internal scenario work — Booking.com flight search, Canva signup, Adobe Firefly — is the “we tested against the real web” proof. Booking is a 14-step flow replayed in about 66 seconds with live step results. Canva is the OTP differentiator. Firefly is visual-anchor recovery on a generative UI. Dual surface: one suite can include web journeys; desktop V1 covers native macOS apps the cloud tools skip. Every run produces a build a lead can open without asking an SDET to “just check the video.”",
  miss:
    "I treated OTP as an edge case until login demos kept dying. Agents cannot finish real auth. The inbox had to become a product surface, not a ticket. I also left the heal path under-explained in early builds — QA leads will not adopt a recovery they cannot narrate. Playbook names and evidence had to ship before we talked about the model.",
  next: [
    "Cloud runners + local tunnel so the same test leaves the laptop.",
    "Parallel suite blocks — the UI already admits the intent.",
    "In-recorder AI Steps: insert one step in English without regenerating the test.",
    "Windows desktop engine parity.",
    "Deeper CI for Studios runs: fail the build on a score drop once Accessibility can feed it — that hook is not shipped.",
    "Sharper failure copy — when a run dies, the explanation should be as readable as an agent’s.",
  ],
  diagram: {
    label: "Two-stage self-healing flow",
    steps: [
      { title: "UI change detected", detail: "A locator or assertion fails under churn." },
      { title: "Skills / fuzzy match", detail: "Named playbooks and semantic match run first." },
      { title: "LLM fallback", detail: "Claude only if stage 1 is below threshold — then verify and audit." },
    ],
  },
};
