# SEI Wealth Management Dashboard 💼

> A client-centered intelligence dashboard built for SEI Investments.
> Designed for multiple personas. Powered by AI-driven insights.
> Built with Vue 3 + Vuetify 3.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm or yarn

### Install & Run Locally

# Clone the repo
git clone https://github.com/your-org/sei-dashboard.git
cd sei-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev

# Open in browser
http://localhost:5173

### Build for Production
npm run build

### Deploy to Vercel
The project is configured for automatic Vercel deployment.
Push to main to trigger a deploy.

---

## 🗂️ Project Structure

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
├── PROJECT_BRIEF.md         # Full project brief with user stories
├── README.md                # This file
├── vite.config.ts
├── tsconfig.json
└── package.json

---

## 🎭 Personas

This dashboard supports multiple role-based views.
Use the **Role Switcher** in the top nav to toggle between:

| Role | Icon | What they see |
|---|---|---|
| 👤 Client | mdi-account | Portfolio, goals, plain-language insights |
| 📈 Financial Advisor | mdi-chart-line | Client flags, drift alerts, rebalancing needs |
| ⚖️ Estate Attorney | mdi-scale-balance | Trust status, distributions, legal flags |
| 🧮 Tax Advisor | mdi-calculator | Gains/losses, harvesting opportunities |
| 🏢 SEI Ops | mdi-office-building | Account health, compliance, SLA status |

> **MVP Note:** Client and Financial Advisor views are
> fully built out. Other personas use placeholder content.

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Headline Font** | Quicksand (600, 700) |
| **Body Font** | Open Sans (400, 500) |
| **Primary Color** | Light Blue |
| **Accent Color** | Orange |
| **Card Style** | Glassmorphism — backdrop-filter: blur(14px) |
| **Background** | Animated abstract blue/orange gradient |
| **Icon Library** | Material Design Icons (Vuetify 3) |

---

## 🧩 Key Components

### `RoleSwitcher.vue`
Toggles the active persona. Updates all panels and
the AI Insight Feed reactively via Vuex/Pinia store
or props.

### `PortfolioSnapshot.vue`
Displays AUM, YTD performance, and asset allocation
chart. Uses mock data from `portfolio.json`.

### `GoalTracker.vue`
Renders 2–3 financial goals with progress bars and
on-track status indicators.

### `ActionItemsPanel.vue`
Prioritized list of action items with icon + color
+ label status indicators. Sorted high → low priority.

### `AIInsightFeed.vue`
Role-aware insight cards. Content is driven by the
active persona. Animates in on load and on role switch.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 + TypeScript |
| Build Tool | Vite |
| Component Library | Vuetify 3 |
| Icons | Material Design Icons |
| Routing | Vue Router |
| Deployment | Vercel |
| Data | Static JSON (mock) |
| Auth | None (MVP) |

---

## 👥 Team & Contributions

| Name | Role |
|---|---|
| TBD | UI / Frontend Development |
| TBD | Design & Prototyping |
| TBD | Data & Mock Content |

> Update this table with your team's names and roles.

---

## 📋 User Stories

Full user stories and acceptance criteria are documented
in [`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md).

**Story summary:**
- US-01 — Role Switcher
- US-02 — Client Portfolio Snapshot
- US-03 — Financial Advisor Client View
- US-04 — Role-Aware AI Insights
- US-05 — Action Items Panel
- US-06 — Financial Goal Tracker
- US-07 — Glassmorphism Design System
- US-08 — Responsive Layout
- US-09 — Typography & Iconography

---

## 🗺️ Roadmap

### MVP (Current)
- [x] Project setup — Vue 3 + Vite + Vuetify 3
- [ ] Animated abstract background
- [ ] Glassmorphism card design system
- [ ] Side navigation with icons
- [ ] Role switcher (Client + Advisor)
- [ ] Portfolio Snapshot
- [ ] Goal Tracker
- [ ] Action Items Panel
- [ ] AI Insight Feed
- [ ] Responsive layout (320px → 1200px+)
- [ ] Deploy to Vercel

### Future Enhancements
- [ ] All five persona views
- [ ] Tax Intelligence Panel
- [ ] Trust & Legal Status Panel
- [ ] Live data integration
- [ ] Authentication & user sessions

---

*Built for SEI Investments — Philadelphia, PA*
*Dashboard Design Course Project — 2026*

---

# 🧠 Copilot Memory Bank Template

A template to turn **GitHub Copilot** into a goal-oriented, memory-persistent coding assistant — inspired by [AWS Kiro](https://dev.to/aws-builders/introducing-kiro-an-ai-ide-that-thinks-like-a-developer-42jp).

Use this setup to guide Copilot from **spec → design → tasks → tested code** while maintaining project context across sessions.

📝 Read the full Medium article:  
**[Beyond Autocomplete: Give Copilot a Memory and a Brain](https://medium.com/@mrBallistic/how-to-give-github-copilot-a-photographic-memory-and-a-kiro-style-brain-3eafeafa4b85)**

And the followup:
**[From Prompt to Product](https://medium.com/@mrBallistic/from-prompt-to-product-8c1f3bd9b8e0)**

---

## 🧩 What's Inside

### `.github/`
- `copilot-instructions.md` — Tiny bootstrap that tells Copilot to use the memory bank and follow the Kiro-Lite process
- `prompts/kiro-lite.prompt.md` — A multi-phase, slash-command-based prompt that emulates Kiro's spec-driven workflow

### `memory-bank/`
- `memory-bank-instructions.md` — Defines the memory system, file structure, workflows, and update process
- `copilot-rules.md` — Captures project constraints, rules, and security policies
- Core context files:
  - `projectbrief.md`
  - `productContext.md`
  - `systemPatterns.md`
  - `techContext.md`
  - `activeContext.md`
  - `progress.md`
- `feature-template/` — A starter folder for scoped PRD/design/task files (copied by Copilot during `/start feature`)

---

## 🚦 Supported Slash Commands

Copilot only acts when triggered with these:

| Command                 | Purpose                                    |
|------------------------|--------------------------------------------|
| `/start feature <name>`| Initializes folder + memory files          |
| `/approve prd`         | Locks PRD and moves to design              |
| `/approve design`      | Locks design and moves to task breakdown   |
| `/approve tasks`       | Locks task plan and allows coding          |
| `/implement <TASK_ID>` | Generates code + tests for a single task   |
| `/review complete`     | Confirms task is done                      |
| `/update memory bank`  | Refreshes context and progress files       |

---

## ✅ How to Use

1. 🧠 Clone the repo
2. 🔌 Add `.github/copilot-instructions.md` to your working repo
3. 📁 Copy the `/memory-bank/` structure and fill in your context
4. 💬 Paste the `kiro-lite.prompt.md` into Copilot Chat
5. 🚀 Start building with `/start feature <name>`

---

## 📸 Example Session

```bash
/start feature auth-login
# Copilot creates: /memory-bank/auth-login/{prd.md, design.md, ...}

[ you describe the PRD ]

/approve prd
# Copilot writes design.md

/approve design
# Copilot writes tasks.md

/implement AUTH-1
# Copilot generates file diff + tests
```

## 🧪 Want to extend it?

* Add /memory-bank/commands.md as a cheatsheet
* Use GitHub Actions to validate memory structure on PRs
* Build an onboarding doc for new team members

## 📖 License

MIT — use it, fork it, remix it. Just don't let your assistant commit secrets. 😉