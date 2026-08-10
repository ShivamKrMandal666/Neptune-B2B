"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Icon } from "@/lib/icons";
import { Reveal, MaskText } from "@/lib/motion";
import { CTAButton } from "@/components/CTAButton";
import { PROCESS } from "@/lib/data";

function PageHero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-20"
      data-testid="page-hero"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="grain" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#1D4ED8] opacity-[0.14] blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">
          The Process
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0F172A] sm:text-6xl lg:text-7xl">
          <MaskText animate lines={["From first call", "to launch day."]} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600"
        >
          Twelve clear steps. No surprises, no black boxes — you always know exactly where your
          project stands.
        </motion.p>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 30%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-4xl px-6 py-20 md:px-12"
      data-testid="process-timeline"
    >
      <div className="relative">
        {/* Track */}
        <div
          className="absolute left-[27px] top-2 bottom-2 w-px bg-[#E2E8F0] md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        {/* Animated progress line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-[#1D4ED8] md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-10 md:space-y-2">
          {PROCESS.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={s.n}
                data-testid={`process-step-${s.n}`}
                className="relative grid grid-cols-1 items-center gap-x-10 md:grid-cols-2"
              >
                {/* Node */}
                <div className="absolute left-0 top-0 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FAFAFA] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.08)]"
                  >
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
                      <Icon name={s.icon} className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: left ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-20 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] md:ml-0 md:my-6 ${
                    left ? "md:col-start-1 md:mr-12 md:text-right" : "md:col-start-2 md:ml-12"
                  }`}
                >
                  <span className="font-display text-sm font-bold text-[#1D4ED8]">{s.n}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-[#0F172A]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </motion.div>
                <div className="hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ProcessPage() {
  return (
    <>
      <PageHero />
      <Timeline />
      <section
        className="relative overflow-hidden py-8 pb-28 md:pb-36"
        data-testid="process-cta"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1D4ED8] px-8 py-20 text-center md:px-16">
            <div className="grain grain-dark" />
            <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
            <div className="relative z-10">
              <Reveal>
                <h2 className="mx-auto max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl">
                  Ready to start step one?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-lg text-blue-100">
                  It all begins with a conversation. Book your consultation today.
                </p>
                <div className="mt-10 flex justify-center">
                  <CTAButton variant="dark" size="lg" testId="process-cta-book-btn" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
