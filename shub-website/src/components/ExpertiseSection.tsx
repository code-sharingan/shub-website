import { motion } from "framer-motion";
import { Workflow, Cpu, Search, Activity, ShieldCheck, CloudCog } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CAPABILITIES = [
  {
    icon: Workflow,
    title: "AI Orchestration & Multi-Agent Systems",
    desc: "Four cooperating Gemini agents running in production — orchestrated with Google ADK, speaking A2A (JSON-RPC 2.0) between independent Cloud Run microservices, with least-privilege isolation per agent and a dual-mode local/prod topology.",
  },
  {
    icon: Cpu,
    title: "AI System Design",
    desc: "Systems that expose uncertainty instead of hiding it: two-pass classify/extract pipelines, schema-enforced structured output, per-field confidence scoring, graceful degradation, and human-in-the-loop exception queues.",
  },
  {
    icon: Search,
    title: "RAG & Retrieval Engineering",
    desc: "Retrieval built from raw primitives, no frameworks: 768-dim embeddings, pgvector and Vertex AI Vector Search, citation-grounded generation, semantic fingerprints, and multi-turn conversational memory.",
  },
  {
    icon: Activity,
    title: "AIOps & LLM Observability",
    desc: "OpenTelemetry tracing across agent hops, structured logging, audit trails on every inference and scoring-weight change, production SLOs (~8s warm, p95 <20s), and 126+ automated tests guarding AI behavior through CI/CD.",
  },
  {
    icon: ShieldCheck,
    title: "AI Safety & Guardrails",
    desc: "Guardrails where hallucination has clinical consequences: structured dose-assessment enums, numeric range validation, zero-data-loss failure semantics. LLM output is untrusted by default — reliability is engineered around it.",
  },
  {
    icon: CloudCog,
    title: "Self-Improving Feedback Loops",
    desc: "AI that learns from its humans: alignment agents trained on editor approve/reject decisions, continuously re-weighted scoring with a full audit trail — plus the Terraform-provisioned GCP platform it all runs on.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
          <div>
            <p className="section-label mb-3">01 — Capabilities</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
              What I do
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                className="group bg-background p-7 transition-colors duration-300 hover:bg-card/60"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              >
                <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5" />
                <h3 className="mt-5 font-display text-xl font-normal tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
