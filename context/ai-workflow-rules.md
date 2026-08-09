# AI Workflow Rules

## Approach

This is a small, scope-locked marketing site — build it
incrementally, one page or one section at a time. The context
files (`project-overview.md`, `architecture.md`,
`ui-context.md`, `code-standards.md`) define what to build and
how. Always implement against these specs — do not infer or
invent behavior, pages, or features not described in them.

## Scoping Rules

- Work on one page or one section at a time (e.g. build the
  Hero section fully before starting the USP section)
- Prefer small, verifiable increments over large speculative
  changes across multiple pages at once
- Do not combine unrelated system boundaries in a single
  implementation step (e.g. don't touch the Contact form's
  Server Action while also styling the Process timeline)

## When to Split Work

Split an implementation step if it combines:

- A page/section build and the Resend email Server Action
- Styling changes and animation (Framer Motion) changes
- Any behavior not clearly defined in `project-overview.md`
  or `architecture.md`

If a change cannot be verified end to end quickly (e.g. "does
this section render correctly and match the palette"), the
scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context
  files — this includes never adding auth, a database, a
  client portal, testimonials, or stat counters, even if it
  seems like a natural addition
- If a requirement is ambiguous (e.g. exact copy, image
  choice), resolve it in the relevant context file before
  implementing, or ask rather than guessing
- If a requirement is missing entirely, add it as an open
  question in `progress-tracker.md` before continuing

## Protected Files

Do not modify the following unless explicitly instructed:

- `components/ui/*` — shadcn/ui primitives
- `app/actions/*` — the Resend email Server Action, once
  implemented and working
- Any third-party library internals (`node_modules`)

## Keeping Docs in Sync

Update the relevant context file whenever implementation
changes:

- System architecture or boundaries → `architecture.md`
- Storage model decisions (there should be none) →
  `architecture.md`
- Code conventions or standards → `code-standards.md`
- Palette, typography, or component conventions →
  `ui-context.md`
- Feature scope → `project-overview.md`

## Before Moving to the Next Unit

1. The current page or section works end to end within its
   defined scope
2. No invariant defined in `architecture.md` was violated
   (no database, no auth, email-only side effect)
3. `progress-tracker.md` reflects the completed work
4. `npm run build` passes
