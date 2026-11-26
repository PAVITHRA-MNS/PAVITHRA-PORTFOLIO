import { useState } from 'react';
import { ArrowDown, ArrowRight, Layers, Network, Server, ShieldCheck } from 'lucide-react';
import { ARCHITECTURE_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS: Record<string, typeof Network> = {
  'agentic-ai': Network,
  'enterprise-rag': Layers,
  'llmops-inference': Server,
  'secure-ai-infra': ShieldCheck,
};

export default function ArchitectureSection() {
  const [selectedId, setSelectedId] = useState<string>(ARCHITECTURE_PILLARS[0].id);
  const activePillar =
    ARCHITECTURE_PILLARS.find((pillar) => pillar.id === selectedId) ?? ARCHITECTURE_PILLARS[0];

  return (
    <section id="architecture" className="border-b border-slate-800/70 bg-[#060913]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
            Architecture &amp; Engineering
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
            How I Engineer AI Systems
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            Production AI requires disciplined system boundaries across agentic orchestration,
            grounded retrieval, model operations, and zero-trust cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: 4 Architectural Pillar Selectors */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {ARCHITECTURE_PILLARS.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.id] ?? Network;
              const isSelected = pillar.id === activePillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedId(pillar.id)}
                  aria-pressed={isSelected}
                  className={`flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-sky-400/70 bg-sky-950/25 shadow-sm shadow-sky-950/40'
                      : 'border-slate-800/85 bg-[#0b1120]/75 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isSelected
                        ? 'border-sky-400/50 bg-sky-500/15 text-sky-300'
                        : 'border-slate-800 bg-slate-900 text-slate-400'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-slate-400">
                      {pillar.number}. Architecture Blueprint
                    </p>
                    <h3 className="mt-0.5 font-display text-base font-semibold text-slate-100">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Architecture Blueprint Diagram */}
          <div className="lg:col-span-7">
            <div className="surface-glass flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 p-6 sm:p-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div>
                    <p className="font-mono text-xs text-sky-400">
                      {activePillar.number}. System Blueprint
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {activePillar.description}
                </p>

                {/* Core Capabilities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {activePillar.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-md border border-slate-800 bg-[#070b16] px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Layered Technical Diagram with Directional Data/Control Flow */}
              <div className="mt-6 space-y-2">
                {activePillar.diagramLayers.map((layer, idx) => (
                  <div key={layer.layerName}>
                    <div className="rounded-xl border border-slate-800/90 bg-[#070b16] p-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-display text-xs font-semibold text-cyan-300">
                          {layer.layerName}
                        </span>
                        <span className="text-[11px] text-slate-400">{layer.role}</span>
                      </div>

                      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                        {layer.nodes.map((node, nodeIdx) => (
                          <div key={node} className="flex flex-1 items-center gap-2">
                            <div className="w-full rounded-lg border border-slate-800/80 bg-[#0b1120] px-3 py-2 font-mono text-[11px] text-slate-100 text-center">
                              {node}
                            </div>
                            {nodeIdx < layer.nodes.length - 1 && (
                              <ArrowRight
                                className="hidden h-3.5 w-3.5 shrink-0 text-slate-600 sm:block"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {idx < activePillar.diagramLayers.length - 1 && (
                      <div className="flex justify-center py-1" aria-hidden="true">
                        <ArrowDown className="h-4 w-4 text-sky-500/70" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
