<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sidebarCollapsed = ref(false)

const sidebarItems = [
  { icon: 'mdi-view-dashboard-outline', label: 'Dashboard', route: '/' },
  { icon: 'mdi-chart-bar', label: 'Analytics', route: '/analytics' },
  { icon: 'mdi-file-document-outline', label: 'Reports', route: '/reports' },
]

const sidebarBottomItems = [
  { icon: 'mdi-cog-outline', label: 'Settings' },
  { icon: 'mdi-help-circle-outline', label: 'Help & Support' },
]
</script>

<template>
  <div class="app-layout" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Left Sidebar -->
    <nav class="sidebar-nav" :class="{ collapsed: sidebarCollapsed }" aria-label="Main navigation">
      <div class="sidebar-header">
        <div class="d-flex align-center">
          <v-icon icon="mdi-finance" size="28" color="primary" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="sidebar-brand">SEI</span>
        </div>
        <button
          class="collapse-btn"
          :aria-label="sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
          @click="sidebarCollapsed = !sidebarCollapsed"
        >
          <v-icon :icon="sidebarCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left'" size="18" />
        </button>
      </div>

      <div class="sidebar-main-items">
        <button
          v-for="item in sidebarItems"
          :key="item.label"
          class="sidebar-nav-btn"
          :class="{ active: $route.path === item.route }"
          :aria-label="item.label"
          :aria-current="$route.path === item.route ? 'page' : undefined"
          @click="router.push(item.route)"
        >
          <v-icon :icon="item.icon" size="20" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="nav-label">{{ item.label }}</span>
        </button>
      </div>

      <div class="sidebar-bottom-items">
        <button
          v-for="item in sidebarBottomItems"
          :key="item.label"
          class="sidebar-nav-btn"
          :aria-label="item.label"
        >
          <v-icon :icon="item.icon" size="20" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="nav-label">{{ item.label }}</span>
        </button>
      </div>
    </nav>

    <!-- Top Navigation Bar -->
    <header class="top-nav-bar">
      <div style="flex: 1;" />

      <button class="icon-btn" aria-label="Notifications">
        <v-icon icon="mdi-bell-outline" size="22" />
      </button>
      <div class="user-avatar ml-3" aria-label="User profile">
        <v-icon icon="mdi-account" size="20" color="white" aria-hidden="true" />
      </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  background: #F5F6FA;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0E7490;
  color: #fff;
  padding: 8px 16px;
  z-index: 1000;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}

/* Sidebar */
.sidebar-nav {
  width: 240px;
  min-height: 100vh;
  background: #FFFFFF;
  border-right: 1px solid #ECEEF4;
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: width 0.25s ease;
}

.sidebar-nav.collapsed {
  width: 72px;
  align-items: center;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 24px;
}

.sidebar-brand {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #1C2536;
  margin-left: 10px;
}

.collapse-btn {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #ECEEF4;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
  transition: all 0.15s ease;
}

.collapse-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.sidebar-main-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sidebar-bottom-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #ECEEF4;
}

.sidebar-nav-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #78819B;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.sidebar-nav.collapsed .sidebar-nav-btn {
  justify-content: center;
  padding: 12px;
}

.sidebar-nav-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.sidebar-nav-btn.active {
  background: #E6F7F9;
  color: #0E7490;
  font-weight: 600;
}

.nav-label {
  overflow: hidden;
}

/* Top Nav */
.top-nav-bar {
  background: #FFFFFF;
  border-bottom: 1px solid #ECEEF4;
  padding: 0 32px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 240px;
  right: 0;
  z-index: 99;
  height: 64px;
  transition: left 0.25s ease;
}

.sidebar-collapsed .top-nav-bar {
  left: 72px;
}

.icon-btn {
  width: 40px;
  height: 40px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0E7490;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Main Content */
.main-content {
  margin-left: 240px;
  margin-top: 64px;
  padding: 32px 40px;
  min-height: calc(100vh - 64px);
  transition: margin-left 0.25s ease;
}

.sidebar-collapsed .main-content {
  margin-left: 72px;
}

/* Responsive */
@media (max-width: 959px) {
  .sidebar-nav {
    display: none;
  }
  .top-nav-bar {
    left: 0 !important;
  }
  .main-content {
    margin-left: 0 !important;
    padding: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sidebar-nav {
    transition: none;
  }
  .top-nav-bar {
    transition: none;
  }
  .main-content {
    transition: none;
  }
}
</style>
