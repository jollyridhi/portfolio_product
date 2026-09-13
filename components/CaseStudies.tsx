import { caseStudies, caseStudiesIntro } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { ProductShot } from "@/components/ProductShot";

export function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="border-y border-line">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeading
            id="case-studies-heading"
            eyebrow={caseStudiesIntro.eyebrow}
            title={caseStudiesIntro.title}
            description={caseStudiesIntro.description}
          />
        </Reveal>

        <div className="mt-10 flex snap-row gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delayMs={index * 70} className="min-w-[min(85vw,24rem)] snap-start lg:min-w-0">
              <TiltCard>
              <article id={study.id} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
                <a href={study.href} className="block overflow-hidden bg-canvas">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="img-zoom h-full">
                      <ProductShot id={study.coverFrame} alt={study.coverAlt} compact />
                    </div>
                  </div>
                  <p className="border-t border-line px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {study.number} · {study.product}
                  </p>
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-2xl leading-snug text-ink">
                    <a href={study.href} className="hover:underline">
                      {study.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{study.line}</p>
                  <ul className="mt-5 grid grid-cols-3 gap-2">
                    {study.metrics.map((metric) => (
                      <li key={metric.label} className="rounded-xl bg-canvas px-2 py-3 text-center">
                        <p className="font-serif text-xl text-accent">{metric.value}</p>
                        <p className="mt-1 text-[11px] leading-snug text-muted">{metric.label}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={study.href}
                      className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg hover:opacity-90"
                    >
                      {study.cta}
                    </a>
                    {study.liveHref ? (
                      <a
                        href={study.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ink hover:border-accent"
                      >
                        {study.liveLabel}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
