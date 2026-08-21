# Palette's Journal

## 2026-08-21 - Initial Application Loader Pattern
**Learning:** Adding an accessible, inline-styled loader inside `#root` in `index.html` prevents Flash of Unstyled Content (FOUC) and blank screen states before React hydrates, while using SMIL animated SVG avoids custom CSS style block dependencies.
**Action:** Use inline flex container with `role="status"`, brand primary color (#054f49), and fallback system font stack inside `#root` for static index.html pages.
