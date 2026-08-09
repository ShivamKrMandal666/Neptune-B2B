# UI Context

## Theme

Light only. No dark mode. The design language is a premium,
trust-first B2B palette — crisp white/off-white backgrounds,
a confident deep blue for CTAs and accents, and generous
whitespace. Should feel like a boutique consultancy, not a
template portfolio: calm, uncluttered, soft shadows, rounded
corners, subtle gradients where appropriate.

## Colors

| Role             | CSS Variable        | Value       |
| ---------------- | -------------------- | ----------- |
| Page background   | `--bg-base`          | `#FFFFFF`   |
| Surface (sections) | `--bg-surface`      | `#F8FAFC`   |
| Primary text      | `--text-primary`     | `#0F172A`   |
| Muted text        | `--text-muted`       | `#475569`   |
| Primary accent    | `--accent-primary`   | `#1D4ED8`   |
| Accent (hover/dark) | `--accent-dark`    | `#1E40AF`   |
| Secondary accent  | `--accent-light`     | `#DBEAFE`   |
| Border            | `--border-default`   | `#E2E8F0`   |
| Error             | `--state-error`      | `#DC2626`   |
| Success           | `--state-success`    | `#16A34A`   |

All components must use these tokens — no hardcoded hex
values in component code.

## Typography

| Role      | Font    | Variable      |
| --------- | ------- | ------------- |
| UI text   | Inter   | `--font-sans` |
| Code/mono | —       | (not used — no code display anywhere on this site) |

Strong heading hierarchy (clear size/weight jump from H1 →
H2 → body), generous line height and whitespace around
headings.

## Border Radius

| Context             | Class          |
| -------------------- | -------------- |
| Inline / small UI     | `rounded-md`   |
| Cards / panels        | `rounded-xl`   |
| Buttons (primary CTA) | `rounded-lg`   |
| Modals / overlays     | `rounded-2xl`  |

## Component Library

shadcn/ui on top of Tailwind CSS. Components live in
`components/ui/`. Use the shadcn CLI to add new primitives
(buttons, inputs, cards) rather than writing them from
scratch. Custom, page-specific compositions live in
`components/sections/`, built on top of these primitives.

## Layout Patterns

- **Navbar:** Sticky top bar, logo placeholder left, nav
  links center/right, primary CTA button ("Book a
  Consultation") always visible, subtle bottom border or
  shadow on scroll
- **Sections:** Full-width, alternating `--bg-base` and
  `--bg-surface` backgrounds to create visual rhythm down
  the page, generous vertical padding
- **Cards:** Used for USP features, service offerings, and
  process steps — soft shadow, `rounded-xl`, subtle lift/scale
  on hover
- **Timeline (Process page):** Vertical or horizontal
  connecting line between numbered steps, line/step reveals
  as the user scrolls
- **Footer:** Multi-column layout — logo placeholder, nav
  links, contact details, social icons, copyright line at
  the bottom

## Icons

- **UI icons:** Lucide React, stroke-based only. Sizes: `h-4
  w-4` for inline icons, `h-5 w-5` for buttons/cards
- **Tech stack icons:** Brand icons via `react-icons`
  (Simple Icons set) for HTML, CSS, JavaScript, TypeScript,
  React, Next.js, Tailwind CSS, Node.js, Git, GitHub, Vercel
- **Social icons:** Brand icons (LinkedIn, GitHub) via
  `react-icons`, sized to match footer/contact page context
