import Image from "next/image";
import { kadeepStudiosStudy as study } from "@/data/case-studies/kadeep-studios";
import { FlowDiagram } from "@/components/FlowDiagram";
import { LoopBrief } from "@/components/LoopBrief";
import { Reveal } from "@/components/Reveal";

export function KadeepCaseStudy() {
  const heroShot = study.screenshots[0];
  const gallery = study.screenshots.slice(1);

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">{study.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{study.subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{study.hero}</p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <Meta label="Role" value={study.role} />
            <Meta label="Scope" value={study.scope} />
            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-muted">Live</dt>
              <dd className="mt-2">
                <a
                  href={study.live.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-ink underline-offset-4 hover:underline"
                >
                  {study.live.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="mt-1 text-sm text-muted">{study.desktop}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-muted">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((item) => (
                  <span key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <LoopBrief brief={study.loop} />

      <figure className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-10 lg:px-8">
          <Image
            src={heroShot.src}
            alt={heroShot.alt}
            width={1440}
            height={900}
            priority
            className="w-full rounded-2xl border border-line"
          />
          <figcaption className="mt-4 text-sm text-muted">{heroShot.caption}</figcaption>
        </div>
      </figure>

      <section aria-labelledby="problem-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 id="problem-heading" className="font-serif text-4xl text-ink sm:text-5xl">
              The problem
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{study.problemLead}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {study.problemCards.map((card) => (
              <Reveal key={card.title}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-serif text-2xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="insight-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 id="insight-heading" className="font-serif text-4xl text-ink sm:text-5xl">
              Insight
            </h2>
            <blockquote className="mt-8 max-w-4xl border-l-2 border-accent pl-6">
              <p className="font-serif text-3xl leading-snug text-ink">{study.insightQuote}</p>
            </blockquote>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{study.insight}</p>
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Product layers and the job of each</caption>
              <thead className="border-b border-line bg-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Layer
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Job
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.layers.map((layer) => (
                  <tr key={layer.name} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-ink">
                      {layer.name}
                    </th>
                    <td className="px-5 py-4 text-muted">{layer.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="constraints-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="constraints-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Constraints we designed against
          </h2>
          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {study.constraints.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="solution-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="solution-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Solution
          </h2>
          <ol className="mt-12 space-y-12">
            {study.solutions.map((item) => (
              <li key={item.number} className="grid gap-4 lg:grid-cols-[6rem_minmax(0,1fr)]">
                <p className="font-serif text-3xl text-accent">{item.number}</p>
                <div>
                  <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="decision-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] px-6 py-8 sm:px-10 sm:py-10">
            <p id="decision-heading" className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
              Key decision
            </p>
            <blockquote className="mt-5 max-w-4xl border-l-2 border-accent pl-6">
              <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">{study.decisionQuote}</p>
            </blockquote>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{study.decisionWhy}</p>
          </div>
          <div className="mt-10">
            <FlowDiagram label={study.diagram.label} steps={study.diagram.steps} />
          </div>
        </div>
      </section>

      <section aria-labelledby="surfaces-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="surfaces-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Product surfaces
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Six frames from the shipped product and studios.kadeep.ai. Lead with create, then AI, rules, heal, locator policy, and evidence.
          </p>
          <ul className="mt-10 grid gap-8 lg:grid-cols-2">
            {gallery.map((shot) => (
              <li key={shot.src}>
                <figure>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1440}
                    height={900}
                    className="w-full rounded-2xl border border-line"
                  />
                  <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="principles-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Design principles that constrained the UI
          </h2>
          <ul className="mt-8 space-y-4">
            {study.principles.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hard-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="hard-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Hard problems
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            These are the interview answers. Each one is a named surface plus a constraint — not “I worked on the platform.”
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {study.hardProblems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-canvas p-6">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="outcome-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="outcome-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Outcome
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.outcomes.map((item) => (
              <li key={item.label} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-serif text-4xl text-accent">{item.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-ink">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">{study.outcomeNarrative}</p>
        </div>
      </section>

      <section aria-labelledby="miss-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="miss-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            What I got wrong
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{study.miss}</p>
        </div>
      </section>

      <section aria-labelledby="next-heading">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="next-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            What I would do next
          </h2>
          <ol className="mt-8 space-y-4">
            {study.next.map((item, index) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-muted">
                <span className="font-serif text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-2 text-base leading-relaxed text-ink">{value}</dd>
    </div>
  );
}
