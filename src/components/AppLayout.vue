<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NotificationsDrawer from './NotificationsDrawer.vue'

const router = useRouter()
const sidebarCollapsed = ref(false)
const notificationsOpen = ref(false)
const mobileMenuOpen = ref(false)

const sidebarItems = [
  { icon: 'mdi-view-dashboard-outline', label: 'Dashboard', route: '/' },
  { icon: 'mdi-chart-bar', label: 'Analytics', route: '/analytics' },
  { icon: 'mdi-file-document-outline', label: 'Reports', route: '/reports' },
  { icon: 'mdi-bell-outline', label: 'Notifications', action: 'notifications' },
  { icon: 'mdi-account-circle-outline', label: 'Profile', route: '/profile' },
]

// Help & Support is rendered directly in the template as a mailto link

function handleNavClick(item: any) {
  if (item.action === 'notifications') {
    notificationsOpen.value = true
  } else if (item.route) {
    router.push(item.route)
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="app-layout" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Mobile Header -->
    <header class="mobile-header">
      <button class="hamburger-btn" aria-label="Open menu" @click="mobileMenuOpen = true">
        <v-icon icon="mdi-menu" size="24" />
      </button>
      <div class="mobile-brand">
        <v-icon icon="mdi-pulse" size="22" color="primary" aria-hidden="true" />
        <span class="mobile-brand-text">WealthPulse</span>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-overlay" @click.self="mobileMenuOpen = false">
        <nav class="mobile-drawer" aria-label="Mobile navigation">
          <div class="mobile-drawer-header">
            <v-icon icon="mdi-pulse" size="24" color="primary" aria-hidden="true" />
            <span class="sidebar-brand">WealthPulse</span>
            <button class="mobile-close-btn" aria-label="Close menu" @click="mobileMenuOpen = false">
              <v-icon icon="mdi-close" size="20" />
            </button>
          </div>
          <div class="mobile-drawer-items">
            <button
              v-for="item in sidebarItems"
              :key="item.label"
              class="sidebar-nav-btn"
              :class="{ active: item.route && $route.path === item.route }"
              :aria-label="item.label"
              @click="handleNavClick(item)"
            >
              <v-icon :icon="item.icon" size="20" aria-hidden="true" />
              <span class="nav-label">{{ item.label }}</span>
            </button>
          </div>
          <div class="mobile-drawer-footer">
            <a href="mailto:support@wealthpulse.com" class="sidebar-nav-btn" aria-label="Help & Support">
              <v-icon icon="mdi-help-circle-outline" size="20" aria-hidden="true" />
              <span class="nav-label">Help & Support</span>
            </a>
          </div>
        </nav>
      </div>
    </Transition>

    <!-- Left Sidebar -->
    <nav class="sidebar-nav" :class="{ collapsed: sidebarCollapsed }" aria-label="Main navigation">
      <div class="sidebar-header">
        <div class="d-flex align-center">
          <v-icon icon="mdi-pulse" size="28" color="primary" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="sidebar-brand">WealthPulse</span>
        </div>
      </div>
      <button
        v-if="!notificationsOpen"
        class="collapse-tab"
        :class="{ 'is-collapsed': sidebarCollapsed }"
        :aria-label="sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="sidebarCollapsed = !sidebarCollapsed"
      >
        <v-icon :icon="sidebarCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left'" size="14" />
      </button>

      <div class="sidebar-main-items">
        <button
          v-for="item in sidebarItems"
          :key="item.label"
          class="sidebar-nav-btn"
          :class="{ active: item.route && $route.path === item.route }"
          :aria-label="item.label"
          :aria-current="item.route && $route.path === item.route ? 'page' : undefined"
          @click="handleNavClick(item)"
        >
          <v-icon :icon="item.icon" size="20" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="nav-label">{{ item.label }}</span>
        </button>
      </div>

      <div class="sidebar-bottom-items">
        <a
          href="mailto:support@wealthpulse.com"
          class="sidebar-nav-btn"
          aria-label="Help & Support"
        >
          <v-icon icon="mdi-help-circle-outline" size="20" aria-hidden="true" />
          <span v-if="!sidebarCollapsed" class="nav-label">Help & Support</span>
        </a>
      </div>
    </nav>



    <!-- Main Content -->
    <main id="main-content" class="main-content">
      <slot />
    </main>

    <!-- Notifications Drawer -->
    <NotificationsDrawer :open="notificationsOpen" :sidebar-collapsed="sidebarCollapsed" @close="notificationsOpen = false" />
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
  overflow: visible;
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

.collapse-tab {
  position: absolute;
  top: 50px;
  right: -14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #ECEEF4;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
  z-index: 101;
}

.collapse-tab:hover {
  background: #F0F1F5;
  color: #1C2536;
  transform: scale(1.1);
}

.collapse-tab.is-collapsed {
  right: -14px;
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
  text-decoration: none;
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



/* Main Content */
.main-content {
  margin-left: 240px;
  margin-top: 0;
  padding: 32px 40px;
  min-height: 100vh;
  transition: margin-left 0.25s ease;
}

.sidebar-collapsed .main-content {
  margin-left: 72px;
}

/* Mobile Header */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #FFFFFF;
  border-bottom: 1px solid #ECEEF4;
  align-items: center;
  padding: 0 16px;
  z-index: 100;
}

.hamburger-btn {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1C2536;
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
}

.mobile-brand-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1C2536;
}

/* Mobile Overlay & Drawer */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 300;
}

.mobile-drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 24px;
  border-bottom: 1px solid #ECEEF4;
}

.mobile-close-btn {
  margin-left: auto;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
}

.mobile-close-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.mobile-drawer-items {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Responsive */
@media (max-width: 959px) {
  .sidebar-nav {
    display: none;
  }
  .mobile-header {
    display: flex;
  }
  .main-content {
    margin-left: 0 !important;
    margin-top: 60px;
    padding: 20px 16px;
  }
}

@media (max-width: 599px) {
  .main-content {
    padding: 16px 12px;
  }
}

.mobile-drawer-footer {
  padding: 12px;
  border-top: 1px solid #ECEEF4;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-active .mobile-drawer,
.mobile-menu-leave-active .mobile-drawer {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-drawer,
.mobile-menu-leave-to .mobile-drawer {
  transform: translateX(-100%);
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
