<script setup lang="ts">
import QuickStats from '../components/QuickStats.vue'
import QuickConnect from '../components/QuickConnect.vue'
import PortfolioSnapshot from '../components/PortfolioSnapshot.vue'
import GoalTracker from '../components/GoalTracker.vue'
import ActionItemsPanel from '../components/ActionItemsPanel.vue'
import AIInsightFeed from '../components/AIInsightFeed.vue'
</script>

<template>
  <div aria-live="polite">
    <!-- Greeting -->
    <div class="greeting-section">
      <h1 class="greeting-title">Good morning, Marsali</h1>
      <p class="greeting-subtitle">Stay on top of your tasks, monitor progress, and track status.</p>
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
