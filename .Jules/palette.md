## 2026-10-23 - Initial Fallback Loader inside React Root
**Learning:** Adding an inline-styled, accessible fallback loader inside `#root` prevents visual pop-in / FOUC during JS bundle fetch while ensuring automatic replacement upon React mount.
**Action:** Use inline styles and SMIL SVG animations for initial loaders in `index.html` to avoid CSS loading dependencies.
