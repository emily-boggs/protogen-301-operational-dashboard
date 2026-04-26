<script setup lang="ts">
defineProps<{
  activeRole: string
}>()

const teamMembers = [
  { initials: 'JM', name: 'James Mitchell', role: 'Financial Advisor', color: '#0E7490' },
  { initials: 'SK', name: 'Sarah Kim', role: 'Estate Attorney', color: '#7B1FA2' },
  { initials: 'RP', name: 'Robert Park', role: 'Tax Advisor', color: '#EA580C' },
  { initials: 'LC', name: 'Lisa Chen', role: 'SEI Operations', color: '#2E7D32' },
  { initials: 'DW', name: 'David Wu', role: 'Portfolio Analyst', color: '#1565C0' },
]
</script>

<template>
  <section class="dash-card" aria-label="Quick Connect">
    <h3 style="font-size: 1rem; margin-bottom: 6px;">Quick Connect</h3>
    <p class="text-caption" style="color: #78819B; margin-bottom: 20px;">Reach your advisory team</p>

    <div class="team-row">
      <div
        v-for="member in teamMembers"
        :key="member.initials"
        class="team-member"
      >
        <button
          class="team-avatar"
          :style="{ background: member.color }"
          :aria-label="`Contact ${member.name}, ${member.role}`"
        >
          {{ member.initials }}
        </button>
        <span class="team-name">{{ member.name.split(' ')[0] }}</span>
      </div>
    </div>

    <div class="d-flex gap-3 mt-5">
      <button class="connect-btn connect-btn-primary" aria-label="Schedule meeting">
        <v-icon icon="mdi-calendar" size="16" aria-hidden="true" style="margin-right: 8px;" />
        Schedule
      </button>
      <button class="connect-btn connect-btn-outline" aria-label="Send message">
        <v-icon icon="mdi-message-text" size="16" aria-hidden="true" style="margin-right: 8px;" />
        Message
      </button>
    </div>
  </section>
</template>

<style scoped>
.team-row {
  display: flex;
  gap: 20px;
  align-items: center;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.team-name {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.7rem;
  color: #78819B;
}

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

.connect-btn-outline {
  background: transparent;
  color: #1C2536;
  border: 1.5px solid #ECEEF4;
}

.connect-btn-outline:hover {
  background: #F5F6FA;
}

.gap-3 {
  gap: 12px;
}

@media (prefers-reduced-motion: reduce) {
  .connect-btn {
    transition: none;
  }
}
</style>
