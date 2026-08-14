## 2026-08-14 - Accessible Muted Text Color Contrast
**Learning:** The initial `brand.muted` color (`#c0c1c0`) provided insufficient contrast (~1.93:1) against the page background (`#fcfbfd`), violating WCAG AA accessibility requirements (4.5:1 for normal text).
**Action:** Update `brand.muted` in `tailwind.config.js` to `#4b5563` to ensure a 7.7:1 contrast ratio across all UI components using muted text styling.
