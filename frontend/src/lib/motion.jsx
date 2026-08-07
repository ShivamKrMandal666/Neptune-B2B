import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Scroll-triggered fade/slide up wrapper
export const Reveal = ({ children, delay = 0, y = 28, className = "", once = true }) => (
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

// Masked line-by-line reveal for headings
export const MaskText = ({ lines = [], className = "", lineClass = "", delay = 0, animate = false }) => {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: delay } } };
  const line = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      {...(animate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-60px" } })}
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
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export { EASE };
