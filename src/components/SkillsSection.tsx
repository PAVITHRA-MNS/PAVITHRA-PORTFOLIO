import { useState } from 'react';
import {
  Activity,
  Bot,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  Globe,
  Radio,
  ShieldAlert,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

type SkillFilter = 'all' | 'genai' | 'llmops-data' | 'cloud-devops';

const FILTER_TABS: { id: SkillFilter; label: string }[] = [
  { id: 'all', label: 'All Capabilities (10)' },
  { id: 'genai', label: 'GenAI, Agents & Backend' },
  { id: 'llmops-data', label: 'LLMOps, Vector & Streaming' },
  { id: 'cloud-devops', label: 'Cloud, K8s & DevSecOps' },
];

const CATEGORY_ICONS: Record<string, typeof Cpu> = {
  'programming-backend': Code2,
  'genai-agentic': Bot,
  'llms-llmops': Cpu,
  'vector-data': Database,
  'full-stack': Globe,
  'containers-orchestration': Container,
  'cloud-iac': Cloud,
  'cicd-devsecops': ShieldAlert,
  'monitoring-observability': Activity,
  'streaming-os': Radio,
};

export default function SkillsSection() {
  const [filter, setFilter] = useState<SkillFilter>('all');

  const visibleCategories: SkillCategory[] =
    filter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.group === filter);

  return (
    <section id="skills" className="border-b border-slate-800/70 bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
              Technical Skills
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
              End-to-End Stack Across Agentic AI, Data, and Cloud Infrastructure
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter technical skills by domain"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800/80 bg-[#0b1120] p-1.5"
          >
            {FILTER_TABS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Cpu;
            return (
              <div
                key={category.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800/85 bg-[#0b1120]/85 p-5 sm:p-6 transition-colors hover:border-slate-700/90"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 text-sky-400">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-slate-100">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400">{category.summary}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 tabular-nums shrink-0">
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-800/90 bg-[#070c17] px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-sky-500/40 hover:text-sky-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
