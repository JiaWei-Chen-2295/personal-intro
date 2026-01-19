I will redesign the `ProjectCard` component to strictly follow the visual style of the existing `TechStackCard` and the overall dark theme of the website.

### 1. Style Analysis & Standardization

1. **Theme**: Dark mode forced (`bg-black`).
2. **Card Background**: `bg-gradient-to-br from-gray-900 to-black` (matching `TechStackCard`).

* **Border**: `border border-white/10` (1px solid rgba(255, 255, 255, 0.1)).
* **Shadow**: `shadow-[0_8px_32px_rgba(0,0,0,0.3)]`.
* **Blur**: `backdrop-blur-lg`.
* **Typography**: Keep `text-white` for headings and `text-gray-400` for secondary text.

### 2. Implementation Plan (File: `src/app/ui/main/components/ProjectCard.tsx`)

I will modify the `ProjectCard` component to:

1. **Remove Inconsistent Elements**:

   * Remove the purple/blue gradient glow background (`bg-gradient-to-br from-purple-500/20 to-blue-500/20`) that currently sits behind the card.

2. **Update Card Container**:

   * Change background from `bg-white/5` to `bg-gradient-to-br from-gray-900 to-black`.

   * Increase blur from `backdrop-blur-sm` to `backdrop-blur-lg`.

   * Apply the standardized shadow and border.

3. **Update Dialog Content**:

   * Force the expanded dialog (`MorphingDialogContent`) to use a dark background (`bg-zinc-900` or `bg-black`) and white text, ensuring it doesn't default to white if the system is in light mode (since the site is forced dark).

   * Add a border (`border-white/10`) to the expanded dialog for consistency.

### 3. Verification

* The user should verify that the Project Cards now visually match the Tech Stack Card above them and the dark theme of the website.

