import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Lock,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { PipelineStep } from '../data/portfolioData';

interface ProjectDiagramProps {
  projectId: string;
  steps: PipelineStep[];
}

const LAYER_STYLES: Record<NonNullable<PipelineStep['layer']>, string> = {
  ingest: 'border-slate-700/90 bg-slate-900/85 text-slate-100',
  detect: 'border-cyan-500/35 bg-cyan-950/25 text-cyan-100',
  ai: 'border-blue-500/40 bg-blue-950/30 text-blue-100',
  govern: 'border-violet-500/40 bg-violet-950/25 text-violet-100',
  infra: 'border-slate-700/90 bg-[#091122] text-slate-100',
};

const LAYER_LABEL: Record<NonNullable<PipelineStep['layer']>, string> = {
  ingest: 'Ingestion',
  detect: 'Analytics',
  ai: 'AI Engine',
  govern: 'Governance',
  infra: 'Infrastructure',
};

function DiagramNodeButton({
  step,
  indexLabel,
  isActive,
  onSelect,
  className = '',
}: {
  step: PipelineStep;
  indexLabel?: string;
  isActive: boolean;
  onSelect: (id: string) => void;
  className?: string;
}) {
  const layer = step.layer ?? 'infra';
  return (
    <button
      type="button"
      onClick={() => onSelect(step.id)}
      aria-pressed={isActive}
      className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-all duration-150 cursor-pointer ${
        isActive
          ? 'border-sky-400 bg-sky-500/15 text-white shadow-sm shadow-sky-950/60'
          : `${LAYER_STYLES[layer]} hover:border-slate-500`
      } ${className}`}
    >
      <span className="font-mono text-[10px] text-slate-400">
        {indexLabel ? `${indexLabel} · ` : ''}
        {LAYER_LABEL[layer]}
      </span>
      <span className="mt-0.5 font-display text-xs font-semibold leading-snug">
        {step.label}
      </span>
      <span className="mt-0.5 text-[10px] text-sky-300/90 leading-snug">{step.sublabel}</span>
    </button>
  );
}

function StepDetailBar({ step }: { step?: PipelineStep }) {
  if (!step) return null;
  return (
    <div className="mt-3.5 rounded-lg border border-slate-800/90 bg-[#0b1120] px-3.5 py-2.5 text-xs">
      <span className="font-display font-semibold text-sky-300">{step.label}</span>
      <span className="mx-2 text-slate-600" aria-hidden="true">
        ·
      </span>
      <span className="text-slate-300">{step.detail}</span>
    </div>
  );
}

export default function ProjectDiagram({ projectId, steps }: ProjectDiagramProps) {
  const [selectedStepId, setSelectedStepId] = useState<string>(steps[0]?.id ?? '');
  const activeStep = steps.find((s) => s.id === selectedStepId) ?? steps[0];

  const getStep = (id: string) => steps.find((s) => s.id === id);

  // 1. Agentic SOC Automation (5-Plane Streaming + Dual-Model + OPA/HITL Architecture)
  if (projectId === 'agentic-soc-poc') {
    const telemetry = getStep('telemetry');
    const kafka = getStep('kafka');
    const flink = getStep('flink');
    const correlation = getStep('correlation');
    const langgraph = getStep('langgraph');
    const context = getStep('context');
    const opa = getStep('opa');
    const hitl = getStep('hitl');
    const remediation = getStep('remediation');

    return (
      <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Workflow className="h-4 w-4 text-sky-400" aria-hidden="true" />
            <span className="font-display text-xs font-semibold text-slate-200">
              5-Plane Autonomous SOC Architecture Diagram (POC Design)
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Select any plane component to inspect role
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Plane 1 & 2: Ingestion -> Streaming Detection & Clustering */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
            <div className="rounded-lg border border-slate-800/80 bg-[#090f1e] p-3 lg:col-span-5">
              <p className="mb-2 font-mono text-[10px] font-medium text-slate-400 uppercase">
                Plane 1 · Streaming Ingestion
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {telemetry && (
                  <DiagramNodeButton
                    step={telemetry}
                    indexLabel="01"
                    isActive={activeStep?.id === telemetry.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-sky-400/70 sm:block"
                  aria-hidden="true"
                />
                <ArrowDown
                  className="mx-auto h-3.5 w-3.5 shrink-0 text-sky-400/70 sm:hidden"
                  aria-hidden="true"
                />
                {kafka && (
                  <DiagramNodeButton
                    step={kafka}
                    indexLabel="02"
                    isActive={activeStep?.id === kafka.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
              <ArrowRight className="hidden h-4 w-4 text-sky-400 lg:block" />
              <ArrowDown className="h-4 w-4 text-sky-400 lg:hidden" />
            </div>

            <div className="rounded-lg border border-cyan-500/25 bg-[#090f1e] p-3 lg:col-span-6">
              <p className="mb-2 font-mono text-[10px] font-medium text-cyan-300 uppercase">
                Plane 2 · Real-Time Detection &amp; Campaign Clustering
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {flink && (
                  <DiagramNodeButton
                    step={flink}
                    indexLabel="03"
                    isActive={activeStep?.id === flink.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-cyan-400/70 sm:block"
                  aria-hidden="true"
                />
                <ArrowDown
                  className="mx-auto h-3.5 w-3.5 shrink-0 text-cyan-400/70 sm:hidden"
                  aria-hidden="true"
                />
                {correlation && (
                  <DiagramNodeButton
                    step={correlation}
                    indexLabel="04"
                    isActive={activeStep?.id === correlation.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <ArrowDown className="h-4 w-4 text-sky-400" />
          </div>

          {/* Plane 3 & 4-5: Dual-Model AI Investigation -> OPA & HITL Remediation */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
            <div className="rounded-lg border border-blue-500/25 bg-[#090f1e] p-3 lg:col-span-5">
              <p className="mb-2 font-mono text-[10px] font-medium text-sky-300 uppercase">
                Plane 3 · Dual-Model AI Investigation (8B / 70B)
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {langgraph && (
                  <DiagramNodeButton
                    step={langgraph}
                    indexLabel="05"
                    isActive={activeStep?.id === langgraph.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-blue-400/70 sm:block"
                  aria-hidden="true"
                />
                <ArrowDown
                  className="mx-auto h-3.5 w-3.5 shrink-0 text-blue-400/70 sm:hidden"
                  aria-hidden="true"
                />
                {context && (
                  <DiagramNodeButton
                    step={context}
                    indexLabel="06"
                    isActive={activeStep?.id === context.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
              <ArrowRight className="hidden h-4 w-4 text-violet-400 lg:block" />
              <ArrowDown className="h-4 w-4 text-violet-400 lg:hidden" />
            </div>

            <div className="rounded-lg border border-violet-500/25 bg-[#090f1e] p-3 lg:col-span-6">
              <p className="mb-2 font-mono text-[10px] font-medium text-violet-300 uppercase">
                Planes 4–5 · OPA Policy Tiers, HITL &amp; Remediation
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {opa && (
                  <DiagramNodeButton
                    step={opa}
                    indexLabel="07"
                    isActive={activeStep?.id === opa.id}
                    onSelect={setSelectedStepId}
                  />
                )}
                {hitl && (
                  <DiagramNodeButton
                    step={hitl}
                    indexLabel="08"
                    isActive={activeStep?.id === hitl.id}
                    onSelect={setSelectedStepId}
                  />
                )}
                {remediation && (
                  <DiagramNodeButton
                    step={remediation}
                    indexLabel="09"
                    isActive={activeStep?.id === remediation.id}
                    onSelect={setSelectedStepId}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <StepDetailBar step={activeStep} />
      </div>
    );
  }

  // 2. Agentic AI Firewall Audit System (MCP Server + Multi-Vendor Tool Branching)
  if (projectId === 'mcp-firewall-audit') {
    const request = getStep('request');
    const llm = getStep('llm');
    const langgraph = getStep('langgraph-audit');
    const mcp = getStep('mcp-server');
    const fwApis = getStep('fw-apis');
    const analysis = getStep('policy-analysis');
    const report = getStep('report');

    return (
      <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Network className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            <span className="font-display text-xs font-semibold text-slate-200">
              MCP Client–Server &amp; Multi-Vendor Conditional Graph
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Click any component to inspect protocol &amp; API flow
          </span>
        </div>

        <div className="space-y-3">
          {/* Orchestration & Reasoning Layer */}
          <div className="rounded-lg border border-blue-500/25 bg-[#090f1e] p-3">
            <p className="mb-2 font-mono text-[10px] font-medium text-sky-300 uppercase">
              Agentic Reasoning &amp; Conditional Branching
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              {request && (
                <DiagramNodeButton
                  step={request}
                  indexLabel="01"
                  isActive={activeStep?.id === request.id}
                  onSelect={setSelectedStepId}
                  className="flex-1"
                />
              )}
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-sky-400/70 sm:block" aria-hidden="true" />
              <ArrowDown className="mx-auto h-3.5 w-3.5 shrink-0 text-sky-400/70 sm:hidden" aria-hidden="true" />
              {llm && (
                <DiagramNodeButton
                  step={llm}
                  indexLabel="02"
                  isActive={activeStep?.id === llm.id}
                  onSelect={setSelectedStepId}
                  className="flex-1"
                />
              )}
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-sky-400/70 sm:block" aria-hidden="true" />
              <ArrowDown className="mx-auto h-3.5 w-3.5 shrink-0 text-sky-400/70 sm:hidden" aria-hidden="true" />
              {langgraph && (
                <DiagramNodeButton
                  step={langgraph}
                  indexLabel="03"
                  isActive={activeStep?.id === langgraph.id}
                  onSelect={setSelectedStepId}
                  className="flex-1"
                />
              )}
            </div>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <ArrowDown className="h-4 w-4 text-cyan-400" />
          </div>

          {/* MCP Tool Server & Vendor Branching */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
            <div className="rounded-lg border border-violet-500/25 bg-[#090f1e] p-3 lg:col-span-6">
              <p className="mb-2 font-mono text-[10px] font-medium text-violet-300 uppercase">
                Model Context Protocol (MCP) Boundary
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {mcp && (
                  <DiagramNodeButton
                    step={mcp}
                    indexLabel="04"
                    isActive={activeStep?.id === mcp.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-violet-400/70 sm:block" aria-hidden="true" />
                <ArrowDown className="mx-auto h-3.5 w-3.5 shrink-0 text-violet-400/70 sm:hidden" aria-hidden="true" />
                {fwApis && (
                  <DiagramNodeButton
                    step={fwApis}
                    indexLabel="05"
                    isActive={activeStep?.id === fwApis.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
              <ArrowRight className="hidden h-4 w-4 text-cyan-400 lg:block" />
              <ArrowDown className="h-4 w-4 text-cyan-400 lg:hidden" />
            </div>

            <div className="rounded-lg border border-cyan-500/25 bg-[#090f1e] p-3 lg:col-span-5">
              <p className="mb-2 font-mono text-[10px] font-medium text-cyan-300 uppercase">
                Policy Synthesis &amp; Compliance Output
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {analysis && (
                  <DiagramNodeButton
                    step={analysis}
                    indexLabel="06"
                    isActive={activeStep?.id === analysis.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-cyan-400/70 sm:block" aria-hidden="true" />
                <ArrowDown className="mx-auto h-3.5 w-3.5 shrink-0 text-cyan-400/70 sm:hidden" aria-hidden="true" />
                {report && (
                  <DiagramNodeButton
                    step={report}
                    indexLabel="07"
                    isActive={activeStep?.id === report.id}
                    onSelect={setSelectedStepId}
                    className="flex-1"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <StepDetailBar step={activeStep} />
      </div>
    );
  }

  // 3. Human-in-the-Loop AI Evaluation Platform
  if (projectId === 'hitl-eval-platform') {
    const qInput = getStep('question-input');
    const supervisor = getStep('supervisor');
    const classification = getStep('classification');
    const scoring = getStep('scoring-agents');
    const results = getStep('eval-results');
    const review = getStep('human-review');
    const approval = getStep('approval');

    return (
      <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-sky-400" aria-hidden="true" />
            <span className="font-display text-xs font-semibold text-slate-200">
              Supervisor-Agent Routing &amp; HITL Governance Architecture
            </span>
          </div>
          <span className="font-mono text-[11px] font-medium text-sky-300">
            70% Manual Effort Reduction
          </span>
        </div>

        <div className="space-y-3">
          {/* Supervisor Routing Layer */}
          <div className="rounded-lg border border-blue-500/25 bg-[#090f1e] p-3">
            <p className="mb-2 font-mono text-[10px] font-medium text-sky-300 uppercase">
              Automated Classification &amp; Multi-Pipeline LLM Scoring (LangGraph + FastAPI)
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {qInput && (
                <DiagramNodeButton
                  step={qInput}
                  indexLabel="01"
                  isActive={activeStep?.id === qInput.id}
                  onSelect={setSelectedStepId}
                />
              )}
              {supervisor && (
                <DiagramNodeButton
                  step={supervisor}
                  indexLabel="02"
                  isActive={activeStep?.id === supervisor.id}
                  onSelect={setSelectedStepId}
                />
              )}
              {classification && (
                <DiagramNodeButton
                  step={classification}
                  indexLabel="03"
                  isActive={activeStep?.id === classification.id}
                  onSelect={setSelectedStepId}
                />
              )}
              {scoring && (
                <DiagramNodeButton
                  step={scoring}
                  indexLabel="04"
                  isActive={activeStep?.id === scoring.id}
                  onSelect={setSelectedStepId}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <ArrowDown className="h-4 w-4 text-violet-400" />
          </div>

          {/* Full-Stack Persistence & RBAC Review */}
          <div className="rounded-lg border border-violet-500/25 bg-[#090f1e] p-3">
            <p className="mb-2 font-mono text-[10px] font-medium text-violet-300 uppercase">
              Full-Stack Persistence, JWT / RBAC Review &amp; Multi-Stage Approval
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {results && (
                <DiagramNodeButton
                  step={results}
                  indexLabel="05"
                  isActive={activeStep?.id === results.id}
                  onSelect={setSelectedStepId}
                />
              )}
              {review && (
                <DiagramNodeButton
                  step={review}
                  indexLabel="06"
                  isActive={activeStep?.id === review.id}
                  onSelect={setSelectedStepId}
                />
              )}
              {approval && (
                <DiagramNodeButton
                  step={approval}
                  indexLabel="07"
                  isActive={activeStep?.id === approval.id}
                  onSelect={setSelectedStepId}
                />
              )}
            </div>
          </div>
        </div>

        <StepDetailBar step={activeStep} />
      </div>
    );
  }

  // 4. AWS Multi-Tenant Cloud Platform (Zero-Trust VPC + EKS + LiteLLM + Bedrock + OpenSearch)
  if (projectId === 'aws-multi-tenant-platform') {
    const wafVpc = getStep('waf-vpc');
    const eksIstio = getStep('eks-istio');
    const iamIrsa = getStep('iam-irsa');
    const litellm = getStep('litellm');
    const bedrock = getStep('bedrock');
    const opensearch = getStep('opensearch');
    const rdsS3 = getStep('rds-s3');

    return (
      <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-sky-400" aria-hidden="true" />
            <span className="font-display text-xs font-semibold text-slate-200">
              Multi-Tenant AWS VPC, Zero-Trust EKS &amp; Bedrock RAG Architecture
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            Provisioned via Modular Terraform (Dev · Staging · Prod)
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Zone 1: Edge, VPC & EKS Workload Security */}
          <div className="rounded-lg border border-violet-500/25 bg-[#090f1e] p-3 lg:col-span-4">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-medium text-violet-300 uppercase">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Perimeter &amp; EKS Zero-Trust</span>
            </div>
            <div className="space-y-2">
              {wafVpc && (
                <DiagramNodeButton
                  step={wafVpc}
                  indexLabel="01"
                  isActive={activeStep?.id === wafVpc.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {eksIstio && (
                <DiagramNodeButton
                  step={eksIstio}
                  indexLabel="02"
                  isActive={activeStep?.id === eksIstio.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {iamIrsa && (
                <DiagramNodeButton
                  step={iamIrsa}
                  indexLabel="03"
                  isActive={activeStep?.id === iamIrsa.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
            <ArrowRight className="hidden h-4 w-4 text-sky-400 lg:block" />
            <ArrowDown className="h-4 w-4 text-sky-400 lg:hidden" />
          </div>

          {/* Zone 2: LiteLLM Inference Gateway & Amazon Bedrock */}
          <div className="rounded-lg border border-blue-500/25 bg-[#090f1e] p-3 lg:col-span-3">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-medium text-sky-300 uppercase">
              <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
              <span>AI Gateway &amp; Models</span>
            </div>
            <div className="space-y-2">
              {litellm && (
                <DiagramNodeButton
                  step={litellm}
                  indexLabel="04"
                  isActive={activeStep?.id === litellm.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              <div className="flex justify-center" aria-hidden="true">
                <ArrowDown className="h-3.5 w-3.5 text-sky-400/70" />
              </div>
              {bedrock && (
                <DiagramNodeButton
                  step={bedrock}
                  indexLabel="05"
                  isActive={activeStep?.id === bedrock.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
            <ArrowRight className="hidden h-4 w-4 text-cyan-400 lg:block" />
            <ArrowDown className="h-4 w-4 text-cyan-400 lg:hidden" />
          </div>

          {/* Zone 3: RAG Vector Search & Cloud Persistence */}
          <div className="rounded-lg border border-cyan-500/25 bg-[#090f1e] p-3 lg:col-span-3">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-medium text-cyan-300 uppercase">
              <Database className="h-3.5 w-3.5" aria-hidden="true" />
              <span>RAG &amp; Data Plane</span>
            </div>
            <div className="space-y-2">
              {opensearch && (
                <DiagramNodeButton
                  step={opensearch}
                  indexLabel="06"
                  isActive={activeStep?.id === opensearch.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {rdsS3 && (
                <DiagramNodeButton
                  step={rdsS3}
                  indexLabel="07"
                  isActive={activeStep?.id === rdsS3.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>

        <StepDetailBar step={activeStep} />
      </div>
    );
  }

  // 5. CI/CD Pipeline & DevSecOps Automation (Grouped Security Gate Barrier)
  if (projectId === 'cicd-devsecops-automation') {
    const git = getStep('git');
    const build = getStep('build');
    const tests = getStep('unit-tests');
    const sonar = getStep('sonarqube');
    const trivy = getStep('trivy');
    const owasp = getStep('owasp');
    const docker = getStep('docker-img');
    const k8s = getStep('k8s-deploy');
    const deploy = getStep('live-deployment');

    return (
      <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            <span className="font-display text-xs font-semibold text-slate-200">
              Shift-Left DevSecOps Pipeline &amp; Mandatory Security Gates
            </span>
          </div>
          <span className="font-mono text-[11px] font-medium text-cyan-300">
            78% Cycle Reduction (2 Weeks → 3 Days)
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Stage 1: Source & CI */}
          <div className="rounded-lg border border-slate-800/80 bg-[#090f1e] p-3 lg:col-span-3">
            <p className="mb-2 font-mono text-[10px] font-medium text-slate-400 uppercase">
              01 · Source &amp; Build
            </p>
            <div className="space-y-2">
              {git && (
                <DiagramNodeButton
                  step={git}
                  isActive={activeStep?.id === git.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {build && (
                <DiagramNodeButton
                  step={build}
                  isActive={activeStep?.id === build.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {tests && (
                <DiagramNodeButton
                  step={tests}
                  isActive={activeStep?.id === tests.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
            <ArrowRight className="hidden h-4 w-4 text-violet-400 lg:block" />
            <ArrowDown className="h-4 w-4 text-violet-400 lg:hidden" />
          </div>

          {/* Stage 2: Mandatory DevSecOps Fail-Fast Gates */}
          <div className="rounded-lg border border-violet-500/35 bg-[#090f1e] p-3 lg:col-span-4">
            <p className="mb-2 font-mono text-[10px] font-medium text-violet-300 uppercase">
              02 · Mandatory Fail-Fast Security Gates
            </p>
            <div className="space-y-2">
              {sonar && (
                <DiagramNodeButton
                  step={sonar}
                  isActive={activeStep?.id === sonar.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {trivy && (
                <DiagramNodeButton
                  step={trivy}
                  isActive={activeStep?.id === trivy.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {owasp && (
                <DiagramNodeButton
                  step={owasp}
                  isActive={activeStep?.id === owasp.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-1" aria-hidden="true">
            <ArrowRight className="hidden h-4 w-4 text-sky-400 lg:block" />
            <ArrowDown className="h-4 w-4 text-sky-400 lg:hidden" />
          </div>

          {/* Stage 3: Hardened Artifact & Kubernetes CD */}
          <div className="rounded-lg border border-blue-500/25 bg-[#090f1e] p-3 lg:col-span-3">
            <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-medium text-sky-300 uppercase">
              <Server className="h-3.5 w-3.5" aria-hidden="true" />
              <span>03 · Artifact &amp; K8s CD</span>
            </div>
            <div className="space-y-2">
              {docker && (
                <DiagramNodeButton
                  step={docker}
                  isActive={activeStep?.id === docker.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {k8s && (
                <DiagramNodeButton
                  step={k8s}
                  isActive={activeStep?.id === k8s.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
              {deploy && (
                <DiagramNodeButton
                  step={deploy}
                  isActive={activeStep?.id === deploy.id}
                  onSelect={setSelectedStepId}
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>

        <StepDetailBar step={activeStep} />
      </div>
    );
  }

  // Fallback linear layout
  return (
    <div className="rounded-xl border border-slate-800/85 bg-[#060b16] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center gap-2">
            <DiagramNodeButton
              step={step}
              indexLabel={String(idx + 1).padStart(2, '0')}
              isActive={activeStep?.id === step.id}
              onSelect={setSelectedStepId}
            />
            {idx < steps.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-600" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <StepDetailBar step={activeStep} />
    </div>
  );
}
