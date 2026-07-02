import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import NodeField from "./NodeField";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/* word-by-word masked rise + blur-in for the headline */
const wordRise = (i: number) => ({
  initial: { opacity: 0, y: "0.55em", filter: "blur(8px)" },
  animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
  transition: { duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE },
});

const LINE_ONE = ["I", "build", "AI", "systems"];
const LINE_TWO = ["that", "make", "it", "to"];

const SYSTEMS: [string, string][] = [
  ["dictation-engine", "live"],
  ["docstream-rag", "live"],
  ["classify-extract", "live"],
  ["list-curator-a2a", "live"],
];

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // scroll-linked parallax: background drifts down, content lifts and fades as you scroll away
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fgOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-background"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <div className="hero-mesh" />
        <NodeField className="absolute inset-0 h-full w-full opacity-70" />
      </motion.div>
      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:px-10"
        style={{ y: fgY, opacity: fgOpacity }}
      >
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

            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-foreground">
              {LINE_ONE.map((w, i) => (
                <motion.span key={`l1-${i}`} className="inline-block" {...wordRise(i)}>
                  {w}
                  {i < LINE_ONE.length - 1 && <>&nbsp;</>}
                </motion.span>
              ))}
              <br />
              {LINE_TWO.map((w, i) => (
                <motion.span
                  key={`l2-${i}`}
                  className="inline-block"
                  {...wordRise(LINE_ONE.length + i)}
                >
                  {w}&nbsp;
                </motion.span>
              ))}
              <motion.em
                className="inline-block font-normal italic text-accent"
                {...wordRise(LINE_ONE.length + LINE_TWO.length)}
              >
                production.
              </motion.em>
            </h1>

            <motion.p
              {...rise(0.55)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Three production AI systems on Google Cloud — multi-agent
              orchestration, retrieval-grounded generation, and clinical-grade
              guardrails. I treat LLM output as untrusted and engineer the
              reliability around it: schema-enforced output, confidence gating,
              and self-improving human feedback loops.
            </motion.p>

            <motion.div
              {...rise(0.68)}
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
          <motion.aside {...rise(0.8)} className="lg:col-span-4 lg:mt-24">
            <div className="glass rounded-xl p-5 font-mono text-xs">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>System · Status</span>
                <span className="status-dot" />
              </div>
              <ul className="space-y-2.5 text-muted-foreground">
                {SYSTEMS.map(([name, state], i) => (
                  <motion.li
                    key={name}
                    className="flex items-center justify-between"
                    {...rise(0.95 + i * 0.1)}
                  >
                    <span className="text-foreground/80">{name}</span>
                    <span className="flex items-center gap-1.5 text-accent">
                      <span className="status-dot" />
                      {state}
                    </span>
                  </motion.li>
                ))}
                <motion.li
                  className="flex items-center justify-between border-t border-foreground/10 pt-2.5"
                  {...rise(1.42)}
                >
                  <span>test suites</span>
                  <span className="text-foreground/80">126+ passing</span>
                </motion.li>
                <motion.li className="flex items-center justify-between" {...rise(1.52)}>
                  <span>warm · p95</span>
                  <span className="text-foreground/80">~8s · &lt;20s</span>
                </motion.li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      <motion.a
        href="#projects"
        {...rise(1.0)}
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce-slow" />
      </motion.a>
    </section>
  );
};

export default Hero;
