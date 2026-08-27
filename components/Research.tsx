import { research } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="research-heading"
            eyebrow="Research"
            title="Peer-reviewed, not just prototyped."
            description="The IEEE paper is the receipt that I can take an ML pipeline from experiment to a number a merchandising team can use."
          />
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-box border border-line shadow-lift">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="bg-ink px-6 py-10 text-canvas sm:px-10 sm:py-14">
              <p className="text-sm text-canvas/70">
                {research.venue} · {research.dates}
              </p>
              <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{research.title}</h3>
              <p className="mt-4 text-sm italic text-canvas/70">{research.officialTitle}</p>
              <p className="mt-8 text-lg leading-relaxed text-canvas/85">{research.summary}</p>
              <a
                href={research.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-12 items-center rounded-full bg-canvas px-5 text-sm font-medium text-ink hover:opacity-90"
              >
                Read the IEEE paper
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <div className="grid bg-accent p-6 text-accent-fg sm:p-10">
              {research.metrics.map((metric) => (
                <div key={metric.label} className="border-b border-accent-fg/20 py-6 last:border-0">
                  <p className="font-serif text-6xl sm:text-7xl">{metric.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-accent-fg/75">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 border-t border-line bg-canvas p-6 sm:grid-cols-3 sm:p-8">
            {research.highlights.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
