import { IMPACT_METRICS } from '../data/portfolioData';

export default function ImpactSection() {
  return (
    <section aria-label="Professional engineering impact" className="border-b border-slate-800/70 bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold tracking-tight text-slate-100">
              Engineering Impact & Architecture Scope
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Verified delivery outcomes separated clearly from SOC POC architecture capabilities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <span className="text-sky-300 font-medium">Demonstrated Outcomes</span>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <span className="text-violet-300 font-medium">Architecture & POC Capabilities</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_METRICS.map((metric) => {
            const isOutcome = metric.category === 'Demonstrated Outcome';
            return (
              <div
                key={metric.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800/85 bg-[#0b1120]/85 p-5 transition-colors hover:border-slate-700/90"
              >
                <div>
                  <p
                    className={`text-[11px] font-medium tracking-wide ${
                      isOutcome ? 'text-sky-400' : 'text-violet-300'
                    }`}
                  >
                    {metric.category}
                  </p>
                  <p className="mt-2 font-mono text-3xl font-semibold tracking-tight text-slate-50 tabular-nums sm:text-4xl">
                    {metric.value}
                  </p>
                  <h3 className="mt-2 font-display text-sm font-medium text-slate-200 leading-snug">
                    {metric.label}
                  </h3>
                </div>
                <p className="mt-3 pt-3 border-t border-slate-800/70 text-xs leading-relaxed text-slate-400">
                  {metric.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
