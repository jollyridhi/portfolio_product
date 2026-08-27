import { experience, experienceHighlights } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const role = experience[0];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="How I operated. Not a second case study."
            description="Calendar, scope, and the room I sat in. Product decisions live above, in the case studies."
          />
        </Reveal>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-box border border-line bg-canvas px-6 py-8 shadow-card"
            >
              <p className="font-serif text-5xl text-accent sm:text-6xl">{item.value}</p>
              <p className="mt-3 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 overflow-hidden rounded-box border border-line bg-canvas shadow-card">
          <div className="bg-accent px-6 py-8 text-accent-fg sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent-fg/75">
              {role.dates} · {role.location}
            </p>
            <h3 className="mt-3 font-serif text-4xl">{role.title}</h3>
            <p className="mt-2 text-lg">{role.company}</p>
          </div>
          <p className="px-6 py-6 text-lg leading-relaxed text-muted sm:px-10">{role.summary}</p>
        </Reveal>

        <ol className="mt-6 grid gap-4 lg:grid-cols-2">
          {role.achievements.map((item, index) => (
            <li key={item.text}>
              <Reveal delayMs={index * 40}>
                <article className="h-full rounded-box border border-line bg-canvas p-6 shadow-card sm:p-7">
                  {item.metric ? (
                    <p className="font-serif text-5xl text-accent">{item.metric}</p>
                  ) : (
                    <p className="font-serif text-5xl text-accent" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  )}
                  {item.metricLabel ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                      {item.metricLabel}
                    </p>
                  ) : null}
                  <p className="mt-4 text-base leading-relaxed text-ink">{item.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
