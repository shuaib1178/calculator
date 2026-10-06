## 2026-10-06 - Initial HTML Accessible Loader
**Learning:** Adding a lightweight, accessible CSS/SVG loader directly inside `#root` in `index.html` gives instant visual feedback to users before JavaScript bundle downloads and executes, avoiding blank page flashes.
**Action:** Nest loader structure inside `#root` with inline flexbox styles, brand color matching, and ARIA attributes (`role="status"`, `aria-label="Loading application"`).
