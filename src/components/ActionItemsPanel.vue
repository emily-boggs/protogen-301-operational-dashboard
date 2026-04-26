<script setup lang="ts">
import actionItemsData from '../data/actionItems.json'
import { computed } from 'vue'

const props = defineProps<{
  activeRole: string
}>()

const items = computed(() => {
  const roleKey = props.activeRole as keyof typeof actionItemsData
  const roleItems = actionItemsData[roleKey] || actionItemsData.client
  return [...roleItems].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 }
    return (order[a.priority as keyof typeof order] ?? 3) - (order[b.priority as keyof typeof order] ?? 3)
  })
})

function priorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'error'
    case 'medium': return 'warning'
    case 'low': return 'success'
    default: return 'grey'
  }
}

function priorityIcon(priority: string): string {
  switch (priority) {
    case 'high': return 'mdi-alert-circle'
    case 'medium': return 'mdi-alert'
    case 'low': return 'mdi-check-circle'
    default: return 'mdi-circle'
  }
}

function priorityLabel(priority: string): string {
  return priority.charAt(0).toUpperCase() + priority.slice(1)
}
</script>

<template>
  <div class="glass-card">
    <div class="d-flex align-center mb-4">
      <v-icon icon="mdi-clipboard-check" color="primary" size="28" class="mr-3" />
      <h3>Action Items</h3>
      <v-spacer />
      <v-chip size="small" color="primary" variant="tonal">
        {{ items.length }} items
      </v-chip>
    </div>

    <TransitionGroup name="list" tag="div">
      <div
        v-for="item in items"
        :key="item.id"
        class="action-item d-flex align-start mb-3 pa-3"
        style="background: rgba(255,255,255,0.3); border-radius: 12px;"
      >
        <v-icon
          :icon="item.icon"
          :color="priorityColor(item.priority)"
          size="24"
          class="mr-3 mt-1"
        />
        <div class="flex-grow-1">
          <div class="d-flex align-center mb-1">
            <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.95rem;">
              {{ item.title }}
            </span>
            <v-spacer />
            <v-chip
              :color="priorityColor(item.priority)"
              size="x-small"
              variant="tonal"
              :prepend-icon="priorityIcon(item.priority)"
            >
              {{ priorityLabel(item.priority) }}
            </v-chip>
          </div>
          <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; opacity: 0.85;">
            {{ item.description }}
          </p>
          <div class="text-caption mt-1" style="opacity: 0.6;">
            Due: {{ item.dueDate }}
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
