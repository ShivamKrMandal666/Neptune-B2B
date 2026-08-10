"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Icon } from "@/lib/icons";
import { Reveal, MaskText } from "@/lib/motion";
import { CTAButton } from "@/components/CTAButton";
import { SERVICES } from "@/lib/data";

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
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">Services</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0F172A] sm:text-6xl lg:text-7xl">
          <MaskText animate lines={["Built to convert.", "Not just to impress."]} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600"
        >
          Every engagement is designed around one outcome — more booked consultations. Here&apos;s
          how Neptune B2B gets you there.
        </motion.p>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero />

      <section
        className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32"
        data-testid="services-list"
      >
        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.05}>
              <div
                data-testid={`service-detail-${s.key}`}
                className="group grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:border-[#1D4ED8]/25 hover:shadow-[0_24px_60px_rgba(29,78,216,0.08)] md:grid-cols-12 md:p-10"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D4ED8] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.9} />
                    </div>
                    <span className="font-display text-5xl font-black text-slate-100">{s.num}</span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-[#0F172A]">
                    {s.name}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-lg leading-relaxed text-slate-600">{s.desc}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-sm text-[#0F172A]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden py-8 pb-28 md:pb-36"
        data-testid="services-cta"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] px-8 py-20 text-center md:px-16">
            <div className="grain grain-dark" />
            <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#1D4ED8]/40 blur-3xl" />
            <div className="relative z-10">
              <Reveal>
                <h2 className="mx-auto max-w-2xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl">
                  Not sure which one you need?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-lg text-slate-300">
                  Book a consultation and we&apos;ll figure out the right approach together — no
                  pressure.
                </p>
                <div className="mt-10 flex justify-center">
                  <CTAButton size="lg" testId="services-cta-book-btn" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
