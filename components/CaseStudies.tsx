import Image from "next/image";
import { caseStudies, caseStudiesIntro } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="case-studies-heading"
            eyebrow={caseStudiesIntro.eyebrow}
            title={caseStudiesIntro.title}
            description={caseStudiesIntro.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delayMs={index * 60}>
              <article
                id={study.id}
                aria-labelledby={`${study.id}-title`}
                className="lift overflow-hidden rounded-box border border-line bg-surface shadow-card"
              >
                <div className="relative min-h-[18rem] overflow-hidden bg-canvas sm:min-h-[22rem] lg:min-h-[28rem]">
                  <Image
                    src={study.cover}
                    alt={study.coverAlt}
                    fill
                    sizes="(min-width: 1280px) 1400px, 100vw"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/85">
                      Case study {study.number} · {study.product}
                    </p>
                    <h3
                      id={`${study.id}-title`}
                      className="mt-3 max-w-4xl font-serif text-3xl leading-tight text-white [text-shadow:0_2px_24px_rgb(0_0_0_/_0.55)] sm:text-5xl"
                    >
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
                  <div>
                    <p className="text-lg leading-relaxed text-muted">{study.problem}</p>
                    <p className="mt-5 text-base leading-relaxed text-ink">{study.impact}</p>
                    <blockquote className="mt-8 border-l-2 border-accent pl-5">
                      <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
                        {study.decisionQuote}
                      </p>
                    </blockquote>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {study.href ? (
                        <a
                          href={study.href}
                          className="inline-flex min-h-12 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg hover:opacity-90"
                        >
                          {study.cta ?? "Read the full case study"}
                        </a>
                      ) : null}
                      {study.liveHref ? (
                        <a
                          href={study.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 items-center rounded-full border border-line px-5 text-sm font-medium text-ink hover:border-accent"
                        >
                          {study.liveLabel}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    {study.metrics.map((metric) => (
                      <li
                        key={metric.label}
                        className="rounded-2xl border border-line bg-canvas px-4 py-5"
                      >
                        <p className="font-serif text-3xl text-accent sm:text-4xl">{metric.value}</p>
                        <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">{metric.label}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
