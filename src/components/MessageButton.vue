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
  <button class="connect-btn connect-btn-outline" :aria-label="label || 'Send message'" @click="$emit('click')">
    <v-icon v-if="!hideIcon" icon="mdi-message-text" size="16" aria-hidden="true" style="margin-right: 8px;" />
    {{ label || 'Message' }}
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

.connect-btn-outline {
  background: transparent;
  color: #1C2536;
  border: 1.5px solid #ECEEF4;
}

.connect-btn-outline:hover {
  background: #F5F6FA;
}

@media (prefers-reduced-motion: reduce) {
  .connect-btn {
    transition: none;
  }
}
</style>
