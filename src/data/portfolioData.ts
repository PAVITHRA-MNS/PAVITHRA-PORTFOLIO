export interface ProfileConfig {
  name: string;
  role: string;
  subRole: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  experienceYears: string;
  company: string;
  tenure: string;
  availability: string;
  positioningStatement: string;
  resumePath: string;
  portraitPath: string;
  // Update these URLs to point to your live LinkedIn and GitHub profiles before deploying.
  linkedinUrl: string;
  githubUrl: string;
}

export const PROFILE_CONFIG: ProfileConfig = {
  name: 'Pavithra MNS',
  role: 'AI Engineer',
  subRole: 'Agentic AI · Generative AI · RAG · LangGraph · MCP · LLMOps',
  location: 'Chennai, Tamil Nadu, India',
  email: 'mns.pavithra@gmail.com',
  phone: '+91 88071 28628',
  phoneHref: 'tel:+918807128628',
  experienceYears: '2.5 Years',
  company: 'Sify Technologies Limited',
  tenure: 'July 2024 – Present',
  availability: 'Open to AI Engineering Opportunities',
  positioningStatement:
    'I build intelligent, secure and scalable AI systems — from multi-agent orchestration and RAG pipelines to enterprise-grade AI infrastructure.',
  resumePath: '/resume.pdf',
  portraitPath: '/assets/aistudio/Confident_Professional_Office_Portrait_f74a810d.png',
  linkedinUrl: 'https://www.linkedin.com/in/pavithra-mns-398884258',
  githubUrl: 'https://github.com/pavithra-mns',
};

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  context: string;
  category: 'Demonstrated Outcome' | 'Architecture & POC Capability';
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'eval-effort',
    value: '70%',
    label: 'Reduction in manual LLM evaluation effort',
    context: 'Achieved via LangGraph supervisor-agent routing & HITL review platform',
    category: 'Demonstrated Outcome',
  },
  {
    id: 'cicd-cycle',
    value: '78%',
    label: 'Reduction in CI/CD release cycles',
    context: 'Accelerated delivery from 2 weeks to 3 days across client pipelines',
    category: 'Demonstrated Outcome',
  },
  {
    id: 'soc-telemetry',
    value: '6+',
    label: 'Security & infrastructure telemetry sources',
    context: 'Integrated across firewalls, EDR, identity, and cloud logs in SOC POC',
    category: 'Architecture & POC Capability',
  },
  {
    id: 'soc-detection',
    value: '5',
    label: 'Detection techniques designed for analytics',
    context: 'Rule-based, CEP, UEBA, behavioral analytics, and threat intel correlation',
    category: 'Architecture & POC Capability',
  },
];

export const ABOUT_PARAGRAPHS: string[] = [
  'I am an AI Engineer at Sify Technologies Limited, combining cloud and DevSecOps engineering experience with hands-on development of Generative AI and Agentic AI systems.',
  'My work focuses on multi-agent architectures, LangGraph orchestration, RAG pipelines, MCP-enabled integrations, LLM evaluation and AI infrastructure.',
  'I enjoy solving complex engineering problems by connecting intelligent AI workflows with secure, scalable infrastructure. My experience spans Python, FastAPI, LangChain, LangGraph, AWS, Kubernetes, Terraform, CI/CD and Linux.',
  'My goal is to engineer reliable, production-oriented AI systems that deliver measurable business and operational value.',
];

export interface SkillCategory {
  id: string;
  title: string;
  group: 'genai' | 'llmops-data' | 'cloud-devops';
  summary: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-backend',
    title: 'Programming & Backend',
    group: 'genai',
    summary: 'High-concurrency APIs, typed schemas, and systems automation.',
    skills: [
      'Python',
      'Bash',
      'HCL',
      'FastAPI',
      'Flask',
      'REST APIs',
      'Pydantic',
      'Microservices',
      'API Integration',
      'SQL',
      'PowerShell',
    ],
  },
  {
    id: 'genai-agentic',
    title: 'Generative AI & Agentic Systems',
    group: 'genai',
    summary: 'Stateful multi-agent graphs, dynamic tool calling, and guardrails.',
    skills: [
      'LLMs',
      'Generative AI',
      'Agentic AI',
      'AI Agents',
      'Multi-Agent Orchestration',
      'LangChain',
      'LangGraph',
      'MCP',
      'OpenAI SDK',
      'Hugging Face Transformers',
      'RAG',
      'Tool Calling',
      'Prompt Engineering',
      'AI Guardrails',
    ],
  },
  {
    id: 'llms-llmops',
    title: 'LLMs & LLMOps',
    group: 'llmops-data',
    summary: 'Multi-provider routing, automated evaluation, and cost observability.',
    skills: [
      'Azure OpenAI',
      'Amazon Bedrock',
      'Groq',
      'Claude',
      'LiteLLM',
      'Multi-LLM Routing',
      'LLM Evaluation',
      'LLM-as-a-Judge',
      'Model Evaluation',
      'AI Observability',
      'Tracing',
      'Token & Cost Optimization',
    ],
  },
  {
    id: 'vector-data',
    title: 'Vector Search & Data Engineering',
    group: 'llmops-data',
    summary: 'Hybrid semantic retrieval, real-time OLAP, and low-latency state stores.',
    skills: [
      'FAISS',
      'ChromaDB',
      'Amazon OpenSearch',
      'Vector Databases',
      'Embeddings',
      'Semantic Search',
      'Similarity Search',
      'Hybrid Search',
      'Redis',
      'ClickHouse',
      'PostgreSQL',
      'MySQL',
      'Pandas',
      'NumPy',
    ],
  },
  {
    id: 'full-stack',
    title: 'Full Stack',
    group: 'genai',
    summary: 'Human-in-the-loop review interfaces and full-stack service APIs.',
    skills: ['React.js', 'Node.js', 'Express.js'],
  },
  {
    id: 'containers-orchestration',
    title: 'Containers & Orchestration',
    group: 'cloud-devops',
    summary: 'Production Kubernetes workloads, Helm packaging, and GitOps delivery.',
    skills: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
  },
  {
    id: 'cloud-iac',
    title: 'Cloud & Infrastructure as Code',
    group: 'cloud-devops',
    summary: 'Modular multi-environment AWS infrastructure and automated provisioning.',
    skills: ['AWS', 'Terraform (Modular Infrastructure, Workspaces)', 'Ansible'],
  },
  {
    id: 'cicd-devsecops',
    title: 'CI/CD & DevSecOps',
    group: 'cloud-devops',
    summary: 'Declarative pipelines with automated SAST, SCA, and container gates.',
    skills: [
      'Jenkins',
      'GitHub Actions',
      'Gitea',
      'Harness',
      'SonarQube',
      'Trivy',
      'OWASP Dependency-Check',
      'SAST',
    ],
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    group: 'cloud-devops',
    summary: 'Telemetry collection, centralized logging, and root cause diagnostics.',
    skills: [
      'Prometheus',
      'Grafana',
      'Zabbix',
      'AWS CloudWatch',
      'ELK Stack',
      'Incident Analysis',
      'Root Cause Analysis',
    ],
  },
  {
    id: 'streaming-os',
    title: 'Streaming & Operating Systems',
    group: 'llmops-data',
    summary: 'High-throughput event streaming and enterprise Linux administration.',
    skills: [
      'Apache Kafka',
      'Amazon MSK',
      'Apache Flink',
      'Event-Driven Architecture',
      'Linux (RHEL, SUSE, Ubuntu, Rocky Linux)',
      'Git',
      'DNS',
      'NGINX',
    ],
  },
];

export interface ExperienceMilestone {
  phase: string;
  period: string;
  title: string;
  description: string;
  linkedProjectIds: string[];
}

export const EXPERIENCE_INFO = {
  company: 'Sify Technologies Limited',
  location: 'Chennai, Tamil Nadu, India',
  role: 'AI Engineer (Cloud, DevSecOps & Agentic AI)',
  duration: 'July 2024 – Present',
  summary:
    'Progressed from cloud-native AWS infrastructure and DevSecOps pipeline engineering into architecting and implementing enterprise Agentic AI, MCP tool ecosystems, RAG retrieval systems, and LLMOps governance platforms.',
  milestones: [
    {
      phase: 'Phase 03 · Autonomous & Agentic AI Architectures',
      period: 'Current Focus',
      title: 'Multi-Agent Orchestration, MCP & Autonomous Security Analytics',
      description:
        'Architecting stateful LangGraph workflows, Model Context Protocol (MCP) servers for multi-vendor security automation, and a 5-plane Agentic SOC POC combining Kafka/Flink streaming with dual-model vLLM investigation.',
      linkedProjectIds: ['agentic-soc-poc', 'mcp-firewall-audit'],
    },
    {
      phase: 'Phase 02 · LLMOps, Evaluation & Secure AI Platforms',
      period: '2024 – 2025',
      title: 'Human-in-the-Loop Evaluation & Multi-Tenant Bedrock Gateways',
      description:
        'Delivered a full-stack HITL evaluation platform cutting manual review workload by 70%, and engineered a multi-tenant AWS EKS platform integrating Amazon Bedrock, LiteLLM guardrails, and OpenSearch RAG.',
      linkedProjectIds: ['hitl-eval-platform', 'aws-multi-tenant-platform'],
    },
    {
      phase: 'Phase 01 · Cloud & DevSecOps Foundations',
      period: 'July 2024',
      title: 'Zero-Trust Infrastructure & Automated Security Delivery',
      description:
        'Built modular Terraform AWS foundations and standardized declarative Jenkins/GitHub Actions CI/CD pipelines with SonarQube, Trivy, and OWASP gates, reducing release cycles by 78% (2 weeks to 3 days).',
      linkedProjectIds: ['cicd-devsecops-automation'],
    },
  ] as ExperienceMilestone[],
};

export interface PipelineStep {
  id: string;
  label: string;
  sublabel: string;
  detail: string;
  layer?: 'ingest' | 'detect' | 'ai' | 'govern' | 'infra';
}

export interface ProjectTargetMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  category: 'agentic' | 'llmops' | 'cloud';
  classification: 'POC & Reference Architecture' | 'Production Engineering';
  title: string;
  subtitle: string;
  businessProblem: string;
  technicalSolution: string;
  architectureOverview: string;
  techStack: string[];
  contributions: string[];
  outcomesTitle: string;
  outcomesNote?: string;
  outcomes: string[];
  targetMetrics?: ProjectTargetMetric[];
  pipelineSteps: PipelineStep[];
  deepDive: {
    heading: string;
    items: { title: string; detail: string }[];
  }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'agentic-soc-poc',
    index: '01',
    category: 'agentic',
    classification: 'POC & Reference Architecture',
    title: 'AI-Driven Incident Intelligence System',
    subtitle: 'Agentic SOC Automation – POC',
    businessProblem:
      'Enterprise Security Operations Centers face severe alert fatigue across fragmented firewall, EDR, and identity telemetry, resulting in slow manual triage and inconsistent incident correlation.',
    technicalSolution:
      'Designed a five-plane autonomous SOC analytics architecture spanning streaming ingestion, real-time multi-technique detection, dual-model LangGraph AI investigation, analyst assistance, and OPA-governed response orchestration.',
    architectureOverview:
      'Kafka ingests 6+ telemetry streams into an Apache Flink detection engine (5s, 30m, 24h windows), consolidating alerts into campaigns for 8B/70B LangGraph investigation backed by Redis, ClickHouse, RAG SOPs, and OPA blast-radius gates.',
    techStack: [
      'Python',
      'LangGraph',
      'LangChain',
      'Apache Kafka',
      'Apache Flink',
      'vLLM',
      'ClickHouse',
      'Redis',
      'OPA',
      'FastAPI',
      'Fortinet',
      'CrowdStrike',
    ],
    contributions: [
      'Designed telemetry integration across 6+ security and infrastructure sources.',
      'Designed Kafka-based streaming ingestion and Flink-based detection architecture.',
      'Integrated five detection approaches: rule-based detection, CEP, UEBA, behavioral analytics and threat intelligence correlation.',
      'Designed dual-model investigation architecture using 8B and 70B parameter LLMs.',
      'Designed LangGraph-based agent orchestration and RAG-powered SOP retrieval.',
      'Used Redis for entity context and ClickHouse for temporal analytics.',
      'Designed OPA-based authorization with four blast-radius tiers (Tier 0–3) across Fortinet, CrowdStrike, and Active Directory.',
      'Included human-in-the-loop approval for high-risk remediation actions.',
      'Designed campaign-based alert clustering (up to 2,000 signals) and grammar-constrained JSON generation using vLLM Outlines.',
    ],
    outcomesTitle: 'Architecture & POC Design Targets (Not Verified Production Claims)',
    outcomesNote:
      'This system is a POC and reference architecture. All throughput and latency figures below represent design targets for fault-tolerant processing and graceful degradation.',
    outcomes: [
      '5-plane autonomous SOC architecture spanning ingestion, detection, AI investigation, analyst assistance, and response.',
      'Entity behavioral analysis across 5-second, 30-minute, and 24-hour sliding time windows.',
      'Consolidates up to 2,000 correlated security signals into a single structured LLM investigation via vLLM Outlines.',
    ],
    targetMetrics: [
      { label: 'Target Throughput', value: '500K events/sec' },
      { label: 'Target Noise Reduction', value: '99%+ volume' },
      { label: 'Target UEBA Scoring', value: '< 15 ms' },
      { label: 'Target ClickHouse Query', value: '< 35 ms' },
      { label: 'Target Investigation', value: '< 1.5 sec' },
      { label: 'Target E2E Remediation', value: '< 3 sec' },
    ],
    pipelineSteps: [
      {
        id: 'telemetry',
        label: 'Telemetry Sources',
        sublabel: '6+ Feeds',
        detail: 'Fortinet firewalls, CrowdStrike EDR, Active Directory, cloud & network logs.',
        layer: 'ingest',
      },
      {
        id: 'kafka',
        label: 'Kafka',
        sublabel: 'Streaming Bus',
        detail: 'Partitioned, fault-tolerant ingestion backbone targeting 500K events/sec.',
        layer: 'ingest',
      },
      {
        id: 'flink',
        label: 'Flink Detection',
        sublabel: '5 Techniques',
        detail: 'Rule-based, CEP, UEBA, behavioral analytics & threat intel across 5s/30m/24h windows.',
        layer: 'detect',
      },
      {
        id: 'correlation',
        label: 'Alert Correlation',
        sublabel: 'Campaign Clustering',
        detail: 'Consolidates up to 2,000 correlated signals into one campaign incident.',
        layer: 'detect',
      },
      {
        id: 'langgraph',
        label: 'LangGraph Agents',
        sublabel: '8B / 70B vLLM',
        detail: 'Dual-model routing with vLLM Outlines for grammar-constrained JSON output.',
        layer: 'ai',
      },
      {
        id: 'context',
        label: 'RAG / Redis / ClickHouse',
        sublabel: 'Memory & SOPs',
        detail: 'Redis entity state, ClickHouse temporal OLAP (<35 ms target), and RAG SOP lookup.',
        layer: 'ai',
      },
      {
        id: 'opa',
        label: 'OPA Authorization',
        sublabel: '4 Blast Tiers',
        detail: 'Open Policy Agent enforces Tier 0–3 blast-radius policies before execution.',
        layer: 'govern',
      },
      {
        id: 'hitl',
        label: 'HITL Approval',
        sublabel: 'Analyst Gate',
        detail: 'Human-in-the-loop sign-off required for high-risk containment actions.',
        layer: 'govern',
      },
      {
        id: 'remediation',
        label: 'Security Remediation',
        sublabel: 'Multi-Vendor',
        detail: 'Executes scoped containment across Fortinet, CrowdStrike, and Active Directory.',
        layer: 'infra',
      },
    ],
    deepDive: [
      {
        heading: 'Five-Plane Architecture & Detection Engine',
        items: [
          {
            title: 'Plane 1–2: Ingestion & Streaming Detection',
            detail:
              'Apache Kafka decouples 6+ heterogeneous security feeds into Apache Flink stateful operators evaluating 5s, 30m, and 24h windows.',
          },
          {
            title: 'Plane 3: Dual-Model Investigation (8B + 70B)',
            detail:
              'Fast 8B model handles initial triage and schema extraction via vLLM Outlines; 70B reasoning model performs deep root-cause synthesis with RAG SOP retrieval.',
          },
          {
            title: 'Plane 4–5: Analyst Assistance & OPA Governance',
            detail:
              'Four blast-radius tiers (Tier 0 read-only to Tier 3 high-impact isolation) ensure automated playbooks never bypass OPA rules or HITL approvals.',
          },
        ],
      },
    ],
  },
  {
    id: 'mcp-firewall-audit',
    index: '02',
    category: 'agentic',
    classification: 'Production Engineering',
    title: 'Agentic AI Firewall Audit System',
    subtitle: 'Multi-Vendor Security Automation',
    businessProblem:
      'Auditing firewall rulebases across heterogeneous vendors (FortiGate and Check Point) requires manual API queries, inconsistent rule parsing, and error-prone cross-vendor compliance checks.',
    technicalSolution:
      'Built an agentic firewall audit application using Model Context Protocol (MCP) and LangGraph, exposing vendor API operations as reusable AI-callable tools within stateful, conditionally branched audit graphs.',
    architectureOverview:
      'User requests trigger an LLM-backed LangGraph workflow that invokes standardized tools hosted on a modular MCP server to query FortiGate REST and Check Point Management APIs and synthesize unified compliance reports.',
    techStack: [
      'Python',
      'Model Context Protocol (MCP)',
      'LangGraph',
      'Claude',
      'OpenAI',
      'Tool Calling',
      'FortiGate REST API',
      'Check Point Management API',
    ],
    contributions: [
      'Built a fully agentic firewall audit application using Model Context Protocol (MCP) and LangGraph.',
      'Integrated FortiGate REST API and Check Point Management API endpoints.',
      'Implemented dynamic tool calling for extracting firewall policies, rules, and configurations in real time.',
      'Developed stateful LangGraph workflows with conditional branching across multi-vendor environments.',
      'Generated consolidated compliance reports highlighting policy posture and anomalies.',
      'Designed reusable MCP server architecture exposing firewall audit operations as structured AI-callable tools.',
    ],
    outcomesTitle: 'Key Engineering Outcomes',
    outcomes: [
      'Standardized multi-vendor firewall inspection behind a single modular MCP server interface.',
      'Automated real-time policy extraction and compliance reporting across FortiGate and Check Point.',
      'Decoupled LLM reasoning logic from vendor-specific REST/Management API implementations.',
    ],
    pipelineSteps: [
      {
        id: 'request',
        label: 'User Request',
        sublabel: 'Audit Scope',
        detail: 'Security engineer initiates a compliance or rule-hygiene audit query.',
        layer: 'ingest',
      },
      {
        id: 'llm',
        label: 'LLM',
        sublabel: 'Claude / OpenAI',
        detail: 'Plans required audit checks and determines which vendor tools to invoke.',
        layer: 'ai',
      },
      {
        id: 'langgraph-audit',
        label: 'LangGraph Agent',
        sublabel: 'Stateful Graph',
        detail: 'Maintains audit state and routes execution via conditional branching.',
        layer: 'ai',
      },
      {
        id: 'mcp-server',
        label: 'MCP Server',
        sublabel: 'Tool Registry',
        detail: 'Exposes typed, reusable firewall inspection tools via Model Context Protocol.',
        layer: 'govern',
      },
      {
        id: 'fw-apis',
        label: 'Firewall API Tools',
        sublabel: 'FortiGate & Check Point',
        detail: 'Executes live REST and Management API calls to fetch rules and NAT/policy objects.',
        layer: 'infra',
      },
      {
        id: 'policy-analysis',
        label: 'Policy Analysis',
        sublabel: 'Cross-Vendor',
        detail: 'Evaluates shadow rules, permissive policies, and compliance posture.',
        layer: 'detect',
      },
      {
        id: 'report',
        label: 'Compliance Report',
        sublabel: 'Consolidated Output',
        detail: 'Produces structured, actionable multi-vendor audit findings.',
        layer: 'govern',
      },
    ],
    deepDive: [
      {
        heading: 'MCP Tooling & Stateful Graph Design',
        items: [
          {
            title: 'Reusable MCP Server Boundary',
            detail:
              'Firewall extraction operations are encapsulated as structured MCP tools with strict parameter schemas, allowing multiple agents or LLM clients to reuse them safely.',
          },
          {
            title: 'Conditional Vendor Branching',
            detail:
              'LangGraph state nodes dynamically branch based on target appliance vendor, authentication context, and rule pagination before merging findings.',
          },
        ],
      },
    ],
  },
  {
    id: 'hitl-eval-platform',
    index: '03',
    category: 'llmops',
    classification: 'Production Engineering',
    title: 'Human-in-the-Loop AI Evaluation Platform',
    subtitle: 'LLM Evaluation & Review Automation',
    businessProblem:
      'Evaluating diverse LLM outputs manually across specialized domains was time-consuming, inconsistent, and lacked structured governance for multi-stage human sign-off.',
    technicalSolution:
      'Engineered a full-stack Human-in-the-Loop evaluation platform powered by a LangGraph supervisor-agent architecture that classifies prompts, routes them to specialized scoring pipelines, and enforces RBAC human review.',
    architectureOverview:
      'Incoming questions enter a LangGraph supervisor agent that classifies domain/task complexity and dispatches to specialized scoring agents; results persist in MySQL via FastAPI/Node.js for JWT-authenticated RBAC human review and approval.',
    techStack: [
      'LangGraph',
      'FastAPI',
      'LLMs',
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'RBAC',
    ],
    contributions: [
      'Built a supervisor-agent architecture using LangGraph for automated evaluation orchestration.',
      'Implemented dynamic question classification and routing to specialized scoring pipelines.',
      'Reduced manual evaluation effort by 70% across review workflows.',
      'Developed full-stack evaluation and review application using FastAPI, React.js, Node.js, Express.js, and MySQL.',
      'Implemented JWT authentication, role-based access control (RBAC), human review, and multi-stage approval workflows.',
    ],
    outcomesTitle: 'Demonstrated Engineering Impact',
    outcomes: [
      '70% reduction in manual LLM evaluation effort through automated supervisor routing and scoring.',
      'End-to-end auditability with multi-stage human review and role-based approval gates.',
      'Consistent, domain-specialized scoring criteria replacing ad-hoc manual grading.',
    ],
    targetMetrics: [{ label: 'Demonstrated Result', value: '70% less manual effort' }],
    pipelineSteps: [
      {
        id: 'question-input',
        label: 'Question Input',
        sublabel: 'Dataset / Prompt',
        detail: 'Evaluation items submitted via FastAPI ingestion endpoint.',
        layer: 'ingest',
      },
      {
        id: 'supervisor',
        label: 'Supervisor Agent',
        sublabel: 'LangGraph Router',
        detail: 'Orchestrates evaluation lifecycle and selects downstream evaluators.',
        layer: 'ai',
      },
      {
        id: 'classification',
        label: 'Classification',
        sublabel: 'Task Typing',
        detail: 'Categorizes question domain and complexity for targeted rubric selection.',
        layer: 'detect',
      },
      {
        id: 'scoring-agents',
        label: 'Specialized Scoring Agents',
        sublabel: 'Rubric Pipelines',
        detail: 'Runs domain-specific LLM-as-a-Judge checks and structured scoring.',
        layer: 'ai',
      },
      {
        id: 'eval-results',
        label: 'Evaluation Results',
        sublabel: 'MySQL Persistence',
        detail: 'Stores scores, rationales, and confidence metadata for reviewer inspection.',
        layer: 'infra',
      },
      {
        id: 'human-review',
        label: 'Human Review',
        sublabel: 'React + RBAC',
        detail: 'Reviewers inspect AI scores, override edge cases, and add annotations.',
        layer: 'govern',
      },
      {
        id: 'approval',
        label: 'Approval',
        sublabel: 'Multi-Stage Gate',
        detail: 'JWT-authenticated approvers finalize evaluation sign-off.',
        layer: 'govern',
      },
    ],
    deepDive: [
      {
        heading: 'Full-Stack Governance & Routing',
        items: [
          {
            title: 'Dynamic Supervisor Routing',
            detail:
              'Instead of a single generic prompt, the supervisor agent routes items to specialized scoring pipelines tailored to factual accuracy, reasoning, or format compliance.',
          },
          {
            title: 'RBAC & Multi-Stage Sign-Off',
            detail:
              'JWT-backed role separation isolates annotators, technical reviewers, and final approvers across the React.js + Express/FastAPI stack.',
          },
        ],
      },
    ],
  },
  {
    id: 'aws-multi-tenant-platform',
    index: '04',
    category: 'cloud',
    classification: 'Production Engineering',
    title: 'AWS Multi-Tenant Cloud Platform',
    subtitle: 'Cloud-Native Infrastructure & Zero-Trust AI Gateway',
    businessProblem:
      'Enterprise AI workloads require strict tenant and environment isolation, zero-trust network controls, PII protection, and centralized model governance before exposing foundation models.',
    technicalSolution:
      'Architected and provisioned a multi-tenant AWS platform on EKS using modular Terraform, enforcing IRSA, Istio mTLS, default-deny egress, and routing Amazon Bedrock inference + OpenSearch RAG through a centralized LiteLLM gateway.',
    architectureOverview:
      'Modular Terraform provisions isolated dev/staging/prod VPCs with PrivateLink, AWS WAF, and EKS clusters. Workloads use IRSA and Istio mTLS, routing all LLM calls through LiteLLM with rate limiting and PII redaction into Amazon Bedrock and OpenSearch.',
    techStack: [
      'AWS',
      'EKS',
      'Terraform',
      'Lambda',
      'RDS',
      'S3',
      'IAM',
      'VPC',
      'PrivateLink',
      'Amazon Bedrock',
      'Docker',
      'Helm',
      'Istio',
      'LiteLLM',
      'Amazon OpenSearch',
    ],
    contributions: [
      'Designed secure multi-tenant AWS architecture with isolated dev, staging, and production environments.',
      'Provisioned infrastructure using reusable, modular Terraform configurations and workspaces.',
      'Designed identity and workload security using IRSA, IAM permissions boundaries, and least-privilege controls.',
      'Integrated AWS WAF, Istio mutual TLS (mTLS), certificate automation, and default-deny egress policies.',
      'Integrated Amazon Bedrock through a centralized LiteLLM inference gateway.',
      'Designed model routing, request rate limiting, and PII-redaction guardrails.',
      'Engineered RAG pipelines using Amazon Bedrock embeddings and Amazon OpenSearch vector search.',
    ],
    outcomesTitle: 'Key Engineering Outcomes',
    outcomes: [
      'Zero-trust workload isolation combining IRSA, IAM permission boundaries, Istio mTLS, and default-deny egress.',
      'Centralized governance over Bedrock foundation models with PII-redaction guardrails and per-tenant rate limits.',
      'Repeatable multi-environment provisioning through modular Terraform.',
    ],
    pipelineSteps: [
      {
        id: 'waf-vpc',
        label: 'AWS WAF & VPC',
        sublabel: 'PrivateLink Edge',
        detail: 'Ingress filtering and private VPC endpoints isolating dev, staging, and prod.',
        layer: 'govern',
      },
      {
        id: 'eks-istio',
        label: 'EKS + Istio mTLS',
        sublabel: 'Default-Deny Egress',
        detail: 'Encrypted service-to-service mesh with automated certs and strict egress rules.',
        layer: 'infra',
      },
      {
        id: 'iam-irsa',
        label: 'IAM & IRSA',
        sublabel: 'Least Privilege',
        detail: 'IAM Roles for Service Accounts with strict permissions boundaries per tenant.',
        layer: 'govern',
      },
      {
        id: 'litellm',
        label: 'LiteLLM Gateway',
        sublabel: 'PII & Rate Limits',
        detail: 'Centralized inference proxy enforcing model routing, quotas, and PII redaction.',
        layer: 'ai',
      },
      {
        id: 'bedrock',
        label: 'Amazon Bedrock',
        sublabel: 'LLMs & Embeddings',
        detail: 'Managed foundation models and embedding generation over private AWS backbone.',
        layer: 'ai',
      },
      {
        id: 'opensearch',
        label: 'Amazon OpenSearch',
        sublabel: 'Vector RAG Store',
        detail: 'Hybrid vector + keyword retrieval powering grounded enterprise RAG responses.',
        layer: 'detect',
      },
      {
        id: 'rds-s3',
        label: 'RDS, S3 & Lambda',
        sublabel: 'Data & Ingestion',
        detail: 'Serverless document pipelines, relational metadata, and encrypted object storage.',
        layer: 'infra',
      },
    ],
    deepDive: [
      {
        heading: 'Zero-Trust Cloud & AI Gateway Controls',
        items: [
          {
            title: 'Defense-in-Depth Networking & Identity',
            detail:
              'Combined AWS WAF at the perimeter, VPC PrivateLink for AWS services, Istio mTLS inside EKS, default-deny egress policies, and IRSA permission boundaries.',
          },
          {
            title: 'Centralized Bedrock Governance',
            detail:
              'All application pods communicate with Bedrock exclusively via LiteLLM, enabling uniform token metering, PII redaction, and fallback routing.',
          },
        ],
      },
    ],
  },
  {
    id: 'cicd-devsecops-automation',
    index: '05',
    category: 'cloud',
    classification: 'Production Engineering',
    title: 'CI/CD Pipeline & DevSecOps Automation',
    subtitle: 'Secure Software Delivery',
    businessProblem:
      'Manual release coordination and late-stage security reviews created two-week release bottlenecks and allowed vulnerable dependencies or container images to reach staging.',
    technicalSolution:
      'Architected declarative Jenkins pipelines integrated with GitHub Actions and Gitea, embedding automated SonarQube, Trivy, and OWASP Dependency-Check security gates before Kubernetes deployment.',
    architectureOverview:
      'Source commits from GitHub/Gitea trigger automated build and unit test stages, followed by mandatory static analysis (SonarQube), container scanning (Trivy), and dependency checks (OWASP) prior to Docker image promotion and Helm/Kubernetes rollout.',
    techStack: [
      'Jenkins',
      'GitHub Actions',
      'Gitea',
      'Terraform',
      'Ansible',
      'Docker',
      'Kubernetes',
      'Helm',
      'SonarQube',
      'Trivy',
      'OWASP Dependency-Check',
    ],
    contributions: [
      'Architected and optimized declarative Jenkins pipelines standardized across teams.',
      'Integrated GitHub Actions and Gitea-based source control workflows.',
      'Reduced release cycles by 78%, accelerating delivery from two weeks to three days.',
      'Embedded DevSecOps security gates across three Jenkins pipelines in two client environments.',
      'Integrated SonarQube SAST, Trivy container scanning, and OWASP Dependency-Check.',
      'Enforced automated fail-fast policies preventing vulnerable builds from advancing to production.',
    ],
    outcomesTitle: 'Demonstrated Engineering Impact',
    outcomes: [
      '78% reduction in CI/CD release cycles (from 2 weeks down to 3 days).',
      'Automated security gates operational across 3 Jenkins pipelines in 2 client environments.',
      'Zero unverified or high-severity vulnerable container images promoted to production.',
    ],
    targetMetrics: [
      { label: 'Release Cycle Reduction', value: '78% (14d → 3d)' },
      { label: 'Production Coverage', value: '3 pipelines · 2 clients' },
    ],
    pipelineSteps: [
      {
        id: 'git',
        label: 'Git',
        sublabel: 'GitHub / Gitea',
        detail: 'Webhook-driven branch and pull request triggers with signed commits.',
        layer: 'ingest',
      },
      {
        id: 'build',
        label: 'Build',
        sublabel: 'Jenkins / Actions',
        detail: 'Reproducible declarative build stages with cached dependency layers.',
        layer: 'infra',
      },
      {
        id: 'unit-tests',
        label: 'Unit Tests',
        sublabel: 'Automated QA',
        detail: 'Fast validation suite gating downstream security scanning.',
        layer: 'detect',
      },
      {
        id: 'sonarqube',
        label: 'SonarQube',
        sublabel: 'SAST Gate',
        detail: 'Static code quality, security hotspot, and coverage quality gate enforcement.',
        layer: 'govern',
      },
      {
        id: 'trivy',
        label: 'Trivy',
        sublabel: 'Container Scan',
        detail: 'Scans OS packages and language artifacts for critical CVEs before registry push.',
        layer: 'govern',
      },
      {
        id: 'owasp',
        label: 'Dependency Check',
        sublabel: 'OWASP SCA',
        detail: 'Identifies vulnerable third-party libraries and enforces fail-fast policy.',
        layer: 'govern',
      },
      {
        id: 'docker-img',
        label: 'Docker Image',
        sublabel: 'Hardened Artifact',
        detail: 'Immutable, scanned container image tagged and pushed to private registry.',
        layer: 'infra',
      },
      {
        id: 'k8s-deploy',
        label: 'Kubernetes',
        sublabel: 'Helm Rollout',
        detail: 'Declarative Helm chart deployment with health probes and rollback safety.',
        layer: 'infra',
      },
      {
        id: 'live-deployment',
        label: 'Deployment',
        sublabel: 'Verified Release',
        detail: 'Progressive release verified in production within a 3-day delivery cycle.',
        layer: 'ai',
      },
    ],
    deepDive: [
      {
        heading: 'Shift-Left Security Gate Enforcement',
        items: [
          {
            title: 'Multi-Gate Pipeline Blocking',
            detail:
              'Each stage acts as a hard quality gate—SonarQube SAST, OWASP Dependency-Check, and Trivy image vulnerability thresholds must pass before Kubernetes manifests are updated.',
          },
          {
            title: 'Standardized Across Client Environments',
            detail:
              'Implemented reusable declarative Jenkinsfiles and GitHub Actions workflows across 3 pipelines in 2 client environments, eliminating manual release handoffs.',
          },
        ],
      },
    ],
  },
];

export interface ArchitecturePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  diagramLayers: {
    layerName: string;
    nodes: string[];
    role: string;
  }[];
}

export const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
  {
    id: 'agentic-ai',
    number: '01',
    title: 'Agentic AI Architecture',
    tagline: 'Deterministic control flow around probabilistic reasoning.',
    description:
      'I design stateful multi-agent workflows where supervisor agents decompose tasks, invoke verified MCP tools, enforce grammar-constrained schemas, and escalate high-impact decisions to human reviewers.',
    capabilities: [
      'Multi-agent systems',
      'Supervisor agents',
      'LangGraph orchestration',
      'Tool calling',
      'MCP integrations',
      'Human-in-the-loop workflows',
    ],
    diagramLayers: [
      {
        layerName: 'Orchestration Plane',
        nodes: ['Supervisor Agent', 'LangGraph State Machine', 'Conditional Branching'],
        role: 'Routes intents, tracks graph state, and manages retry/fallback edges.',
      },
      {
        layerName: 'Tooling & Protocol Plane',
        nodes: ['MCP Server Registry', 'Typed Tool Schemas', 'Vendor REST / Management APIs'],
        role: 'Decouples agent reasoning from external systems via reusable MCP servers.',
      },
      {
        layerName: 'Governance Plane',
        nodes: ['OPA Policy Tiers', 'vLLM Grammar Constraints', 'HITL Approval Gate'],
        role: 'Prevents malformed outputs and blocks unapproved high-blast-radius actions.',
      },
    ],
  },
  {
    id: 'enterprise-rag',
    number: '02',
    title: 'Enterprise RAG Architecture',
    tagline: 'Grounded generation engineered for precision and freshness.',
    description:
      'Production RAG requires clean ingestion pipelines, domain-aware chunking, hybrid lexical + dense vector retrieval, and strict grounding validation against source documents.',
    capabilities: [
      'Document ingestion',
      'Chunking',
      'Embeddings',
      'Vector databases',
      'Semantic and hybrid search',
      'Retrieval and grounded generation',
    ],
    diagramLayers: [
      {
        layerName: 'Ingestion & Indexing',
        nodes: ['S3 / Event Ingestion', 'Semantic Chunking', 'Bedrock / HF Embeddings'],
        role: 'Transforms unstructured SOPs, policies, and docs into searchable vector chunks.',
      },
      {
        layerName: 'Hybrid Retrieval Engine',
        nodes: ['Amazon OpenSearch / FAISS / ChromaDB', 'Dense + BM25 Hybrid Search', 'Metadata Filtering'],
        role: 'Balances semantic recall with exact entity and policy keyword matching.',
      },
      {
        layerName: 'Grounded Synthesis',
        nodes: ['Context Assembly', 'Citation Prompting', 'Hallucination Guardrails'],
        role: 'Constrains LLM answers strictly to retrieved enterprise evidence.',
      },
    ],
  },
  {
    id: 'llmops-inference',
    number: '03',
    title: 'LLMOps & Inference Architecture',
    tagline: 'Observable, cost-aware, and continuously evaluated model serving.',
    description:
      'Running LLMs reliably in enterprise settings demands unified inference gateways, smart routing between 8B and 70B+ models, automated LLM-as-a-Judge evaluation, and token-level telemetry.',
    capabilities: [
      'vLLM',
      'LiteLLM',
      'Multi-model routing',
      'Evaluation',
      'Tracing and observability',
      'Token and cost optimization',
    ],
    diagramLayers: [
      {
        layerName: 'Unified Inference Gateway',
        nodes: ['LiteLLM Proxy', 'Bedrock / Azure OpenAI / Claude / Groq', 'vLLM Self-Hosted'],
        role: 'Standardizes OpenAI-compatible APIs with rate limiting and PII redaction.',
      },
      {
        layerName: 'Routing & Optimization',
        nodes: ['Dual-Model 8B / 70B Split', 'Grammar-Constrained Outlines', 'Token Budgeting'],
        role: 'Matches task complexity to right-sized models to optimize latency and spend.',
      },
      {
        layerName: 'Evaluation & Tracing',
        nodes: ['LLM-as-a-Judge Pipelines', 'HITL Review Loops', 'Latency & Cost Telemetry'],
        role: 'Continuously benchmarks prompt changes and tracks production drift.',
      },
    ],
  },
  {
    id: 'secure-ai-infra',
    number: '04',
    title: 'Secure AI Infrastructure',
    tagline: 'Zero-trust cloud foundations built for regulated enterprise workloads.',
    description:
      'Every AI system I build is anchored in reproducible infrastructure as code, strict IAM workload identity, encrypted service meshes, automated DevSecOps gates, and full-stack observability.',
    capabilities: [
      'AWS and EKS',
      'Terraform',
      'IAM and zero-trust security',
      'CI/CD',
      'Kubernetes',
      'Monitoring and observability',
    ],
    diagramLayers: [
      {
        layerName: 'Infrastructure & Network',
        nodes: ['Modular Terraform', 'Multi-Tenant VPC & PrivateLink', 'AWS WAF'],
        role: 'Isolates environments and eliminates public exposure of model/data traffic.',
      },
      {
        layerName: 'Kubernetes & Workload Security',
        nodes: ['Amazon EKS + Helm', 'IRSA & Permission Boundaries', 'Istio mTLS + Default-Deny Egress'],
        role: 'Enforces pod-level least privilege and encrypted east-west communication.',
      },
      {
        layerName: 'Delivery & Observability',
        nodes: ['Jenkins / GitHub Actions + Trivy/SonarQube', 'Prometheus & Grafana', 'CloudWatch & ELK'],
        role: 'Blocks vulnerable builds and surfaces real-time infrastructure & AI health.',
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    focus: 'Cloud concepts, Azure core services, security, compliance, and governance.',
  },
  {
    title: 'KodeKloud: Certified Jenkins Engineer',
    issuer: 'KodeKloud',
    focus: 'Declarative pipelines, CI/CD automation, distributed builds, and pipeline security.',
  },
];

export const EDUCATION = {
  institution: 'Velammal College of Engineering and Technology, Madurai',
  degree: 'Bachelor of Engineering – Computer Science and Engineering',
  period: '2020 – 2024',
  cgpa: '8.95',
};
