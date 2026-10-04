## 2026-10-04 - Initial Loader Accessibility & FOUC Prevention
**Learning:** Adding a CSS/inline SVG loader nested inside the `#root` div in `index.html` prevents a Flash of Unstyled Content (FOUC) and provides immediate feedback on initial application startup.
**Action:** Use inline styles, system font fallbacks (`system-ui, -apple-system, sans-serif`), brand background `#fcfbfd`, primary color `#054f49`, and SMIL SVG animations with `role="status"` and `aria-live="polite"` inside `#root`.
