<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import goals from '../data/goals.json'

const router = useRouter()

const currentIndex = ref(0)
const currentGoal = computed(() => goals[currentIndex.value])

function next() {
  currentIndex.value = (currentIndex.value + 1) % goals.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + goals.length) % goals.length
}

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
    case 'on-track': return 'mdi-check-circle-outline'
    case 'at-risk': return 'mdi-alert-outline'
    case 'needs-attention': return 'mdi-alert-circle-outline'
    default: return 'mdi-circle-outline'
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
  <section class="dash-card goal-tracker pa-6" aria-label="Financial Goals">
    <div class="d-flex align-center" style="margin-bottom: 24px;">
      <v-icon icon="mdi-target" color="primary" size="28" style="margin-right: 10px;" aria-hidden="true" />
      <h3>Financial Goals</h3>
      <v-spacer />
      <span style="font-size: 0.75rem; color: #78819B;">
        {{ currentIndex + 1 }} / {{ goals.length }}
      </span>
    </div>

    <Transition name="slide" mode="out-in">
      <div :key="currentGoal.id" class="goal-card" style="padding: 24px; background: #F5F6FA; border-radius: 12px;">
        <div class="d-flex align-center" style="margin-bottom: 12px;">
          <v-icon :icon="currentGoal.icon" color="primary" size="22" style="margin-right: 10px;" aria-hidden="true" />
          <h4 style="font-size: 1rem; font-family: 'Quicksand', sans-serif; font-weight: 600;">{{ currentGoal.name }}</h4>
          <v-chip
            :color="statusColor(currentGoal.status)"
            size="small"
            variant="flat"
            :prepend-icon="statusIcon(currentGoal.status)"
            style="margin-left: 10px;"
          >
            {{ statusLabel(currentGoal.status) }}
          </v-chip>
        </div>

        <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; color: #455A64; line-height: 1.6; margin-bottom: 16px;">
          {{ currentGoal.description }}
        </p>

        <v-progress-linear
          :model-value="progressPercent(currentGoal.current, currentGoal.target)"
          :color="statusColor(currentGoal.status)"
          height="10"
          rounded
          style="margin-bottom: 10px;"
          :aria-label="`${currentGoal.name} progress: ${progressPercent(currentGoal.current, currentGoal.target)}%`"
        />

        <div class="d-flex justify-space-between">
          <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.85rem;">
            {{ formatCurrency(currentGoal.current) }}
          </span>
          <span style="font-size: 0.75rem; color: #78819B;">
            Target: {{ formatCurrency(currentGoal.target) }} by {{ currentGoal.targetDate }}
          </span>
        </div>

        <a
          v-if="currentGoal.name === 'Retirement'"
          class="view-more-link"
          @click.prevent="router.push({ name: 'retirement-projections' })"
        >
          View More
        </a>
      </div>
    </Transition>

    <div class="d-flex align-center justify-center" style="margin-top: 16px; gap: 12px;">
      <button class="slider-arrow" aria-label="Previous goal" @click="prev">
        <v-icon icon="mdi-chevron-left" size="20" />
      </button>
      <div class="slider-dots">
        <span
          v-for="(_, i) in goals"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
        />
      </div>
      <button class="slider-arrow" aria-label="Next goal" @click="next">
        <v-icon icon="mdi-chevron-right" size="20" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.slider-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid #ECEEF4;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s ease;
}

.slider-arrow:hover {
  background: #F5F6FA;
}

.slider-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ECEEF4;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dot.active {
  background: #0E7490;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active {
    transition: none;
  }
}

.view-more-link {
  display: inline-block;
  margin-top: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0E7490;
  cursor: pointer;
  text-decoration: none;
}

.view-more-link:hover {
  text-decoration: underline;
}
</style>
