export type LoopBriefData = {
  situation: string;
  options: { title: string; dies: string; chosen?: boolean }[];
  decided: string;
  result: string;
  miss: string;
  northStar: { label: string; definition: string };
  guardrail: { label: string; definition: string };
  notInstrumented: { label: string; why: string }[];
  whoLoses: string;
};

export function LoopBrief({ brief }: { brief: LoopBriefData }) {
  return (
    <section aria-labelledby="brief-heading">
      <div className="mx-auto max-w-wide px-6 py-12 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">90-second brief</p>
        <h2 id="brief-heading" className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
          How to read this
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{brief.situation}</p>

        <ul className="mt-8 grid gap-3 lg:grid-cols-3">
          {brief.options.map((row) => (
            <li
              key={row.title}
              className={`rounded-2xl border p-5 ${
                row.chosen ? "border-accent/40 bg-accent/[0.06]" : "border-line bg-canvas"
              }`}
            >
              <p className="font-medium text-ink">{row.title}</p>
              {row.chosen ? (
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-accent">Shipped</p>
              ) : (
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">Died</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted">{row.dies}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Decision</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.decided}</dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Result I will defend</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.result}</dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">What I got wrong</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.miss}</dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Who loses if this is wrong</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.whoLoses}</dd>
          </div>
        </dl>

        <h3 className="mt-10 font-serif text-2xl text-ink">Metric spine</h3>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-canvas px-4 py-4">
            <dt className="text-xs uppercase tracking-[0.12em] text-accent">North star</dt>
            <dd className="mt-1 font-medium text-ink">{brief.northStar.label}</dd>
            <dd className="mt-1 text-sm text-muted">{brief.northStar.definition}</dd>
          </div>
          <div className="rounded-xl bg-canvas px-4 py-4">
            <dt className="text-xs uppercase tracking-[0.12em] text-accent">Guardrail</dt>
            <dd className="mt-1 font-medium text-ink">{brief.guardrail.label}</dd>
            <dd className="mt-1 text-sm text-muted">{brief.guardrail.definition}</dd>
          </div>
          {brief.notInstrumented.map((row) => (
            <div key={row.label} className="rounded-xl bg-canvas px-4 py-4">
              <dt className="text-xs uppercase tracking-[0.12em] text-muted">Not instrumented</dt>
              <dd className="mt-1 font-medium text-ink">{row.label}</dd>
              <dd className="mt-1 text-sm text-muted">{row.why}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
