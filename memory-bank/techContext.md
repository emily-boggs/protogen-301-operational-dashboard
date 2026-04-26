# Tech Context

_The tech stack, tools, and constraints._

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Vue 3 with TypeScript |
| **Build Tool** | Vite |
| **Component Library** | Vuetify 3 |
| **Icons** | Material Design Icons (via Vuetify 3) |
| **Routing** | Vue Router (single-route SPA) |
| **Deployment** | Vercel (static site) |
| **Data** | Static JSON (mock data) |
| **Auth** | None (MVP) |

---

## Development Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
```

### Deployment
- Automatic Vercel deployment on push to `main`

---

## Typography & Fonts

| Usage | Font | Weights |
|---|---|---|
| Headlines & large numbers | Quicksand | 600, 700 |
| Body text, labels, descriptions | Open Sans | 400, 500 |

---

## Color Palette

| Token | Value |
|---|---|
| **Primary** | Light Blue |
| **Accent** | Orange |
| **Card surfaces** | White, soft gray (semi-transparent) |
| **Status — On track** | 🟢 Green |
| **Status — Needs attention** | 🟡 Yellow |
| **Status — Action required** | 🔴 Red |

---

## Project Structure

```
sei-dashboard/
├── public/                  # Static assets
│   └── background.svg       # Abstract animated background
├── src/
│   ├── assets/              # Fonts, images, global styles
│   ├── components/          # Reusable Vue components
│   │   ├── NavSidebar.vue
│   │   ├── PortfolioSnapshot.vue
│   │   ├── GoalTracker.vue
│   │   ├── ActionItemsPanel.vue
│   │   ├── AIInsightFeed.vue
│   │   └── RoleSwitcher.vue
│   ├── data/                # Mock / static data (JSON)
│   │   ├── portfolio.json
│   │   ├── goals.json
│   │   ├── actionItems.json
│   │   └── insights.json
│   ├── router/              # Vue Router config
│   │   └── index.ts
│   ├── views/               # Page-level views
│   │   └── DashboardView.vue
│   ├── App.vue
│   └── main.ts
├── memory-bank/             # Copilot memory bank context files
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Technical Constraints

- **No backend/API** — all data is static mock JSON for MVP
- **No authentication** — not required for MVP
- **MVP personas** — only Client and Financial Advisor are fully implemented; others use placeholders
- **Browser support** — modern browsers with `backdrop-filter` support (glassmorphism requirement)
- **Performance** — animated background must run smoothly without impacting UI responsiveness