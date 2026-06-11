<script setup lang="ts">
import { computed } from 'vue'
import QuickStats from '../components/QuickStats.vue'
import QuickConnect from '../components/QuickConnect.vue'
import PortfolioSnapshot from '../components/PortfolioSnapshot.vue'
import GoalTracker from '../components/GoalTracker.vue'
import ActionItemsPanel from '../components/ActionItemsPanel.vue'
import AIInsightFeed from '../components/AIInsightFeed.vue'
import { currentRole, roles, setRole } from '../stores/role'

const greeting = computed(() => {
  if (currentRole.value === 'advisor') return 'Good morning, James'
  return 'Good morning, Marsali'
})

const subtitle = computed(() => {
  if (currentRole.value === 'advisor') return 'Here\'s what needs your attention across your book of business.'
  return 'Stay on top of your tasks, monitor progress, and track status.'
})
</script>

<template>
  <div aria-live="polite">
    <!-- Role Switcher -->
    <div class="role-switcher-bar">
      <button
        v-for="role in roles"
        :key="role.id"
        class="role-btn"
        :class="{ active: currentRole === role.id }"
        @click="setRole(role.id)"
        :aria-pressed="currentRole === role.id"
      >
        <v-icon :icon="role.icon" size="18" aria-hidden="true" />
        <span class="role-label">{{ role.label }}</span>
      </button>
    </div>

    <!-- Greeting -->
    <div class="greeting-section">
      <h1 class="greeting-title">{{ greeting }}</h1>
      <p class="greeting-subtitle">{{ subtitle }}</p>
    </div>

    <!-- Quick Stats Row -->
    <div style="margin-bottom: 32px;">
      <QuickStats />
    </div>

    <!-- Main Grid: Left (content) + Right (sidebar cards) -->
    <div class="content-grid">
      <!-- Left Column -->
      <div class="content-left">
        <PortfolioSnapshot />

        <div style="margin-top: 32px;">
          <ActionItemsPanel />
        </div>
      </div>

      <!-- Right Column -->
      <div class="content-right">
        <GoalTracker />

        <div style="margin-top: 32px;">
          <QuickConnect />
        </div>

        <div style="margin-top: 32px;">
          <AIInsightFeed />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Role Switcher */
.role-switcher-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #ECEEF4;
  width: fit-content;
}

.role-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 9px;
  border: none;
  background: transparent;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: #78819B;
  cursor: pointer;
  transition: all 0.15s ease;
}

.role-btn:hover {
  background: #F5F6FA;
  color: #1C2536;
}

.role-btn.active {
  background: #0E7490;
  color: #FFFFFF;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(14, 116, 144, 0.25);
}

.role-label {
  white-space: nowrap;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr minmax(0, 380px);
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
    grid-template-columns: 1fr minmax(0, 300px);
  }
}

@media (max-width: 959px) {
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
