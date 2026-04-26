<script setup lang="ts">
import { ref } from 'vue'
import RoleSwitcher from '../components/RoleSwitcher.vue'
import QuickStats from '../components/QuickStats.vue'
import QuickConnect from '../components/QuickConnect.vue'
import PortfolioSnapshot from '../components/PortfolioSnapshot.vue'
import GoalTracker from '../components/GoalTracker.vue'
import ActionItemsPanel from '../components/ActionItemsPanel.vue'
import AIInsightFeed from '../components/AIInsightFeed.vue'

const activeRole = ref('client')

const sidebarItems = [
  { icon: 'mdi-view-dashboard-outline', label: 'Dashboard', active: true },
  { icon: 'mdi-chart-bar', label: 'Portfolio', active: false },
  { icon: 'mdi-target', label: 'Goals', active: false },
  { icon: 'mdi-wallet-outline', label: 'Transactions', active: false },
  { icon: 'mdi-file-document-outline', label: 'Reports', active: false },
]

const sidebarBottomItems = [
  { icon: 'mdi-cog-outline', label: 'Settings' },
  { icon: 'mdi-help-circle-outline', label: 'Help' },
]
</script>

<template>
  <div class="dashboard-layout">
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Left Icon Sidebar -->
    <nav class="sidebar-icon-nav" aria-label="Main navigation">
      <div class="sidebar-logo" aria-hidden="true">
        <v-icon icon="mdi-finance" size="28" color="primary" />
      </div>

      <div class="sidebar-main-items">
        <button
          v-for="item in sidebarItems"
          :key="item.label"
          class="nav-icon-btn"
          :class="{ active: item.active }"
          :aria-label="item.label"
          :aria-current="item.active ? 'page' : undefined"
        >
          <v-icon :icon="item.icon" size="22" aria-hidden="true" />
        </button>
      </div>

      <div class="sidebar-bottom-items">
        <button
          v-for="item in sidebarBottomItems"
          :key="item.label"
          class="nav-icon-btn"
          :aria-label="item.label"
        >
          <v-icon :icon="item.icon" size="22" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <!-- Top Navigation Bar -->
    <header class="top-nav-bar">
      <div class="nav-pill-group">
        <button class="nav-pill active">Dashboard</button>
        <button class="nav-pill">Analytics</button>
        <button class="nav-pill">Activity</button>
        <button class="nav-pill">Reports</button>
        <button class="nav-pill">Account</button>
      </div>

      <div style="flex: 1;" />

      <RoleSwitcher
        :active-role="activeRole"
        @update:active-role="activeRole = $event"
      />

      <button class="icon-btn ml-3" aria-label="Notifications">
        <v-icon icon="mdi-bell-outline" size="22" />
      </button>
      <button class="icon-btn ml-2" aria-label="Settings">
        <v-icon icon="mdi-cog-outline" size="22" />
      </button>
      <div class="user-avatar ml-3" aria-label="User profile">
        <v-icon icon="mdi-account" size="20" color="white" aria-hidden="true" />
      </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="main-content" aria-live="polite">
      <!-- Greeting -->
      <div class="greeting-section">
        <h1 class="greeting-title">Good morning, Margaret</h1>
        <p class="greeting-subtitle">Stay on top of your tasks, monitor progress, and track status.</p>
      </div>

      <!-- Quick Stats Row -->
      <div style="margin-bottom: 32px;">
        <Transition name="fade" mode="out-in">
          <QuickStats :key="`stats-${activeRole}`" :active-role="activeRole" />
        </Transition>
      </div>

      <!-- Main Grid: Left (content) + Right (sidebar cards) -->
      <div class="content-grid">
        <!-- Left Column -->
        <div class="content-left">
          <Transition name="fade" mode="out-in">
            <PortfolioSnapshot :key="activeRole" :active-role="activeRole" />
          </Transition>

          <div v-if="activeRole === 'client'" style="margin-top: 32px;">
            <GoalTracker />
          </div>

          <div style="margin-top: 32px;">
            <Transition name="fade" mode="out-in">
              <ActionItemsPanel :key="`actions-${activeRole}`" :active-role="activeRole" />
            </Transition>
          </div>
        </div>

        <!-- Right Column -->
        <div class="content-right">
          <QuickConnect :active-role="activeRole" />

          <div style="margin-top: 32px;">
            <AIInsightFeed :active-role="activeRole" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  background: #F5F6FA;
}

/* Sidebar */
.sidebar-icon-nav {
  width: 72px;
  min-height: 100vh;
  background: #FFFFFF;
  border-right: 1px solid #ECEEF4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.sidebar-logo {
  margin-bottom: 28px;
  padding: 10px;
}

.sidebar-main-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.sidebar-bottom-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-bottom: 16px;
}

.nav-icon-btn {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #78819B;
  transition: all 0.15s ease;
}

.nav-icon-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.nav-icon-btn.active {
  background: #E6F7F9;
  color: #0E7490;
}

/* Top Nav */
.top-nav-bar {
  background: #FFFFFF;
  border-bottom: 1px solid #ECEEF4;
  padding: 0 24px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 72px;
  right: 0;
  z-index: 99;
  height: 64px;
}

.nav-pill-group {
  display: flex;
  gap: 6px;
  background: #F5F6FA;
  border-radius: 12px;
  padding: 5px;
}

.nav-pill {
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #78819B;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.nav-pill:hover {
  color: #1C2536;
  background: #ECEEF4;
}

.nav-pill.active {
  background: #FFFFFF;
  color: #1C2536;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-weight: 600;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #ECEEF4;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
  transition: all 0.15s ease;
}

.icon-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0E7490;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Main Content */
.main-content {
  margin-left: 72px;
  margin-top: 64px;
  padding: 32px 40px;
  min-height: calc(100vh - 64px);
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 28px;
  align-items: start;
}

.content-right {
  position: sticky;
  top: 88px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Responsive */
@media (max-width: 1199px) {
  .content-grid {
    grid-template-columns: 1fr 300px;
  }
}

@media (max-width: 959px) {
  .sidebar-icon-nav {
    display: none;
  }
  .top-nav-bar {
    left: 0;
  }
  .main-content {
    margin-left: 0;
    padding: 16px;
  }
  .content-grid {
    grid-template-columns: 1fr;
  }
  .content-right {
    position: static;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
