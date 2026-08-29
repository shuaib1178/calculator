## 2026-08-29 - Initial Load UX and Accessibility
**Learning:** Placing a CSS/SVG inline loader inside `<div id="root">` in `index.html` provides immediate, accessible visual feedback to users before JavaScript loads, avoiding blank screen initial loads without requiring extra CSS assets.
**Action:** Use inline SVG with `<animateTransform>` and system font fallback with high-contrast brand colors (`#054f49`) inside `#root` with `role="status"` and `aria-label`.
