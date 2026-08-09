"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskText } from "@/lib/motion";
import { CTAButton } from "@/components/CTAButton";
import { UdyamCertificate } from "@/components/UdyamCertificate";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMock = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotMock = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] overflow-hidden pt-36 pb-20 md:pt-40"
      data-testid="hero"
    >
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="grain" />
      <motion.div
        style={{ y: yOrb1 }}
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-[#1D4ED8] opacity-[0.16] blur-[120px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: yOrb2 }}
        className="pointer-events-none absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-[#60A5FA] opacity-20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-white/70 px-4 py-2 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            <span className="text-xs font-semibold tracking-wide text-slate-600">
              Available for new projects
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0F172A] sm:text-6xl lg:text-7xl">
            <MaskText
              animate
              delay={0.15}
              lines={["Websites that turn", "visitors into"]}
            />
            <span className="mask-line">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.39, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#1D4ED8]"
              >
                paying clients.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Neptune B2B builds high-conversion websites — engineered specifically to move
            visitors toward booking a consultation, not just to look good.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <CTAButton size="lg" testId="hero-book-btn" />
            <Link
              href="/services"
              data-testid="hero-services-link"
              className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-7 py-5 text-sm font-medium text-[#0F172A] transition-colors hover:border-[#1D4ED8]/40"
            >
              Explore Services
              <ArrowUpRight className="h-4 w-4 text-[#1D4ED8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Stylized browser mockup */}
        <motion.div
          style={{ y: yMock, rotate: rotMock }}
          className="relative lg:col-span-5"
          data-testid="hero-visual"
        >
          <UdyamCertificate />
        </motion.div>
      </div>
    </section>
  );
}
