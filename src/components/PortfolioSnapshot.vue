<script setup lang="ts">
import portfolioData from '../data/portfolio.json'

const client = portfolioData.client

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
  <section class="dash-card" aria-label="Portfolio Snapshot">
    <div class="d-flex align-center" style="margin-bottom: 24px;">
      <v-icon icon="mdi-chart-pie" color="primary" size="28" style="margin-right: 10px;" aria-hidden="true" />
      <h3>Portfolio Snapshot</h3>
    </div>

    <div class="d-flex flex-wrap ga-8 mb-5">
      <div>
        <div style="font-family: 'Open Sans', sans-serif; font-size: 0.75rem; color: #78819B;">Total Assets Under Management</div>
        <div class="stat-number" style="color: #1C2536;">{{ formatCurrency(client.totalAUM) }}</div>
      </div>
      <div>
        <div style="font-family: 'Open Sans', sans-serif; font-size: 0.75rem; color: #78819B;">Year-to-Date Return</div>
        <div class="stat-number status-green">
          <v-icon icon="mdi-trending-up" size="20" class="mr-1" aria-hidden="true" />
          +{{ client.ytdReturn }}%
        </div>
        <div style="font-size: 0.75rem; color: #2E7D32; font-weight: 600;">+{{ formatCurrency(client.ytdReturnDollar) }}</div>
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
    <div style="margin-top: 12px; font-size: 0.7rem; color: #546E7A; font-family: 'Open Sans', sans-serif;">
      Last updated: {{ client.lastUpdated }}
    </div>
  </section>
</template>
