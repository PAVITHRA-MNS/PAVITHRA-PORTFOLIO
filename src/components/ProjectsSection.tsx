import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import ProjectDiagram from './ProjectDiagram';

type ProjectFilter = 'all' | 'agentic' | 'llmops' | 'cloud';

const PROJECT_FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Projects (5)' },
  { id: 'agentic', label: 'Agentic AI & MCP' },
  { id: 'llmops', label: 'LLMOps & Evaluation' },
  { id: 'cloud', label: 'Cloud & DevSecOps' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'agentic-soc-poc': false,
  });

  const filteredProjects: ProjectItem[] =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToProject = (id: string) => {
    if (activeFilter !== 'all') setActiveFilter('all');
    setTimeout(() => {
      const el = document.getElementById(`project-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 40);
  };

  return (
    <section id="projects" className="border-b border-slate-800/70 bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
              Featured Projects
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
              Production AI Platforms, Agentic Automation &amp; Architecture Designs
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter featured projects"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800/80 bg-[#0b1120] p-1.5"
          >
            {PROJECT_FILTERS.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:bg-slate-800/70 hover:text-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Recruiter Quick-Scan Project Index */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {PROJECTS.map((proj) => {
            const isPoc = proj.classification === 'POC & Reference Architecture';
            const highlight =
              proj.id === 'hitl-eval-platform'
                ? '70% Less Manual Eval'
                : proj.id === 'cicd-devsecops-automation'
                  ? '78% Faster Releases'
                  : proj.id === 'agentic-soc-poc'
                    ? '5-Plane SOC POC'
                    : proj.id === 'mcp-firewall-audit'
                      ? 'MCP + LangGraph'
                      : 'AWS EKS + Bedrock';
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => scrollToProject(proj.id)}
                className="flex flex-col justify-between rounded-xl border border-slate-800/85 bg-[#0b1120]/80 p-3.5 text-left transition-colors hover:border-sky-500/50 hover:bg-[#0d1528] cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-slate-400">
                    Project {proj.index}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                </div>
                <p className="mt-1.5 font-display text-xs font-semibold text-slate-100 line-clamp-2">
                  {proj.title}
                </p>
                <p
                  className={`mt-2 font-mono text-[11px] font-medium ${
                    isPoc ? 'text-violet-300' : 'text-sky-400'
                  }`}
                >
                  {highlight}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 space-y-8">
          {filteredProjects.map((project) => {
            const isExpanded = Boolean(expandedIds[project.id]);
            const isPoc = project.classification === 'POC & Reference Architecture';

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="surface-glass rounded-2xl border border-slate-800/90 p-6 sm:p-8 transition-colors hover:border-slate-700/90"
              >
                {/* Project Header */}
                <div className="flex flex-col gap-4 border-b border-slate-800/80 pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="font-mono font-medium text-slate-400">
                        Project {project.index}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">
                        ·
                      </span>
                      <span
                        className={`font-medium ${isPoc ? 'text-violet-300' : 'text-sky-400'}`}
                      >
                        {project.classification}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-50 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-cyan-300/90">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Highlight KPI when available */}
                  {project.targetMetrics && project.targetMetrics.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 self-start">
                      {project.targetMetrics.slice(0, 2).map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-lg border border-sky-500/30 bg-[#070d1b] px-3.5 py-2 text-left"
                        >
                          <p className="text-[10px] font-medium text-slate-400">{metric.label}</p>
                          <p className="font-mono text-sm font-semibold text-sky-300 tabular-nums">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Problem / Solution / Architecture Summary */}
                <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Business Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.businessProblem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Technical Solution
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.technicalSolution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Architecture Overview
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.architectureOverview}
                    </p>
                  </div>
                </div>

                {/* Interactive Architecture Diagram */}
                <div className="mt-6">
                  <ProjectDiagram projectId={project.id} steps={project.pipelineSteps} />
                </div>

                {/* Always-Visible Engineering Contributions & Outcomes (Recruiter Scannability) */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Key Engineering Contributions
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-300">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-400"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <h4
                      className={`text-xs font-semibold tracking-wider uppercase ${
                        isPoc ? 'text-violet-300' : 'text-sky-400'
                      }`}
                    >
                      {project.outcomesTitle}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-slate-200">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-cyan-400"
                          />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack + Deep-Dive Toggle */}
                <div className="mt-6 flex flex-col gap-4 border-t border-slate-800/80 pt-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-[#070c17] px-2.5 py-1 font-mono text-[11px] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                    className="inline-flex min-h-[40px] items-center gap-2 self-start rounded-lg border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-500/50 hover:text-sky-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer lg:self-center"
                  >
                    <span>
                      {isExpanded ? 'Hide Architecture Deep-Dive' : 'View Architecture Deep-Dive'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-sky-400" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-sky-400" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Expandable Technical Deep-Dive */}
                {isExpanded && (
                  <div className="mt-6 space-y-5 border-t border-slate-800/80 pt-6">
                    {project.outcomesNote && (
                      <div className="flex items-start gap-2.5 rounded-xl border border-violet-500/30 bg-violet-950/20 p-4 text-xs leading-relaxed text-violet-200">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" aria-hidden="true" />
                        <p>{project.outcomesNote}</p>
                      </div>
                    )}

                    {project.targetMetrics && project.targetMetrics.length > 2 && (
                      <div>
                        <h4 className="text-xs font-semibold tracking-wider text-violet-300 uppercase">
                          Architecture &amp; POC Design Targets
                        </h4>
                        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                          {project.targetMetrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-lg border border-slate-800 bg-[#060b16] p-3"
                            >
                              <p className="text-[11px] text-slate-400">{metric.label}</p>
                              <p className="mt-1 font-mono text-sm font-semibold text-slate-100 tabular-nums">
                                {metric.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      {project.deepDive.map((block) => (
                        <div
                          key={block.heading}
                          className="rounded-xl border border-slate-800/80 bg-[#060b16] p-4 sm:p-5"
                        >
                          <h5 className="font-display text-sm font-semibold text-slate-100">
                            {block.heading}
                          </h5>
                          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {block.items.map((sub) => (
                              <div
                                key={sub.title}
                                className="rounded-lg border border-slate-800/70 bg-[#090f1e] p-3.5"
                              >
                                <p className="text-xs font-semibold text-sky-300">{sub.title}</p>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                                  {sub.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
