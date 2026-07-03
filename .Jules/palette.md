## 2026-07-02 - [Inaccessible Design Token Fix]
**Learning:** The 'brand.muted' color token (#c0c1c0) was used across the application for secondary text and icons but had a contrast ratio of ~1.8:1 against white backgrounds, significantly failing WCAG AA standards (4.5:1).
**Action:** Updated 'brand.muted' to #4b5563 (gray-600) to ensure all elements using this token are accessible by default, achieving a contrast ratio of ~5.2:1.
