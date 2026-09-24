# Palette Journal

## 2026-09-24 - Initial Load Experience
**Learning:** Implementing a fallback loading indicator directly inside `#root` in `index.html` with inline styles and accessible ARIA roles ensures users receive immediate visual feedback before JavaScript loads and mounts React.
**Action:** Nest an accessible SVG spinner inside a wrapper div with `role="status"` and `aria-live="polite"` inside `#root`.
