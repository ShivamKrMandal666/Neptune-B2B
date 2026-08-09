Read ./AGENTS.md before implement any changes.

# Project: Convert Full-Stack App to Next.js 14 (App Router) + TypeScript

## Context
I have a website currently built with the FARM stack (React / FastAPI / MongoDB / JavaScript) via Emergent AI. I want to convert it into a **modern frontend-only Next.js application** — I do NOT need a backend server or database. All backend logic (FastAPI + MongoDB) should be removed, not migrated.

## Goals

1. **Migrate to Next.js 14+ (App Router)**
   - Convert all React components/pages into the Next.js 14 App Router structure (`app/` directory, layouts, nested routing, metadata API).
   - Preserve all existing pages: Home, Services, Process, Contact Us.
   - Preserve all existing UI, sections, animations, and content exactly as they are — this is a tech stack migration, not a redesign.

2. **Convert JavaScript to TypeScript**
   - Convert every `.js`/`.jsx` file to `.ts`/`.tsx`.
   - Add proper type definitions/interfaces for props, component state, and form data.
   - Ensure strict TypeScript compiles with no `any` types unless unavoidable.

3. **Organize reusable components**
   - Keep all reusable/shared UI components (buttons, cards, nav, footer, form inputs, etc.) inside a dedicated `components/` folder, separate from route-specific page files in `app/`.
   - Keep shadcn/ui components in their own subfolder (e.g. `components/ui/`) as per shadcn convention.

4. **Remove backend & database entirely**
   - Strip out all FastAPI backend code and MongoDB connection logic — this app will be a static/frontend-only Next.js site with no server-side database.
   - Do NOT create any Next.js API Routes or Server Actions yet — leave the "Book a Consultation"/Contact form as a plain frontend form (no submission logic) for now. That will be added in a separate step.

5. **Retain existing styling**
   - Keep Tailwind CSS as the styling framework — migrate the existing Tailwind config/classes as-is.
   - Keep shadcn/ui components; reinstall/reconfigure them properly for the Next.js 14 App Router setup if needed.
   - Preserve Framer Motion animations and all hover/interaction animations already implemented.

## Deliverables
- A clean Next.js 14 App Router + TypeScript project structure with reusable components organized in `components/`.
- No FastAPI, no MongoDB, no unused backend dependencies in `package.json`.
- All existing pages, styling, and animations functioning identically to the original site.
- A short summary at the end of what was changed/removed.