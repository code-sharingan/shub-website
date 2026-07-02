import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PipelineDiagram from "./PipelineDiagram";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Entry = {
  index: string;
  title: string;
  role: string;
  period: string;
  meta: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; href: string };
  diagram?: boolean;
};

/* Production AI systems built at Datapiper — client names withheld */
const DATAPIPER_ENTRIES: Entry[] = [
  {
    index: "01",
    title: "Universal Dictation Engine",
    role: "Clinical-Grade AI · Sole Engineer",
    period: "Production",
    meta: "Speech → structured clinical JSON",
    bullets: [
      "Developed a dictation engine for a leading veterinary hospital network — vets dictate, and live transcription comes back as schema-validated clinical JSON, wrapped in hallucination guardrails and medication-dosage sanity checks. Gemini runs under an enforced ResponseSchema, so malformed model output is impossible by construction.",
      "AI safety engineering where hallucination has real clinical consequences: designed a medication-safety guardrail — structured dose-assessment enum plus numeric range validation — that closed a critical patient-safety defect a regex-based approach couldn't.",
      "AIOps from day one: split-storage inference pipeline with a full audit trail of every transcription, zero-data-loss failure semantics when the model fails, and a real-time WebSocket streaming inference path with in-process audio transcoding.",
      "Operated at production SLOs — ~8s warm inference, p95 under 20s — with 44 automated tests across 6 packages guarding the AI pipeline's behavior.",
    ],
    tags: ["Go", "Vertex AI Gemini", "Cloud Run", "Firestore", "Terraform", "Cloud Build", "Secret Manager"],
    diagram: true,
  },
  {
    index: "02",
    title: "DocStreamAI",
    role: "AI Document Intelligence Platform",
    period: "Production",
    meta: "Confidence-gated extraction · RAG",
    bullets: [
      "DocStreamAI is a Datapiper product used by major businesses for their document management — I designed its end-to-end AI core: a two-pass classify-then-extract LLM pipeline where every extracted field carries its own confidence score, so the system knows exactly when it doesn't know.",
      "Confidence gating with human-in-the-loop routing: low-confidence extractions never silently enter the database — they flow to an exception queue for human review, turning the model's uncertainty into an engineered signal instead of a hidden failure mode.",
      "Built full RAG from raw primitives — no framework: 768-dim Vertex AI embeddings, pgvector cosine-similarity retrieval, citation-grounded Gemini answers, and multi-turn conversational memory, all hand-rolled in Go.",
      "Fully autonomous ingestion: a Gmail-connected pipeline that classifies, extracts, embeds, and files inbound documents through the AI pipeline with zero human touch — and degrades gracefully at every stage when the model falters.",
    ],
    tags: ["Go", "PostgreSQL · pgvector", "Gemini 2.5", "RAG", "Cloud Run", "Gorilla Mux", "Cloud Build"],
  },
  {
    index: "03",
    title: "Editorial List Curator Agent",
    role: "Multi-Agent Orchestration · Self-Improving",
    period: "Production",
    meta: "4 agents · A2A on Cloud Run",
    bullets: [
      "Developed a four-agent AI system for a major American news magazine that automates how its 18+ annual lists get curated: a Research Agent discovers ~200 candidates from news and archives, a Classifier Agent scores each against the list's \"Semantic Fingerprint,\" a Voice Synthesis Agent writes in the magazine's house style, and an Alignment Agent closes the loop on editorial taste.",
      "Self-improving by design: the Alignment Agent learns from every editor approve/reject decision, continuously re-weighting the scoring model — with a full audit trail of every weight change. The system gets measurably better the more it's used.",
      "Grounded agent judgment in editorial DNA: RAG over 11 BigQuery tables — semantic fingerprints, 768-dim voice vectors, historical honorees — via Vertex AI embeddings and Vector Search, so agents score against decades of past decisions, not vibes.",
      "Production-grade agent infrastructure: dual-mode topology (one ADK process locally, independent Cloud Run microservices speaking A2A / JSON-RPC 2.0 in production), least-privilege isolation per agent, OpenTelemetry tracing across agent hops, and 82+ automated tests.",
    ],
    tags: ["Python", "Google ADK", "Gemini Pro/Flash", "Vertex AI Vector Search", "BigQuery", "Cloud Run", "Pub/Sub", "Terraform"],
  },
];

const EARLIER_ENTRIES: Entry[] = [
  {
    index: "04",
    title: "FreedomLedger",
    role: "Backend Software Developer",
    period: "Jan 2025 — Dec 2025",
    meta: "University of Utah · Fintech",
    bullets: [
      "Led backend development of a production-grade fintech platform — scalable, stateless FastAPI APIs and microservices, 100+ RESTful endpoints with comprehensive tests, documentation, and CI/CD, deployed as containers to GCP Cloud Run and AWS.",
      "Architected and optimized PostgreSQL schemas (15+ tables) with indexing, async queries, and Redis caching — consistently sub-100ms response times under high-frequency API load.",
      "Implemented secure authentication and authorization — Firebase Auth, JWT, RBAC, OWASP-compliant validation — and integrated real-time financial data via Plaid APIs with caching strategies that cut latency and external API costs.",
      "Leveraged AI tooling (GitHub Copilot, Claude) to accelerate development workflows — ~15x faster delivery across backend services and documentation.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Firebase Auth", "Plaid", "Cloud Run", "AWS"],
    link: { label: "GitHub", href: "https://github.com/code-sharingan/Freedomledger" },
  },
  {
    index: "05",
    title: "FreedomLedger Financial AI Agent",
    role: "Personal Finance RAG Agent",
    period: "Project",
    meta: "LLMs · RAG · Vector DB",
    bullets: [
      "Built a personal financial AI agent on RAG architecture — transaction data and financial rules embedded into a vector database for context-aware spending insights and recommendations.",
      "Designed prompt pipelines for budget optimization, anomaly detection, and spending explanations — with schema-validated structured outputs keeping hallucinations out of financial advice.",
      "Explainable by design: every insight surfaces its source transactions and reasoning steps — served through FastAPI with async workflows and Redis caching for low-latency inference.",
    ],
    tags: ["LLMs", "RAG", "Vector Database", "FastAPI", "PostgreSQL", "Redis"],
    link: { label: "GitHub", href: "https://github.com/code-sharingan/Freedomledger" },
  },
];

const EntryArticle = ({ e, i }: { e: Entry; i: number }) => (
  <motion.article
    className="grid grid-cols-1 gap-x-8 gap-y-6 py-12 lg:grid-cols-12"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
  >
    {/* left rail: index + period */}
    <div className="lg:col-span-3">
      <div className="flex items-baseline gap-3 lg:flex-col lg:gap-1">
        <span className="font-mono text-sm text-accent">{e.index}</span>
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {e.period}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs text-muted-foreground/70">{e.meta}</p>
    </div>

    {/* right: content */}
    <div className="lg:col-span-9">
      <h3 className="font-display text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
        {e.title}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {e.role}
      </p>

      <ul className="mt-5 space-y-3">
        {e.bullets.map((b, j) => (
          <li
            key={j}
            className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-3 before:bg-accent/60"
          >
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {e.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-foreground/12 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {e.link && (
          <a
            href={e.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-accent"
          >
            {e.link.label} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {e.diagram && (
        <div className="mt-8 rounded-xl border border-foreground/10 bg-card/40 p-5 sm:p-7">
          <p className="section-label mb-5">Dictation pipeline</p>
          <PipelineDiagram />
        </div>
      )}
    </div>
  </motion.article>
);

const WorkSection = () => {
  return (
    <section id="projects" className="relative border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* header */}
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
          <div>
            <p className="section-label mb-3">02 — Work</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
              Selected work
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
            AI orchestration, AIOps, and AI system design — shipped to production at Datapiper.
          </p>
        </div>

        {/* employer rail — all AI systems below were built here */}
        <motion.div
          className="rounded-xl border border-foreground/10 bg-card/40 px-6 py-6 md:px-8 md:py-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
                Datapiper
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Forward Deployed AI Engineer
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Apr 2026 — Present · Remote, United States
            </p>
          </div>

          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
            I own client-facing AI systems end-to-end — from discovery calls and
            requirement gathering through architecture, prototyping, deployment,
            and live monitoring and debugging in production — leading weekly
            client syncs as the primary technical point of contact.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-foreground/10 pt-5 sm:grid-cols-3">
            {[
              {
                label: "AI Systems Engineering",
                text: "Design, build, and operate production AI — multi-agent orchestration, RAG, and guardrailed LLM pipelines that treat model output as untrusted.",
              },
              {
                label: "Forward Deployed",
                text: "Direct client contact: discovery, scoping, and weekly syncs — translating business requirements into shipped AI features and debugging them live in production.",
              },
              {
                label: "Cloud & High Availability",
                text: "Highly available serving across GCP — autoscaling Cloud Run microservices, managed data stores (Cloud SQL, BigQuery, Firestore), Pub/Sub — all Terraform-provisioned with CI/CD.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.08 }}
              >
                <p className="section-label mb-2">{c.label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Datapiper entries */}
        <div className="divide-y divide-foreground/10">
          {DATAPIPER_ENTRIES.map((e, i) => (
            <EntryArticle key={e.title} e={e} i={i} />
          ))}
        </div>

        {/* earlier work */}
        <p className="section-label mt-16 border-b border-foreground/10 pb-4">Earlier</p>
        <div className="divide-y divide-foreground/10">
          {EARLIER_ENTRIES.map((e, i) => (
            <EntryArticle key={e.title} e={e} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
