import { projects } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured projects"
            title="Problem first. Then the stack."
            description="Two 0-to-1 products where the PM call was the product: what to cut, what to ship, and what the north-star actually was."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delayMs={index * 80}>
              <article className="lift flex h-full flex-col overflow-hidden rounded-box border border-line bg-surface shadow-card">
                <div
                  className={`relative isolate overflow-hidden px-6 py-12 sm:px-8 ${
                    project.theme === "campus" ? "bg-accent" : "bg-ink"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_36%),radial-gradient(circle_at_90%_80%,white,transparent_28%)]"
                  />
                  <p
                    className={`relative text-sm uppercase tracking-[0.16em] ${
                      project.theme === "campus" ? "text-accent-fg/75" : "text-canvas/70"
                    }`}
                  >
                    {project.kicker}
                  </p>
                  <h3
                    className={`relative mt-3 font-serif text-4xl sm:text-5xl ${
                      project.theme === "campus" ? "text-accent-fg" : "text-canvas"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <ul className="flex flex-wrap gap-2" aria-label={`${project.name} stack`}>
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 space-y-5">
                    <div>
                      <dt className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                        Problem
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-muted">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                        Decision
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-muted">{project.action}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                        Outcome
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-ink">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-accent"
                      >
                        GitHub
                        <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg hover:opacity-90"
                      >
                        Live site
                        <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
