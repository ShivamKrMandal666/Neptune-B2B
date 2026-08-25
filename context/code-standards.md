# Code Standards

## General

- Keep components small and single-purpose — a section
  component renders one section, not layout plus data plus
  animation logic all mixed together
- Fix root causes, do not layer workarounds — if a page
  needs new behavior, update the relevant section component
  or Server Action directly rather than patching around it
- Do not mix unrelated concerns in one file — presentation
  (`components/ui/`, `components/sections/`), page composition
  (`app/`), and the submission route handler (`app/api/`) stay
  separate
- Do not add functionality outside this project's scope
  (no auth, no client portal) even if it seems like a small
  addition — see `architecture.md` invariants

## TypeScript

- Strict mode is required throughout the project
- Avoid `any` — use explicit interfaces or narrowly scoped
  types, especially for form data and the insert payload
- Validate unknown external input (form submissions) at the
  route-handler boundary before trusting it or writing it to
  the database
- Co-locate shared types in `lib/types.ts` rather than
  redefining the same shape in multiple files

## Next.js

- Default to server components; add `"use client"` only when
  browser interactivity requires it (form state, Framer
  Motion triggers, hover effects)
- Keep the contact route handler focused on a single
  responsibility: validate input, then insert the row — no
  side logic bolted on
- Page files in `app/` compose section components; they do
  not contain raw markup, styling logic, or business logic
  themselves

## Styling

- Use Tailwind CSS utility classes and the defined color
  tokens (see `ui-context.md`) — no hardcoded hex values in
  components
- Use shadcn/ui primitives from `components/ui/` for buttons,
  inputs, and cards rather than writing new one-off variants
- Follow the spacing, radius, and typography scale defined in
  `ui-context.md`

## Route Handlers

- Validate and parse form input (name, email, phone, message)
  before any logic runs — required fields, length caps, and an
  email format check
- No auth or ownership checks are needed — the site is fully
  public — but input must still be validated before it is
  written to the database
- Return a consistent, predictable result shape (e.g.
  `{ success: boolean; error?: string }`) so the form UI can
  render success/error states reliably
- Never return a raw driver/Supabase error message to the
  browser — log it server-side and return a generic message
- Never fake success: if the write fails, return a non-2xx so
  the form can show its error state

## Data and Storage

- Supabase Postgres holds consultation submissions in the
  `consultations` table — see `architecture.md` for the schema
  and RLS model
- Only the route handler writes to Supabase, via
  `lib/supabase/server.ts`. Never import a Supabase client
  into a component
- Public access stays insert-only. Do not add a select,
  update, or delete policy for `anon`
- Never put a `service_role` key or any other secret behind a
  `NEXT_PUBLIC_` prefix — it would ship in the browser bundle
  and bypass RLS

## File Organization

- `app/` — Route segments for each page, layouts, and
  route-level composition only
- `app/api/` — Route handlers; currently just the
  consultation submission endpoint
- `components/ui/` — shadcn/ui primitives, presentational only
- `components/sections/` — Composed, page-specific sections
  built from `components/ui/` primitives
- `lib/` — Shared types, validation schemas, constants
  (contact details, nav links), and `lib/supabase/` client
  factories
- `supabase/migrations/` — SQL schema files
- `public/` — Static assets (icons, images, tech-stack logos)
