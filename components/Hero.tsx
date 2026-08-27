import Image from "next/image";
import { heroCtas, site } from "@/data/content";
import { Ticker } from "@/components/Ticker";

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgb(var(--accent)/0.16),transparent_38%),radial-gradient(circle_at_88%_8%,rgb(var(--accent)/0.12),transparent_32%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="relative mx-auto grid max-w-wide items-center gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
            {site.availability}
          </p>
          <h1
            id="hero-name"
            className="mt-6 font-serif text-[clamp(3.6rem,10vw,7.4rem)] leading-[0.88] tracking-tight text-ink"
          >
            {site.name}
          </h1>
          <p className="mt-6 font-serif text-2xl text-ink sm:text-4xl">{site.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-balance">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {heroCtas.map((cta, index) => (
              <a
                key={cta.label}
                href={cta.href}
                {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  index === 0
                    ? "inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                    : "inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-ink transition-colors hover:border-accent"
                }
              >
                {cta.label}
                {cta.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[42rem] lg:max-w-none">
          <div className="relative aspect-[5/4] sm:min-h-[28rem] lg:min-h-[32rem]">
            <div className="absolute left-[4%] top-[4%] z-20 w-[84%] rotate-[-3.5deg] animate-float-slow">
              <Shot
                src="/case-studies/kadeep/01-create.png"
                alt="KaDeep Studios create surface"
                priority
              />
            </div>
            <div className="absolute bottom-0 right-0 z-30 w-[78%] rotate-[3deg] animate-float">
              <Shot
                src="/case-studies/accessibility/01-hero.png"
                alt="KaDeep Accessibility health score of 49 out of 100"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-wide gap-3 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {[
          { value: "2", label: "Live products", detail: "Decisions in the case studies" },
          { value: "0-to-1", label: "Early-career", detail: "Founder + engineering, one timeline" },
          { value: "IEEE", label: "Peer-reviewed paper", detail: "Merchandising ML pipeline" },
          { value: "PM", label: "Seat I want", detail: "AI / platform / developer tools" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-box border border-line bg-surface/90 px-5 py-6 shadow-card backdrop-blur-sm"
          >
            <p className="font-serif text-5xl text-accent">{item.value}</p>
            <p className="mt-2 text-sm font-medium text-ink">{item.label}</p>
            <p className="mt-1 text-sm text-muted">{item.detail}</p>
          </div>
        ))}
      </div>

      <Ticker />
    </section>
  );
}

function Shot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-shot">
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <Image src={src} alt={alt} width={1440} height={900} priority={priority} className="w-full" />
    </div>
  );
}
