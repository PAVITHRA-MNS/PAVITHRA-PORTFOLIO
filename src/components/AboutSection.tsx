import { useState } from 'react';
import { Cpu, Layers, Shield } from 'lucide-react';
import { ABOUT_PARAGRAPHS, PROFILE_CONFIG } from '../data/portfolioData';

const LIFECYCLE_LAYERS = [
  {
    icon: Cpu,
    title: '01. Agentic Orchestration & RAG',
    items: 'LangGraph · LangChain · MCP Servers · Tool Calling · RAG Pipelines · Guardrails',
    summary:
      'Stateful multi-agent graphs, conditional branching, grammar-constrained outputs, and grounded enterprise retrieval.',
  },
  {
    icon: Layers,
    title: '02. LLMOps, Evaluation & Data',
    items: 'Amazon Bedrock · vLLM · LiteLLM · OpenSearch · ClickHouse · Redis · LLM-as-a-Judge',
    summary:
      'Dual-model routing, centralized inference gateways, PII redaction, token cost optimization, and HITL evaluation.',
  },
  {
    icon: Shield,
    title: '03. Cloud, Kubernetes & DevSecOps',
    items: 'AWS · EKS · Terraform · Istio mTLS · Jenkins · GitHub Actions · SonarQube · Trivy',
    summary:
      'Modular multi-tenant IaC, zero-trust workload identity (IRSA), automated security gates, and observability.',
  },
];

export default function AboutSection() {
  const [portraitError, setPortraitError] = useState<boolean>(false);

  return (
    <section id="about" className="border-b border-slate-800/70 bg-[#060913]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">About Me</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
            Bridging Agentic AI Engineering with Secure Cloud &amp; DevSecOps Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Executive Corporate Portrait + Credentials */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="surface-glass flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 p-4 sm:p-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#0b1120]">
                {!portraitError ? (
                  <>
                    <img
                      src={PROFILE_CONFIG.portraitPath}
                      alt="Pavithra MNS — AI Engineer specializing in Agentic AI, LLMOps, AWS, and DevSecOps"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitError(true)}
                      className="h-full w-full object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-transparent"
                    />
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 text-center p-6">
                    <span className="font-display text-4xl font-bold text-sky-300">PM</span>
                    <span className="mt-2 text-sm text-slate-300">{PROFILE_CONFIG.name}</span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-base font-bold text-slate-50">
                    {PROFILE_CONFIG.name}
                  </p>
                  <p className="text-xs font-medium text-sky-300">
                    {PROFILE_CONFIG.role} · {PROFILE_CONFIG.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-4 text-xs">
                <div>
                  <p className="text-slate-400">Experience</p>
                  <p className="mt-0.5 font-medium text-slate-100">
                    {PROFILE_CONFIG.experienceYears}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Tenure</p>
                  <p className="mt-0.5 font-medium text-slate-100">{PROFILE_CONFIG.tenure}</p>
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="mt-0.5 font-medium text-slate-100">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary & Full-Lifecycle Engineering Stack */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div className="space-y-4 text-[15px] leading-[1.7] text-slate-300">
              {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="surface-glass rounded-2xl border border-slate-800/90 p-5 sm:p-6">
              <div>
                <h3 className="font-display text-base font-semibold text-slate-100">
                  Full-Lifecycle Enterprise AI Stack
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  {PROFILE_CONFIG.positioningStatement}
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {LIFECYCLE_LAYERS.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.title}
                      className="rounded-xl border border-slate-800/80 bg-[#070c18]/90 p-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900 text-sky-400">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-sm font-semibold text-slate-100">
                            {layer.title}
                          </h4>
                          <p className="mt-0.5 font-mono text-[11px] text-cyan-300/90 leading-relaxed">
                            {layer.items}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {layer.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
