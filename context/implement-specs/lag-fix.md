first read @context/ and @AGENTS.md before implementing this.

My website (built with Next.js) has laggy, janky scrolling — it's not smooth. 
I need you to diagnose the root cause and fix it. Please:

1. First, inspect the project structure and identify the framework/version 
   (Next.js version, React version, whether Turbopack or webpack is in use — 
   check package.json scripts and next.config.js).

2. Look for common causes of scroll jank, specifically:
   - Heavy or unthrottled scroll event listeners (window.addEventListener('scroll', ...) 
     without debounce/throttle or requestAnimationFrame)
   - Large, unoptimized images (not using next/image, missing width/height causing 
     layout shift, oversized file sizes)
   - Expensive CSS: box-shadow, backdrop-filter, blur effects, or gradients 
     animated/repainted on scroll
   - Parallax or scroll-linked animation libraries (Framer Motion, GSAP, AOS, etc.) 
     doing layout-triggering work per frame instead of using transform/opacity
   - Components re-rendering unnecessarily on scroll (missing memoization, 
     state updates tied to scroll position)
   - Fixed/sticky elements with expensive box-shadows or filters
   - Too many DOM nodes rendering at once (no virtualization for long lists)
   - Third-party scripts/widgets (chat widgets, analytics, embeds) blocking the main thread
   - Missing `will-change` or GPU acceleration hints on animated elements, OR 
     overuse of `will-change` causing memory issues

3. Use the browser performance profiler mentally / check code for these patterns 
   rather than guessing — walk through the relevant components (layout, navbar, 
   hero, any scroll-triggered animations) file by file.

4. For each issue found, explain WHY it causes jank, then fix it with the 
   least invasive change (e.g., throttle scroll handlers, swap layout-affecting 
   CSS properties for transform/opacity, lazy-load below-fold images, add 
   next/image, memoize components, virtualize long lists).

5. After fixes, summarize what was changed and why, and tell me how to verify 
   the improvement (e.g., Chrome DevTools Performance tab, checking for 
   long tasks and layout shifts).

Do not do a surface-level pass — actually trace through the scroll-related 
code paths and animation logic before concluding what's wrong.