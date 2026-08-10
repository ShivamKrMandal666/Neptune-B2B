# Progress Tracker

Update this file after every meaningful implementation change.

- Completed

## Current Goal

- `02` — Contact form Server Action: wire Contact page form to send email via Resend

## Completed

- `01-tech-stack-migration` — Next.js 14+ App Router + TypeScript project
  scaffolded at `neptune-web/`. All pages (Home, Services, Process,
  Contact), shared components (Navbar, Footer, CTAButton, Hero,
  TechStack, UdyamCertificate), lib utilities (data, motion, icons,
  utils, types) ported. All JS → TS, no `any`, strict mode passes.
  `npm run build` — 4 static routes, zero errors.

- `udyam-certificate` — "View Certificate" button now opens the real
  Udyam Registration Certificate PDF via iframe inside the existing
  modal shell. PDF is lazy-loaded with `next/dynamic` — not fetched
  on page load. Outer Hero card/badge left completely unchanged.
  `npm run build` — 6 routes, zero TypeScript errors.

- `consultation-button` — All "Book a Consultation" buttons site-wide
  (Navbar desktop/mobile, Hero, Footer, Final CTA) now open a Radix
  Dialog modal containing the existing ConsultationForm instead of
  navigating to `/contact`. Form logic, validation, and Resend
  submission unchanged. `/contact` page left fully functional.
  New files: `ConsultationForm.tsx`, `ConsultationContext.tsx`,
  `ConsultationModal.tsx`. Updated: `layout.tsx`, `CTAButton.tsx`,
  `contact/page.tsx`. `npm run build` — 6 routes, zero errors.

- `replace-logos` — Placeholder blue "M" SVG icon + hardcoded
  "Neptune B2B" text removed from Navbar and Footer. Replaced with
  real brand PNG assets via dedicated `HeaderLogo.tsx` (horizontal
  lockup, `h-9`) and `FooterLogo.tsx` (stacked lockup, `h-16`)
  components using `next/image` (height-constrained, width auto).
  Favicon wired via `metadata.icons` in `layout.tsx`.
  All three PNGs copied to `public/images/`. No other Navbar or
  Footer markup touched. `npm run build` — 9 routes, zero errors.

## In Progress

- None.

## Next Up

- `02` — Contact form Server Action: wire the Contact page form to send
  an email via Resend to the business inbox on valid submit.

## Open Questions

- None at this time.

## Architecture Decisions

- New Next.js 16 (App Router + TypeScript + Tailwind v4) project lives
  at `neptune-web/` alongside the legacy `frontend/` directory (kept as
  read-only reference).
- Tailwind v4 CSS-first config used (`@theme inline {}` block in
  `globals.css`) — no `tailwind.config.js` needed.
- `CTAButton` is now a `<button>` that calls `useConsultation().open()`
  via React context. Previously it navigated to `/contact` via `next/link`.
  `ConsultationProvider` wraps the root layout body, so any button
  anywhere in the tree can open the modal without prop drilling.
- `ConsultationContext` and `ConsultationModal` are now active — the
  modal pattern replaces the direct `/contact` navigation for CTA buttons.
  The `/contact` page itself remains fully accessible via nav links.
- All pages marked `"use client"` because Framer Motion requires
  browser context. Server components can be introduced per-section
  in a future refactor once animation boundaries are clear.

## Session Notes

- Branch: `consultation-button`
- New app: `neptune-web/` (Next.js 16, React 19, Tailwind v4)
- Legacy source (DO NOT modify): `frontend/`
- Build command: `cd neptune-web && npm run build`
- Dev command: `cd neptune-web && npm run dev`
