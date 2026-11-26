import { ArrowUpRight, Building2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_INFO, PROJECTS } from '../data/portfolioData';

export default function ExperienceSection() {
  const jumpToProject = (projectId: string) => {
    const el = document.getElementById(`project-${projectId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="border-b border-slate-800/70 bg-[#060913]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
            Professional Experience
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
            2.5 Years Building Enterprise Cloud & Agentic AI Systems
          </h2>
        </div>

        <div className="surface-glass rounded-2xl border border-slate-800/90 p-6 sm:p-8">
          {/* Role Header */}
          <div className="flex flex-col gap-4 border-b border-slate-800/80 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-slate-50 sm:text-2xl">
                {EXPERIENCE_INFO.role}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5 font-medium text-sky-300">
                  <Building2 className="h-4 w-4 text-sky-400" aria-hidden="true" />
                  <span>{EXPERIENCE_INFO.company}</span>
                </span>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  <span>{EXPERIENCE_INFO.location}</span>
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2 font-mono text-xs text-slate-200 md:self-center">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
              <span>{EXPERIENCE_INFO.duration}</span>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            {EXPERIENCE_INFO.summary}
          </p>

          {/* Progression Timeline */}
          <div className="mt-8 space-y-6">
            {EXPERIENCE_INFO.milestones.map((milestone, idx) => (
              <div
                key={milestone.phase}
                className="relative grid grid-cols-1 gap-4 rounded-xl border border-slate-800/80 bg-[#080d1a]/80 p-5 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-sky-400">{milestone.phase}</p>
                  <p className="mt-1 text-xs text-slate-400">{milestone.period}</p>
                </div>

                <div className="md:col-span-8">
                  <h4 className="font-display text-base font-semibold text-slate-100">
                    {milestone.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {milestone.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {milestone.linkedProjectIds.map((pid) => {
                      const project = PROJECTS.find((p) => p.id === pid);
                      if (!project) return null;
                      return (
                        <button
                          key={pid}
                          type="button"
                          onClick={() => jumpToProject(pid)}
                          className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-900/90 px-3 py-1 text-xs font-medium text-sky-300 hover:border-sky-500/50 hover:text-sky-200 transition-colors cursor-pointer"
                        >
                          <span>
                            {project.index}. {project.title}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {idx < EXPERIENCE_INFO.milestones.length - 1 && (
                  <span className="sr-only">Next career phase</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
