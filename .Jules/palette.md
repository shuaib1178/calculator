## 2026-09-20 - Accessible HTML-only Initial Loading Spinner
**Learning:** Adding a CSS/SVG static loader with `role="status"` nested inside `<div id="root">` ensures immediate screen reader and visual feedback during initial bundle loading before JavaScript/React executes, avoiding layout shifts or FOUC without requiring extra CSS assets or custom design tokens.
**Action:** Use an SMIL-animated SVG spinner centered inside `#root` with standard fallback system fonts and brand primary color (`#054f49`) for initial loading states in HTML-first single page apps.
