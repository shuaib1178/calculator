## 2026-08-22 - Initial Application Loader
**Learning:** Placing an accessible CSS/SVG loading indicator directly inside the `#root` container in `index.html` prevents a Flash of Unstyled Content (FOUC) and blank screen during initial bundle load. React automatically replaces the child content of `#root` when mounting.
**Action:** Use inline styles with system fallback fonts and SMIL-animated SVG inside `#root` for instant visual feedback without extra CSS overhead or token modifications.
