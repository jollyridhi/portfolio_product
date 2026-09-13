"use client";

import { useId, useState } from "react";

export type CaseStudyTab = {
  id: string;
  label: string;
  panel: React.ReactNode;
};

export function CaseStudyShell({
  tabs,
  prev,
  next,
}: {
  tabs: CaseStudyTab[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const baseId = useId();
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div>
      <div className="sticky top-14 z-30 border-b border-line bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-wide gap-1 overflow-x-auto px-6 py-2 lg:px-8" role="tablist" aria-label="Case study sections">
          {tabs.map((tab) => {
            const selected = tab.id === current.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${tab.id}`}
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-accent text-accent-fg"
                    : "text-muted hover:bg-surface hover:text-ink"
                }`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${current.id}`}
        aria-labelledby={`${baseId}-${current.id}`}
        className="tab-panel"
      >
        {current.panel}
      </div>

      <nav
        aria-label="More case studies"
        className="border-t border-line"
      >
        <div className="mx-auto flex max-w-wide flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          {prev ? (
            <a href={prev.href} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
              ← {prev.label}
            </a>
          ) : (
            <a href="/#case-studies" className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
              ← All work
            </a>
          )}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-accent"
            >
              Resume
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg hover:opacity-90"
            >
              Contact
            </a>
            {next ? (
              <a href={next.href} className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 hover:underline">
                {next.label} →
              </a>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
