/**
 * PipelineDiagram — a clean, branded SVG of the agent/RAG serving path.
 * Themed via Tailwind fill/stroke tokens, so it adapts to light/dark.
 * Static (no JS) — cheap to render, doubles as portfolio content + texture.
 */
const NODES = [
  { t: "Query", s: "client" },
  { t: "Agent", s: "LangGraph" },
  { t: "Retrieval", s: "hybrid · Chroma" },
  { t: "LLM", s: "Anthropic · OpenAI" },
  { t: "Stream", s: "real-time UI" },
];

const NODE_W = 150;
const NODE_H = 60;
const STEP = 180;
const X0 = 10;
const CY = 38; // vertical center of node row

const PipelineDiagram = () => {
  return (
    <svg
      viewBox="0 0 910 200"
      className="h-auto w-full"
      role="img"
      aria-label="Agent and RAG serving path: client query to LangGraph agent to hybrid retrieval to LLM to streaming response, with monitoring and evaluation."
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

      {/* connectors */}
      {NODES.slice(0, -1).map((_, i) => {
        const x1 = X0 + i * STEP + NODE_W;
        const x2 = X0 + (i + 1) * STEP;
        return (
          <line
            key={i}
            x1={x1}
            y1={CY}
            x2={x2 - 2}
            y2={CY}
            className="stroke-accent"
            strokeWidth={1.5}
            markerEnd="url(#arrow)"
          />
        );
      })}

      {/* nodes */}
      {NODES.map((n, i) => {
        const x = X0 + i * STEP;
        return (
          <g key={n.t}>
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
          </g>
        );
      })}

      {/* dashed taps down to the monitoring rail */}
      {NODES.map((_, i) => {
        const x = X0 + i * STEP + NODE_W / 2;
        return (
          <line
            key={`tap-${i}`}
            x1={x}
            y1={CY + NODE_H / 2}
            x2={x}
            y2={132}
            className="stroke-foreground/15"
            strokeWidth={1}
            strokeDasharray="2 4"
          />
        );
      })}

      {/* monitoring / eval rail */}
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
        MONITORING · EVAL
      </text>
      <text
        x={STEP * 4 + NODE_W}
        y={157}
        textAnchor="end"
        className="fill-muted-foreground font-mono"
        fontSize="11"
        letterSpacing="0.04em"
      >
        retrieval acc. 96% · inference p95 8.0s
      </text>
    </svg>
  );
};

export default PipelineDiagram;
