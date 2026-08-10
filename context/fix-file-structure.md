# Task: Clean Up Repo Structure — Remove Unused Emergent Scaffold Files

## Context
This repo (`Neptune-B2B`) was originally scaffolded by Emergent AI with a FARM stack structure (`frontend/` + `backend/`). I have since built and migrated the actual production app into the `neptune-web/` folder, which is a working Next.js 14 (App Router) + TypeScript app with no backend or database — form submissions go through Resend directly.

The repo root currently still contains leftover files/folders from the original Emergent scaffold that are **not used by the actual app** and are causing deployment tools (Vercel) to misdetect this as a multi-service monorepo.

## Current Repo Root Structure
Neptune-B2B/
├── .emergent/
├── backend/
├── context/
├── frontend/
├── memory/
├── neptune-web/ ← this is the actual, working Next.js app
├── test_reports/
├── tests/
├── .gitconfig
├── .gitignore
├── AGENTS.md
├── design_guidelines.json

## What I Want

1. **Move the Next.js app to the repo root.**
   - Move all contents of `neptune-web/` up to the repo root, so the repo root itself becomes the Next.js project root (i.e. `package.json`, `next.config.ts`, `app/`, `public/`, etc. should sit directly at `Neptune-B2B/`, not nested inside `neptune-web/`).
   - Update any config, import paths, or scripts that assumed the old nested location.

2. **Delete unused Emergent scaffold folders/files** that have no role in the actual Next.js app:
   - `backend/` (old FastAPI backend — not used, no backend in this project)
   - `frontend/` (old pre-migration Create React App — replaced by `neptune-web/`)
   - `.emergent/` (Emergent AI internal tooling folder — not needed)
   - `test_reports/` and `tests/` — only delete if these belong to the old `backend/`/`frontend/` structure and are not testing the current Next.js app; otherwise flag them to me before deleting rather than removing them.
   - `design_guidelines.json` — only if it was used by the old scaffold and has no reference in the current Next.js app.

3. **Review before deleting** `context/`, `memory/`, and `AGENTS.md` — these may be your own agent working notes/instructions rather than app code. Do not delete these without listing what's in them first and confirming with me.

4. **Fix `.gitignore`** — make sure it's appropriate for a standalone Next.js project at the root (ignoring `node_modules`, `.next`, `.env*.local`, etc.) rather than the old multi-service layout.

5. **Verify the app still runs correctly** after the move — confirm `npm install` and `npm run dev` work from the repo root with no broken imports or missing files.

## Deliverable
- A single, clean Next.js 14 + TypeScript app at the repo root with no unrelated backend/frontend scaffold folders.
- A short summary listing exactly what was moved, what was deleted, and what (if anything) you flagged for my review instead of deleting outright.