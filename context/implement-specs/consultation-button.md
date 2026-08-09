Read ./AGENTS.md before implementing this.

# Feature: Open "Book a Consultation" Form in a Modal Instead of Redirecting to /contact

## Context
This is a Next.js 16 (App Router) + React 19 + TypeScript project. There is an existing "Book a Consultation" form on the `/contact` page. Multiple "Book a Consultation" buttons are placed across different pages/sections of the site. Currently, clicking any of these buttons navigates the user to the `/contact` route.

## What I Want Instead
- Do **not** change, duplicate, or rebuild the existing consultation form. Keep the form on `/contact` exactly as it is, working exactly as it does now for anyone who lands on `/contact` directly.
- Every "Book a Consultation" button across the site (wherever it currently exists — hero section, navbar, footer, service pages, etc.) should, when clicked, open that **same form component inside a modal/popup** instead of redirecting to `/contact`.
- The form logic, fields, validation, and submission behavior (including the Resend email submission) must remain identical — the modal should just render the existing form component, not a new one.

## Implementation Guidance
1. **Extract the form into a reusable component** (if it isn't already) — e.g. `components/ConsultationForm.tsx` — so it can be rendered both on the `/contact` page and inside the modal without duplicating code.
2. **Create a modal component** (e.g. `components/ConsultationModal.tsx`) using `@radix-ui/react-dialog` directly (already in `package.json`; **no shadcn/ui wrapper**), which renders `<ConsultationForm />` inside it.
3. **Update all "Book a Consultation" buttons** across the site to trigger the modal (open state) instead of using a `<Link>`/`router.push` to `/contact`.
   - Use a shared state/context (or Radix `Dialog` open/close state lifted to a common provider) so any button anywhere in the component tree can open the modal, rather than duplicating modal state per page.
4. **Keep `/contact` page unchanged** — it should still render the full page with the form embedded normally (not in a modal) for anyone who navigates there directly (e.g. via search, direct link, or footer "Contact" link if that's meant to go to the page rather than open the modal).
5. Ensure the modal is responsive and accessible (closes on outside click / Escape key, traps focus, proper `aria` attributes — `@radix-ui/react-dialog` handles most of this by default).

## Deliverables
- A shared `ConsultationForm` component used both on `/contact` and inside the modal.
- A `ConsultationModal` component (implemented with `@radix-ui/react-dialog` directly, **not** shadcn/ui) wired to all existing "Book a Consultation" buttons site-wide.
- `/contact` page left fully functional and unchanged in behavior.
- A short summary of every file/button updated to trigger the modal.

> **Implementation note:** The project uses Next.js 16.3 / React 19 and imports `@radix-ui/react-dialog` directly. There is no shadcn/ui component layer in this codebase — `ConsultationModal.tsx` already reflects this pattern (`import * as Dialog from "@radix-ui/react-dialog"`).