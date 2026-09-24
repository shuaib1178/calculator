# Palette's UX Journal

## 2026-09-24 - Initial Load UX with Inline SMIL Loader
**Learning:** Adding an inline CSS/SMIL loading state inside `<div id="root">` with `role="status"` and `aria-live="polite"` prevents a Flash of Unstyled Content (FOUC) and provides immediate screen reader and visual feedback before the main JavaScript app initializes.
**Action:** Always nest initial static loading indicators inside the main app mount container (`#root`) using inline styles and fallback system fonts to ensure smooth replacement when React/Vue mounts without custom CSS dependency issues.
