# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **React 19.1.1** with TypeScript
- **Vite** as build tool and dev server
- **Tailwind CSS** (loaded via CDN in index.html)
- No routing library (single page application)
- No state management library (uses React hooks)

### Project Structure
```
/
├── App.tsx                 # Main application component with state management
├── index.tsx              # React entry point
├── index.html             # HTML template with Tailwind CDN and React import maps
├── components/            # React components
│   ├── Wheel.tsx         # SVG-based spinning wheel component
│   ├── ResultModal.tsx   # Modal for displaying spin results
│   └── icons.tsx         # Icon components
└── vite.config.ts        # Vite config with path aliases (@/ -> root)
```

### Key Implementation Details
- The wheel uses SVG with CSS transforms for rotation animation
- State is managed in App.tsx using useState hooks
- TypeScript path alias: `@/` maps to project root
- No testing framework configured
- No linting tools configured

### Component Communication
- Props flow down from App.tsx to child components
- Wheel component receives `rotation` prop and `onTransitionEnd` callback
- ResultModal receives `isOpen`, `topic`, and `onClose` props