<script setup lang="ts">
import portfolioData from '../data/portfolio.json'

defineProps<{
  activeRole: string
}>()

const client = portfolioData.client
const advisor = portfolioData.advisor

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function statusColor(status: string): string {
  switch (status) {
    case 'on-track': return 'success'
    case 'needs-attention': return 'warning'
    case 'action-required': return 'error'
    default: return 'grey'
  }
}

function statusIcon(status: string): string {
  switch (status) {
    case 'on-track': return 'mdi-check-circle'
    case 'needs-attention': return 'mdi-alert'
    case 'action-required': return 'mdi-alert-circle'
    default: return 'mdi-circle'
  }
}
</script>

<template>
  <div>
  <!-- Client View -->
  <section v-if="activeRole === 'client'" class="dash-card" aria-label="Portfolio Snapshot">
    <div class="d-flex align-center mb-5">
      <v-icon icon="mdi-chart-pie" color="primary" size="28" class="mr-4" aria-hidden="true" />
      <h3>Portfolio Snapshot</h3>
    </div>

    <div class="d-flex flex-wrap ga-8 mb-5">
      <div>
        <div class="text-caption" style="font-family: 'Open Sans', sans-serif;">Total Assets Under Management</div>
        <div class="stat-number" style="color: #1C2536;">{{ formatCurrency(client.totalAUM) }}</div>
      </div>
      <div>
        <div class="text-caption" style="font-family: 'Open Sans', sans-serif;">Year-to-Date Return</div>
        <div class="stat-number status-green">
          <v-icon icon="mdi-trending-up" size="20" class="mr-1" aria-hidden="true" />
          +{{ client.ytdReturn }}%
        </div>
        <div class="text-caption">({{ formatCurrency(client.ytdReturnDollar) }})</div>
      </div>
    </div>

    <h4 class="mb-4">Asset Allocation</h4>
    <div class="allocation-bars">
      <div
        v-for="item in client.allocation"
        :key="item.category"
        class="allocation-item mb-3"
      >
        <div class="d-flex justify-space-between mb-1">
          <span style="font-family: 'Open Sans', sans-serif; font-size: 0.85rem;">{{ item.category }}</span>
          <span style="font-family: 'Quicksand', sans-serif; font-weight: 600;">{{ item.percentage }}%</span>
        </div>
        <v-progress-linear
          :model-value="item.percentage"
          :color="item.color"
          height="8"
          rounded
          :aria-label="`${item.category}: ${item.percentage}%`"
        />
      </div>
    </div>
    <div class="text-caption mt-3" style="font-family: 'Open Sans', sans-serif; color: #455A64;">
      Last updated: {{ client.lastUpdated }}
    </div>
  </section>

  <!-- Advisor View -->
  <section v-else-if="activeRole === 'advisor'" class="dash-card" aria-label="Client Overview">
    <div class="d-flex align-center mb-5">
      <v-icon icon="mdi-account-group" color="primary" size="28" class="mr-4" aria-hidden="true" />
      <h3>Client Overview</h3>
    </div>

    <div class="d-flex flex-wrap ga-8 mb-6">
      <div class="text-center">
        <div class="stat-number" style="color: #1C2536;">{{ advisor.clientCount }}</div>
        <div class="text-caption">Total Clients</div>
      </div>
      <div class="text-center">
        <div class="stat-number status-red">{{ advisor.flaggedClients }}</div>
        <div class="text-caption">Flagged</div>
      </div>
      <div class="text-center">
        <div class="stat-number status-yellow">{{ advisor.reviewsDue }}</div>
        <div class="text-caption">Reviews Due</div>
      </div>
      <div class="text-center">
        <div class="stat-number" style="color: #EA580C;">{{ advisor.driftAlerts }}</div>
        <div class="text-caption">Drift Alerts</div>
      </div>
    </div>

    <h4 class="mb-4">Top Clients</h4>
    <v-list bg-color="transparent" density="compact">
      <v-list-item
        v-for="c in advisor.topClients"
        :key="c.name"
        class="mb-1 px-0"
      >
        <template #prepend>
          <v-icon :icon="statusIcon(c.status)" :color="statusColor(c.status)" size="20" />
        </template>
        <v-list-item-title style="font-family: 'Open Sans', sans-serif; font-weight: 500;">
          {{ c.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ formatCurrency(c.aum) }}
          <span v-if="c.flag" class="ml-2" style="font-size: 0.75rem;">• {{ c.flag }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </section>

  <!-- Placeholder for other roles -->
  <section v-else class="dash-card text-center pa-8" aria-label="Persona view coming soon">
    <v-icon icon="mdi-hard-hat" size="48" color="secondary" class="mb-3" aria-hidden="true" />
    <h3>Coming Soon</h3>
    <p style="font-family: 'Open Sans', sans-serif;">This persona view is under development.</p>
  </section>
  </div>
</template>
