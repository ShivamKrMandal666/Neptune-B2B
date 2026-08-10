"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MaskText, Reveal } from "@/lib/motion";
import { AGENCY } from "@/lib/data";
import { ConsultationForm } from "@/components/ConsultationForm";

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-20"
        data-testid="page-hero"
      >
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
        <div className="grain" />
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#1D4ED8] opacity-[0.14] blur-[110px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">Contact</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0F172A] sm:text-6xl lg:text-7xl">
            <MaskText animate lines={["Let's build something", "that converts."]} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            Tell me about your project. You&apos;ll hear back directly from me — usually within 24
            hours.
          </motion.p>
        </div>
      </section>

      {/* Form + contact details */}
      <section
        className="mx-auto max-w-7xl px-6 pb-28 md:px-12 md:pb-36"
        data-testid="contact-section"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] md:p-10">
              <ConsultationForm />
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-[#0F172A] p-8 text-white md:p-10">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Prefer to reach out directly?
                </h2>
                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${AGENCY.email}`}
                    data-testid="contact-email-link"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-[#1D4ED8] hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Email</span>
                      <span className="block text-sm font-medium">{AGENCY.email}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${AGENCY.phone.replace(/\s/g, "")}`}
                    data-testid="contact-phone-link"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-[#1D4ED8] hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">Phone</span>
                      <span className="block text-sm font-medium">{AGENCY.phone}</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Connect
                </p>
                <div className="mt-4 flex gap-3" data-testid="social-row">
                  <a
                    href={AGENCY.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="contact-linkedin"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[#1D4ED8] hover:bg-[#1D4ED8]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                  <a
                    href={AGENCY.github}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="contact-github"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[#1D4ED8] hover:bg-[#1D4ED8]"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
