## 🚨 Never Upload Secrets

- Do not store API keys or `.env` in repo.
- Use `.env.example` with placeholders.
- If a secret is leaked: rotate credentials, purge history, notify team.

---

## 🎨 Design Rules

- All primary cards **must** use glassmorphism: semi-transparent backgrounds with `backdrop-filter: blur(12–16px)`
- No card background should be fully opaque
- Status indicators must always combine **icon + color + label** — never rely on color alone
- Use **Quicksand** for headlines/numbers, **Open Sans** for body text — no exceptions
- Use **Material Design Icons** via Vuetify 3 for all iconography

---

## 🧩 Component Rules

- Each widget component should be self-contained (template, logic, scoped styles)
- All components must accept and respond to the active role (persona)
- Role switching must update all panels reactively — no full page reloads
- Mock data lives in `src/data/` as JSON files — do not hardcode data in components

---

## 📱 Responsive Rules

- All components must work at 320px, 768px, and 1200px+ viewports
- Touch targets must be at minimum 44x44px on mobile
- AI Insight panel collapses to a floating action button on mobile
- Side nav collapses to bottom nav or hamburger menu on mobile

---

## 🏗️ Code Conventions

- Use Vue 3 Composition API with `<script setup>` syntax
- TypeScript for all `.ts` and `.vue` files
- Component names use PascalCase (e.g., `PortfolioSnapshot.vue`)
- Keep components focused — one widget per component file

---

## 📋 MVP Scope Guard

- Only Client and Financial Advisor personas are in scope for MVP
- No backend API calls — all data is static mock JSON
- No authentication required
- Estate Attorney, Tax Advisor, and SEI Ops personas use placeholder content only
