import { projects } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-14 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">Before KaDeep</p>
          <h2 id="projects-heading" className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Two 0-to-1 cuts.
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name} className="flex flex-col gap-2 border-t border-line pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl text-ink">{project.name}</h3>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    GitHub
                    <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
              <p className="text-sm text-muted">{project.kicker}</p>
              <p className="text-base leading-relaxed text-ink">{project.outcome}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
