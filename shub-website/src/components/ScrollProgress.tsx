import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress — a thin accent bar pinned above the navbar that tracks
 * scroll position through the page, smoothed with a spring.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 22, mass: 0.3 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
