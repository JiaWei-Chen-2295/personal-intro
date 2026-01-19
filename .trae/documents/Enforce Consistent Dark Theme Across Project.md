I have identified several inconsistencies and potential issues with the project's theming, primarily due to the mix of hardcoded dark backgrounds (`bg-black` in `layout.tsx`) and default Tailwind behavior (media-query based dark mode). This can cause invisible text or jarring white elements for users with light-mode system settings.

### Plan to Fix Theme Inconsistency

1.  **Force Global Dark Mode**:
    *   **Action**: Update `tailwind.config.ts` to use `darkMode: 'class'`.
    *   **Action**: Update `src/app/layout.tsx` to add the `dark` class to the `<html>` tag. This ensures that all `dark:` variants in Tailwind are always active, matching the `bg-black` body.

2.  **Fix Specific Style Bugs**:
    *   **Action**: Fix invisible text in `src/app/ui/common/dynamic-island.tsx` where `bg-black` and `text-black` are used together. Change text to white.
    *   **Action**: Refactor `src/app/ui/main/components/TagWithIcon.tsx` to use dark-mode friendly background colors (e.g., lower opacity backgrounds) instead of hardcoded light hex values like `#f6ffed`.

### Verification
*   The entire site will consistently render in dark mode regardless of the user's OS settings.
*   Text in the Dynamic Island will be visible.
*   Tag icons will look appropriate against the dark background.
