# Gemini CLI Project Context

This file provides foundational mandates and architectural context for Gemini CLI when working on this project.

## Project Overview
A modern, RTL-supported portfolio application built with React, Vite, and Material UI. The application features a dark theme with a focus on visual impact and modern design primitives (gradients, rounded corners, subtle shadows).

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript (v5.9+)
- **UI Library**: Material UI (MUI) v7
- **Styling**: Emotion (integrated with MUI), `stylis-plugin-rtl` for RTL support
- **Routing**: React Router Dom v7
- **State Management**: React Hooks (context if needed, though currently small)

## Architectural Patterns & Conventions
- **RTL Support**: The application is configured for RTL (`direction: 'rtl'` in the theme). Ensure all new UI components respect this layout.
- **Styling**: Use MUI's `styled` or `sx` prop. Prefer the theme constants for colors and spacing.
- **Component Structure**:
  - Components are located in `src/components/`.
  - Pages (route-level components) are in `src/pages/`.
  - Data/Content is managed in `src/data/`.
- **Naming Conventions**:
  - React components use PascalCase (e.g., `ProductCard.tsx`).
  - Utility/Data files use camelCase (e.g., `products.ts`).
- **Theme Usage**: 
  - Primary color: `#7c4dff` (Deep Purple).
  - Dark mode by default (`#050a11` background).
  - Standard border radius: `16px` for cards, `24px` for buttons.

## Development Workflow
- **Linting**: Run `npm run lint` (ESLint) before completing tasks.
- **Building**: Run `npm run build` to verify type-checking and production build integrity.
- **Testing**: While no test framework is explicitly listed in `package.json`, ensure manual verification of UI changes.

## Deployment Troubleshooting (GitHub Pages)
- **CRITICAL: Blank Screen / White Page**: 
  - **Symptoms**: The site loads but shows a blank white screen, or assets return 404.
  - **ROOT CAUSE**: Standard SPA routing (BrowserRouter) and absolute paths (`/assets/`) often fail on GitHub Pages when served from repositories or if server-side redirection is not possible.
  - **MANDATORY SOLUTION**: 
    1.  **`vite.config.ts`**: Set `base: './'` (relative path). This is the most portable and robust setting for GitHub Pages.
    2.  **`src/App.tsx`**: **ALWAYS USE `HashRouter`** for GitHub Pages production. It avoids the need for complex `404.html` hacks and ensures all routes work after a browser refresh.
- **Case Sensitivity**: GitHub Pages is case-sensitive. Ensure all file paths and imports match exactly in casing.
- **Verification**: If the screen remains blank, check if the "טוען..." (Loading) message in `index.html` is visible. If it is, the HTML loaded but the JS crashed (check console). If it's not, the HTML itself failed to load.

## Critical Mandates
- **RTL Integrity**: Do not introduce styles that break RTL layout (e.g., avoid hardcoded `padding-left` when `padding-right` is intended for RTL).
- **Consistency**: Maintain the established dark theme aesthetic and Material UI component overrides.
- **Performance**: Leverage Vite's optimized build and React's efficient rendering patterns.
- **Routing**: **PERMANENT MANDATE: Use `HashRouter`** for production stability on GitHub Pages. Never switch to `BrowserRouter` without a confirmed server-side configuration.
