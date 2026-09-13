import { caseStudies, heroCtas, heroScan, site } from "@/data/content";
import { FeatureStage } from "@/components/FeatureStage";

export function Hero() {
  return (
    <section aria-labelledby="hero-name">
      <div className="mx-auto grid max-w-wide items-center gap-10 px-6 py-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:px-8 lg:py-14">
        <div>
          <p className="inline-flex rounded-full border border-accent/35 bg-accent/15 px-3 py-1.5 text-sm font-medium text-ink">
            {site.availability}
          </p>
          <h1
            id="hero-name"
            className="mt-5 font-serif text-[length:var(--display)] leading-[0.92] tracking-tight text-ink"
          >
            {site.name}
          </h1>
          <svg aria-hidden="true" className="mt-2 h-3 w-36 text-accent sm:w-48" viewBox="0 0 220 12" fill="none">
            <path
              d="M2 8c40-8 80 6 120-2 32-6 64 4 96 1"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-4 font-serif text-[length:var(--lede)] text-ink">{site.title}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">{heroScan}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroCtas.map((cta, index) => (
              <a
                key={cta.label}
                href={cta.href}
                className={
                  index === 0
                    ? "magnetic inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg sm:w-auto"
                    : "magnetic inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-ink hover:border-accent"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <FeatureStage studies={caseStudies} />
      </div>
    </section>
  );
}
