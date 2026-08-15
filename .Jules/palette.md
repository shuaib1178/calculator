## 2026-08-15 - Improve Muted Color Contrast for WCAG AA
**Learning:** The brand muted color `#c0c1c0` had an insufficient contrast ratio (~1.93:1) against the page background `#fcfbfd`, failing WCAG AA standards (minimum 4.5:1 for normal text).
**Action:** Update `brand.muted` in `tailwind.config.js` to `#4b5563` (~8.2:1 contrast ratio) to ensure secondary and muted UI text is easily readable and WCAG AA compliant.
