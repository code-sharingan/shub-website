import { motion, useReducedMotion } from "framer-motion";

/**
 * PipelineDiagram — an animated, branded SVG of the dictation serving path.
 * Nodes rise in sequence, connectors draw left→right, and accent "packets"
 * flow continuously through the pipe once in view.
 * Themed via Tailwind fill/stroke tokens, so it adapts to light/dark.
 * Honors prefers-reduced-motion (no infinite packet loop).
 */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NODES = [
  { t: "Audio", s: "dictation" },
  { t: "Transcode", s: "in-process" },
  { t: "Gemini", s: "ResponseSchema" },
  { t: "Guardrails", s: "dose enum · ranges" },
  { t: "Store", s: "Firestore · GCS" },
];

const NODE_W = 150;
const NODE_H = 60;
const STEP = 180;
const X0 = 10;
const CY = 38; // vertical center of node row

const VIEWPORT = { once: true, amount: 0.4 } as const;

const PipelineDiagram = () => {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 910 200"
      className="h-auto w-full"
      role="img"
      aria-label="Dictation pipeline: audio dictation to in-process transcoding to Gemini with enforced ResponseSchema to medication-safety guardrails to split storage in Firestore and Cloud Storage, with audit trail and zero data loss."
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-accent" />
        </marker>
      </defs>

      {/* connectors — draw left→right as the diagram enters view */}
      {NODES.slice(0, -1).map((_, i) => {
        const x1 = X0 + i * STEP + NODE_W;
        const x2 = X0 + (i + 1) * STEP;
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={CY}
            x2={x2 - 2}
            y2={CY}
            className="stroke-accent"
            strokeWidth={1.5}
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.45, delay: 0.35 + i * 0.22, ease: EASE }}
          />
        );
      })}

      {/* packets flowing through the pipe */}
      {!reduceMotion &&
        NODES.slice(0, -1).map((_, i) => {
          const x1 = X0 + i * STEP + NODE_W;
          const x2 = X0 + (i + 1) * STEP;
          return (
            <motion.circle
              key={`packet-${i}`}
              cy={CY}
              r={2.5}
              className="fill-accent"
              initial={{ cx: x1 + 4, opacity: 0 }}
              whileInView={{ cx: [x1 + 4, x2 - 8], opacity: [0, 1, 1, 0] }}
              viewport={VIEWPORT}
              transition={{
                duration: 1.3,
                delay: 1.5 + i * 0.32,
                repeat: Infinity,
                repeatDelay: 1.05,
                ease: "easeInOut",
              }}
            />
          );
        })}

      {/* nodes — rise in sequence */}
      {NODES.map((n, i) => {
        const x = X0 + i * STEP;
        return (
          <motion.g
            key={n.t}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, delay: i * 0.22, ease: EASE }}
          >
            <rect
              x={x}
              y={CY - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx={8}
              className="fill-card stroke-foreground/15"
              strokeWidth={1}
            />
            <text
              x={x + NODE_W / 2}
              y={CY - 4}
              textAnchor="middle"
              className="fill-foreground font-sans"
              fontSize="15"
              fontWeight="500"
            >
              {n.t}
            </text>
            <text
              x={x + NODE_W / 2}
              y={CY + 14}
              textAnchor="middle"
              className="fill-muted-foreground font-mono"
              fontSize="9.5"
              letterSpacing="0.05em"
            >
              {n.s}
            </text>
          </motion.g>
        );
      })}

      {/* dashed taps down to the audit rail */}
      {NODES.map((_, i) => {
        const x = X0 + i * STEP + NODE_W / 2;
        return (
          <motion.line
            key={`tap-${i}`}
            x1={x}
            y1={CY + NODE_H / 2}
            x2={x}
            y2={132}
            className="stroke-foreground/15"
            strokeWidth={1}
            strokeDasharray="2 4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 1.05 + i * 0.08, ease: EASE }}
          />
        );
      })}

      {/* audit rail — fades up last */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
      >
        <rect
          x={X0}
          y={132}
          width={STEP * 4 + NODE_W}
          height={42}
          rx={8}
          className="fill-accent/5 stroke-accent/30"
          strokeWidth={1}
        />
        <circle cx={X0 + 18} cy={153} r={3} className="fill-accent" />
        <text
          x={X0 + 32}
          y={157}
          className="fill-foreground/80 font-mono"
          fontSize="11"
          letterSpacing="0.08em"
        >
          AUDIT TRAIL · ZERO DATA LOSS
        </text>
        <text
          x={STEP * 4 + NODE_W}
          y={157}
          textAnchor="end"
          className="fill-muted-foreground font-mono"
          fontSize="11"
          letterSpacing="0.04em"
        >
          44/44 tests · warm ~8s · p95 &lt;20s
        </text>
      </motion.g>
    </svg>
  );
};

export default PipelineDiagram;
