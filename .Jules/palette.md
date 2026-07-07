## 2026-07-07 - Accessibility Contrast Failure in Core Theme
**Learning:** The `brand.muted` color (#c0c1c0) in the core Tailwind configuration provided a contrast ratio of only 1.84:1 against the white background, significantly failing the WCAG AA requirement of 4.5:1. This highlights a common issue where "muted" styles are prioritized for aesthetics over readability.
**Action:** Always verify that "muted" or "secondary" design tokens meet WCAG AA contrast standards. Use standard shades like Gray 600 (#4b5563) or darker for light backgrounds to ensure accessible secondary text.
