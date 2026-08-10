"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useConsultation } from "@/components/ConsultationContext";

interface CTAButtonProps {
  label?: string;
  variant?: "primary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  testId?: string;
}

export function CTAButton({
  label = "Book a Consultation",
  variant = "primary",
  size = "md",
  className = "",
  testId = "book-consultation-btn",
}: CTAButtonProps) {
  const { open } = useConsultation();

  const sizes: Record<string, string> = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-5 text-base",
  };
  const base =
    "group relative inline-flex items-center gap-2 rounded-full font-medium tracking-tight overflow-hidden";
  const variants: Record<string, string> = {
    primary: "bg-[#1D4ED8] text-white",
    dark: "bg-[#0F172A] text-white",
    outline: "border border-[#1D4ED8]/25 text-[#1D4ED8] bg-white",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="inline-flex"
    >
      <button
        type="button"
        onClick={open}
        data-testid={testId}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        <span
          className="absolute inset-0 -z-0 translate-y-full bg-[#1E40AF] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
          aria-hidden="true"
        />
        <span className="relative z-10">{label}</span>
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.2}
        />
      </button>
    </motion.div>
  );
}
