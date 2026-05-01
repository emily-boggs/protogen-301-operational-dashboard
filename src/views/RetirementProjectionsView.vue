<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { markActionComplete } from '../stores/completedActions'

const router = useRouter()
const showToast = ref(false)

function markAsReviewed() {
  markActionComplete(1)
  showToast.value = true
  setTimeout(() => {
    router.push('/')
  }, 2000)
}

const projections = {
  currentAge: 52,
  retirementAge: 65,
  yearsToRetirement: 13,
  currentSavings: '$2,840,000',
  projectedAtRetirement: '$5,120,000',
  monthlyIncome: '$18,400',
  socialSecurity: '$3,200',
  totalMonthlyIncome: '$21,600',
  assumptions: {
    annualReturn: '6.5%',
    inflation: '2.8%',
    withdrawalRate: '4.0%',
  },
}

const milestones = [
  { year: 2026, age: 52, balance: '$2,840,000', label: 'Current' },
  { year: 2029, age: 55, balance: '$3,420,000', label: '' },
  { year: 2032, age: 58, balance: '$4,010,000', label: '' },
  { year: 2035, age: 61, balance: '$4,560,000', label: '' },
  { year: 2038, age: 64, balance: '$5,010,000', label: '' },
  { year: 2039, age: 65, balance: '$5,120,000', label: 'Retirement' },
]

const incomeBreakdown = [
  { source: 'Investment Portfolio', amount: '$12,800', percent: '59%' },
  { source: 'Social Security', amount: '$3,200', percent: '15%' },
  { source: 'Pension', amount: '$3,400', percent: '16%' },
  { source: 'Rental Income', amount: '$2,200', percent: '10%' },
]
</script>

<template>
  <div style="padding: 32px; max-width: 900px; margin: 0 auto;">
    <div class="d-flex align-center" style="margin-bottom: 32px;">
      <router-link to="/" style="color: #78819B; text-decoration: none; margin-right: 12px;">
        <v-icon icon="mdi-arrow-left" size="20" />
      </router-link>
      <h2 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.4rem;">
        Retirement Projections
      </h2>
    </div>

    <!-- Summary Cards -->
    <div class="summary-grid">
      <div class="summary-card">
        <span class="summary-label">Current Savings</span>
        <span class="summary-value">{{ projections.currentSavings }}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Projected at Retirement</span>
        <span class="summary-value highlight">{{ projections.projectedAtRetirement }}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Monthly Income (Retirement)</span>
        <span class="summary-value">{{ projections.totalMonthlyIncome }}</span>
      </div>
      <div class="summary-card">
        <span class="summary-label">Years to Retirement</span>
        <span class="summary-value">{{ projections.yearsToRetirement }}</span>
      </div>
    </div>

    <!-- Growth Milestones -->
    <section class="proj-section">
      <h3 class="section-title">Growth Milestones</h3>
      <div class="milestones-table">
        <div class="milestone-header">
          <span>Year</span>
          <span>Age</span>
          <span>Projected Balance</span>
          <span></span>
        </div>
        <div
          v-for="m in milestones"
          :key="m.year"
          class="milestone-row"
          :class="{ current: m.label === 'Current', retirement: m.label === 'Retirement' }"
        >
          <span>{{ m.year }}</span>
          <span>{{ m.age }}</span>
          <span class="milestone-balance">{{ m.balance }}</span>
          <span v-if="m.label" class="milestone-label">{{ m.label }}</span>
          <span v-else></span>
        </div>
      </div>
    </section>

    <!-- Income Breakdown -->
    <section class="proj-section">
      <h3 class="section-title">Projected Monthly Income Breakdown</h3>
      <div class="income-list">
        <div v-for="item in incomeBreakdown" :key="item.source" class="income-item">
          <div class="income-source">{{ item.source }}</div>
          <div class="income-amount">{{ item.amount }}</div>
          <div class="income-percent">{{ item.percent }}</div>
        </div>
        <div class="income-item total">
          <div class="income-source">Total</div>
          <div class="income-amount">{{ projections.totalMonthlyIncome }}</div>
          <div class="income-percent">100%</div>
        </div>
      </div>
    </section>

    <!-- Assumptions -->
    <section class="proj-section">
      <h3 class="section-title">Assumptions</h3>
      <div class="assumptions-grid">
        <div class="assumption-item">
          <span class="assumption-label">Annual Return</span>
          <span class="assumption-value">{{ projections.assumptions.annualReturn }}</span>
        </div>
        <div class="assumption-item">
          <span class="assumption-label">Inflation Rate</span>
          <span class="assumption-value">{{ projections.assumptions.inflation }}</span>
        </div>
        <div class="assumption-item">
          <span class="assumption-label">Withdrawal Rate</span>
          <span class="assumption-value">{{ projections.assumptions.withdrawalRate }}</span>
        </div>
      </div>
    </section>

    <div style="text-align: center; margin-top: 8px;">
      <button class="reviewed-btn" @click="markAsReviewed">
        <v-icon icon="mdi-check" size="18" style="margin-right: 8px;" />
        Mark as Reviewed
      </button>
    </div>

    <v-snackbar
      v-model="showToast"
      :timeout="3000"
      color="success"
      location="top center"
      style="margin-top: 50px;"
    >
      <div class="d-flex align-center" style="gap: 8px; padding: 4px 16px;">
        <v-icon icon="mdi-check-circle" size="20" />
        Action item completed — Financial plan reviewed
      </div>
    </v-snackbar>
  </div>
</template>

<style scoped>
.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.summary-card {
  background: #FFFFFF;
  border: 1.5px solid #ECEEF4;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.summary-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.78rem;
  color: #78819B;
}

.summary-value {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #1C2536;
}

.summary-value.highlight {
  color: #0E7490;
}

.proj-section {
  background: #FFFFFF;
  border: 1.5px solid #ECEEF4;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 24px;
}

.section-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 16px;
}

.milestones-table {
  display: flex;
  flex-direction: column;
}

.milestone-header {
  display: grid;
  grid-template-columns: 80px 60px 1fr 100px;
  padding: 8px 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.72rem;
  color: #78819B;
  text-transform: uppercase;
  font-weight: 600;
}

.milestone-row {
  display: grid;
  grid-template-columns: 80px 60px 1fr 100px;
  padding: 12px;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  color: #1C2536;
}

.milestone-row.current {
  background: #F0FDFA;
}

.milestone-row.retirement {
  background: #F0FDFA;
  font-weight: 600;
}

.milestone-balance {
  font-weight: 600;
}

.milestone-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #0E7490;
  text-align: right;
}

.income-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.income-item {
  display: grid;
  grid-template-columns: 1fr 120px 60px;
  padding: 12px 0;
  border-bottom: 1px solid #F5F6FA;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
}

.income-item:last-child {
  border-bottom: none;
}

.income-item.total {
  border-top: 2px solid #ECEEF4;
  font-weight: 700;
  margin-top: 4px;
  padding-top: 14px;
}

.income-source {
  color: #1C2536;
}

.income-amount {
  font-weight: 600;
  text-align: right;
}

.income-percent {
  color: #78819B;
  text-align: right;
}

.assumptions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.assumption-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.assumption-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  color: #78819B;
}

.assumption-value {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1C2536;
}

.reviewed-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 50px;
  border: none;
  background: #0E7490;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.reviewed-btn:hover {
  background: #0A5E75;
}
</style>
