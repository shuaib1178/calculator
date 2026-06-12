## 2026-06-11 - Accessible Color Contrast for Muted Text
**Learning:** WCAG AA compliance for normal text requires a minimum contrast ratio of 4.5:1. The original 'brand.muted' color (#c0c1c0) had a ratio of ~1.9:1, which is insufficient. Moving to a standard Tailwind shade like gray-600 (#4b5563) provides a safe ratio of ~7.5:1 on white backgrounds.
**Action:** Always verify contrast ratios for custom color palettes. Prefer standard Tailwind shades (600 or higher) for secondary/muted text to ensure accessibility without manual calculation.
