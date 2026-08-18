## 2026-08-18 - Initial HTML Fallback Loader
**Learning:** Nesting a CSS/SMIL-based initial loading spinner directly inside `#root` in `index.html` provides instant visual feedback and accessible status reporting (`role="status"`) before the JavaScript bundle loads, and is automatically cleared once React mounts.
**Action:** Use inline styles, brand colors (`#054f49`), and inline SMIL SVG animations for zero-dependency, FOUC-free startup UX.
