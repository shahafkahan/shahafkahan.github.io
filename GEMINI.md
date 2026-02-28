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
- **Blank Screen Issues**: 
  - Ensure `vite.config.ts` uses `base: './'` for relative asset paths. This prevents "404 Not Found" for assets if the site is not at the root domain.
  - **Routing**: GitHub Pages does not support SPA routing (BrowserRouter) natively. **Always use `HashRouter`** to ensure that direct links and refreshes work correctly without complex `404.html` redirection logic.
  - **Case Sensitivity**: GitHub Pages is case-sensitive. Ensure all file paths and imports match exactly in casing.
  - **Public Folder**: Any assets in the `public/` folder will be served at the root. Ensure `404.html` is present if `BrowserRouter` is still being attempted, although `HashRouter` is the preferred solution here.

## Critical Mandates
- **RTL Integrity**: Do not introduce styles that break RTL layout (e.g., avoid hardcoded `padding-left` when `padding-right` is intended for RTL).
- **Consistency**: Maintain the established dark theme aesthetic and Material UI component overrides.
- **Performance**: Leverage Vite's optimized build and React's efficient rendering patterns.
- **Routing**: Stick to `HashRouter` for production stability on GitHub Pages unless server-side redirection is configured.
