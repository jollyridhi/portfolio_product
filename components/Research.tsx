import { research } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="border-b border-line">
      <div className="mx-auto grid max-w-wide gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            {research.badge} · {research.dates}
          </p>
          <h2 id="research-heading" className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            {research.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{research.summary}</p>
          <a
            href={research.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            Read the IEEE paper
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {research.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-serif text-5xl text-accent">{metric.value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
