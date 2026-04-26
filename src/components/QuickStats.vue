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

function formatCompact(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}
</script>

<template>
  <div>
  <!-- Client Stats -->
  <div v-if="activeRole === 'client'" class="stats-row">
    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Total Assets</span>
        <div class="stat-icon-wrap" style="background: #E6F7F9;">
          <v-icon icon="mdi-wallet" color="primary" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value">{{ formatCompact(client.totalAUM) }}</div>
      <div class="stat-label" style="margin-top: 2px;">Under Management</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">YTD Return</span>
        <div class="stat-icon-wrap" style="background: #E8F5E9;">
          <v-icon icon="mdi-trending-up" color="success" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value">+{{ client.ytdReturn }}%</div>
      <div class="stat-change positive">+{{ formatCurrency(client.ytdReturnDollar) }}</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Equity Allocation</span>
        <div class="stat-icon-wrap" style="background: #FFF3E0;">
          <v-icon icon="mdi-chart-pie" color="secondary" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value">60%</div>
      <div class="stat-change positive">US + International</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Next Review</span>
        <div class="stat-icon-wrap" style="background: #F3E5F5;">
          <v-icon icon="mdi-calendar-clock" color="#7B1FA2" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value" style="font-size: 1.25rem;">May 15</div>
      <div class="stat-label">Quarterly Review</div>
    </div>
  </div>

  <!-- Advisor Stats -->
  <div v-else-if="activeRole === 'advisor'" class="stats-row">
    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Total Clients</span>
        <div class="stat-icon-wrap" style="background: #E6F7F9;">
          <v-icon icon="mdi-account-group" color="primary" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value">{{ advisor.clientCount }}</div>
      <div class="stat-label">Active accounts</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Flagged</span>
        <div class="stat-icon-wrap" style="background: #FFEBEE;">
          <v-icon icon="mdi-flag" color="error" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value status-red">{{ advisor.flaggedClients }}</div>
      <div class="stat-change negative">Needs attention</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Reviews Due</span>
        <div class="stat-icon-wrap" style="background: #FFF3E0;">
          <v-icon icon="mdi-clipboard-text-clock" color="warning" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value status-yellow">{{ advisor.reviewsDue }}</div>
      <div class="stat-label">This month</div>
    </div>

    <div class="stat-mini-card">
      <div class="d-flex align-center justify-space-between mb-2">
        <span class="stat-label">Drift Alerts</span>
        <div class="stat-icon-wrap" style="background: #FFF3E0;">
          <v-icon icon="mdi-alert-outline" color="secondary" size="20" aria-hidden="true" />
        </div>
      </div>
      <div class="stat-value" style="color: #EA580C;">{{ advisor.driftAlerts }}</div>
      <div class="stat-label">Portfolios off-target</div>
    </div>
  </div>

  <!-- Other roles placeholder -->
  <div v-else class="stats-row">
    <div class="stat-mini-card" v-for="i in 4" :key="i">
      <div class="stat-label">Coming Soon</div>
      <div class="stat-value">—</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 959px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 599px) {
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>
