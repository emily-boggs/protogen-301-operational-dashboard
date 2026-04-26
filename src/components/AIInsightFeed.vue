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
  <section class="dash-card ai-insight-feed" aria-label="AI Insights">
    <div class="d-flex align-center mb-5">
      <v-icon icon="mdi-robot" color="secondary" size="28" class="mr-4" aria-hidden="true" />
      <h3>AI Insights</h3>
    </div>

    <TransitionGroup name="insight" tag="div">
      <div
        v-for="(insight, index) in insights"
        v-show="!animating"
        :key="`${activeRole}-${insight.id}`"
        class="insight-card mb-4 pa-4"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div class="d-flex align-start">
          <v-icon
            :icon="insight.icon"
            color="secondary"
            size="22"
            class="mr-4 mt-1"
            aria-hidden="true"
          />
          <div>
            <div style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">
              {{ insight.headline }}
            </div>
            <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; color: #455A64; line-height: 1.5;">
              {{ insight.description }}
            </p>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </section>
</template>

<style scoped>
.ai-insight-feed {
  border-left: none;
}

.insight-card {
  background: #F5F6FA;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.insight-card:hover {
  background: #ECEEF4;
}

.insight-enter-active {
  transition: all 0.5s ease;
}

.insight-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

@media (prefers-reduced-motion: reduce) {
  .insight-card {
    transition: none;
  }
  .insight-enter-active {
    transition: none;
  }
}
</style>
