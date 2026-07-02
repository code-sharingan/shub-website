import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CertificationsSection from "@/components/CertificationsSection";
import { Mail, Linkedin, Github, FileDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: EASE },
};

const STACK: [string, string[]][] = [
  ["AI / ML", ["Vertex AI Gemini", "Multi-Agent Systems (Google ADK)", "ResponseSchema", "Structured Output", "RAG", "Vertex AI Vector Search", "768-dim Embeddings", "pgvector Search", "Confidence Gating", "Conversational Memory"]],
  ["Languages", ["Go", "Python", "SQL", "TypeScript"]],
  ["Cloud & Infra", ["Cloud Run", "Cloud SQL", "BigQuery", "Firestore", "Pub/Sub", "Cloud Storage", "Secret Manager", "Artifact Registry", "Terraform", "Cloud Build", "GitHub Actions", "OpenTelemetry", "Distroless Docker"]],
  ["Security", ["Postgres RLS", "JWT / JWKS", "bcrypt", "RBAC", "Rate Limiting", "AES-256-GCM", "HMAC CSRF", "Key Rotation", "Workload Identity Federation"]],
  ["APIs & Protocols", ["REST (Gorilla Mux · FastAPI)", "JSON-RPC 2.0 (A2A)", "WebSocket Streaming", "OAuth (Gmail)"]],
];

const PRINCIPLES = [
  "Schema-enforced output",
  "Confidence gating",
  "Human-in-the-loop",
  "Audit trails",
  "Self-improving loops",
];

const COURSEWORK = [
  "Artificial Intelligence",
  "Algorithms",
  "Database Systems",
  "Operating Systems",
  "Computer Networks",
  "Computer Security",
  "Web Software Architecture",
];

const TEACHING = [
  {
    role: "Peer Mentor",
    org: "Kahlert School of Computing",
    period: "May 2023 — Present",
    bullets: [
      "Mentored 100+ students on course selection, scheduling, and career paths in computing.",
      "Partnered with the program coordinator to revamp the mentorship structure, lifting mentee engagement.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Kahlert School of Computing",
    period: "Jan 2022 — May 2023",
    bullets: [
      "Tutored groups of 20+ on object-oriented programming and good software practices.",
      "Planned and delivered lessons with faculty, contributing to a 15% retention improvement.",
    ],
  },
];

const SectionHeader = ({ index, title }: { index: string; title: string }) => (
  <div className="mb-16 flex items-end justify-between border-b border-foreground/10 pb-6">
    <div>
      <p className="section-label mb-3">{index}</p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
        {title}
      </h2>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      <Hero />

      {/* Interstitial — The through-line */}
      <section className="relative overflow-hidden border-t border-foreground/10 bg-background py-28 md:py-36">
        <div className="hero-mesh opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <motion.p className="section-label mb-8" {...reveal}>
            The through-line
          </motion.p>
          <h2 className="max-w-4xl font-display text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] text-foreground">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              LLM output is <em className="font-normal italic text-muted-foreground">untrusted.</em>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            >
              Reliability is <em className="font-normal italic text-accent">engineered</em> around it.
            </motion.span>
          </h2>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"
            {...reveal}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            {PRINCIPLES.map((p, i) => (
              <span key={p} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {i > 0 && <span className="h-px w-6 bg-accent/50" aria-hidden="true" />}
                {p}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 01 — Capabilities */}
      <ExpertiseSection />

      {/* 02 — Work */}
      <WorkSection />

      {/* 03 — Stack */}
      <section id="skills" className="border-t border-foreground/10 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeader index="03 — Stack" title="Tools of the trade" />
          <div className="divide-y divide-foreground/10">
            {STACK.map(([category, items], i) => (
              <motion.div
                key={category}
                className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8"
                {...reveal}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
              >
                <p className="section-label md:col-span-3 md:pt-1">{category}</p>
                <div className="flex flex-wrap gap-2 md:col-span-9">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/12 px-3 py-1 font-mono text-[12px] tracking-wide text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Certifications */}
      <CertificationsSection />

      {/* 05 — Education */}
      <section id="education" className="border-t border-foreground/10 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeader index="05 — Education" title="Foundation" />
          <motion.div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-12" {...reveal}>
            <div className="lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Dec 2025
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground/70">Salt Lake City, UT</p>
            </div>
            <div className="lg:col-span-9">
              <h3 className="font-display text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
                University of Utah
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                B.S. Computer Science · Dean's List
              </p>
              <p className="mt-5 text-sm text-muted-foreground">Relevant coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {COURSEWORK.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-foreground/12 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 06 — Teaching & Mentorship */}
      <section id="experience" className="border-t border-foreground/10 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeader index="06 — Teaching" title="Teaching & mentorship" />
          <div className="divide-y divide-foreground/10">
            {TEACHING.map((t, i) => (
              <motion.div
                key={t.role}
                className="grid grid-cols-1 gap-x-8 gap-y-4 py-10 lg:grid-cols-12"
                {...reveal}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.period}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground/70">{t.org}</p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-xl font-normal tracking-tight text-foreground sm:text-2xl">
                    {t.role}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {t.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-3 before:bg-accent/60"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Résumé */}
      <section id="resume" className="border-t border-foreground/10 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-foreground/10 pb-6">
            <div>
              <p className="section-label mb-3">07 — Résumé</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-foreground">
                The one-pager
              </h2>
            </div>
            <a href="/shubhams_resume.pdf" download="Shubham_Singh_Resume.pdf" className="btn-solid">
              <FileDown className="h-4 w-4" /> Download PDF
            </a>
          </div>
          <motion.div
            className="overflow-hidden rounded-xl border border-foreground/10 bg-card/40"
            {...reveal}
          >
            <iframe
              src="/shubhams_resume.pdf"
              className="h-[560px] w-full sm:h-[680px] md:h-[820px]"
              title="Shubham Singh résumé"
            />
          </motion.div>
        </div>
      </section>

      {/* 08 — Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-foreground/10 bg-background py-28 md:py-36">
        <div className="hero-mesh opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
          <p className="section-label mb-4">08 — Contact</p>
          <motion.h2
            className="max-w-3xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-foreground"
            {...reveal}
          >
            Let's build something that ships.
          </motion.h2>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            {...reveal}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <a href="mailto:shub.ss@outlook.com" className="btn-solid">
              <Mail className="h-4 w-4" /> shub.ss@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/shubhamanilsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/code-sharingan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Shubham Anil Singh
          </p>
          <p className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} · Built with React, Vite & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
