# Active Context

_Current focus, decisions, and work in progress._

---

## Current Phase

**Feature Complete** — The WealthPulse dashboard is fully built with role-aware functionality for Client and Financial Advisor personas.

---

## Recent Decisions

- Vue 3 + Vite + Vuetify 3 selected as the tech stack
- Branded as "WealthPulse" (generic investment company, no specific firm)
- Two personas implemented: Client and Financial Advisor
- Role state managed via a shared reactive store (`src/stores/role.ts`)
- Role switcher placed at top of dashboard content area (pill-style toggle)
- Static JSON mock data for all widgets (no backend)
- Collapsible side navigation with mobile hamburger menu
- Notifications drawer extends from sidebar
- Profile page with notification settings

---

## Current Focus

1. Polish and QA
2. Responsive design refinements
3. Vercel deployment

---

## Active Questions / Open Decisions

- None — core features are implemented

---

## Next Steps

- Final responsive testing at all breakpoints
- Deploy to Vercel
- Gather feedback