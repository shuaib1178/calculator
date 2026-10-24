## 2026-10-24 - Initial Load UX and Accessibility Baseline
**Learning:** Adding a lightweight inline SVG loader inside `<div id="root">` with accessible ARIA status attributes prevents a blank screen during initial bundle load without causing a flash of unstyled content or layout shifts.
**Action:** Use inline styles and SMIL SVG animations inside `#root` for instant, CSS-less visual feedback prior to JS hydration.
