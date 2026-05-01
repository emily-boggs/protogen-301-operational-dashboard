<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import actionItemsData from '../data/actionItems.json'

const route = useRoute()
const router = useRouter()

const role = computed(() => route.params.role as string)
const id = computed(() => Number(route.params.id))

const item = computed(() => {
  const roleKey = role.value as keyof typeof actionItemsData
  const items = actionItemsData[roleKey] || actionItemsData.client
  return items.find(i => i.id === id.value)
})

function priorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'error'
    case 'medium': return 'warning'
    case 'low': return 'success'
    default: return 'grey'
  }
}

function priorityLabel(priority: string): string {
  return priority.charAt(0).toUpperCase() + priority.slice(1)
}

function completeAction() {
  // In a real app this would call an API
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="action-detail-page" style="max-width: 700px; margin: 0 auto; padding: 40px 24px;">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      style="margin-bottom: 24px;"
      @click="router.push({ name: 'dashboard' })"
    >
      Back to Dashboard
    </v-btn>

    <div v-if="item" class="action-detail-card" style="background: #F5F6FA; border-radius: 16px; padding: 32px;">
      <div class="d-flex align-center" style="margin-bottom: 20px;">
        <v-icon :icon="item.icon" color="primary" size="32" style="margin-right: 12px;" aria-hidden="true" />
        <h2 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.4rem;">
          {{ item.title }}
        </h2>
      </div>

      <div class="d-flex align-center" style="margin-bottom: 24px; gap: 12px;">
        <v-chip :color="priorityColor(item.priority)" variant="flat" size="small">
          {{ priorityLabel(item.priority) }} Priority
        </v-chip>
        <span style="font-size: 0.85rem; color: #546E7A;">
          Due: {{ item.dueDate }}
        </span>
      </div>

      <p style="font-family: 'Open Sans', sans-serif; font-size: 1rem; color: #455A64; line-height: 1.7; margin-bottom: 32px;">
        {{ item.description }}
      </p>

      <v-divider style="margin-bottom: 32px;" />

      <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 16px;">
        Complete This Action
      </h3>

      <v-textarea
        label="Notes (optional)"
        variant="outlined"
        rows="3"
        style="margin-bottom: 24px;"
      />

      <div class="d-flex" style="gap: 12px;">
        <v-btn
          color="primary"
          size="large"
          @click="completeAction"
        >
          Mark as Complete
        </v-btn>
        <v-btn
          variant="outlined"
          size="large"
          @click="router.push({ name: 'dashboard' })"
        >
          Cancel
        </v-btn>
      </div>
    </div>

    <div v-else style="text-align: center; padding: 60px;">
      <v-icon icon="mdi-alert-circle-outline" size="48" color="grey" />
      <p style="margin-top: 16px; color: #546E7A;">Action item not found.</p>
    </div>
  </div>
</template>
