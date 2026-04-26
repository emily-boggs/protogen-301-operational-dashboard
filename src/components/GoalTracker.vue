<script setup lang="ts">
import goals from '../data/goals.json'

function progressPercent(current: number, target: number): number {
  return Math.round((current / target) * 100)
}

function statusColor(status: string): string {
  switch (status) {
    case 'on-track': return 'success'
    case 'at-risk': return 'warning'
    case 'needs-attention': return 'error'
    default: return 'grey'
  }
}

function statusLabel(status: string): string {
  switch (status) {
    case 'on-track': return 'On Track'
    case 'at-risk': return 'At Risk'
    case 'needs-attention': return 'Needs Attention'
    default: return status
  }
}

function statusIcon(status: string): string {
  switch (status) {
    case 'on-track': return 'mdi-check-circle'
    case 'at-risk': return 'mdi-alert'
    case 'needs-attention': return 'mdi-alert-circle'
    default: return 'mdi-circle'
  }
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <section class="glass-card" aria-label="Financial Goals">
    <div class="d-flex align-center mb-4">
      <v-icon icon="mdi-target" color="primary" size="28" class="mr-3" aria-hidden="true" />
      <h3>Financial Goals</h3>
    </div>

    <div class="goals-grid">
      <div
        v-for="goal in goals"
        :key="goal.id"
        class="goal-item mb-4"
      >
        <div class="d-flex align-center mb-2">
          <v-icon :icon="goal.icon" color="primary" size="22" class="mr-2" aria-hidden="true" />
          <h4 style="font-size: 1rem;">{{ goal.name }}</h4>
          <v-spacer />
          <v-chip
            :color="statusColor(goal.status)"
            size="small"
            variant="tonal"
            :prepend-icon="statusIcon(goal.status)"
          >
            {{ statusLabel(goal.status) }}
          </v-chip>
        </div>

        <p class="text-caption mb-2" style="font-family: 'Open Sans', sans-serif; color: #455A64;">
          {{ goal.description }}
        </p>

        <v-progress-linear
          :model-value="progressPercent(goal.current, goal.target)"
          :color="statusColor(goal.status)"
          height="10"
          rounded
          class="mb-1"
          :aria-label="`${goal.name} progress: ${progressPercent(goal.current, goal.target)}%`"
        />

        <div class="d-flex justify-space-between">
          <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.85rem;">
            {{ formatCurrency(goal.current) }}
          </span>
          <span class="text-caption">
            Target: {{ formatCurrency(goal.target) }} by {{ goal.targetDate }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
