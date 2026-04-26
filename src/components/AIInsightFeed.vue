<script setup lang="ts">
import insightsData from '../data/insights.json'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  activeRole: string
}>()

const animating = ref(false)

const insights = computed(() => {
  const roleKey = props.activeRole as keyof typeof insightsData
  return insightsData[roleKey] || insightsData.client
})

watch(() => props.activeRole, () => {
  animating.value = true
  setTimeout(() => { animating.value = false }, 50)
})
</script>

<template>
  <div class="glass-card ai-insight-feed">
    <div class="d-flex align-center mb-4">
      <v-icon icon="mdi-robot" color="secondary" size="28" class="mr-3" />
      <h3>AI Insights</h3>
    </div>

    <TransitionGroup name="insight" tag="div">
      <div
        v-for="(insight, index) in insights"
        v-show="!animating"
        :key="`${activeRole}-${insight.id}`"
        class="insight-card mb-3 pa-3"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div class="d-flex align-start">
          <v-icon
            :icon="insight.icon"
            color="secondary"
            size="22"
            class="mr-3 mt-1"
          />
          <div>
            <div style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">
              {{ insight.headline }}
            </div>
            <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; opacity: 0.85; line-height: 1.5;">
              {{ insight.description }}
            </p>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.ai-insight-feed {
  border-left: 3px solid #FF8A65;
}

.insight-card {
  background: rgba(255, 138, 101, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.insight-card:hover {
  background: rgba(255, 138, 101, 0.15);
}

.insight-enter-active {
  transition: all 0.5s ease;
}

.insight-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
</style>
