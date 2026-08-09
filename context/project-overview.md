# Neptune B2B

## Overview

Neptune B2B is a marketing website for a solo web development
agency of the same name, founded by Mandal Chandrashekhar
Diwakar. The site exists to convert visitors into booked
consultations by presenting the agency's core offer — high-
conversion, fast, SEO-ready, mobile-optimized websites — with
a premium, trust-first design. It is a frontend marketing site,
not a client-facing product or dashboard.

## Goals

1. Communicate the agency's USP (conversion-focused, modern,
   fast, SEO-ready, mobile-optimized websites) clearly enough
   that a visitor understands the value within seconds
2. Drive every page toward a single primary action: booking a
   consultation
3. Build credibility around the founder's direct, hands-on
   involvement rather than fabricated social proof (no fake
   testimonials, client counts, or trust badges)

## Core User Flow

1. Visitor lands on the Home page and sees the hero, USP
   section, and primary CTA ("Book a Consultation")
2. Visitor optionally explores Services or Process pages to
   understand what's offered and how engagements work
3. Visitor reaches the Contact Us page and fills out the
   booking/contact form (Name, Email, Phone, Project details)
4. On submit, a Next.js Server Action sends an email (via
   Resend) to the business inbox with the appointment details;
   the visitor sees a success state on the form
5. (Optional) Visitor receives a confirmation email
   acknowledging their booking request

## Features

### Marketing Pages

- Home page: hero, USP section (5 feature cards), services
  preview, tech stack showcase, process teaser, founder
  snippet, final CTA section
- Services page: 4 detailed service offerings (Website
  Development, Landing Pages, Website Redesign, Responsive
  Development)
- Process page: 12-step client journey timeline, from
  Discovery through Support
- Contact Us page: booking form, direct contact details,
  social links (LinkedIn, GitHub)

### Interactions

- Scroll-triggered reveal animations for sections (Framer
  Motion)
- Hover animations on nav links, buttons, cards, and tech
  stack icons
- Form input focus states and loading/success/error states
  on submit

### Booking / Notification

- Contact form submission triggers a Server Action that emails
  appointment details to the business inbox via Resend
- No database, no auth, no client portal — email is the only
  persistence layer

## Scope

### In Scope

- 4-page static/marketing site (Home, Services, Process,
  Contact Us) built with Next.js 14+ App Router, TypeScript,
  and Tailwind CSS
- Fully responsive, mobile-first layout
- Contact form wired to send email notifications via Resend
  (Server Action / API Route) — no data storage
- Framer Motion animations throughout

### Out of Scope

- Any backend database (no MongoDB, no Supabase, no persisted
  records)
- User authentication or accounts
- Client portal, dashboards, or any post-booking self-serve
  features
- Testimonials, client logos, "projects completed" or "happy
  clients" counters, or any other fabricated social proof
- Payment processing

## Success Criteria

1. A visitor can navigate all 4 pages and understand the
   agency's offer without ambiguity
2. Submitting the contact form successfully sends a
   well-formatted email with the appointment details to the
   business inbox, and the visitor sees a clear success state
3. The site is fully responsive and animations do not delay
   or block access to content
4. No testimonials, fake stats, or unearned trust signals
   appear anywhere on the site
