import Image from "next/image";
import { kadeepAccessibilityStudy as study } from "@/data/case-studies/kadeep-accessibility";
import { FlowDiagram } from "@/components/FlowDiagram";
import { LoopBrief } from "@/components/LoopBrief";

export function AccessibilityCaseStudy() {
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
            <Meta label="Team" value={study.team} />
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

      <section aria-labelledby="thesis-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8">
          <blockquote className="max-w-4xl border-l-2 border-accent pl-6">
            <p id="thesis-heading" className="font-serif text-3xl leading-snug text-ink">
              {study.thesis}
            </p>
          </blockquote>
        </div>
      </section>

      <section aria-labelledby="problem-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="problem-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            The problem
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{study.problemLead}</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Market options and what teams lose</caption>
              <thead className="border-b border-line bg-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Option
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    What they get
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    What they lose
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.marketOptions.map((row) => (
                  <tr key={row.title} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-ink">
                      {row.title}
                    </th>
                    <td className="px-5 py-4 text-muted">{row.gets}</td>
                    <td className="px-5 py-4 text-muted">{row.loses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {study.jobs.map((job) => (
              <li key={job.question} className="rounded-2xl border border-line bg-canvas p-5">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">{job.question}</p>
                <p className="mt-2 text-base text-ink">{job.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="proof-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="proof-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Proof
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">{study.proof.title}</p>
              <p className="mt-4 font-serif text-5xl text-ink">{study.proof.score}</p>
              <p className="mt-2 text-lg text-ink">{study.proof.grade}</p>
              <ul className="mt-6 space-y-3">
                {study.proof.facts.map((fact) => (
                  <li key={fact.label} className="flex gap-3 text-base leading-relaxed text-muted">
                    <span className="font-serif text-2xl text-accent">{fact.value}</span>
                    <span className="pt-1">{fact.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">{study.proof.note}</p>
            </article>
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">{study.selfScan.title}</p>
              <p className="mt-4 font-serif text-5xl text-ink">{study.selfScan.score}</p>
              <ul className="mt-6 space-y-3">
                {study.selfScan.facts.map((fact) => (
                  <li key={fact.label} className="flex gap-3 text-base leading-relaxed text-muted">
                    <span className="font-serif text-2xl text-accent">{fact.value}</span>
                    <span className="pt-1">{fact.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">{study.selfScan.plan}</p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="insight-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="insight-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Insight
          </h2>
          <blockquote className="mt-8 max-w-4xl border-l-2 border-accent pl-6">
            <p className="font-serif text-3xl leading-snug text-ink">{study.insightQuote}</p>
          </blockquote>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{study.insight}</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Personas, jobs, and how existing tools fail</caption>
              <thead className="border-b border-line bg-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Persona
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Job
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Failure of existing tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.personas.map((row) => (
                  <tr key={row.persona} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-ink">
                      {row.persona}
                    </th>
                    <td className="px-5 py-4 text-muted">{row.job}</td>
                    <td className="px-5 py-4 text-muted">{row.fail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="mt-8 space-y-3">
            {study.nonNegotiables.map((item, index) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                <span className="font-serif text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="success-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="success-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            How I defined success
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {study.goals.map((goal) => (
              <div key={goal.layer} className="rounded-2xl border border-line bg-canvas p-6">
                <p className="text-sm uppercase tracking-[0.14em] text-accent">{goal.layer}</p>
                <p className="mt-2 text-lg text-ink">{goal.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">Success metrics and MVP targets</caption>
              <thead className="border-b border-line bg-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Metric
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    Why
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium text-muted">
                    MVP target
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.successMetrics.map((row) => (
                  <tr key={row.metric} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-ink">
                      {row.metric}
                    </th>
                    <td className="px-5 py-4 text-muted">{row.why}</td>
                    <td className="px-5 py-4 text-ink">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{study.measuringNext}</p>
        </div>
      </section>

      <section aria-labelledby="strategy-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="strategy-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            What I chose not to build first
          </h2>
          <dl className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <dt className="text-sm uppercase tracking-[0.14em] text-accent">Wedge</dt>
              <dd className="mt-2 text-base text-ink">{study.wedge.wedge}</dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <dt className="text-sm uppercase tracking-[0.14em] text-accent">Expansion</dt>
              <dd className="mt-2 text-base text-ink">{study.wedge.expansion}</dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <dt className="text-sm uppercase tracking-[0.14em] text-accent">Not now</dt>
              <dd className="mt-2 text-base text-ink">{study.wedge.notNow}</dd>
            </div>
          </dl>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {study.tradeoffs.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {study.packaging.map((tier) => (
              <li key={tier.tier} className="rounded-2xl border border-line bg-canvas p-6">
                <p className="font-serif text-2xl text-ink">{tier.tier}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-accent">{tier.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tier.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="decision-heading" className="border-b border-line bg-surface">
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
        </div>
      </section>

      <section aria-labelledby="shipped-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="shipped-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            What we shipped
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{study.journey}</p>
          <ol className="mt-12 space-y-12">
            {study.shipped.map((item) => (
              <li key={item.number} className="grid gap-4 lg:grid-cols-[6rem_minmax(0,1fr)]">
                <p className="font-serif text-3xl text-accent">{item.number}</p>
                <div>
                  <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <FlowDiagram label={study.diagram.label} steps={study.diagram.steps} />
          </div>
        </div>
      </section>

      <section aria-labelledby="surfaces-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="surfaces-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Product surfaces
          </h2>
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

      <section aria-labelledby="worked-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="worked-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            How I worked as PM
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {study.howIWorked.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="outcome-heading" className="border-b border-line bg-surface">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="outcome-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Outcome
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.outcomes.map((item) => (
              <li key={item.label} className="rounded-2xl border border-line bg-canvas p-6">
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

      <section aria-labelledby="risks-heading" className="border-b border-line">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="risks-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            Risks I owned, and next
          </h2>
          <ul className="mt-8 space-y-3">
            {study.risks.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ol className="mt-10 space-y-3">
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

      <section aria-labelledby="learned-heading">
        <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
          <h2 id="learned-heading" className="font-serif text-4xl text-ink sm:text-5xl">
            What I learned
          </h2>
          <ul className="mt-8 space-y-4">
            {study.learned.map((item) => (
              <li key={item} className="max-w-3xl text-lg leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-3xl border-t border-line pt-8 text-lg leading-relaxed text-ink">
            {study.closer}
          </p>
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
