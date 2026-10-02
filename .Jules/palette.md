# Palette's Journal - Critical Learnings

## 2026-10-02 - Initial Load UX with SMIL Animated SVG
**Learning:** Adding a lightweight CSS/SMIL inline SVG loader within `#root` in `index.html` gives users immediate visual feedback and screen reader notifications (`role="status"`, `aria-live="polite"`) before the JS bundle executes, eliminating blank screen FOUC without external CSS dependencies.
**Action:** Use nested flexbox container inside `#root` with inline styles and inline SMIL SVG animation for static HTML loading state.
