<script setup lang="ts">
defineProps<{
  collapsed: boolean
}>()

const navItems = [
  { icon: 'mdi-view-dashboard', label: 'Dashboard', active: true },
  { icon: 'mdi-chart-pie', label: 'Portfolio', active: false },
  { icon: 'mdi-target', label: 'Goals', active: false },
  { icon: 'mdi-clipboard-check', label: 'Action Items', active: false },
  { icon: 'mdi-lightbulb', label: 'Insights', active: false },
]
</script>

<template>
  <nav class="sidebar-inner" aria-label="Main navigation">
    <div class="logo-area mb-6 mt-2 text-center">
      <v-icon icon="mdi-finance" size="32" color="primary" aria-hidden="true" />
      <Transition name="fade">
        <span v-if="!collapsed" class="logo-text ml-2">SEI</span>
      </Transition>
    </div>

    <v-list density="compact" nav bg-color="transparent">
      <v-list-item
        v-for="item in navItems"
        :key="item.label"
        :prepend-icon="item.icon"
        :title="collapsed ? '' : item.label"
        :active="item.active"
        rounded="lg"
        color="primary"
        class="nav-item mb-1"
      />
    </v-list>
  </nav>
</template>

<style scoped>
.sidebar-inner {
  height: 100%;
  padding: 16px 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0 20px 20px 0;
}

.logo-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #FFFFFF;
}

.nav-item {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8) !important;
}

:deep(.v-list-item--active) {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #FFFFFF !important;
}

:deep(.v-list-item__prepend .v-icon) {
  color: rgba(255, 255, 255, 0.8);
}

:deep(.v-list-item--active .v-icon) {
  color: #FFFFFF !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
