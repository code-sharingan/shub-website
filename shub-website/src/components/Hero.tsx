"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Hero Component - Apple-inspired glassmorphism design
 * Features: floating gradient blobs, film grain, glass cards, animated sheen effect
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effect for gradient blobs
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 500], [0, 150]);
  const blob2Y = useTransform(scrollY, [0, 500], [0, -100]);
  const blob3Y = useTransform(scrollY, [0, 500], [0, 80]);

  // Track mouse for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Radial vignette effect */}
      <div className="vignette" />

      {/* Film grain overlay */}
      <div className="grain" />

      {/* Floating gradient blobs - GPU accelerated with will-change */}
      <motion.div
        className="blob blob-purple"
        style={{
          y: blob1Y,
          willChange: "transform",
        }}
      />
      <motion.div
        className="blob blob-blue"
        style={{
          y: blob2Y,
          willChange: "transform",
        }}
      />
      <motion.div
        className="blob blob-pink"
        style={{
          y: blob3Y,
          willChange: "transform",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <span className="pill-cta group">
            <span className="relative z-10">New Feature Available</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </motion.div>

        {/* Headline with gloss sheen effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="headline-wrapper mb-8"
        >
          <span className="headline">
            Build Something{" "}
            <span className="gloss-text group relative inline-block">
              Extraordinary
              {/* Animated sheen effect on hover */}
              <span className="sheen" />
            </span>
            <br />
            With Modern{" "}
            <span className="gloss-text group relative inline-block">
              Technology
              <span className="sheen" />
            </span>
          </span>
        </motion.h1>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="body-text max-w-2xl mx-auto mb-12"
        >
          Experience the next generation of web development with cutting-edge
          design, seamless performance, and unparalleled user experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary group">
            <span className="relative z-10">Get Started</span>
            <div className="btn-gradient" />
          </button>
          <button className="btn-secondary">Learn More</button>
        </motion.div>

        {/* Glass cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              title: "Lightning Fast",
              desc: "Optimized for peak performance",
              icon: "⚡",
            },
            {
              title: "Secure by Default",
              desc: "Enterprise-grade security built-in",
              icon: "🔒",
            },
            {
              title: "Fully Responsive",
              desc: "Beautiful on every device",
              icon: "📱",
            },
          ].map((card, idx) => (
            <div key={idx} className="glass-card group">
              {/* Inner highlight */}
              <div className="glass-highlight" />

              <div className="relative z-10">
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
