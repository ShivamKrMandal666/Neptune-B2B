read ./AGENTS.md before implementing.

# Task: Replace Placeholder Logo (Header, Footer, Favicon)

## Context
The current header and footer are using an auto-generated placeholder logo — a blue circular "M" icon next to the text "Neptune B2B". This needs to be completely removed and replaced with our actual brand logo assets (PNG format).

## Assets Provided
I will provide the file paths to three logo images:
1. **Header logo** — horizontal lockup (icon + wordmark side by side)
2. **Footer logo** — stacked lockup (icon on top, wordmark + tagline below)
3. **Favicon** — icon-only mark

Paste paths here before running:
- Header logo path: "C:\Users\elite\OneDrive\Pictures\header-logo-croped.png"
- Footer logo path: "C:\Users\elite\OneDrive\Pictures\footer-logo-croped.png"
- Favicon path: "C:\Users\elite\OneDrive\Pictures\fevicon croped.png"

## Instructions

1. **Remove the placeholder logo completely** from both the Header and Footer components — this includes the circular "M" icon element and the "Neptune B2B" text that's currently hardcoded next to it. Do not leave any leftover styling, wrapper divs, or unused CSS/classes behind.

2. **Create a dedicated component/file for each logo**, placed in the appropriate assets/components folder structure already used in this project:
   - `HeaderLogo` — imports and renders the header logo PNG
   - `FooterLogo` — imports and renders the footer logo PNG
   - Favicon — placed directly in the correct public/app directory per this framework's convention (e.g. `app/favicon.ico` or `public/favicon.png`, whichever this Next.js setup expects)

3. **Copy the provided image files** into the project's image/assets directory (e.g. `public/images/` or wherever existing images are stored) — do not leave them referenced from an external or temp path.

4. **Replace the placeholder in the Header** with the new `HeaderLogo` component. Preserve the existing layout/spacing/link-to-home behavior of the header — only swap out the visual logo element.

5. **Replace the placeholder in the Footer** with the new `FooterLogo` component. Preserve existing footer layout — only swap out the visual logo element.

6. **Set the favicon** using the provided favicon image so it shows correctly in the browser tab. Make sure it's wired up in the correct metadata/head configuration for this framework (e.g. Next.js `app/favicon.ico` or `metadata.icons` in `layout.tsx`).

7. Use `next/image` (or the project's existing image-handling convention) for the header and footer logos to keep performance optimized, with appropriate `alt` text (e.g. `alt="Neptune B2B logo"`).

8. **Ensure proper spacing and alignment for all three logos:**
   - Add appropriate margin and padding around the Header and Footer logos so they don't sit flush against edges, nav items, or other elements — they should have comfortable breathing room consistent with the rest of the layout's spacing scale.
   - Make sure each logo is **vertically and horizontally centered** within its container (no awkward offset or misalignment when the navbar/footer height changes on different screen sizes).
   - The logo should sit at a **natural, well-proportioned "zoom" level** — not cropped too tightly (edges of the icon touching its container) and not floating too small with excess empty space around it. It should look intentional and balanced at a glance, matching how a typical polished SaaS header/footer logo is sized and positioned.
   - Verify this looks correct and stays properly aligned across **mobile, tablet, and desktop breakpoints** — re-check spacing at each breakpoint rather than assuming desktop spacing values translate directly.
   - The favicon image itself should be appropriately padded/cropped within its square canvas so it isn't cut off or overly zoomed when rendered at browser-tab size (16×16 / 32×32).

9. Confirm image sizing looks correct and proportional in both header and footer — do not stretch or distort the logos. Constrain by height and let width scale automatically.

10. Do not modify any other part of the header or footer beyond the logo swap.