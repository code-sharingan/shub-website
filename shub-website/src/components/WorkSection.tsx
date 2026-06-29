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

const ENTRIES: Entry[] = [
  {
    index: "01",
    title: "DataPipers",
    role: "Forward Deployed AI Engineer",
    period: "Apr 2026 — Present",
    meta: "Remote · United States",
    bullets: [
      "Own client-facing AI agent products end-to-end — discovery and requirement gathering through prototyping, deployment, and live monitoring and debugging in production.",
      "Build LLM agent and RAG systems in Python and FastAPI on the Anthropic and OpenAI APIs for high-stakes support workflows; lead weekly client syncs as the primary technical contact.",
      "Raised retrieval accuracy 85% → 96% with semantic chunking and hybrid keyword + vector search; cut LLM inference latency 12s → 8s via response caching, query optimization, and an OLAP → OLTP serving migration.",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "Anthropic", "OpenAI", "RAG", "React"],
    diagram: true,
  },
  {
    index: "02",
    title: "NeuralDesk",
    role: "AI Support & Knowledge Platform",
    period: "Project",
    meta: "RAG / LLM",
    bullets: [
      "AI support agent that answers from a company knowledge base using Retrieval-Augmented Generation — Python, FastAPI, ChromaDB, Redis, and LangGraph, containerized with Docker.",
      "Multi-step LangGraph workflows route, retrieve, and resolve support queries, mirroring production high-stakes support patterns, with evaluation and monitoring for answer quality and latency.",
    ],
    tags: ["Python", "FastAPI", "ChromaDB", "Redis", "LangGraph", "Docker"],
    link: { label: "GitHub", href: "https://github.com/code-sharingan" },
  },
  {
    index: "03",
    title: "FreedomLedger",
    role: "AI / Backend Software Developer",
    period: "Jan 2025 — Jan 2026",
    meta: "University of Utah",
    bullets: [
      "Shipped backend services in Python (FastAPI), Go, and TypeScript / Node.js for a fintech platform, owning features from design through deployment.",
      "Architected a 15+ table PostgreSQL schema with indexing, foreign-key integrity, encryption, and sub-100ms queries; integrated Plaid partner APIs with multi-layer caching.",
    ],
    tags: ["Python", "Go", "TypeScript", "FastAPI", "PostgreSQL", "Plaid"],
    link: { label: "GitHub", href: "https://github.com/code-sharingan/Freedomledger" },
  },
];

const WorkSection = () => {
  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* header */}
        <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
          <div>
            <p className="section-label mb-3">01 — Work</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
              Selected work
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
            Production AI systems — owned from discovery to live debugging.
          </p>
        </div>

        {/* entries */}
        <div className="divide-y divide-foreground/10">
          {ENTRIES.map((e, i) => (
            <motion.article
              key={e.title}
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
                    <p className="section-label mb-5">Serving path</p>
                    <PipelineDiagram />
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
