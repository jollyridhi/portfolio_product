import { kadeepStudiosStudy as study } from "@/data/case-studies/kadeep-studios";
import { adjacentStudies } from "@/data/content";
import { FlowDiagram } from "@/components/FlowDiagram";
import { LoopBrief } from "@/components/LoopBrief";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { ProductShot } from "@/components/ProductShot";

export function KadeepCaseStudy() {
  const heroShot = study.screenshots[0];
  const gallery = study.screenshots.slice(1);
  const pager = adjacentStudies("kadeep-studios");

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-12 lg:px-8 lg:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">{study.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl">{study.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{study.subtitle}</p>
          <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
            <Meta label="Role" value={study.role} />
            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-muted">Live</dt>
              <dd className="mt-2">
                <a href={study.live.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                  {study.live.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="mt-1 text-sm text-muted">{study.desktop}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-muted">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.slice(0, 6).map((item) => (
                  <span key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-8 lg:px-8">
          <ProductShot id={heroShot.frame} alt={heroShot.alt} caption={heroShot.caption} />
        </div>
      </div>

      <CaseStudyShell
        prev={pager.prev}
        next={pager.next}
        tabs={[
          {
            id: "brief",
            label: "Brief",
            panel: (
              <>
                <LoopBrief brief={study.loop} />
                <div className="mx-auto max-w-wide px-6 pb-12 lg:px-8">
                  <blockquote className="border-l-2 border-accent pl-5">
                    <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">{study.decisionQuote}</p>
                  </blockquote>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{study.decisionWhy}</p>
                  <div className="mt-8">
                    <FlowDiagram label={study.diagram.label} steps={study.diagram.steps} />
                  </div>
                </div>
              </>
            ),
          },
          {
            id: "product",
            label: "Product",
            panel: (
              <div className="mx-auto max-w-wide space-y-14 px-6 py-12 lg:px-8">
                <section>
                  <h2 className="font-serif text-3xl text-ink">The problem</h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{study.problemLead}</p>
                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {study.problemCards.map((card) => (
                      <div key={card.title} className="border-t border-line pt-4">
                        <h3 className="font-serif text-xl text-ink">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="font-serif text-3xl text-ink">What shipped</h2>
                  <ol className="mt-6 space-y-6">
                    {study.solutions.map((item) => (
                      <li key={item.number} className="grid gap-2 lg:grid-cols-[4rem_minmax(0,1fr)]">
                        <p className="font-serif text-2xl text-accent">{item.number}</p>
                        <div>
                          <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                          <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h2 className="font-serif text-3xl text-ink">Surfaces</h2>
                  <ul className="mt-6 grid gap-6 lg:grid-cols-2">
                    {gallery.map((shot) => (
                      <li key={shot.frame}>
                        <ProductShot id={shot.frame} alt={shot.alt} caption={shot.caption} />
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ),
          },
          {
            id: "outcome",
            label: "Outcome",
            panel: (
              <div className="mx-auto max-w-wide space-y-14 px-6 py-12 lg:px-8">
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {study.outcomes.map((item) => (
                    <li key={item.label} className="border-t border-line pt-4">
                      <p className="font-serif text-3xl text-accent">{item.value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ink">{item.label}</p>
                      <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="max-w-3xl text-base leading-relaxed text-muted">{study.outcomeNarrative}</p>
                <section>
                  <h2 className="font-serif text-3xl text-ink">What I got wrong</h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{study.miss}</p>
                </section>
                <section>
                  <h2 className="font-serif text-3xl text-ink">Hard problems</h2>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {study.hardProblems.map((item) => (
                      <article key={item.title}>
                        <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="font-serif text-3xl text-ink">Next</h2>
                  <ol className="mt-4 space-y-3">
                    {study.next.map((item, index) => (
                      <li key={item} className="flex gap-3 text-base text-muted">
                        <span className="font-serif text-accent">{String(index + 1).padStart(2, "0")}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            ),
          },
        ]}
      />
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
    </div>
  );
}
