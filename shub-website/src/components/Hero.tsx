import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import NodeField from "./NodeField";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const SYSTEMS: [string, string][] = [
  ["agent-runtime", "live"],
  ["rag-retrieval", "live"],
  ["streaming-api", "live"],
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-background"
    >
      <div className="hero-mesh" aria-hidden="true" />
      <NodeField className="absolute inset-0 h-full w-full opacity-70" />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:px-10">
        {/* top hairline label row — editorial / printed-contents motif */}
        <motion.div
          {...rise(0)}
          className="mb-12 flex items-center justify-between border-b border-foreground/10 pb-4 section-label"
        >
          <span>Shubham Anil Singh</span>
          <span className="hidden sm:inline">00 — Index</span>
          <span className="flex items-center gap-2">
            <span className="status-dot" /> Available 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* headline column */}
          <div className="lg:col-span-8">
            <motion.p
              {...rise(0.05)}
              className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-accent"
            >
              Forward Deployed AI Engineer
            </motion.p>

            <motion.h1
              {...rise(0.12)}
              className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-foreground"
            >
              I build AI systems
              <br />
              that make it to{" "}
              <em className="font-normal italic text-accent">production.</em>
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              I own the full lifecycle of client-facing LLM agents — from discovery
              and prototyping through deployment and live debugging in production.
            </motion.p>

            <motion.div
              {...rise(0.28)}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
            >
              <a href="#projects" className="btn-solid">
                View work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/shubhams_resume.pdf"
                download="Shubham_Singh_Resume.pdf"
                className="btn-glass"
              >
                Résumé
              </a>
              <div className="ml-1 flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <a
                  className="transition-colors hover:text-foreground"
                  href="https://github.com/code-sharingan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="transition-colors hover:text-foreground"
                  href="https://linkedin.com/in/shubhamanilsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* glass "system status" card — the one glass moment, breaking the grid */}
          <motion.aside {...rise(0.42)} className="lg:col-span-4 lg:mt-24">
            <div className="glass rounded-xl p-5 font-mono text-xs">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>System · Status</span>
                <span className="status-dot" />
              </div>
              <ul className="space-y-2.5 text-muted-foreground">
                {SYSTEMS.map(([name, state]) => (
                  <li key={name} className="flex items-center justify-between">
                    <span className="text-foreground/80">{name}</span>
                    <span className="flex items-center gap-1.5 text-accent">
                      <span className="status-dot" />
                      {state}
                    </span>
                  </li>
                ))}
                <li className="flex items-center justify-between border-t border-foreground/10 pt-2.5">
                  <span>retrieval acc.</span>
                  <span className="text-foreground/80">96%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>inference p95</span>
                  <span className="text-foreground/80">8.0&nbsp;s</span>
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.a
        href="#projects"
        {...rise(0.6)}
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce-slow" />
      </motion.a>
    </section>
  );
};

export default Hero;
