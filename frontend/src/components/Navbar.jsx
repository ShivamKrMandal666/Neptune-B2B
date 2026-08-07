import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact Us" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobile(false), [pathname]);

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
          <Link to="/" data-testid="logo-link" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D4ED8] text-white shadow-[0_4px_14px_rgba(29,78,216,0.35)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 20V6l8 8 8-8v14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-[#0F172A]">
              Neptune<span className="text-[#1D4ED8]"> B2B</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-[#1D4ED8]" : "text-slate-600 hover:text-[#0F172A]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#E0E7FF]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
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
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-xl md:hidden"
            data-testid="mobile-menu"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-base font-medium ${
                    isActive ? "bg-[#E0E7FF] text-[#1D4ED8]" : "text-[#0F172A]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 px-2">
              <CTAButton className="w-full justify-center" testId="mobile-book-btn" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
