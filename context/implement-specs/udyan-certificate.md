read ./AGENTS.md before implementing.

# Feature: Show Real Udyam Certificate PDF on "View Certificate" Click (with Lazy Loading)

## Context
There is a Udyam Registration Certificate template in the Hero section of the site. It has a "View Certificate" button that currently opens a popup showing certificate details in a styled UI (name, registration number, address, etc. — a designed template, not a real document).

## What I Want Instead
- I will provide my **real Udyam Registration Certificate as a PDF file** directly in this chat.
- When a user clicks the "View Certificate" button, instead of opening the current styled details popup, it should open a popup/viewer that displays my **real certificate PDF**.
- **Do not change the outer Udyam certificate template/card** shown in the Hero section (the badge, "Verified" styling, "View Certificate" button, etc.) — keep that exactly as it is. Only the content that opens on click should change, from the styled fake-details popup to the real PDF.

## Lazy Loading Requirement
- The real certificate PDF must **not** be loaded when the page/Hero section first loads.
- It should only be fetched/loaded **after** the user clicks the "View Certificate" button (i.e., lazy-load the PDF viewer component and the PDF file itself on click, not on initial page render).
- The outer Udyam certificate template/card in the Hero section (the visible badge/card before clicking) should load normally as part of the page — do **not** apply lazy loading to that outer template, only to the PDF popup/viewer that opens on click.

## Implementation Guidance
1. Place the certificate PDF file in the `public/` folder (e.g. `public/documents/udyam-certificate.pdf`) — I will share the actual file separately.
2. Replace the current popup's content (the fake details table) with a PDF viewer that renders this file — either:
   - An embedded PDF viewer inside the existing modal (e.g. using `<iframe src="/documents/udyam-certificate.pdf">` or a lightweight PDF viewer library), or
   - A simple "Open/Download Certificate" action that opens the PDF in a new tab — whichever fits better with the existing modal UI; if unsure, default to embedding it in the existing modal so the popup UX stays consistent.
3. Dynamically import the PDF viewer/modal-content component using Next.js `next/dynamic` (or React `lazy` + `Suspense`) so it is only loaded into the bundle and rendered when "View Certificate" is clicked — not on initial page load.
4. Keep the modal open/close behavior (backdrop click, close button, Escape key) exactly as it currently works.
5. Do not alter any styling, layout, or content of the outer certificate template/card in the Hero section.

## Deliverables
- "View Certificate" button now opens the real PDF certificate instead of the styled fake-details popup.
- Outer Hero-section certificate template left completely unchanged.
- PDF content/viewer confirmed to lazy-load only on click, with no impact on initial page load performance.
- A short summary of the files changed.