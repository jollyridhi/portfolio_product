import { experience, experienceProof } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { KaDeepMark } from "@/components/KaDeepMark";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="How I operated."
            description="Engineer first. Then PM. Same company, same products — a different seat in the room."
          />
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="flex items-start gap-4 border-b border-line px-5 py-5 sm:px-8">
            <KaDeepMark />
            <div>
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{experience.company}</h3>
              <p className="mt-1 text-sm text-muted">{experience.employment}</p>
              <p className="text-sm text-muted">{experience.location}</p>
            </div>
          </div>

          <ol className="relative px-5 py-2 sm:px-8">
            <div aria-hidden="true" className="absolute bottom-8 left-[2.05rem] top-8 w-px bg-line sm:left-[2.85rem]" />
            {experience.roles.map((role) => (
              <li key={role.title} className="relative py-6 pl-10 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-8 size-3 rounded-full border-2 border-accent bg-surface sm:left-1"
                />
                <h4 className="font-serif text-xl text-ink sm:text-2xl">{role.title}</h4>
                <p className="mt-1 text-sm text-muted">
                  {role.dates} · {role.tenure}
                </p>
                <p className="text-sm text-muted">{role.workMode}</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${role.title} skills`}>
                  {role.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full bg-mist/70 px-3 py-1 text-xs font-medium text-ink"
                    >
                      <svg className="size-2.5 text-accent" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M6 1.2 10.8 6 6 10.8 1.2 6 6 1.2Z" fill="currentColor" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 max-w-3xl space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-ink">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {experienceProof.map((item, index) => (
            <li key={item.label}>
              <Reveal delayMs={index * 60}>
                <article
                  className={`h-full rounded-2xl px-5 py-6 ${
                    index === 0 ? "bg-accent text-accent-fg" : index === 1 ? "bg-mist text-ink" : "border border-line bg-surface"
                  }`}
                >
                  <p className="font-serif text-4xl">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] opacity-80">{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{item.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
