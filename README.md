# College Society Management System (PromptOps Workshop Project)

A premium, production-ready SaaS frontend for managing college societies and events. Built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design System**
  - Glassmorphism UI with backdrop blur effects
  - Light & Dark mode with smooth transitions
  - Animated theme toggle (sun/moon rotation)
  - Neon accent colors (cyan & purple)
  - 8px spacing grid with rounded-3xl everywhere

- 🎭 **Animations**
  - Page transitions with Framer Motion
  - 3D tilt effect on society cards
  - Hover animations on all interactive elements
  - Floating chatbot with pulse animation
  - Count-up animations on stat cards

- 📱 **Responsive Design**
  - Mobile-first approach
  - Collapsible sidebar (desktop) → bottom nav (mobile)
  - Fully responsive grid layouts

- 📊 **Dashboard**
  - Animated stat cards with count-up effect
  - Recharts integration (line & doughnut charts)
  - Recent activity feed
  - Upcoming events with capacity bars

- 🏛️ **Societies Page**
  - Grid of society cards
  - 3D tilt effect on hover
  - Search and filter functionality

- 📅 **Events Page**
  - Event cards with animated capacity bars
  - Status badges with pulse animation
  - Filter by status (upcoming, ongoing, completed)

- 🤖 **AI Assistant Page**
  - Glass card with sparkle animation
  - Floating chatbot button with bounce & pulse
  - Chat window with smooth animations

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 3.4+** - Styling
- **Framer Motion** - Animations
- **React Router v6.4+** - Routing
- **Recharts** - Charts
- **Lucide React** - Icons
- **Context API** - State management

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── EventCard.tsx
│   ├── GlassCard.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── SocietyCard.tsx
│   ├── StatCard.tsx
│   └── ThemeToggle.tsx
├── context/          # Context providers
│   └── ThemeContext.tsx
├── pages/            # Page components
│   ├── AI.tsx
│   ├── Dashboard.tsx
│   ├── Events.tsx
│   └── Societies.tsx
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Key Features Implementation

### Theme System
- Uses `dark` class on `<html>` element
- Persists theme preference in localStorage
- Smooth gradient transitions on theme change

### Glassmorphism
- Applied via Tailwind utilities: `backdrop-blur-xl bg-white/10 dark:bg-black/10`
- Border: `border border-white/20 dark:border-white/10`

### 3D Tilt Effect
- Uses Framer Motion's `useMotionValue` and `useTransform`
- CSS `perspective` for 3D transformation
- Smooth spring animations

### Animations
- Page transitions: fade + slide up/down
- Card hover: scale + lift
- Button interactions: ripple + glow
- Continuous animations: pulse, bounce, sparkle

## Customization

### Colors
Edit `tailwind.config.js` to customize the neon colors:
```js
colors: {
  neon: {
    cyan: '#00f5ff',
    purple: '#a855f7',
  },
}
```

### Spacing
The design uses an 8px grid. Adjust in Tailwind config if needed.

## License

MIT
