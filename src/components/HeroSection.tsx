import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Briefcase,
  Cpu,
  Database,
  Download,
  Github,
  Layers,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { PROFILE_CONFIG } from '../data/portfolioData';

interface EcosystemNode {
  id: string;
  label: string;
  plane: string;
  shortRole: string;
  stack: string;
  icon: typeof Cpu;
}

const ECOSYSTEM_LAYERS: { title: string; nodes: EcosystemNode[] }[] = [
  {
    title: '01 · Agentic & Reasoning Plane',
    nodes: [
      {
        id: 'agents',
        label: 'AI Agents',
        plane: 'Orchestration',
        shortRole: 'Stateful Multi-Agent Workflows',
        stack: 'LangGraph · Supervisor Routing · Conditional Branching · HITL Gates',
        icon: Workflow,
      },
      {
        id: 'llms',
        label: 'LLMs',
        plane: 'Inference',
        shortRole: 'Dual-Model & Gateway Serving',
        stack: 'Amazon Bedrock · Azure OpenAI · Claude · vLLM (8B/70B) · LiteLLM',
        icon: Cpu,
      },
    ],
  },
  {
    title: '02 · Grounding & Tooling Plane',
    nodes: [
      {
        id: 'rag',
        label: 'RAG',
        plane: 'Retrieval',
        shortRole: 'Grounded Enterprise Generation',
        stack: 'Semantic Chunking · Hybrid Search · Bedrock Embeddings · SOP Lookup',
        icon: Layers,
      },
      {
        id: 'mcp',
        label: 'MCP Tools',
        plane: 'Tool Calling',
        shortRole: 'Reusable AI-Callable Server APIs',
        stack: 'Model Context Protocol · FortiGate REST · Check Point API · OPA Tiers',
        icon: Network,
      },
      {
        id: 'vectordb',
        label: 'Vector Databases',
        plane: 'Memory & OLAP',
        shortRole: 'Low-Latency Semantic & State Stores',
        stack: 'Amazon OpenSearch · FAISS · ChromaDB · Redis · ClickHouse',
        icon: Database,
      },
    ],
  },
  {
    title: '03 · Cloud, Kubernetes & Observability Plane',
    nodes: [
      {
        id: 'kubernetes',
        label: 'Kubernetes',
        plane: 'Runtime Mesh',
        shortRole: 'Zero-Trust Container Orchestration',
        stack: 'Amazon EKS · Helm · ArgoCD · Istio mTLS · Default-Deny Egress',
        icon: Server,
      },
      {
        id: 'cloud',
        label: 'Cloud Infrastructure',
        plane: 'IaC & DevSecOps',
        shortRole: 'Multi-Tenant AWS & CI/CD Security Gates',
        stack: 'AWS · Terraform · Kafka · Flink · Jenkins · Trivy · SonarQube',
        icon: ShieldCheck,
      },
      {
        id: 'observability',
        label: 'Observability',
        plane: 'LLMOps & Telemetry',
        shortRole: 'Evaluation, Tracing & Monitoring',
        stack: 'LLM-as-a-Judge · Token Optimization · Prometheus · Grafana · ELK',
        icon: Activity,
      },
    ],
  },
];

const ALL_NODES = ECOSYSTEM_LAYERS.flatMap((layer) => layer.nodes);

export default function HeroSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('agents');
  const [portraitError, setPortraitError] = useState<boolean>(false);

  const activeNode = ALL_NODES.find((node) => node.id === selectedNodeId) ?? ALL_NODES[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70 bg-engineering-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Executive Identity, Headline, Above-the-Fold Proof, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Availability & Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-sky-300">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                <span>{PROFILE_CONFIG.availability}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span className="text-slate-400">{PROFILE_CONFIG.location}</span>
            </div>

            {/* Executive Portrait + Identity Lockup */}
            <div className="mt-5 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-700/90 bg-slate-900 shadow-md shadow-black/40 sm:h-[72px] sm:w-[72px]">
                {!portraitError ? (
                  <img
                    src={PROFILE_CONFIG.portraitPath}
                    alt="Pavithra MNS — AI Engineer corporate portrait"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-display text-lg font-bold text-sky-300">
                    PM
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <p className="font-display text-sm font-bold tracking-[0.12em] text-slate-100 uppercase">
                  Pavithra MNS
                </p>
                <p className="mt-0.5 text-xs font-medium text-slate-300">
                  {PROFILE_CONFIG.role} · {PROFILE_CONFIG.experienceYears} at{' '}
                  {PROFILE_CONFIG.company}
                </p>
                <p className="mt-1 font-mono text-[11px] text-cyan-300/90 leading-snug">
                  Agentic AI · Generative AI · RAG · LangGraph · MCP · LLMOps
                </p>
              </div>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.1rem] lg:leading-[1.1] [text-wrap:balance]">
              Engineering Intelligent AI Systems for Real-World Impact.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-[17px]">
              AI Engineer with 2.5 years of engineering experience, building agentic AI
              applications, multi-agent workflows, intelligent investigation platforms and secure
              cloud-native infrastructure.
            </p>

            {/* Immediate Above-the-Fold Verified Production Proof */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-2xl">
              <div className="rounded-xl border border-slate-800/90 bg-[#0b1120]/90 px-4 py-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-2xl font-bold text-sky-400 tabular-nums">
                    70%
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-100">
                    Less Manual LLM Evaluation
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  LangGraph supervisor routing &amp; HITL review platform
                </p>
              </div>

              <div className="rounded-xl border border-slate-800/90 bg-[#0b1120]/90 px-4 py-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-2xl font-bold text-cyan-300 tabular-nums">
                    78%
                  </span>
                  <span className="font-display text-xs font-semibold text-slate-100">
                    Faster CI/CD Release Cycles
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Cut delivery from 2 weeks to 3 days with DevSecOps gates
                </p>
              </div>
            </div>

            {/* 4 Primary & Secondary Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-950/60 hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PROFILE_CONFIG.resumePath}
                download="Pavithra_MNS_Resume.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-600 hover:bg-slate-800/80 transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-700 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>Contact Me</span>
              </button>

              <a
                href={PROFILE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-700 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Layered Interactive AI Engineering Ecosystem Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="surface-glass flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-3">
                <div>
                  <h2 className="font-display text-sm font-semibold text-slate-100">
                    AI Engineering Ecosystem Architecture
                  </h2>
                  <p className="text-xs text-slate-400">
                    Click any component to inspect stack &amp; runtime role
                  </p>
                </div>
                <span className="font-mono text-[11px] text-slate-400 whitespace-nowrap">
                  3 Planes
                </span>
              </div>

              {/* 3-Plane Architectural Stack with Directional Flow */}
              <div className="my-4 space-y-2">
                {ECOSYSTEM_LAYERS.map((layer, layerIdx) => (
                  <div key={layer.title}>
                    <div className="rounded-xl border border-slate-800/80 bg-[#070c18]/90 p-3">
                      <p className="mb-2 font-mono text-[10px] font-medium text-slate-400">
                        {layer.title}
                      </p>
                      <div
                        className={`grid gap-2 ${
                          layer.nodes.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
                        }`}
                      >
                        {layer.nodes.map((node) => {
                          const Icon = node.icon;
                          const isActive = node.id === activeNode.id;
                          return (
                            <button
                              key={node.id}
                              type="button"
                              onClick={() => setSelectedNodeId(node.id)}
                              onMouseEnter={() => setSelectedNodeId(node.id)}
                              aria-pressed={isActive}
                              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-left transition-all duration-150 cursor-pointer ${
                                isActive
                                  ? 'border-sky-400 bg-sky-500/15 text-white shadow-sm shadow-sky-950/50'
                                  : 'border-slate-800 bg-[#0b1120] text-slate-300 hover:border-slate-700 hover:text-white'
                              }`}
                            >
                              <Icon
                                className={`h-3.5 w-3.5 shrink-0 ${
                                  isActive ? 'text-sky-300' : 'text-slate-400'
                                }`}
                                aria-hidden="true"
                              />
                              <div className="min-w-0">
                                <p className="font-display text-[11px] font-semibold truncate">
                                  {node.label}
                                </p>
                                <p className="text-[10px] text-slate-400 truncate">
                                  {node.plane}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {layerIdx < ECOSYSTEM_LAYERS.length - 1 && (
                      <div className="flex justify-center py-0.5" aria-hidden="true">
                        <ArrowDown className="h-3.5 w-3.5 text-sky-500/70" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Active Component Readout */}
              <div className="rounded-xl border border-slate-800/85 bg-[#060b17] p-3.5">
                <p className="font-display text-xs font-semibold text-slate-100">
                  {activeNode.label} — {activeNode.shortRole}
                </p>
                <p className="mt-1 font-mono text-[11px] leading-relaxed text-sky-300/95">
                  {activeNode.stack}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
