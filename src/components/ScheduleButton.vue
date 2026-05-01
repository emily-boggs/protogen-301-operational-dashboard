<script setup lang="ts">
defineProps<{
  label?: string
  hideIcon?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button class="connect-btn connect-btn-primary" :aria-label="label || 'Schedule meeting'" @click="$emit('click')">
    <v-icon v-if="!hideIcon" icon="mdi-calendar" size="16" aria-hidden="true" style="margin-right: 8px;" />
    {{ label || 'Schedule' }}
  </button>
</template>

<style scoped>
.connect-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
  border: none;
}

.connect-btn-primary {
  background: #0E7490;
  color: #FFFFFF;
}

.connect-btn-primary:hover {
  background: #0A5E75;
}

@media (prefers-reduced-motion: reduce) {
  .connect-btn {
    transition: none;
  }
}
</style>
