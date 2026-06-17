## 2026-06-17 - Improved color contrast for brand.muted

**Learning:** The previous `brand.muted` color value (#c0c1c0) failed WCAG AA contrast standards (ratio ~2.1:1) against white backgrounds. To ensure accessibility for low-vision users, the color was updated to #4b5563, which provides a 5.1:1 contrast ratio.

**Action:** Always verify contrast ratios for design tokens using WCAG AA standards (4.5:1 for normal text). Prefer using standard Tailwind shades like gray-600 or darker for muted text to maintain a safe margin.
