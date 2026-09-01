# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-09-01 - Initial Loader Pattern with SVG SMIL Animations
**Learning:** Adding a static CSS/SMIL-animated SVG loader directly inside the `#root` `<div>` in `index.html` provides instant feedback during JavaScript bundle download and mounting, preventing white-screen FOUC without requiring external CSS bundles. Wrapping the loader in a child container rather than applying styles to `#root` avoids layout shift when React mounts.
**Action:** Use inline styles, `role="status"`, `aria-live="polite"`, and `aria-label` on a container nested in `#root` for initial application loading states.
