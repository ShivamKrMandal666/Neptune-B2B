# Architecture Context

## Stack

| Layer      | Technology                        | Role                                                   |
| ---------- | ---------------------------------- | ------------------------------------------------------- |
| Framework  | Next.js 14+ (App Router) + TypeScript | Renders all pages, routing, Server Actions            |
| UI         | Tailwind CSS + shadcn/ui           | Styling and reusable UI primitives                      |
| Animation  | Framer Motion                      | Scroll reveals, hover states, micro-interactions         |
| Auth       | None                                | No accounts, no sign-in anywhere on the site             |
| Database   | Supabase (Postgres)                 | Stores consultation form submissions, insert-only via RLS |
| Email      | Not wired                           | Optional future notification layer; not implemented      |

## System Boundaries

- `app/` — Route segments for the 4 pages (Home, Services,
  Process, Contact Us), layouts, and route handlers
- `app/api/contact/` — the single route handler; validates the
  consultation form and inserts it into Supabase, nothing else
- `components/ui/` — shadcn/ui primitives (buttons, inputs,
  cards) — presentational only, no business logic
- `components/sections/` — Page-specific composed sections
  (hero, USP cards, process timeline, etc.) built from
  `components/ui/` primitives
- `lib/` — Shared utilities: form validation schemas,
  constants (contact details, nav links), Supabase client
  factories (`lib/supabase/`)
- `supabase/migrations/` — SQL schema, run via the Supabase
  dashboard SQL Editor
- `public/` — Static assets (icons, images, tech-stack logos)

## Storage Model

- **Supabase Postgres** is the persistence layer. One table:
  `consultations` (id, name, email, phone, project_details,
  status, created_at).
- Submissions are written **server-side only**, from the
  `app/api/contact` route handler. Components never talk to
  Supabase directly.
- Row Level Security is enabled with a single insert-only
  policy for `anon`/`authenticated`, plus a column-level grant
  covering `name`, `email`, `phone`, `project_details`. There
  is no select, update, or delete policy, so those are denied
  by default.
- Submissions are read through the Supabase dashboard, which
  connects as `service_role` and bypasses RLS. An in-app admin
  view would require Supabase Auth and a scoped select policy —
  not built.

## Auth and Access Model

- No authentication anywhere on the site — every page is
  public
- No user accounts, sessions, roles, or ownership concepts
- No access control needed — there is nothing to protect or
  scope by user

## Invariants

1. `consultations` is the only table. Public access to it is
   insert-only, enforced by RLS plus a column-level grant — a
   select, update, or delete policy is never added for `anon`
2. No authentication, session, or account logic is added
   anywhere in the app
3. The consultation submission logic lives only in
   `app/api/contact/route.ts`; UI components never import a
   Supabase client or write to the database directly
4. No `service_role` key or other secret is ever put behind a
   `NEXT_PUBLIC_` prefix — only the publishable (anon) key,
   which is safe to expose because RLS gates it
4. No fabricated content (testimonials, client counters,
   trust badges) is added to any page, per the project's
   explicit exclusions
5. All animations (Framer Motion) must not block or delay
   access to page content — reveals and hovers only, no
   loading gates
