## 2026-10-25 - Initial Loader UX and Accessibility

**Learning:** Nesting an initial loader inside `<div id="root">` with inline styles, standard system fonts, and a SMIL-animated SVG provides immediate visual feedback before JavaScript loads without FOUC, while `role="status"` and `aria-label="Loading application"` ensure screen readers are informed.
**Action:** Always use inline CSS and SMIL SVG animations inside `#root` for HTML initial loading states to avoid external stylesheet dependencies or unstyled flash.
