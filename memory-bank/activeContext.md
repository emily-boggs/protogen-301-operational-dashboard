# Active Context

_Current focus, decisions, and work in progress._

---

## Current Phase

**Feature Complete & Deployed** — The WealthPulse dashboard is fully built and live on Vercel with role-aware functionality for Client and Financial Advisor personas.

---

## Recent Decisions

- Vue 3 + Vite + Vuetify 4 selected as the tech stack
- Branded as "WealthPulse" (generic investment company, no specific firm)
- Two personas implemented: Client and Financial Advisor
- Role state managed via a shared reactive store (`src/stores/role.ts`)
- Role switcher placed at top of dashboard content area (pill-style toggle)
- Static JSON mock data for all widgets (no backend)
- Collapsible side navigation with mobile hamburger menu
- Notifications drawer extends from sidebar
- Profile page with notification settings
- Clean card UI with white backgrounds, subtle shadows, and hover lift
- Teal (#0E7490) primary color, orange (#EA580C) secondary
- Quicksand for headlines, Open Sans for body text

---

## Deployment

- Live at: https://protogen-301-operational-dashboard.vercel.app/
- GitHub: emily-boggs/protogen-301-operational-dashboard
- Auto-deploys from `main` branch

---

## Active Questions / Open Decisions

- None — project is complete
