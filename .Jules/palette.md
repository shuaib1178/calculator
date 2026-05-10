## 2024-05-10 - Perceived Performance and Color Contrast
**Learning:** Adding a brand-themed loading state in the root HTML provides immediate visual feedback, significantly improving perceived performance during bundle initialization. Furthermore, standard 'muted' color palettes in legacy designs often fail WCAG contrast requirements (e.g., #c0c1c0 is only 1.83:1), which is a critical accessibility barrier.
**Action:** Always check the initial HTML for a "white screen of death" and verify contrast ratios of muted/secondary text colors against the background.
