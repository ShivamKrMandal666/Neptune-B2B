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
  (`app/`), and the email Server Action (`app/actions/`) stay
  separate
- Do not add functionality outside this project's scope
  (no auth, no database, no client portal) even if it seems
  like a small addition — see `architecture.md` invariants

## TypeScript

- Strict mode is required throughout the project
- Avoid `any` — use explicit interfaces or narrowly scoped
  types, especially for form data and the Resend payload
- Validate unknown external input (form submissions) at the
  Server Action boundary before trusting it or sending it
  onward to Resend
- Co-locate shared types in `lib/types.ts` rather than
  redefining the same shape in multiple files

## Next.js

- Default to server components; add `"use client"` only when
  browser interactivity requires it (form state, Framer
  Motion triggers, hover effects)
- Keep the contact form's Server Action focused on a single
  responsibility: validate input, then send the email via
  Resend — no side logic bolted on
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

## Server Actions

- Validate and parse form input (name, email, phone, message)
  before any logic runs
- No auth or ownership checks are needed — the site is fully
  public — but input must still be sanitized before being
  included in the outgoing email
- Return a consistent, predictable result shape (e.g.
  `{ success: boolean; error?: string }`) so the form UI can
  render success/error states reliably

## Data and Storage

- There is no database — do not introduce one, even for
  "just logging" form submissions
- The only external call the app makes is to Resend, from
  within a Server Action
- Do not persist form submissions anywhere (no file writes,
  no local storage, no third-party datastore)

## File Organization

- `app/` — Route segments for each page, layouts, and
  route-level composition only
- `app/actions/` — Server Actions; currently just the
  contact-form email action
- `components/ui/` — shadcn/ui primitives, presentational only
- `components/sections/` — Composed, page-specific sections
  built from `components/ui/` primitives
- `lib/` — Shared types, validation schemas, constants
  (contact details, nav links), and the Resend client setup
- `public/` — Static assets (icons, images, tech-stack logos)
