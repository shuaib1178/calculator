## 2026-10-14 - HTML Fallback Loader Pattern
**Learning:** Implementing an initial loader inside `#root` using inline styles, standard system fonts, and a SMIL-animated SVG ensures a flicker-free, accessible, and brand-consistent experience on startup without requiring any custom CSS or Tailwind bundle resolving.
**Action:** When working with single-page applications, nest a simple loader with `role="status"` directly inside `<div id="root">` so it displays immediately and is smoothly replaced when React mounts.
