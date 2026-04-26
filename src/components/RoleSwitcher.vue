<script setup lang="ts">
defineProps<{
  activeRole: string
}>()

const emit = defineEmits<{
  (e: 'update:activeRole', role: string): void
}>()

const roles = [
  { id: 'client', label: 'Client', icon: 'mdi-account' },
  { id: 'advisor', label: 'Financial Advisor', icon: 'mdi-chart-line' },
  { id: 'attorney', label: 'Estate Attorney', icon: 'mdi-scale-balance' },
  { id: 'tax', label: 'Tax Advisor', icon: 'mdi-calculator' },
  { id: 'ops', label: 'SEI Ops', icon: 'mdi-office-building' },
]
</script>

<template>
  <div class="role-switcher">
    <v-btn-toggle
      :model-value="activeRole"
      @update:model-value="emit('update:activeRole', $event as string)"
      mandatory
      density="comfortable"
      color="primary"
      variant="outlined"
      divided
      aria-label="Select dashboard role"
    >
      <v-btn
        v-for="role in roles"
        :key="role.id"
        :value="role.id"
        size="small"
        class="role-btn"
        :aria-label="`View as ${role.label}`"
      >
        <v-icon :icon="role.icon" size="18" class="mr-1" aria-hidden="true" />
        <span class="role-label">{{ role.label }}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<style scoped>
.role-switcher {
  display: flex;
  align-items: center;
}

.role-btn {
  text-transform: none !important;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0;
}

@media (max-width: 767px) {
  .role-label {
    display: none;
  }
}
</style>
