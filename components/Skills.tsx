import { skills } from "@/data/content";

export function Skills({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <div className={`grid gap-6 sm:grid-cols-2 ${embedded ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {skills.map((group) => (
        <section key={group.category} aria-labelledby={`skill-${group.category}`}>
          <h3
            id={`skill-${group.category}`}
            className="text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            {group.category}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );

  if (embedded) {
    return (
      <div className="mt-14 border-t border-line pt-10">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Can I sit in this room?</p>
        <div className="mt-6">{body}</div>
      </div>
    );
  }

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-line">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8">
        <h2 id="skills-heading" className="font-serif text-3xl text-ink">
          Skills
        </h2>
        <div className="mt-8">{body}</div>
      </div>
    </section>
  );
}
