import { motion } from "framer-motion";
import { Workflow, Search, Activity, Server, Users, Layout } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CAPABILITIES = [
  {
    icon: Workflow,
    title: "LLM Agents & Agentic Workflows",
    desc: "Multi-step agent systems with LangGraph and LangChain — routing, tool use, and retrieval — on the Anthropic and OpenAI APIs. The runtime behind client support workflows at DataPipers and the NeuralDesk platform.",
  },
  {
    icon: Search,
    title: "Retrieval-Augmented Generation",
    desc: "Production RAG over client knowledge bases: semantic chunking, hybrid keyword + vector search, embeddings, and vector stores (Chroma, Pinecone). Raised retrieval accuracy from 85% to 96%.",
  },
  {
    icon: Activity,
    title: "Production & MLOps",
    desc: "Ship and operate: Docker, CI/CD with GitHub Actions, monitoring and observability, and model evaluation. Cut LLM inference latency 12s → 8s via caching, query optimization, and an OLAP → OLTP serving migration.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Python (FastAPI), Go, and TypeScript / Node.js services — async (asyncio), REST, and WebSockets. Architected a 15+ table PostgreSQL schema with sub-100ms queries.",
  },
  {
    icon: Users,
    title: "Forward-Deployed Delivery",
    desc: "Own the client relationship end-to-end — discovery calls, requirement gathering, and live debugging in production — leading weekly syncs as the primary technical point of contact.",
  },
  {
    icon: Layout,
    title: "Frontend for AI",
    desc: "React interfaces for agent interactions, delivering real-time streaming responses and a clean user experience across client deployments.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="border-t border-foreground/10 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
          <div>
            <p className="section-label mb-3">02 — Capabilities</p>
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
