# Neptune B2B — Product Requirements (PRD)

## Original Problem Statement
Build a frontend-only, premium, trust-first marketing website for **Neptune B2B**, a solo web-development agency that builds high-conversion websites. 4 pages (Home, Services, Process, Contact), white/blue B2B palette, Framer Motion animations, no backend. Contact form and "Book a Consultation" are UI-only (fake submit). User asked for Awwwards-level craft: kinetic hero with on-load masked reveal, lenis smooth scroll, numbered manifesto, editorial marquee, purposeful motion.

## User Choices
- Contact form: local success message (fake submit → loading → success).
- Font: agent's pick → Outfit (headings) + Inter (body).
- "Book a Consultation" → opens a modal with fields Name, Email, Business Name, Project Details, Budget.

## Architecture
- **Frontend only**: React 19 + CRA/craco, Tailwind, framer-motion, lenis, react-fast-marquee, react-icons, sonner. No backend/DB used.
- Routing: react-router-dom (`/`, `/services`, `/process`, `/contact`) under a shared `Layout` (Navbar + Outlet + Footer + ConsultationModal + Toaster + Lenis smooth scroll).
- Global consultation modal via React context (`ConsultationContext`) so every CTA opens the same modal.

## Key Files
- `src/App.js` — routes + ConsultationProvider
- `src/components/Layout.jsx` — Lenis, page transitions, global chrome
- `src/components/Navbar.jsx`, `Footer.jsx`, `Hero.jsx`, `CTAButton.jsx`, `ConsultationModal.jsx`, `TechStack.jsx`
- `src/pages/Home.jsx`, `Services.jsx`, `Process.jsx`, `Contact.jsx`
- `src/lib/data.js` (content), `src/lib/motion.jsx` (Reveal/MaskText helpers), `src/lib/icons.jsx`

## Implemented (2026-06-07)
- Home: kinetic hero with masked line-by-line on-load reveal + parallax browser mockup, editorial marquee, 5-card USP bento, dark numbered manifesto, services overview, tech-stack icon grid (11 icons, hover color), 5-step process teaser, founder snippet, final CTA.
- Services: intro hero + 4 detailed service blocks (with "what's included") + CTA.
- Process: 12-step alternating vertical timeline with scroll-driven progress line + CTA.
- Contact: validated contact form (local success), direct email/phone, LinkedIn/GitHub links, consultation CTA.
- Global "Book a Consultation" modal (Name/Email/Business/Budget pills/Project Details) with validation, loading + success states, sonner toast.
- SEO: semantic HTML, updated title/meta description, font preconnect.
- **Verified by testing agent: 100% frontend pass** (navigation, modal from all 5 CTAs, both form validation+success flows, timeline, tech icons, social hrefs).

## Backlog (P1/P2)
- P1: Wire real backend for form/consultation submissions (user said they'll do this).
- P2: Logo file swap-in (placeholder wordmark currently), OG/social share image, sitemap/robots for SEO.
- P2: Optional case-study/pricing pages once the agency has content.

## Notes
- No auth, no DB, no test credentials needed.
- One non-blocking console warning originates from the Emergent preview overlay (not app code).
