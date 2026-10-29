# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-10-29 - Inline SVG Initial Loader in #root
**Learning:** Nesting a lightweight inline SVG loader inside `<div id="root">` with `role="status"` and `aria-label` provides immediate visual feedback before JavaScript loads without triggering FOUC or requiring extra CSS dependencies.
**Action:** When improving app startup UX, embed an accessible SMIL-animated SVG inside `#root` using brand inline styles.
