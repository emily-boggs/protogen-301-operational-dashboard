<script setup lang="ts">
defineProps<{
  activeRole: string
}>()

const emit = defineEmits<{
  (e: 'update:activeRole', role: string): void
}>()

const roles = [
  { id: 'client', label: 'Client', icon: 'mdi-account' },
  { id: 'advisor', label: 'Advisor', icon: 'mdi-chart-line' },
]
</script>

<template>
  <div class="role-switcher" aria-label="Select dashboard role">
    <button
      v-for="role in roles"
      :key="role.id"
      class="role-btn"
      :class="{ active: activeRole === role.id }"
      :aria-label="`View as ${role.label}`"
      :aria-pressed="activeRole === role.id"
      @click="emit('update:activeRole', role.id)"
    >
      <v-icon :icon="role.icon" size="16" aria-hidden="true" />
      <span>{{ role.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.role-switcher {
  display: flex;
  gap: 4px;
  background: #F5F6FA;
  border-radius: 10px;
  padding: 3px;
}

.role-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #78819B;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.role-btn:hover {
  color: #1C2536;
  background: #ECEEF4;
}

.role-btn.active {
  background: #FFFFFF;
  color: #0E7490;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  font-weight: 600;
}

.role-btn:focus-visible {
  outline: 2px solid #0E7490;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .role-btn {
    transition: none;
  }
}
</style>
