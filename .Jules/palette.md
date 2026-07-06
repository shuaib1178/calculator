## 2026-07-06 - Improve Color Contrast for Muted Text
**Learning:** The previous `brand.muted` color (#c0c1c0) had a contrast ratio of ~1.8:1, failing WCAG AA standards. Using a darker shade like gray-600 (#4b5563) ensures a contrast ratio of at least 4.5:1, significantly improving readability for low-vision users.
**Action:** Always verify contrast ratios for brand tokens; prefer standard shades (600+) for muted text to ensure accessibility by default.
