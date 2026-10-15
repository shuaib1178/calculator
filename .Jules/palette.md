## 2026-10-15 - Initial Application Loading State
**Learning:** Adding a lightweight, accessible SMIL-animated loader with `role="status"` directly inside `<div id="root">` improves perceived load performance and provides screen reader announcements before JS bundle execution.
**Action:** Always nest initial fallback loader UI inside `<div id="root">` with inline styles matching brand tokens so React cleanly overwrites it upon mounting without style residue.
