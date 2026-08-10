# Task: Clean Up Repo Structure — Migrate App to Repo Root

## Status: ✅ COMPLETED

This document is preserved as **historical migration context**.

---

## What Was Done

The Next.js app that previously lived in `neptune-web/` has been migrated to the
repo root. The project now runs from `Neptune-B2B/` directly.

| Item | Outcome |
|------|---------|
| `neptune-web/` contents | Moved to repo root |
| `backend/`, `frontend/`, `.emergent/` | Deleted |
| `test_reports/`, `tests/` | Belonged to old scaffold — deleted |
| `design_guidelines.json` | Belonged to old scaffold — deleted |
| `context/`, `memory/`, `AGENTS.md` | Preserved (agent working notes) |
| `.gitignore` | Updated for standalone Next.js root |

## Current Stack

- **Framework**: Next.js 16.3.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: React 19

## Verification

`npm install` and `npm run dev` both pass from the repo root with no broken
imports or missing files.