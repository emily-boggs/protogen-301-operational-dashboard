# Tech Context

_The tech stack, tools, and constraints._

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Vue 3 with TypeScript |
| **Build Tool** | Vite 8 |
| **Component Library** | Vuetify 4 |
| **Icons** | Material Design Icons (via @mdi/font) |
| **Routing** | Vue Router 5 |
| **Deployment** | Vercel (static site) |
| **Data** | Static JSON (mock data) |
| **Auth** | None (MVP) |

---

## Development Setup

### Prerequisites
- Node.js v18+
- npm

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
- Automatic Vercel deployment on push to `main`
- Live URL: https://protogen-301-operational-dashboard.vercel.app/

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
| **Primary** | Teal (#0E7490) |
| **Secondary** | Orange (#EA580C) |
| **Accent** | Amber (#F59E0B) |
| **Background** | Light gray (#F5F6FA) |
| **Surface / Cards** | White (#FFFFFF) |
| **Text** | Dark navy (#1C2536) |
| **Muted text** | Gray (#78819B) |
| **Status — On track** | Green (#2E7D32) |
| **Status — Needs attention** | Orange (#E65100) |
| **Status — Action required** | Red (#C62828) |

---

## Project Structure

```
protogen-301-operational-dashboard/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppLayout.vue
│   │   ├── NavSidebar.vue
│   │   ├── NotificationsDrawer.vue
│   │   ├── PortfolioSnapshot.vue
│   │   ├── GoalTracker.vue
│   │   ├── ActionItemsPanel.vue
│   │   ├── AIInsightFeed.vue
│   │   ├── QuickStats.vue
│   │   ├── QuickConnect.vue
│   │   ├── MessageButton.vue
│   │   └── ScheduleButton.vue
│   ├── data/
│   │   ├── portfolio.json
│   │   ├── goals.json
│   │   ├── actionItems.json
│   │   └── insights.json
│   ├── stores/
│   │   ├── role.ts
│   │   └── completedActions.ts
│   ├── router/
│   │   └── index.ts
│   ├── views/
│   │   ├── DashboardView.vue
│   │   ├── ActionDetailView.vue
│   │   ├── AnalyticsView.vue
│   │   ├── ReportsView.vue
│   │   ├── RetirementProjectionsView.vue
│   │   └── ProfileView.vue
│   ├── plugins/
│   │   └── vuetify.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── memory-bank/
├── vite.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── LICENSE
```
