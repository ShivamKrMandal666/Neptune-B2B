import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import { MaskText } from "@/lib/motion";
import { CTAButton } from "@/components/CTAButton";

export const Hero = () => {
  const ref = useRef(null);
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
              to="/services"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-[#E2E8F0] bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
          >
            <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
              <span className="ml-3 h-5 flex-1 rounded-full bg-[#F1F5F9]" />
            </div>
            <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-[#EFF4FF] to-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1D4ED8]">Conversion</p>
                  <p className="mt-1 font-display text-3xl font-black text-[#0F172A]">+142%</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex h-24 items-end gap-2">
                {[38, 52, 44, 68, 60, 82, 96].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[#1D4ED8] to-[#60A5FA]"
                  />
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-3 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E0E7FF] text-[#1D4ED8]">
                <MousePointerClick className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0F172A]">Consultation booked</p>
                <p className="text-[11px] text-slate-400">funnel step 3 · completed</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-6 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-lg"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Load time</p>
            <p className="font-display text-lg font-bold text-[#0F172A]">0.4s</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
