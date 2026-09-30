## 2026-09-30 - Initial HTML Loader Pattern
**Learning:** Nesting a CSS/SMIL-based loader inside `<div id="root">` with inline styles provides immediate visual and screen-reader feedback (`role="status"`, `aria-live="polite"`) during JS bundle loading, and is cleanly unmounted by React without layout shift or FOUC.
**Action:** Always nest initial HTML loaders inside `#root` using inline styles and fallback system fonts without external CSS dependencies.
