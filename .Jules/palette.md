## 2026-08-16 - Accessible Initial HTML Loading State
**Learning:** Adding an inline CSS loading spinner directly inside `#root` in `index.html` provides immediate visual feedback before JavaScript loads. Using `role="status"`, `aria-label`, and SMIL SVG animations avoids external CSS/Tailwind dependencies and prevents Flash of Unstyled Content (FOUC).
**Action:** Always nest initial static loading indicators inside `#root` using inline styles, SVG animations, and standard accessibility attributes (`role="status"`).
