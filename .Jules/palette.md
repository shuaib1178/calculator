## 2026-07-13 - Initializing Palette Journal
**Learning:** The project is missing the `src` directory in the current branch, which limits UX improvements to root-level configuration files and `index.html`.
**Action:** Focus on improvements that can be applied to `index.html` (e.g., loading state) or `tailwind.config.js` (e.g., accessibility tokens) while the application source is unavailable.
## 2026-07-13 - Color Contrast Accessibility
**Learning:** The 'brand.muted' color (#c0c1c0) provided insufficient contrast (1.84:1) against light backgrounds, failing WCAG AA standards.
**Action:** Updated 'brand.muted' to #4b5563 to achieve a 4.75:1 contrast ratio, ensuring readability for secondary text.

## 2026-07-13 - Static Loader Implementation
**Learning:** Injecting loaders into 'index.html' that rely on external CSS frameworks (like Tailwind) results in a Flash of Unstyled Content (FOUC).
**Action:** For pre-hydration loaders, use inline CSS or minimal embedded <style> blocks to ensure immediate visibility.
