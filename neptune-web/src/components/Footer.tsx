import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { AGENCY } from "@/lib/data";
import { CTAButton } from "@/components/CTAButton";
import { FooterLogo } from "@/components/FooterLogo";
import { Reveal } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white" data-testid="footer">
      <div className="grain grain-dark" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Let&apos;s build
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                A website that turns visitors into clients.
              </h2>
            </div>
            <CTAButton variant="primary" size="lg" testId="footer-book-btn" />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Neptune B2B – go to home">
              <FooterLogo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              High-conversion websites, built by hand. You work directly with{" "}
              {AGENCY.founder.split(" ")[0]} — no account managers, no hand-offs.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={AGENCY.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-linkedin"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href={AGENCY.github}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-github"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                    data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4 text-[#1D4ED8]" />
                  {AGENCY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${AGENCY.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  data-testid="footer-phone"
                >
                  <Phone className="h-4 w-4 text-[#1D4ED8]" />
                  {AGENCY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Neptune B2B. All rights reserved.</p>
          <p>
            {AGENCY.founder} — {AGENCY.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
