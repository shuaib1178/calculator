# Palette's Journal - Critical Learnings Only

## 2026-10-19 - Initial Loader Pattern inside React Root Container
**Learning:** Implementing a CSS-only initial loading screen nested inside `<div id="root">` with SMIL SVG animations provides an immediate, smooth, accessible visual feedback loop before JavaScript executes and mounts the application, avoiding FOUC without needing external style sheets or custom CSS files.
**Action:** Always nest the initial inline loader inside `<div id="root">` so React automatically replaces it upon mounting, and use inline CSS with fallback system fonts to ensure immediate rendering.
