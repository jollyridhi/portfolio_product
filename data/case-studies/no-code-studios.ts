export const noCodeStudiosStudy = {
  slug: "test-studios",
  seoTitle: "TestStudios — A chat-first QA agent for web and mobile",
  seoDescription:
    "Case study: how Ridhi Jolly extended KaDeep’s skills-first architecture into TestStudios — a no-code QA agent that plans, drives a real browser or device, and returns a structured report.",
  eyebrow: "Case study 02 · KaDeep Technologies",
  title: "TestStudios — Testing becomes a conversation",
  subtitle: "A chat-first QA agent that tests web and mobile apps for you.",
  hero:
    "Describe a test in plain English and hand it to an agent that actually runs it — a live Chromium or WebKit session for web, or a real emulated Android / iOS device for mobile. No scripts to write. No separate Appium stack. The tester has a conversation. The agent plans, executes, and reports back.",
  role:
    "AI Product Manager — I owned the no-code loop: chat as the authoring surface, Plan mode before execution, the live browser/device view, human-in-the-loop pause and takeover, and web + mobile inside one desktop product.",
  scope: "Chat-first agent — plan, drive, report — web and mobile",
  stack: [
    "Electron",
    "Chromium / WebKit",
    "Appetize.io",
    "Agent loop",
    "OTP inbox",
  ],
  live: {
    label: "kadeep.ai",
    href: "https://kadeep.ai",
  },
  desktop: "macOS desktop app (Electron)",
  facts: [
    { label: "Product", value: "TestStudios" },
    { label: "Maker", value: "KaDeep Technologies" },
    { label: "Category", value: "Developer tools / QA" },
    { label: "Platform", value: "macOS desktop (Electron)" },
    { label: "Version", value: "Shipped on skills-first architecture" },
    { label: "Website", value: "kadeep.ai" },
  ],
  loop: {
    situation:
      "The low-code IDE still assumes someone will record, edit, and maintain a suite. Non-technical testers, PMs, and support still bounce off a script-shaped product. Web and mobile still live in different tools. I needed a Studios that removes the scripting layer, not another nicer editor for it.",
    options: [
      {
        title: "Keep low-code as the only Studios",
        dies: "Record-and-heal is a real product. It is still a barrier. We would keep selling to SDETs and losing the people who file the bugs.",
      },
      {
        title: "Fully autonomous agent, no plan",
        dies: "An agent that clicks before a human sees the plan is a liability in QA. Wrong path, wrong env, burned credentials. Fast demo. Unshippable for a release gate.",
      },
      {
        title: "Chat-first, Plan mode, HITL",
        dies: "Conversation is the authoring surface. The agent proposes a plan, waits, then drives a real browser or device. Pause and take over stay first-class. This is what shipped in 0.1.0.",
        chosen: true,
      },
    ],
    decided:
      "Remove the scripting layer. Testing is a conversation with a plan you can approve. Web and mobile share one desktop app. Memory of the product is the category claim — not a one-off chat that forgets.",
    result:
      "Shipped on the skills-first stack: English in, structured bug report out. Chat, Plan mode, live view, OTP. Web and mobile in one macOS app. Weekly authors are not on a dashboard — I will not invent a seat count.",
    miss: "I almost treated this as a skin on the low-code IDE. It is a different ICP. If the first screen is still a test table, the no-code bet is already lost. I also cannot pretend cloud device emulation is a device lab — Appetize is how we ship mobile without hardware. That constraint has to stay visible.",
    northStar: {
      label: "Time-to-first-executed-test",
      definition:
        "A PM or QA can describe a flow and see the agent driving a real browser or device without writing a locator. If we lose to “just ask ChatGPT and click along,” we lose the wedge.",
    },
    guardrail: {
      label: "Unreviewed action / silent drive",
      definition:
        "The agent must not burn a production login or a paid environment because Plan mode was skipped. Pause-before-act is a product requirement, not a preference.",
    },
    notInstrumented: [
      {
        label: "Weekly active authors who never open a script",
        why: "That is the ICP proof. 0.1.0 does not have a published cohort. I will not invent one.",
      },
      {
        label: "Plan-accept rate vs takeover rate",
        why: "Would show whether Plan mode is load-bearing or theatre. Not on a dashboard yet.",
      },
      {
        label: "Web vs mobile run mix",
        why: "The category claim is both platforms in one tool. Split is not instrumented.",
      },
    ],
    whoLoses:
      "The release manager, if an unreviewed agent path papers a defect. The tester, if chat cannot finish login. The SDET, if no-code floods suites nobody can debug.",
  },
  problemLead:
    "Traditional QA automation — Selenium, Appium, Cypress — asks engineers to write and continually maintain scripts. Web and mobile usually live in separate tools with separate skill requirements. That is a high barrier for non-technical testers, it slows regression coverage, and it leaves teams correlating bugs, releases, and product changes by hand.",
  problemCards: [
    {
      title: "Scripts are the product people do not want",
      text: "The job is “did checkout still work after yesterday’s release?” not “keep the locator file green.” Maintenance is the tax. Most teams pay it in SDET time or they stop automating.",
    },
    {
      title: "Web and mobile are two careers",
      text: "A Cypress suite does not help the Android build. Appium does not help the marketing site. Coverage splits by who can hold which toolchain, not by what the user actually does.",
    },
    {
      title: "One-off agents forget",
      text: "A computer-use demo can click through a flow once. It does not remember how this product logs in, where OTP lands, or what broke last Tuesday. QA will not pay for a goldfish.",
    },
  ],
  insightQuote: "The agent that learns your product.",
  insight:
    "That is the product’s own tagline, and it is the category bet. Each run is not a disposable chat. The agent accumulates how the product behaves — projects, skills, context — so the next test starts from memory, not from a blank prompt. The AI is not a script generator you paste into Cypress. It is the tester.",
  layers: [
    { name: "Chat", job: "Describe a case, a bug, or a plan in English." },
    { name: "Plan", job: "See the steps. Approve before anything is driven." },
    { name: "Drive", job: "Live browser or emulated device, with pause and takeover." },
    { name: "Remember", job: "Project memory, skills, and context persist across turns." },
  ],
  constraints: [
    {
      title: "No scripting layer",
      text: "If the happy path still requires a locator strategy, we built the wrong product. Low-code Studios exists for SDETs. This one is for the person who can describe the bug.",
    },
    {
      title: "Plan before drive",
      text: "Autonomous is not unsupervised. Plan mode proposes steps. HITL can pause the agent, take over manually, or pause before every action.",
    },
    {
      title: "One app, two platforms",
      text: "Web is a live Chromium or WebKit session. Mobile is a real APK / AAB or iOS simulator build through cloud device emulation (Appetize), embedded in the desktop app. No physical device lab for v0.1.",
    },
    {
      title: "Auth is in scope",
      text: "Login walls and OTP are not “check your email.” The agent asks for credentials when needed and can retrieve OTP via a dedicated number or inbox. Otherwise the category is a toy.",
    },
    {
      title: "Local desktop, not a tab",
      text: "This ships as a macOS Electron app so the live view, device embed, and project tree stay one workspace — not a browser extension that dies when the tab closes.",
    },
  ],
  solutions: [
    {
      number: "01",
      title: "Chat is the create surface",
      text: "The home screen is not a grid of test IDs. It is KaDeep Studios Pro: describe a test, / for skills, @ for context. New chat, projects in the sidebar, automations when a flow should repeat. The first action is a sentence, not a recorder HUD.",
    },
    {
      number: "02",
      title: "Plan mode before the agent touches the product",
      text: "Switch to Plan mode and the agent proposes a step-by-step plan for approval. That is the difference between a demo that “just runs” and a QA tool a lead will allow near staging. Execution starts when a human says so.",
    },
    {
      number: "03",
      title: "Live view of what the agent is driving",
      text: "A tester should see the browser or the emulated device in real time — not a transcript of clicks after the fact. If the agent is lost, you see it. Then you pause and take over.",
    },
    {
      number: "04",
      title: "Human-in-the-loop as controls, not a footnote",
      text: "Pause the agent. Drive manually. Or pause before every action. Goals keep the agent working across turns until the job is done — but the human can still grab the wheel. That is how you put an agent next to a release, not instead of a tester.",
    },
    {
      number: "05",
      title: "Web and mobile in the same workspace",
      text: "Web: live Chromium / WebKit. Mobile: Android APK/AAB and iOS simulator builds via Appetize, embedded in the app. Projects in the sidebar can be a site, a desktop app, or a mobile build. One mental model: a project the agent learns.",
    },
    {
      number: "06",
      title: "Login and OTP as product, not a prompt",
      text: "The agent handles login walls, asks for credentials when needed, and retrieves OTP codes through a dedicated phone number or email inbox. Same lesson as low-code Studios: if auth is out of scope, the category is a toy. Here it has to work without a Playwright fixture.",
    },
  ],
  decisionQuote:
    "Remove the scripting layer. Conversation is the test. Plan, then drive — web and mobile in one app.",
  decisionWhy:
    "Low-code still asks someone to think in steps and locators. A fully unsupervised agent is a demo. The shippable product is chat-first authoring with a plan you can reject, a live view you can trust, and memory so the agent is testing this product, not a generic website. That is a different Studios from the recorder IDE — on purpose.",
  screenshots: [
    {
      frame: "studios-pro" as const,
      alt: "KaDeep Studios Pro home: chat composer, project sidebar, Plan New Idea, and the tagline The agent that learns your product.",
      caption:
        "Create surface — chat-first. Projects in the sidebar, Plan mode under the composer, no script table.",
    },
  ],
  principles: [
    "English before locators. If a PM cannot start, the product failed.",
    "Show the plan. Approval is cheaper than an unreviewed drive.",
    "Show the machine’s hands. Live browser or device, not a hidden session.",
    "Pause is a feature. Takeover is a feature. Autonomy without a steering wheel is a stunt.",
    "Remember the product. Projects, skills, and context persist. A goldfish agent is not QA.",
    "Auth is in scope. OTP and login walls are product surfaces.",
    "Say it is a beta. v0.1.0 does not get a fake conversion rate.",
  ],
  hardProblems: [
    {
      title: "Two ICPs, one brand",
      text: "Low-code Studios and no-code Studios can cannibalize each other if the first screen is ambiguous. Chat-first has to look like a studio for conversation, not a skin on the recorder.",
    },
    {
      title: "Plan mode vs speed",
      text: "Every extra confirmation hurts the demo. Skipping confirmation hurts trust. The product has to make Plan the default for anything that can change state, and still feel fast for a read-only pass.",
    },
    {
      title: "Mobile without a device lab",
      text: "Embedding Appetize is how we ship Android and iOS in 0.1.0. It is also a vendor and latency constraint. The UI has to make “this is an emulated device” obvious — not pretend we racked a lab.",
    },
    {
      title: "Memory that is useful, not creepy",
      text: "“Learns your product” means skills and project context, not silently storing credentials in a prompt log. Access and secrets stay a product decision, the same as v0.5 on the low-code side.",
    },
  ],
  outcomes: [
    { value: "0 scripts", label: "Authoring surface", detail: "Describe a case, a bug, or a plan. The agent writes the run." },
    { value: "Web + mobile", label: "One desktop app", detail: "Chromium/WebKit for web. Appetize-embedded Android and iOS for mobile." },
    { value: "Plan", label: "Before it clicks", detail: "Step-by-step approval. Pause, takeover, or pause-before-every-action." },
    { value: "OTP", label: "Auth in scope", detail: "Dedicated number or inbox so 2FA flows can finish in the conversation." },
    { value: "macOS", label: "Desktop ship", detail: "Electron app. Weekly authors not instrumented — no invented seats." },
    { value: "Memory", label: "Learns the product", detail: "Projects and skills persist. The next chat is not a goldfish." },
  ],
  outcomeNarrative:
    "This is the no-code bet next to the low-code IDE. Same company, different loop: conversation instead of record/generate, agent drive instead of Playwright playback, Appetize instead of a second mobile toolchain. It is early. The case study is the decision — not a traction slide.",
  miss:
    "I almost shipped this as “Studios, but chat.” That hides the ICP split. Non-technical testers do not want a recorder with a prompt box. They want to talk, see a plan, watch the device, and stop the agent. I also have to keep saying Appetize out loud — cloud emulation is how mobile ships in 0.1.0, not a lab we do not have.",
  next: [
    "Instrument plan-accept vs takeover so Plan mode is a measured habit, not a screenshot.",
    "Windows desktop parity — the beta is macOS.",
    "Tighter secret handling so “learns your product” never means credentials in the prompt log.",
    "A path from a good no-code run into the low-code suite for teams that need nightly replay with evidence.",
    "Honest empty states when Appetize or the live browser is down — do not pretend the agent ran.",
  ],
  diagram: {
    label: "No-code agent loop",
    steps: [
      { title: "Describe", detail: "A test, a bug, or a plan in English." },
      { title: "Plan", detail: "Steps for approval. HITL can reject or edit." },
      { title: "Drive + remember", detail: "Live browser or device. Pause, takeover, persist context." },
    ],
  },
};
