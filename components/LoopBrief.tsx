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
    <section aria-labelledby="brief-heading" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">90-second brief</p>
        <h2 id="brief-heading" className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          How a looping interviewer should read this
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{brief.situation}</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Options considered before the decision</caption>
            <thead className="border-b border-line bg-canvas">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium text-muted">
                  Option
                </th>
                <th scope="col" className="px-5 py-3 font-medium text-muted">
                  Why it died — or why I shipped it
                </th>
              </tr>
            </thead>
            <tbody>
              {brief.options.map((row) => (
                <tr key={row.title} className="border-b border-line last:border-0">
                  <th scope="row" className="px-5 py-4 font-medium text-ink">
                    {row.title}
                    {row.chosen ? (
                      <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-accent">
                        Shipped
                      </span>
                    ) : null}
                  </th>
                  <td className="px-5 py-4 text-muted">{row.dies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <dl className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Decision</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.decided}</dd>
          </div>
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Result I will defend</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.result}</dd>
          </div>
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">What I got wrong</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.miss}</dd>
          </div>
          <div className="rounded-2xl border border-line bg-canvas p-6">
            <dt className="text-sm uppercase tracking-[0.14em] text-accent">Who loses if this is wrong</dt>
            <dd className="mt-2 text-base leading-relaxed text-ink">{brief.whoLoses}</dd>
          </div>
        </dl>

        <h3 className="mt-12 font-serif text-2xl text-ink">Metric spine — instrumented vs not</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          North star and guardrail are how I ran the product. Cells marked not instrumented
          are the interview. I will not invent a rate to fill them.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">North star, guardrail, and metrics not instrumented yet</caption>
            <thead className="border-b border-line bg-canvas">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium text-muted">
                  Layer
                </th>
                <th scope="col" className="px-5 py-3 font-medium text-muted">
                  Metric
                </th>
                <th scope="col" className="px-5 py-3 font-medium text-muted">
                  Definition
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <th scope="row" className="px-5 py-4 font-medium text-ink">
                  North star
                </th>
                <td className="px-5 py-4 text-ink">{brief.northStar.label}</td>
                <td className="px-5 py-4 text-muted">{brief.northStar.definition}</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-5 py-4 font-medium text-ink">
                  Guardrail
                </th>
                <td className="px-5 py-4 text-ink">{brief.guardrail.label}</td>
                <td className="px-5 py-4 text-muted">{brief.guardrail.definition}</td>
              </tr>
              {brief.notInstrumented.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-5 py-4 font-medium text-ink">
                    Not instrumented
                  </th>
                  <td className="px-5 py-4 text-ink">{row.label}</td>
                  <td className="px-5 py-4 text-muted">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
