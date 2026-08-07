import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export const TECH = [
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#EAB308" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#0EA5E9" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#0F172A" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#0F172A" },
  { name: "Vercel", Icon: SiVercel, color: "#0F172A" },
];

export const TechIcon = ({ name, Icon, color, delay = 0 }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex flex-col items-center gap-3"
      data-testid={`tech-${name.toLowerCase()}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 group-hover:shadow-[0_10px_30px_rgba(29,78,216,0.16)]">
        <Icon
          className="h-7 w-7 transition-colors duration-300"
          style={{ color: hover ? color : "#94A3B8" }}
        />
      </div>
      <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-[#0F172A]">{name}</span>
    </motion.div>
  );
};
