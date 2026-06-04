## 2026-06-04 - Accessible Design Tokens
**Learning:** Design tokens like `brand.muted` often use light grays that fail WCAG AA contrast standards (minimum 4.5:1 for normal text). Updating these tokens at the source ensures accessibility propagates throughout the application. For example, changing `#c0c1c0` (ratio 1.83:1) to `#6b7280` (ratio 4.83:1) achieves compliance while maintaining a "muted" aesthetic.
**Action:** Audit brand colors in `tailwind.config.js` against WCAG AA standards early in the project to prevent accessibility regressions in UI components.
