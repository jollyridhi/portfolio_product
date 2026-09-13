import type { ProductFrameId } from "@/data/product-frames";

const PROJECTS = [
  "Rooter",
  "Desktop",
  "windowsDesktop",
  "windows desktop",
  "mobile app",
  "Bennett",
  "test",
  "Mobile",
  "Shadcn-Fintech",
  "Maps",
];

export function ProductFrame({ id, compact }: { id: ProductFrameId; compact?: boolean }) {
  switch (id) {
    case "studios-pro":
      return <StudiosProFrame compact={compact} />;
    case "studios-create":
      return <StudiosCreateFrame compact={compact} />;
    case "studios-workspace":
      return <StudiosWorkspaceFrame compact={compact} />;
    case "studios-rules":
      return <StudiosRulesFrame compact={compact} />;
    case "studios-heal":
      return <StudiosHealFrame compact={compact} />;
    case "studios-locators":
      return <StudiosLocatorsFrame compact={compact} />;
    case "studios-evidence":
      return <StudiosEvidenceFrame compact={compact} />;
    case "a11y-score":
      return <A11yScoreFrame compact={compact} />;
    case "a11y-suite":
      return <A11ySuiteFrame compact={compact} />;
    case "a11y-scanner":
      return <A11yScannerFrame compact={compact} />;
    case "a11y-plan":
      return <A11yPlanFrame compact={compact} />;
    case "a11y-map":
      return <A11yMapFrame compact={compact} />;
    case "a11y-table":
      return <A11yTableFrame compact={compact} />;
  }
}

function KsMark({ className = "size-7 text-[10px]" }: { className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg bg-white font-semibold tracking-tight text-black ${className}`}
    >
      KS
    </span>
  );
}

function FolderIcon() {
  return (
    <svg className="size-3 shrink-0 opacity-70" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h3.2L8 3.5h4.5A1.5 1.5 0 0 1 14 5v7.5A1.5 1.5 0 0 1 12.5 14h-9A1.5 1.5 0 0 1 2 12.5v-9Z" />
    </svg>
  );
}

export function StudiosProFrame({ compact }: { compact?: boolean }) {
  const projects = compact ? PROJECTS.slice(0, 8) : PROJECTS;

  return (
    <div className="flex h-full min-h-0 w-full overflow-hidden bg-[#0e0e0e] font-sans text-white">
      <aside
        className={`flex shrink-0 flex-col border-r border-white/10 bg-[#141414] ${
        compact ? "w-[30%] max-w-[11rem] px-2 py-2" : "w-56 px-3 py-3"
        }`}
      >
        <div className="flex items-center gap-2 px-1 py-1">
          <KsMark className={compact ? "size-6 text-[9px]" : "size-7 text-[10px]"} />
          <div className="min-w-0">
            <p className={`truncate font-medium ${compact ? "text-[10px]" : "text-sm"}`}>KaDeep Studios Pro</p>
          </div>
        </div>
        <p className={`mt-3 flex items-center gap-2 rounded-md px-2 py-1.5 text-white/80 ${compact ? "text-[10px]" : "text-xs"}`}>
          <span className="text-white/50">+</span> New Chat
        </p>
        <p className={`flex items-center gap-2 rounded-md bg-white/10 px-2 py-1.5 ${compact ? "text-[10px]" : "text-xs"}`}>
          <span className="text-white/50">⌕</span> Search
        </p>
        <p className={`flex items-center gap-2 px-2 py-1.5 text-white/70 ${compact ? "text-[10px]" : "text-xs"}`}>
          Automations
        </p>
        {!compact ? <p className="px-2 py-1.5 text-xs text-white/70">Customize</p> : null}
        <div className="mt-2 rounded-md bg-white/5 px-2 py-1.5 text-[10px] text-white/40">Search chats</div>
        <p className="mt-3 px-1 text-[10px] uppercase tracking-[0.14em] text-white/40">Projects</p>
        <ul className="mt-1 min-h-0 flex-1 space-y-0.5 overflow-hidden">
          {projects.map((name) => (
            <li
              key={name}
              className={`flex items-center gap-1.5 truncate px-1 py-0.5 text-white/75 ${
                compact ? "text-[10px]" : "text-xs"
              }`}
            >
              <FolderIcon />
              {name}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-2">
          <span className="grid size-6 place-items-center rounded-full bg-white/15 text-[10px]">R</span>
          <div className="min-w-0">
            <p className={compact ? "text-[10px]" : "text-xs"}>Ridhi</p>
            <p className="text-[10px] text-white/45">Super Admin</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div
          className={`flex items-center justify-between border-b border-white/10 bg-[#111] ${
            compact ? "px-3 py-1.5 text-[9px]" : "px-5 py-2.5 text-xs"
          }`}
        >
          <p className="truncate text-white/55">
            My organization <span className="text-white/25">›</span> Rooter{" "}
            <span className="text-white/25">›</span> <span className="text-white">Tester</span>
          </p>
          <div className="hidden items-center gap-1 rounded-full bg-white/10 p-0.5 sm:flex">
            <span className="rounded-full bg-[#4c7dff] px-2 py-0.5 text-white">Tester</span>
            <span className="px-2 py-0.5 text-white/60">Manager</span>
            {!compact ? <span className="px-2 py-0.5 text-white/60">Admin</span> : null}
          </div>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-6 text-center">
          <KsMark className={compact ? "size-8 text-xs" : "size-11 text-sm"} />
          <p className={`mt-3 font-medium ${compact ? "text-sm" : "text-2xl"}`}>KaDeep Studios Pro</p>
          <p className={`mt-1 text-white/55 ${compact ? "text-[10px]" : "text-sm"}`}>Release-ready, on demand</p>
          <p
            className={`mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 ${
              compact ? "text-[9px]" : "text-xs"
            }`}
          >
            A <span className="font-medium text-white">KaDeep</span> product · The agent that learns your product.
          </p>

          <div
            className={`mt-5 w-full max-w-xl rounded-2xl border border-white/10 bg-[#1a1a1a] text-left ${
              compact ? "px-3 py-2.5" : "px-4 py-3.5"
            }`}
          >
            <p className={`text-white/45 ${compact ? "text-[10px]" : "text-sm"}`}>
              Plan, test, / for skills, @ for context
              <span className="caret ml-0.5 inline-block h-3 w-px bg-[#4c7dff] align-middle" />
            </p>
            <div className={`mt-3 flex items-center justify-between ${compact ? "text-[9px]" : "text-xs"}`}>
              <p className="flex items-center gap-2 text-white/70">
                <span className="size-1.5 rounded-full bg-[#4c7dff]" />
                Agent <span className="text-white/35">·</span> Glm 5.3 Flash
              </p>
              <span className="grid size-6 place-items-center rounded-full bg-[#4c7dff] text-[10px]">↑</span>
            </div>
          </div>

          <div className={`mt-4 flex flex-wrap items-center justify-center gap-2 ${compact ? "text-[9px]" : "text-xs"}`}>
            <span className="rounded-full border border-amber-700/70 bg-amber-950/40 px-3 py-1 text-amber-200">
              Plan New Idea
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">+ New project</span>
          </div>
        </div>

        {!compact ? (
          <p className="pb-4 text-center text-[11px] text-white/35">
            Goals keep agents working across turns until the job is done — describe a test to get started.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function StudiosShell({
  compact,
  title,
  children,
}: {
  compact?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 w-full overflow-hidden bg-[#12141c] font-sans text-white">
      <aside className={`hidden shrink-0 flex-col bg-[#0c0e14] sm:flex ${compact ? "w-28 p-2" : "w-44 p-3"}`}>
        <div className="flex items-center gap-2">
          <KsMark className="size-6 text-[9px]" />
          <span className={`truncate ${compact ? "text-[10px]" : "text-xs"}`}>Studios</span>
        </div>
        {["Tests", "Builds", "Heal", "Access"].map((item, index) => (
          <p
            key={item}
            className={`mt-1 rounded-md px-2 py-1 ${compact ? "text-[10px]" : "text-xs"} ${
              index === 0 ? "bg-white/10" : "text-white/55"
            }`}
          >
            {item}
          </p>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className={`border-b border-white/10 ${compact ? "px-3 py-1.5 text-[10px]" : "px-5 py-2.5 text-xs"}`}>
          <span className="text-white/45">Workspace</span>
          <span className="text-white/25"> · </span>
          {title}
        </div>
        <div className={compact ? "flex-1 p-3" : "flex-1 p-5"}>{children}</div>
      </div>
    </div>
  );
}

export function StudiosCreateFrame({ compact }: { compact?: boolean }) {
  return (
    <StudiosShell compact={compact} title="Create">
      <p className={`text-white/50 ${compact ? "text-[10px]" : "text-xs"}`}>What do you want to test today?</p>
      <p className={`mt-1 font-medium ${compact ? "text-sm" : "text-xl"}`}>Record a flow, or generate one in English.</p>
      <div className={`mt-4 grid gap-2 ${compact ? "grid-cols-2" : "grid-cols-2 gap-3"}`}>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className={compact ? "text-[10px] font-medium" : "text-sm font-medium"}>Start Recording</p>
          <p className={`mt-1 text-white/50 ${compact ? "text-[9px]" : "text-xs"}`}>Paste a URL. Headed Chromium.</p>
        </div>
        <div className="rounded-xl border border-[#C5ADC5]/40 bg-[#C5ADC5]/15 p-3">
          <p className={compact ? "text-[10px] font-medium" : "text-sm font-medium"}>Automate with AI</p>
          <p className={`mt-1 text-white/50 ${compact ? "text-[9px]" : "text-xs"}`}>Name, URL, steps, expected.</p>
        </div>
      </div>
      <div className={`mt-3 rounded-lg border border-white/10 bg-[#0c0e14] px-3 py-2 text-white/40 ${compact ? "text-[10px]" : "text-xs"}`}>
        https://checkout.example.com
      </div>
    </StudiosShell>
  );
}

export function StudiosWorkspaceFrame({ compact }: { compact?: boolean }) {
  const rows = [
    { name: "Checkout · 14 steps", status: "Pass", time: "66s" },
    { name: "Login + OTP", status: "Fail", time: "timeout" },
    { name: "Search airports", status: "Pass", time: "41s" },
  ];
  return (
    <StudiosShell compact={compact} title="Recent builds">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["100+", "seats"],
          ["25%", "faster"],
          ["OTP", "in-product"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg bg-white/5 px-2 py-2">
            <p className={compact ? "text-sm" : "text-lg"}>{value}</p>
            <p className="text-[10px] text-white/45">{label}</p>
          </div>
        ))}
      </div>
      <ul className="mt-3 space-y-1.5">
        {rows.map((row) => (
          <li
            key={row.name}
            className={`flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2 ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            <span>{row.name}</span>
            <span className={row.status === "Pass" ? "text-emerald-300" : "text-rose-300"}>
              {row.status} · {row.time}
            </span>
          </li>
        ))}
      </ul>
    </StudiosShell>
  );
}

export function StudiosRulesFrame({ compact }: { compact?: boolean }) {
  return (
    <StudiosShell compact={compact} title="Step editor">
      <div className={`grid h-full gap-2 ${compact ? "grid-cols-2" : "grid-cols-2 gap-3"}`}>
        <div className="rounded-xl border border-white/10 p-3">
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Rule matcher</p>
          <p className={`mt-2 ${compact ? "text-[10px]" : "text-sm"}`}>click [data-testid=continue]</p>
          <p className="mt-2 text-[10px] text-white/45">Deterministic. No model.</p>
        </div>
        <div className="rounded-xl border border-[#B2B5E0]/40 bg-[#B2B5E0]/10 p-3">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#B2B5E0]">AI step</p>
          <p className={`mt-2 ${compact ? "text-[10px]" : "text-sm"}`}>“Submit the booking for Osaka.”</p>
          <p className="mt-2 text-[10px] text-white/45">parse → filter → act</p>
        </div>
      </div>
    </StudiosShell>
  );
}

export function StudiosHealFrame({ compact }: { compact?: boolean }) {
  return (
    <StudiosShell compact={compact} title="Self-heal">
      <p className={compact ? "text-sm" : "text-lg"}>Skills first, then the model.</p>
      <ol className={`mt-3 space-y-2 ${compact ? "text-[10px]" : "text-xs"}`}>
        <li className="rounded-lg bg-white/5 px-3 py-2">1. Fuzzy / semantic match — no LLM</li>
        <li className="rounded-lg bg-white/5 px-3 py-2">2. Claude only on a true miss</li>
        <li className="rounded-lg border border-[#C5ADC5]/40 bg-[#C5ADC5]/10 px-3 py-2">
          Heal written to the report — original vs new
        </li>
      </ol>
    </StudiosShell>
  );
}

export function StudiosLocatorsFrame({ compact }: { compact?: boolean }) {
  const rules = [
    { rule: "hashed CSS", tone: "Blocked" },
    { rule: "nth-child chains", tone: "Blocked" },
    { rule: "data-testid", tone: "Preferred" },
    { rule: "visible label", tone: "Preferred" },
  ];
  return (
    <StudiosShell compact={compact} title="Locator policy">
      <p className={`text-white/55 ${compact ? "text-[10px]" : "text-xs"}`}>Project rule. Inherited by every suite.</p>
      <ul className="mt-3 space-y-1.5">
        {rules.map((item) => (
          <li
            key={item.rule}
            className={`flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            <span>{item.rule}</span>
            <span className={item.tone === "Blocked" ? "text-rose-300" : "text-emerald-300"}>{item.tone}</span>
          </li>
        ))}
      </ul>
    </StudiosShell>
  );
}

export function StudiosEvidenceFrame({ compact }: { compact?: boolean }) {
  return (
    <StudiosShell compact={compact} title="Evidence">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Jira · KD-1842</p>
        <p className={`mt-1 ${compact ? "text-[11px]" : "text-sm"}`}>Checkout OTP timed out on staging</p>
        <p className={`mt-2 text-white/50 ${compact ? "text-[10px]" : "text-xs"}`}>
          Build link, screenshot, video — attached from the run.
        </p>
      </div>
      <div className={`mt-2 grid grid-cols-2 gap-2 ${compact ? "text-[10px]" : "text-xs"}`}>
        <div className="rounded-lg bg-white/5 px-3 py-2">TestRail · case 88</div>
        <div className="rounded-lg bg-white/5 px-3 py-2">Slack · #qa-gate</div>
      </div>
    </StudiosShell>
  );
}

function A11yShell({
  compact,
  eyebrow,
  children,
}: {
  compact?: boolean;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#f7f5fa] font-sans text-[#2a2433]">
      <div className={`flex items-center justify-between border-b border-[#ddd6e6] bg-white ${compact ? "px-3 py-1.5" : "px-5 py-2.5"}`}>
        <p className={compact ? "text-[10px] font-medium" : "text-xs font-medium"}>KaDeep Accessibility</p>
        <p className={`rounded-full bg-[#b2b5e0]/50 px-2 py-0.5 ${compact ? "text-[9px]" : "text-[10px]"}`}>{eyebrow}</p>
      </div>
      <div className={compact ? "flex-1 p-3" : "flex-1 p-5"}>{children}</div>
    </div>
  );
}

export function A11yScoreFrame({ compact }: { compact?: boolean }) {
  return (
    <A11yShell compact={compact} eyebrow="kadeep.ai">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className={`font-serif leading-none ${compact ? "text-4xl" : "text-6xl"}`}>49</p>
          <p className={`text-[#6e6474] ${compact ? "text-[10px]" : "text-sm"}`}>/100 health score</p>
        </div>
        <p className="rounded-full bg-rose-100 px-2 py-1 text-[10px] text-rose-800">149 issues</p>
      </div>
      <div className={`mt-4 grid grid-cols-3 gap-2 ${compact ? "text-[10px]" : "text-xs"}`}>
        <div className="rounded-lg bg-white p-2">9 pages</div>
        <div className="rounded-lg bg-white p-2">55 components</div>
        <div className="rounded-lg bg-white p-2">396 checks</div>
      </div>
    </A11yShell>
  );
}

export function A11ySuiteFrame({ compact }: { compact?: boolean }) {
  const tiles = ["Scanner", "Compliance", "Structure map", "Fix plan", "Fix with AI", "Re-scan"];
  return (
    <A11yShell compact={compact} eyebrow="One run, six jobs">
      <div className={`grid grid-cols-3 gap-2 ${compact ? "text-[10px]" : "text-xs"}`}>
        {tiles.map((tile) => (
          <div key={tile} className="rounded-xl border border-[#ddd6e6] bg-white px-2 py-3 text-center">
            {tile}
          </div>
        ))}
      </div>
    </A11yShell>
  );
}

export function A11yScannerFrame({ compact }: { compact?: boolean }) {
  return (
    <A11yShell compact={compact} eyebrow="axe-core + Extended">
      <p className={compact ? "text-sm" : "text-lg"}>396 WCAG 2.2 checks</p>
      <p className={`mt-1 text-[#6e6474] ${compact ? "text-[10px]" : "text-xs"}`}>
        JS-rendered crawl on Apify. Weighted score, not a raw dump.
      </p>
      <ul className={`mt-3 space-y-1.5 ${compact ? "text-[10px]" : "text-xs"}`}>
        {[
          ["Critical", "12"],
          ["Serious", "28"],
          ["Moderate", "61"],
        ].map(([label, n]) => (
          <li key={label} className="flex justify-between rounded-lg bg-white px-3 py-1.5">
            <span>{label}</span>
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </A11yShell>
  );
}

export function A11yPlanFrame({ compact }: { compact?: boolean }) {
  const tasks = [
    { id: "1.4.3", title: "Contrast on checkout CTA", hours: "2h", sprint: "P1" },
    { id: "4.1.2", title: "Name on icon buttons", hours: "3h", sprint: "P1" },
    { id: "1.3.1", title: "Heading order on /blog", hours: "1h", sprint: "P2" },
  ];
  return (
    <A11yShell compact={compact} eyebrow="Sprint plan">
      <div className="flex items-baseline gap-3">
        <p className={`font-serif ${compact ? "text-2xl" : "text-4xl"}`}>49 → 64</p>
        <p className={`text-[#6e6474] ${compact ? "text-[10px]" : "text-sm"}`}>Sprint 1 · then 100 in Sprint 2</p>
      </div>
      <ul className="mt-3 space-y-1.5">
        {tasks.map((task) => (
          <li
            key={task.title}
            className={`flex items-center justify-between rounded-lg bg-white px-3 py-2 ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            <span>
              <span className="text-[#6e6474]">{task.id}</span> {task.title}
            </span>
            <span className="rounded-full bg-[#c5adc5]/50 px-2 py-0.5">
              {task.sprint} · {task.hours}
            </span>
          </li>
        ))}
      </ul>
    </A11yShell>
  );
}

export function A11yMapFrame({ compact }: { compact?: boolean }) {
  const rows = [
    { sel: "header nav a", n: "18" },
    { sel: ".checkout-cta", n: "9" },
    { sel: "form#login", n: "7" },
  ];
  return (
    <A11yShell compact={compact} eyebrow="55 components">
      <p className={compact ? "text-sm" : "text-lg"}>Issues mapped to selectors</p>
      <ul className="mt-3 space-y-1.5">
        {rows.map((row) => (
          <li
            key={row.sel}
            className={`flex justify-between rounded-lg bg-white px-3 py-2 font-mono ${compact ? "text-[10px]" : "text-xs"}`}
          >
            <span>{row.sel}</span>
            <span>{row.n}</span>
          </li>
        ))}
      </ul>
    </A11yShell>
  );
}

export function A11yTableFrame({ compact }: { compact?: boolean }) {
  const rows = [
    { id: "1.1.1", result: "Fail" },
    { id: "1.4.3", result: "Fail" },
    { id: "2.4.1", result: "Pass" },
    { id: "4.1.2", result: "Fail" },
  ];
  return (
    <A11yShell compact={compact} eyebrow="WCAG 2.2">
      <p className={`mb-2 text-[#6e6474] ${compact ? "text-[10px]" : "text-xs"}`}>axe-core · KaDeep Extended · Apify</p>
      <ul className="space-y-1">
        {rows.map((row) => (
          <li
            key={row.id}
            className={`flex justify-between rounded-lg bg-white px-3 py-1.5 ${compact ? "text-[10px]" : "text-xs"}`}
          >
            <span>{row.id}</span>
            <span className={row.result === "Pass" ? "text-emerald-700" : "text-rose-700"}>{row.result}</span>
          </li>
        ))}
      </ul>
    </A11yShell>
  );
}
