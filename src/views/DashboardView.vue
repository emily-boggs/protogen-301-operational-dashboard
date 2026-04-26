<script setup lang="ts">
import { ref } from 'vue'
import NavSidebar from '../components/NavSidebar.vue'
import RoleSwitcher from '../components/RoleSwitcher.vue'
import PortfolioSnapshot from '../components/PortfolioSnapshot.vue'
import GoalTracker from '../components/GoalTracker.vue'
import ActionItemsPanel from '../components/ActionItemsPanel.vue'
import AIInsightFeed from '../components/AIInsightFeed.vue'

const activeRole = ref('client')
const sidebarCollapsed = ref(false)
const mobileDrawer = ref(false)

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value
}
</script>

<template>
  <v-app>
    <!-- Skip Navigation -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Animated Background -->
    <div class="animated-bg" aria-hidden="true">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
    </div>

    <!-- Top App Bar -->
    <v-app-bar
      flat
      color="transparent"
      class="px-2"
      tag="header"
      style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); background: rgba(255,255,255,0.4) !important;"
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open navigation menu"
        @click="mobileDrawer = !mobileDrawer"
      />
      <v-btn
        icon
        variant="text"
        class="d-none d-md-flex"
        aria-label="Toggle sidebar"
        @click="toggleSidebar"
      >
        <v-icon icon="mdi-menu" />
      </v-btn>

      <v-icon icon="mdi-finance" color="primary" size="28" class="ml-2" aria-hidden="true" />
      <span
        class="ml-2 d-none d-sm-inline"
        style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.2rem; color: #1A237E;"
      >
        SEI Wealth Dashboard
      </span>

      <v-spacer />

      <RoleSwitcher
        :active-role="activeRole"
        @update:active-role="activeRole = $event"
      />
    </v-app-bar>

    <!-- Sidebar — Desktop -->
    <v-navigation-drawer
      :rail="sidebarCollapsed"
      permanent
      color="transparent"
      :width="220"
      class="d-none d-md-block sidebar-drawer"
    >
      <NavSidebar :collapsed="sidebarCollapsed" />
    </v-navigation-drawer>

    <!-- Sidebar — Mobile Drawer -->
    <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
      class="d-md-none"
      color="transparent"
    >
      <NavSidebar :collapsed="false" />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container id="main-content" fluid class="pa-4 pa-md-6" aria-live="polite">
        <v-row>
          <!-- Left Column: Portfolio + Goals + Actions -->
          <v-col cols="12" lg="8">
            <v-row>
              <v-col cols="12">
                <Transition name="fade" mode="out-in">
                  <PortfolioSnapshot
                    :key="activeRole"
                    :active-role="activeRole"
                  />
                </Transition>
              </v-col>

              <v-col cols="12" v-if="activeRole === 'client'">
                <Transition name="fade" mode="out-in">
                  <GoalTracker />
                </Transition>
              </v-col>

              <v-col cols="12">
                <Transition name="fade" mode="out-in">
                  <ActionItemsPanel
                    :key="`actions-${activeRole}`"
                    :active-role="activeRole"
                  />
                </Transition>
              </v-col>
            </v-row>
          </v-col>

          <!-- Right Column: AI Insights -->
          <v-col cols="12" lg="4">
            <div class="insight-sticky">
              <AIInsightFeed :active-role="activeRole" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.sidebar-drawer {
  background: transparent !important;
  border: none !important;
}

.insight-sticky {
  position: sticky;
  top: 80px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
