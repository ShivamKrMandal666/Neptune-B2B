import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTAButton } from "@/components/CTAButton";
import { TECH, TechIcon } from "@/components/TechStack";
import { Icon } from "@/lib/icons";
import { Reveal, MaskText, stagger, fadeUp } from "@/lib/motion";
import { USPS, SERVICES, PROCESS, MANIFESTO, AGENCY } from "@/lib/data";

const Overline = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">{children}</p>
);

const MarqueeStrip = () => (
  <section className="border-y border-[#E2E8F0] bg-white py-6" data-testid="marquee">
    <Marquee speed={40} gradient={false} autoFill>
      {["High-Conversion", "Modern Design", "Fast Load Speed", "SEO-Ready", "Mobile-Optimized", "Built by hand"].map(
        (t, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">{t}</span>
            <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
          </div>
        )
      )}
    </Marquee>
  </section>
);

const USPSection = () => (
  <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32" data-testid="usp-section">
    <Reveal>
      <Overline>Why Neptune</Overline>
      <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl">
        Not just a pretty site. A conversion engine.
      </h2>
    </Reveal>
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4"
    >
      {USPS.map((u) => (
        <motion.div
          key={u.key}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          data-testid={`usp-${u.key}`}
          className={`group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(29,78,216,0.1)] ${
            u.span ? "md:col-span-3 lg:col-span-2 lg:row-span-1" : ""
          } ${u.span ? "bg-[#1D4ED8]" : ""}`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              u.span ? "bg-white/15 text-white" : "bg-[#E0E7FF] text-[#1D4ED8]"
            }`}
          >
            <Icon name={u.icon} className="h-6 w-6" strokeWidth={1.9} />
          </div>
          <h3
            className={`mt-6 font-display text-xl font-semibold tracking-tight ${
              u.span ? "text-white" : "text-[#0F172A]"
            }`}
          >
            {u.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${u.span ? "text-blue-100" : "text-slate-500"}`}>{u.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Manifesto = () => (
  <section className="relative overflow-hidden bg-[#0F172A] py-24 md:py-36" data-testid="manifesto">
    <div className="grain grain-dark" />
    <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">The manifesto</p>
      </Reveal>
      <div className="mt-14 space-y-px">
        {MANIFESTO.map((m) => (
          <Reveal key={m.n}>
            <div className="group grid grid-cols-1 gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-2">
                <span className="font-display text-5xl font-black text-white/15 transition-colors duration-500 group-hover:text-[#1D4ED8]">
                  {m.n}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white md:col-span-5 md:text-4xl">
                {m.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-400 md:col-span-5">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ServicesOverview = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32" data-testid="services-overview">
    <Reveal>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Overline>What I do</Overline>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl">
            Four ways to build for conversion.
          </h2>
        </div>
        <Link
          to="/services"
          data-testid="services-overview-link"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8]"
        >
          All services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {SERVICES.map((s) => (
        <motion.div key={s.key} variants={fadeUp}>
          <Link
            to="/services"
            data-testid={`service-card-${s.key}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-[0_20px_50px_rgba(29,78,216,0.1)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0E7FF] text-[#1D4ED8] transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.9} />
              </div>
              <span className="font-display text-4xl font-black text-slate-100 transition-colors group-hover:text-[#E0E7FF]">
                {s.num}
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#0F172A]">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8]">
              Learn more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const TechSection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32" data-testid="tech-section">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <Reveal className="text-center">
        <Overline>The stack</Overline>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl">
          Built with modern, reliable technology.
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-3 gap-y-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
        {TECH.map((t, i) => (
          <TechIcon key={t.name} {...t} delay={i * 0.04} />
        ))}
      </div>
    </div>
  </section>
);

const ProcessTeaser = () => {
  const steps = [PROCESS[0], PROCESS[3], PROCESS[7], PROCESS[10], PROCESS[11]];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32" data-testid="process-teaser">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Overline>How we work</Overline>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl">
              A clear path from idea to launch.
            </h2>
          </div>
          <Link
            to="/process"
            data-testid="process-teaser-link"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8]"
          >
            Full 12-step process
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#E2E8F0] md:block" aria-hidden="true" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#1D4ED8] shadow-sm">
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <p className="mt-5 text-xs font-bold text-[#1D4ED8]">{s.n}</p>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-[#0F172A]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSnippet = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32" data-testid="founder-snippet">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-[#E0E7FF]" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODYxMzQ3NTN8MA&ixlib=rb-4.1.0&q=85"
            alt="Founder at work"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover"
          />
        </div>
      </Reveal>
      <div className="lg:col-span-7">
        <Reveal>
          <Overline>The person behind it</Overline>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl">
            You work directly with the developer.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Neptune B2B is a focused, one-person studio led by{" "}
            <span className="font-semibold text-[#0F172A]">{AGENCY.founder}</span>. No account managers, no hand-offs —
            you talk directly to the person designing, writing, and shipping your site.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            That means faster decisions, one point of accountability, and a build that stays true to your goals from
            discovery to launch.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div>
              <p className="font-display text-lg font-bold text-[#0F172A]">{AGENCY.founder}</p>
              <p className="text-sm text-slate-500">{AGENCY.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative overflow-hidden py-24 md:py-32" data-testid="final-cta">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1D4ED8] px-8 py-20 text-center md:px-16">
        <div className="grain grain-dark" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl">
              Ready to turn traffic into clients?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
              Book a free consultation and let's map out a site engineered to convert.
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton variant="dark" size="lg" testId="final-cta-book-btn" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <USPSection />
      <Manifesto />
      <ServicesOverview />
      <TechSection />
      <ProcessTeaser />
      <FounderSnippet />
      <FinalCTA />
    </>
  );
}
