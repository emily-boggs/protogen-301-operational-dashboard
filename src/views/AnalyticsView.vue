<script setup lang="ts">
const performanceData = [
  { month: 'Jan', return: 2.1 },
  { month: 'Feb', return: 1.8 },
  { month: 'Mar', return: -0.5 },
  { month: 'Apr', return: 3.2 },
  { month: 'May', return: 1.4 },
  { month: 'Jun', return: 2.7 },
  { month: 'Jul', return: -1.1 },
  { month: 'Aug', return: 0.9 },
  { month: 'Sep', return: 1.6 },
  { month: 'Oct', return: 2.3 },
  { month: 'Nov', return: 3.1 },
  { month: 'Dec', return: 1.9 },
]

const allocationData = [
  { category: 'US Equities', percentage: 42, color: '#0E7490' },
  { category: 'International Equities', percentage: 18, color: '#7B1FA2' },
  { category: 'Fixed Income', percentage: 25, color: '#2E7D32' },
  { category: 'Real Estate', percentage: 8, color: '#EA580C' },
  { category: 'Cash & Equivalents', percentage: 7, color: '#78819B' },
]

const riskMetrics = [
  { label: 'Sharpe Ratio', value: '1.42', trend: 'up' },
  { label: 'Beta', value: '0.87', trend: 'neutral' },
  { label: 'Max Drawdown', value: '-4.2%', trend: 'down' },
  { label: 'Volatility', value: '12.3%', trend: 'neutral' },
  { label: 'Alpha', value: '2.1%', trend: 'up' },
  { label: 'R-Squared', value: '0.94', trend: 'neutral' },
]

const topHoldings = [
  { name: 'Vanguard S&P 500 ETF', ticker: 'VOO', value: '$482,000', change: '+1.2%' },
  { name: 'iShares Core Bond ETF', ticker: 'AGG', value: '$310,000', change: '+0.3%' },
  { name: 'Vanguard Total Intl', ticker: 'VXUS', value: '$198,000', change: '-0.5%' },
  { name: 'Schwab US REIT ETF', ticker: 'SCHH', value: '$96,000', change: '+0.8%' },
  { name: 'Vanguard Short-Term', ticker: 'VGSH', value: '$84,000', change: '+0.1%' },
]

function trendIcon(trend: string) {
  switch (trend) {
    case 'up': return 'mdi-trending-up'
    case 'down': return 'mdi-trending-down'
    default: return 'mdi-minus'
  }
}

function trendColor(trend: string) {
  switch (trend) {
    case 'up': return '#2E7D32'
    case 'down': return '#D32F2F'
    default: return '#78819B'
  }
}
</script>

<template>
  <div class="analytics-page" style="max-width: 1100px; margin: 0 auto; padding: 40px 24px;">
    <h1 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.8rem; margin-bottom: 8px;">
      Analytics
    </h1>
    <p style="color: #78819B; font-size: 0.9rem; margin-bottom: 32px;">
      Portfolio performance and risk analysis
    </p>

    <!-- Monthly Performance -->
    <section class="analytics-card" style="margin-bottom: 28px;">
      <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 20px;">
        Monthly Returns (2025)
      </h3>
      <div class="bar-chart">
        <div
          v-for="item in performanceData"
          :key="item.month"
          class="bar-item"
        >
          <div class="bar-wrapper">
            <div
              class="bar"
              :style="{
                height: `${Math.abs(item.return) * 20}px`,
                background: item.return >= 0 ? '#0E7490' : '#D32F2F',
                marginTop: item.return >= 0 ? 'auto' : '0',
                marginBottom: item.return < 0 ? 'auto' : '0',
              }"
            />
          </div>
          <span class="bar-label">{{ item.month }}</span>
          <span class="bar-value" :style="{ color: item.return >= 0 ? '#2E7D32' : '#D32F2F' }">
            {{ item.return > 0 ? '+' : '' }}{{ item.return }}%
          </span>
        </div>
      </div>
    </section>

    <div class="analytics-grid" style="margin-bottom: 28px;">
      <!-- Asset Allocation -->
      <section class="analytics-card">
        <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 20px;">
          Asset Allocation
        </h3>
        <div class="allocation-list">
          <div
            v-for="item in allocationData"
            :key="item.category"
            class="allocation-item"
          >
            <div class="d-flex align-center" style="margin-bottom: 6px;">
              <span
                class="allocation-dot"
                :style="{ background: item.color }"
              />
              <span style="font-size: 0.85rem; font-weight: 500;">{{ item.category }}</span>
              <span style="margin-left: auto; font-weight: 600; font-size: 0.85rem;">{{ item.percentage }}%</span>
            </div>
            <div class="allocation-bar-bg">
              <div
                class="allocation-bar-fill"
                :style="{ width: `${item.percentage}%`, background: item.color }"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Risk Metrics -->
      <section class="analytics-card">
        <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 20px;">
          Risk Metrics
        </h3>
        <div class="risk-grid">
          <div
            v-for="metric in riskMetrics"
            :key="metric.label"
            class="risk-item"
          >
            <span class="risk-label">{{ metric.label }}</span>
            <div class="d-flex align-center" style="gap: 6px;">
              <span class="risk-value">{{ metric.value }}</span>
              <v-icon :icon="trendIcon(metric.trend)" :color="trendColor(metric.trend)" size="16" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Top Holdings -->
    <section class="analytics-card">
      <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 20px;">
        Top Holdings
      </h3>
      <div class="holdings-table">
        <div class="holdings-header">
          <span>Name</span>
          <span>Ticker</span>
          <span>Value</span>
          <span>Change</span>
        </div>
        <div
          v-for="holding in topHoldings"
          :key="holding.ticker"
          class="holdings-row"
        >
          <span style="font-weight: 500;">{{ holding.name }}</span>
          <span style="color: #78819B;">{{ holding.ticker }}</span>
          <span style="font-weight: 600;">{{ holding.value }}</span>
          <span :style="{ color: holding.change.startsWith('+') ? '#2E7D32' : '#D32F2F', fontWeight: 600 }">
            {{ holding.change }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.analytics-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid #ECEEF4;
}

.analytics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 120px;
  padding-top: 20px;
}

.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 4px;
}

.bar-wrapper {
  height: 80px;
  display: flex;
  align-items: flex-end;
  width: 100%;
}

.bar {
  width: 100%;
  border-radius: 4px 4px 0 0;
  min-height: 4px;
}

.bar-label {
  font-size: 0.7rem;
  color: #78819B;
}

.bar-value {
  font-size: 0.65rem;
  font-weight: 600;
}

.allocation-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.allocation-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.allocation-bar-bg {
  height: 6px;
  background: #ECEEF4;
  border-radius: 3px;
  overflow: hidden;
}

.allocation-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.risk-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.risk-item {
  background: #F5F6FA;
  border-radius: 10px;
  padding: 14px;
}

.risk-label {
  font-size: 0.75rem;
  color: #78819B;
  display: block;
  margin-bottom: 4px;
}

.risk-value {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
}

.holdings-table {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.holdings-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 10px 16px;
  font-size: 0.75rem;
  color: #78819B;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #ECEEF4;
}

.holdings-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 14px 16px;
  font-size: 0.85rem;
  border-bottom: 1px solid #F5F6FA;
  align-items: center;
}

.holdings-row:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .analytics-grid {
    grid-template-columns: 1fr;
  }
}
</style>
