# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- In Progress

## Current Goal

- Spec `02` — Contact form Server Action (Resend email integration)

## Completed

- `01-tech-stack-migration` — Next.js 14+ App Router + TypeScript project
  scaffolded at `neptune-web/`. All pages (Home, Services, Process,
  Contact), shared components (Navbar, Footer, CTAButton, Hero,
  TechStack, UdyamCertificate), lib utilities (data, motion, icons,
  utils, types) ported. All JS → TS, no `any`, strict mode passes.
  `npm run build` ✅ — 4 static routes, zero errors.

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
- `CTAButton` navigates to `/contact` via `next/link` instead of
  opening a modal. `ConsultationContext` and `ConsultationModal` are
  not migrated (modal pattern replaced by the Contact page per spec).
- All pages marked `"use client"` because Framer Motion requires
  browser context. Server components can be introduced per-section
  in a future refactor once animation boundaries are clear.

## Session Notes

- Branch: `tech-stack-migration`
- New app: `neptune-web/` (Next.js 16, React 19, Tailwind v4)
- Legacy source (DO NOT modify): `frontend/`
- Build command: `cd neptune-web && npm run build`
- Dev command: `cd neptune-web && npm run dev`
