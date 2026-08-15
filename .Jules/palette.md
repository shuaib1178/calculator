## 2026-08-15 - WCAG AA Contrast Improvement for Brand Muted Token
**Learning:** The brand muted color `#c0c1c0` in `tailwind.config.js` provides insufficient contrast (~1.93:1) against the page background `#fcfbfd`. Updating `#c0c1c0` to `#4b5563` improves contrast to ~7.7:1, passing WCAG AA standards.
**Action:** Always verify color contrast ratios in Tailwind design tokens and ensure muted text colors meet at least 4.5:1 contrast against light backgrounds.
