# Palette's Journal - Critical Learnings

## 2026-08-20 - Accessible Initial HTML Loading State
**Learning:** Adding an accessible inline HTML loader inside `#root` with `role="status"` and `aria-live="polite"` prevents blank white screens and provides instant screen reader feedback during bundle load without adding external CSS dependencies.
**Action:** Use inline SVG SMIL animations and system font fallbacks inside `#root` for instant, FOUC-free initial loading states.
