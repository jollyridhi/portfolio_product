"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/data/content";
import { ProductShot } from "@/components/ProductShot";

export function FeatureStage({ studies }: { studies: CaseStudy[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % studies.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, [paused, studies.length]);

  const study = studies[index];
  const metric = study.metrics[0];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <a
        href={study.href}
        className="group block overflow-hidden rounded-3xl border border-line bg-surface shadow-shot"
      >
        <div className="flex items-center gap-1.5 border-b border-line bg-mist/40 px-3 py-2" aria-hidden="true">
          <span className="size-2 rounded-full bg-accent" />
          <span className="size-2 rounded-full bg-mist" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-2 truncate text-[11px] text-muted">{study.liveLabel ?? study.product}</span>
        </div>
        <div className="relative aspect-[16/10]">
          {studies.map((item, shotIndex) => (
            <div
              key={item.id}
              aria-hidden={shotIndex !== index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                shotIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <ProductShot id={item.coverFrame} alt="" compact decorative />
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-line px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {study.number} · {study.product}
            </p>
            <p className="mt-1 font-serif text-xl leading-snug text-ink sm:text-2xl">{study.title}</p>
          </div>
          {metric ? (
            <p className="shrink-0 text-right">
              <span className="block font-serif text-2xl text-accent">{metric.value}</span>
              <span className="text-[11px] text-muted">{metric.label}</span>
            </p>
          ) : null}
        </div>
      </a>
      <div className="mt-3 flex gap-2" role="tablist" aria-label="Featured products">
        {studies.map((item, shotIndex) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={shotIndex === index}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              shotIndex === index ? "bg-accent" : "bg-line hover:bg-muted/40"
            }`}
            onClick={() => setIndex(shotIndex)}
          >
            <span className="sr-only">{item.product}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
