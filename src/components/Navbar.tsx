"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { HeaderLogo } from "@/components/HeaderLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu is closed by each link's onClick handler below.

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
        data-testid="navbar"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-[background,box-shadow,border] duration-300 sm:px-6 ${
            scrolled
              ? "border-[#E2E8F0] bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              : "border-transparent bg-white/40 backdrop-blur-md"
          }`}
        >
          <Link href="/" data-testid="logo-link" className="flex items-center">
            <HeaderLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`relative z-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-[#1D4ED8]" : "text-slate-600 hover:text-[#0F172A]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[#E0E7FF]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <CTAButton size="sm" testId="nav-book-btn" />
            </div>
            <button
              className="rounded-full border border-[#E2E8F0] bg-white p-2.5 md:hidden"
              onClick={() => setMobile((v) => !v)}
              data-testid="mobile-menu-btn"
              aria-label="Toggle menu"
              aria-expanded={mobile}
              aria-controls="mobile-nav-panel"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-xl md:hidden"
            data-testid="mobile-menu"
          >
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobile(false)}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                    isActive ? "bg-[#E0E7FF] text-[#1D4ED8]" : "text-[#0F172A]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 px-2">
              <CTAButton className="w-full justify-center" testId="mobile-book-btn" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
