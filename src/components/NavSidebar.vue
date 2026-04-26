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
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0 16px 16px 0;
}

.logo-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #1A237E;
}

.nav-item {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
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
