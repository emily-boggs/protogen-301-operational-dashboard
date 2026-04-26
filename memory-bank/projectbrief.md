# SEI Wealth Management Dashboard
## Project Brief

---

## Overview

A client-centered intelligence dashboard built for SEI Investments,
a Philadelphia-based wealth management firm. The dashboard provides
a unified "Client 360" view of a client's financial picture, designed
to serve multiple personas — including the client, financial advisor,
estate attorney, and tax advisor — through a single, role-aware interface.

Rather than surfacing raw data, the dashboard is designed to **explain,
contextualize, and prompt action** through an AI-powered insight layer
that translates complex financial information into plain language
tailored to each viewer's role.

---

## Problem Statement

Wealth management relationships involve multiple stakeholders — clients,
advisors, attorneys, and tax professionals — who each need different
information from the same underlying financial data. Today, these
stakeholders work in silos, often missing critical signals until they
become problems.

This dashboard solves that by:
- Giving each persona a **role-specific lens** on the same client data
- Surfacing **proactive insights and alerts** before issues escalate
- Translating financial complexity into **plain language** for clients
- Enabling advisors and specialists to **act faster** with less digging

---

## Target Personas

| Persona | Primary Goal |
|---|---|
| **Client** | Understand how I'm doing and what I need to do |
| **Financial Advisor** | Identify which clients need attention today |
| **Estate Attorney / Trust Officer** | Monitor legal structures and distribution schedules |
| **Tax Advisor / CPA** | Spot tax implications and optimization opportunities |
| **SEI Relationship Manager** | Ensure account health, compliance, and relationship quality |

---

## Key Features

### 🔄 Role Switcher
A top-level toggle that shifts the dashboard view based on the
selected persona. Each role sees the same underlying client data
through a different lens — different widgets, alerts, and insights
are surfaced depending on who is viewing.

### 📊 Portfolio Snapshot
High-level view of AUM, performance over time, and current asset
allocation vs. target. Designed to be readable by both financial
professionals and clients without a finance background.

### 🎯 Goal Tracker
Visual progress toward the client's defined financial goals
(retirement, education funding, estate transfer, etc.) with
on-track / at-risk status indicators.

### ⚠️ Action Items Panel
A prioritized list of items requiring attention across all
stakeholder domains — rebalancing needs, expiring documents,
upcoming distributions, tax deadlines, and compliance flags.

### 🤖 AI Insight Feed
A persistent, role-aware insight panel that explains what the
client is looking at in plain language. Insights are tailored
to the active persona:
- **Client:** Plain-language portfolio summaries and reassurances
- **Advisor:** Rebalancing signals, drift alerts, client engagement cues
- **Attorney:** Distribution schedules, document expiration warnings
- **Tax Advisor:** Harvesting opportunities, estimated tax liability

### 📉 Risk & Drift Monitor
Tracks portfolio allocation drift from target, volatility flags,
and concentration risk by sector or asset class.

### 🧾 Tax Intelligence Panel
Year-to-date realized gains/losses, tax loss harvesting
opportunities, estimated tax liability, and key deadline tracking.

### 📋 Trust & Legal Status
Distribution schedule, beneficiary record health, document
review history, and outstanding legal action items.

### 🏢 Relationship Health (SEI Internal)
Account completeness, missing documentation, last advisor contact,
SLA status, and compliance flags for internal SEI operations staff.

---

## Tech Stack

- **Framework:** Vue 3 with TypeScript
- **Build Tool:** Vite
- **Component Library:** Vuetify 3 with Material Design Icons
- **Routing:** Vue Router (single-route SPA)
- **Deployment:** Vercel (static site)
- **Data:** Mock / static data for MVP
- **Authentication:** Not required for MVP

---

## Design Specifications

### Aesthetic & Theme
- **Glassmorphism UI** — all primary components rendered as
  frosted glass cards with backdrop blur and subtle border highlights
- **Abstract background** — a fixed, full-viewport light blue and
  orange abstract gradient/blob image that sits behind all content,
  giving depth and visual energy to the glass card layer
- The background features a **subtle continuous animation** —
  slow-moving gradient blobs using CSS keyframes
  (`animation: float 12s ease-in-out infinite`) for a living,
  breathing feel without being distracting
- Cards use semi-transparent backgrounds (e.g. rgba white)
  with `backdrop-filter: blur(12–16px)` for the frosted effect
- Subtle inner border glow on cards using a light white or
  teal rgba border to reinforce the glass look

### Layout
- **Side navigation** with iconography-first design — icons always
  visible, labels visible on expand/hover
- Card-based widget layout with generous padding and spacing
  between components — nothing feels cramped
- **Persistent AI Insight panel** anchored to the right side
  of the screen as a glass card
- Role switcher displayed prominently in the top navigation bar

### Responsive Design
- Fully responsive from desktop down to **mobile phone (320px+)**
- Layout breakpoints:
  - **Desktop (1200px+):** Full side nav + multi-column card grid
  - **Tablet (768px–1199px):** Collapsed side nav + 2-column grid
  - **Mobile (< 768px):** Bottom nav or hamburger menu +
    single-column stacked cards
- All components stack vertically on mobile with full-width cards
- Touch-friendly tap targets on all interactive elements
- AI Insight panel collapses into a floating action button on mobile

### Typography
- **Headlines & Large Numbers:** Quicksand (weights: 600, 700)
- **Body Text, Labels & Descriptions:** Open Sans (weights: 400, 500)
- Numbers and stats use Quicksand SemiBold (600) with generous
  letter spacing for readability

### Iconography
- **Material Design Icons** via Vuetify 3 — used liberally throughout
- Every navigation item has a distinct icon
- Every stat card, insight, and alert type has a supporting icon
- Action items and status indicators use icon + color + label
  (never rely on color alone)
- Persona role switcher uses avatar-style icons per role

### Color Palette
- **Primary:** Light Blue and Orange (mirrors the abstract
  background energy)
- **Supporting:** White, soft gray for card surfaces
- Color-coded status indicators:
  - 🟢 Green — On track / No action needed
  - 🟡 Yellow — Needs attention / Review recommended
  - 🔴 Red — Action required / Threshold breached

### Motion & Interaction
- **Animated background** — slow CSS keyframe animation on
  gradient blobs (subtle, non-distracting, performant)
- Smooth hover animations on all cards — subtle lift effect
  (`transform: translateY(-4px)`) with shadow deepening
- Hover animations on nav link buttons with teal underline
  or glow effect
- Page/section transitions using Vue's `<Transition>` component
- Insight cards animate in on load with a soft fade + slide up

---

## User Stories & Acceptance Criteria

### Epic 1: Role-Aware Dashboard Experience

---

**US-01 — Role Switcher**
> *As a user, I want to switch between personas so that I see
> information relevant to my role.*

**Acceptance Criteria:**
- [ ] A role switcher is visible in the top navigation bar
- [ ] At least two roles are available: Client and Financial Advisor
- [ ] Switching roles updates the visible widgets and insight
      content without a full page reload
- [ ] The active role is visually highlighted in the switcher
- [ ] Each role option displays an icon and a label

---

**US-02 — Client Portfolio Snapshot**
> *As a client, I want to see a high-level summary of my portfolio
> so that I can understand how my investments are performing
> without needing financial expertise.*

**Acceptance Criteria:**
- [ ] Portfolio snapshot card displays total AUM as a large,
      prominent number using Quicksand font
- [ ] Performance is shown as a percentage change
      (e.g. +4.2% YTD) with a directional icon
- [ ] Asset allocation is visualized as a donut or pie chart
- [ ] All values are accompanied by plain-language labels
      (no unexplained acronyms)
- [ ] Card renders correctly on desktop, tablet, and mobile

---

**US-03 — Financial Advisor Client View**
> *As a financial advisor, I want to see which clients need
> attention today so that I can prioritize my outreach
> and actions efficiently.*

**Acceptance Criteria:**
- [ ] Advisor view displays a client list or summary panel
- [ ] Clients with flags (drift, risk, upcoming review) are
      visually differentiated with color and icon indicators
- [ ] At least one rebalancing alert is surfaced in mock data
- [ ] Advisor-specific insights appear in the AI Insight Feed
- [ ] Switching to Advisor role from Client role updates all
      relevant panels

---

### Epic 2: AI Insight Feed

---

**US-04 — Role-Aware Insights**
> *As any user, I want to see plain-language insights tailored
> to my role so that I can quickly understand what needs
> my attention.*

**Acceptance Criteria:**
- [ ] AI Insight Feed panel is persistently visible on desktop
- [ ] At least three insight cards are shown per role
- [ ] Insight content changes when the role switcher is toggled
- [ ] Each insight card includes an icon, a headline, and
      a short description in Open Sans body text
- [ ] Insight cards animate in with a fade + slide on load

---

**US-05 — Action Items Panel**
> *As any user, I want to see a prioritized list of action items
> so that I know exactly what requires my attention right now.*

**Acceptance Criteria:**
- [ ] Action items panel displays a minimum of 3 mock items
- [ ] Each item has a priority indicator
      (🔴 High / 🟡 Medium / 🟢 Low)
- [ ] Each item includes an icon, a short title, and
      a description
- [ ] Items are sorted by priority (high to low) by default
- [ ] Panel is fully visible and usable on mobile

---

### Epic 3: Goal Tracking

---

**US-06 — Financial Goal Tracker**
> *As a client, I want to see progress toward my financial goals
> so that I feel confident about my financial future.*

**Acceptance Criteria:**
- [ ] At least 2–3 sample goals are displayed
      (e.g. Retirement, Education Fund)
- [ ] Each goal shows a progress bar or visual indicator
- [ ] Goals are labeled as On Track 🟢, At Risk 🟡,
      or Needs Attention 🔴
- [ ] Goal cards are responsive and stack on mobile
- [ ] Each goal card includes a relevant icon

---

### Epic 4: UI, Design & Responsiveness

---

**US-07 — Glassmorphism Design System**
> *As a user, I want the dashboard to feel premium and modern
> so that I trust the platform with my financial information.*

**Acceptance Criteria:**
- [ ] All primary cards use semi-transparent backgrounds
      with backdrop-filter blur applied
- [ ] Abstract blue and orange gradient background is
      fixed and visible behind all content
- [ ] Background animation runs continuously and smoothly
      without impacting performance
- [ ] Glass cards have a subtle border highlight
- [ ] No card background is fully opaque

---

**US-08 — Responsive Layout**
> *As a user on any device, I want the dashboard to be fully
> usable so that I can access my financial information
> on desktop, tablet, or mobile.*

**Acceptance Criteria:**
- [ ] Dashboard is functional and visually correct at 320px,
      768px, and 1200px+ viewport widths
- [ ] Cards stack to a single column on mobile (< 768px)
- [ ] Side navigation collapses to a bottom nav or
      hamburger menu on mobile
- [ ] AI Insight panel collapses to a floating action
      button on mobile
- [ ] All touch targets are a minimum of 44x44px on mobile

---

**US-09 — Typography & Iconography**
> *As a user, I want consistent, readable typography and
> clear iconography so that I can scan the dashboard quickly.*

**Acceptance Criteria:**
- [ ] Quicksand font is applied to all headlines and
      large stat numbers
- [ ] Open Sans font is applied to all body text,
      labels, and descriptions
- [ ] Every navigation item has a unique Material Design Icon
- [ ] Every card and panel has at least one supporting icon
- [ ] Status indicators always combine icon + color + label

---

## MVP Scope

### In Scope
- [ ] Side navigation with role switcher
- [ ] Portfolio Snapshot widget with mock data
- [ ] Goal Tracker with 2–3 sample goals
- [ ] Action Items panel with sample flags
- [ ] AI Insight Feed with static, role-aware insight cards
- [ ] Animated abstract background
- [ ] Glassmorphism card design system
- [ ] Fully responsive down to mobile (320px)
- [ ] Deployed to Vercel

### Out of Scope for MVP
- Live data integrations or API connections
- Real authentication or user sessions
- All five persona views (start with Client + Advisor)
- Tax Intelligence and Trust & Legal panels

---

## Success Criteria

1. Clearly communicate portfolio status without requiring
   financial expertise to interpret
2. Surface actionable items before they become problems
3. Demonstrate meaningfully different experiences for
   at least two personas
4. Feel premium, clean, and consistent with a wealth
   management brand
5. Be explainable to a non-technical audience in under 2 minutes

---

*Built for SEI Investments — Philadelphia, PA*
*Dashboard Design Course Project — 2026*