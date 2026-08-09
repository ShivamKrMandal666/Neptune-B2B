"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import type { ContactFormData, ContactFormErrors, FormStatus } from "@/lib/types";

const empty: ContactFormData = { name: "", email: "", phone: "", message: "" };

const fieldClass =
  "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-[border,box-shadow] duration-200 focus:border-transparent focus:ring-2 focus:ring-[#1D4ED8]";

export function ConsultationForm() {
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
      if (!res.ok) throw new Error("Failed to send message");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
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
          Thanks, {form.name.split(" ")[0] || "there"}. I&apos;ll get back to you within 24 hours.
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
    );
  }

  return (
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
  );
}
