"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, Loader2, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MaskText, Reveal } from "@/lib/motion";
import { AGENCY } from "@/lib/data";
import type { ContactFormData, ContactFormErrors, FormStatus } from "@/lib/types";

const empty: ContactFormData = { name: "", email: "", phone: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(empty);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const set =
    (k: keyof ContactFormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [k]: e.target.value }));
        setErrors((x) => ({ ...x, [k]: undefined }));
      };

  const validate = (): boolean => {
    const e: ContactFormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Tell us about your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-[border,box-shadow] duration-200 focus:border-transparent focus:ring-2 focus:ring-[#1D4ED8]";

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
              {status === "success" ? (
                <div
                  className="flex flex-col items-center py-16 text-center"
                  data-testid="contact-success"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]"
                  >
                    <Check className="h-8 w-8" strokeWidth={2.4} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-bold">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-500">
                    Thanks, {form.name.split(" ")[0] || "there"}. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setForm(empty);
                      setStatus("idle");
                    }}
                    data-testid="contact-reset-btn"
                    className="mt-8 rounded-full bg-[#0F172A] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate data-testid="contact-form">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        data-testid="contact-name"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        className={fieldClass}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        data-testid="contact-email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        className={fieldClass}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      data-testid="contact-phone"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 (optional)"
                      className={fieldClass}
                      aria-invalid={false}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-[#0F172A]">
                      Project details
                    </label>
                    <textarea
                      id="contact-message"
                      data-testid="contact-message"
                      value={form.message}
                      onChange={set("message")}
                      rows={5}
                      placeholder="What are you building, and what should it achieve?"
                      className={`${fieldClass} resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>
                  {status === "error" && (
                    <p className="mt-3 text-xs font-medium text-red-500" data-testid="contact-error">
                      Failed to send message. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    data-testid="contact-submit"
                    className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1D4ED8] py-4 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF] disabled:opacity-70 sm:w-auto sm:px-10"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
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
