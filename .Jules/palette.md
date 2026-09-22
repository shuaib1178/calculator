## 2026-09-22 - Accessible Initial Loader Pattern
**Learning:** Implementing an initial loader inside `#root` with inline flexbox styles, system fallback fonts, and an inline SMIL SVG spinner ensures immediate visual and screen reader feedback (`role="status"`, `aria-live="polite"`) before JavaScript bundle execution without causing layout shift or FOUC when React mounts.
**Action:** Nest the static loader container directly inside `#root` using inline styles and SMIL animated SVGs for instant, zero-dependency loading UX.
