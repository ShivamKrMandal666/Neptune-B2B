"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Shared variant objects ───────────────────────────────────────────────

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

// ── Reveal ───────────────────────────────────────────────────────────────

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({ children, delay = 0, y = 28, className = "", once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// ── MaskText ─────────────────────────────────────────────────────────────

interface MaskTextProps {
  lines?: string[];
  className?: string;
  lineClass?: string;
  delay?: number;
  animate?: boolean;
}

export function MaskText({
  lines = [],
  className = "",
  lineClass = "",
  delay = 0,
  animate = false,
}: MaskTextProps) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
  };
  const line = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
  };

  const viewportProps = animate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } as { once: boolean; margin: string } };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      {...(viewportProps as HTMLMotionProps<"span">)}
    >
      {lines.map((l, i) => (
        <span key={i} className="mask-line">
          <motion.span variants={line} className={`block ${lineClass}`}>
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
