# Architecture Context

## Stack

| Layer      | Technology                        | Role                                                   |
| ---------- | ---------------------------------- | ------------------------------------------------------- |
| Framework  | Next.js 14+ (App Router) + TypeScript | Renders all pages, routing, Server Actions            |
| UI         | Tailwind CSS + shadcn/ui           | Styling and reusable UI primitives                      |
| Animation  | Framer Motion                      | Scroll reveals, hover states, micro-interactions         |
| Auth       | None                                | No accounts, no sign-in anywhere on the site             |
| Database   | None                                | No persisted data of any kind                            |
| Email      | Resend                             | Sends booking-form submissions to the business inbox     |

## System Boundaries

- `app/` — Route segments for the 4 pages (Home, Services,
  Process, Contact Us), layouts, and Server Actions
- `app/actions/` — Server Actions only; owns the Resend
  email-sending logic for the contact form, nothing else
- `components/ui/` — shadcn/ui primitives (buttons, inputs,
  cards) — presentational only, no business logic
- `components/sections/` — Page-specific composed sections
  (hero, USP cards, process timeline, etc.) built from
  `components/ui/` primitives
- `lib/` — Shared utilities: form validation schemas,
  constants (contact details, nav links), Resend client setup
- `public/` — Static assets (icons, images, tech-stack logos)

## Storage Model

- **No database.** This project has no persistence layer.
- **Email as the only "storage"**: when the contact form is
  submitted, the appointment details exist only in the email
  sent via Resend to the business inbox — nothing is written
  to disk, a database, or any third-party datastore.

## Auth and Access Model

- No authentication anywhere on the site — every page is
  public
- No user accounts, sessions, roles, or ownership concepts
- No access control needed — there is nothing to protect or
  scope by user

## Invariants

1. No database, ORM, or persistence layer is ever introduced
   — the contact form's only side effect is sending an email
   via Resend
2. No authentication, session, or account logic is added
   anywhere in the app
3. The contact form submission logic lives only in
   `app/actions/`; UI components never call Resend directly
4. No fabricated content (testimonials, client counters,
   trust badges) is added to any page, per the project's
   explicit exclusions
5. All animations (Framer Motion) must not block or delay
   access to page content — reveals and hovers only, no
   loading gates
