# Palette Journal

## 2026-10-16 - Root Initial Loader Pattern
**Learning:** In repositories without full React `src/` component trees or during initial HTML parsing before JavaScript loads, adding a lightweight, inline-styled CSS/SVG loading state inside `#root` prevents Flash of Unstyled Content (FOUC) and blank screens.
**Action:** Use inline styles and SMIL SVG animations with high-contrast brand colors and ARIA attributes (`role="status"`, `aria-label`) inside `<div id="root">`.
