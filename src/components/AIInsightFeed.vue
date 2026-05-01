<script setup lang="ts">
import insightsData from '../data/insights.json'
import { computed, ref } from 'vue'

const currentIndex = ref(0)

const insights = insightsData.client

const currentInsight = computed(() => insights[currentIndex.value])

function next() {
  currentIndex.value = (currentIndex.value + 1) % insights.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + insights.length) % insights.length
}
</script>

<template>
  <section class="dash-card ai-insight-feed pa-6" aria-label="AI Insights">
    <div class="d-flex align-center" style="margin-bottom: 24px;">
      <v-icon icon="mdi-robot" color="secondary" size="28" style="margin-right: 10px;" aria-hidden="true" />
      <h3>AI Insights</h3>
      <v-spacer />
      <span style="font-size: 0.75rem; color: #78819B;">
        {{ currentIndex + 1 }} / {{ insights.length }}
      </span>
    </div>

    <div class="insight-slider">
      <Transition name="slide" mode="out-in">
        <div
          :key="currentInsight.id"
          class="insight-card"
          style="padding: 24px;"
        >
          <div class="d-flex align-start">
            <v-icon
              :icon="currentInsight.icon"
              color="secondary"
              size="22"
              style="margin-right: 10px; margin-top: 4px;"
              aria-hidden="true"
            />
            <div>
              <div style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.95rem; margin-bottom: 8px;">
                {{ currentInsight.headline }}
              </div>
              <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; color: #455A64; line-height: 1.6;">
                {{ currentInsight.description }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="d-flex align-center justify-center" style="margin-top: 16px; gap: 12px;">
      <button class="slider-arrow" aria-label="Previous insight" @click="prev">
        <v-icon icon="mdi-chevron-left" size="20" />
      </button>
      <div class="slider-dots">
        <span
          v-for="(_, i) in insights"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
        />
      </div>
      <button class="slider-arrow" aria-label="Next insight" @click="next">
        <v-icon icon="mdi-chevron-right" size="20" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.ai-insight-feed {
  border-left: none;
}

.insight-card {
  background: #F5F6FA;
  border-radius: 12px;
}

.insight-card:hover {
  background: #ECEEF4;
}

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
</style>
