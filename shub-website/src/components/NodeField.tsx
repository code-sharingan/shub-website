import { useEffect, useRef } from "react";

/**
 * NodeField — a low-contrast, drifting node/edge graph rendered on <canvas>.
 * Evokes a vector-embedding space / data graph. Gives the glass surfaces above
 * it something real to refract. Performance-conscious:
 *  - point count scales with area, hard-capped
 *  - DPR capped at 2
 *  - paused via IntersectionObserver when off-screen
 *  - honors prefers-reduced-motion (renders one static frame, no rAF loop)
 */
const NodeField = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const LINK = 132;
    const mouse = { x: -9999, y: -9999 };

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];

    const cssVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((width * height) / 16000), 130);
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const frame = () => {
      const fg = cssVar("--foreground");
      const accent = cssVar("--accent");
      ctx.clearRect(0, 0, width, height);

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const t = 1 - Math.sqrt(d2) / LINK;
            ctx.strokeStyle = `hsl(${fg} / ${t * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const near = dx * dx + dy * dy < 150 * 150;
        ctx.beginPath();
        ctx.arc(p.x, p.y, near ? 2.4 : 1.3, 0, Math.PI * 2);
        ctx.fillStyle = near ? `hsl(${accent} / 0.9)` : `hsl(${fg} / 0.26)`;
        ctx.fill();
      }

      if (running) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!running && !reduceMotion) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onResize = () => {
      resize();
      if (reduceMotion) frame();
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    if (reduceMotion) frame();
    else start();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default NodeField;
