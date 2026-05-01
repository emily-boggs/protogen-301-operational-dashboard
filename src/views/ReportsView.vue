<script setup lang="ts">
const reports = [
  {
    id: 1,
    title: 'Q1 2026 Portfolio Performance',
    type: 'Performance',
    date: '2026-04-05',
    status: 'ready',
    icon: 'mdi-chart-line',
  },
  {
    id: 2,
    title: '2025 Annual Tax Summary',
    type: 'Tax',
    date: '2026-02-15',
    status: 'ready',
    icon: 'mdi-file-document',
  },
  {
    id: 3,
    title: 'Estate Planning Overview',
    type: 'Estate',
    date: '2026-03-20',
    status: 'ready',
    icon: 'mdi-home-city',
  },
  {
    id: 4,
    title: 'Risk Assessment Report',
    type: 'Risk',
    date: '2026-04-12',
    status: 'ready',
    icon: 'mdi-shield-check',
  },
  {
    id: 5,
    title: 'Q2 2026 Outlook & Strategy',
    type: 'Strategy',
    date: '2026-04-28',
    status: 'draft',
    icon: 'mdi-lightbulb',
  },
  {
    id: 6,
    title: 'Beneficiary Designation Review',
    type: 'Estate',
    date: '2026-01-10',
    status: 'ready',
    icon: 'mdi-account-group',
  },
  {
    id: 7,
    title: 'Fee Disclosure Statement',
    type: 'Compliance',
    date: '2026-03-01',
    status: 'ready',
    icon: 'mdi-receipt',
  },
  {
    id: 8,
    title: 'Retirement Projection Update',
    type: 'Planning',
    date: '2026-04-20',
    status: 'draft',
    icon: 'mdi-beach',
  },
]

const recentActivity = [
  { action: 'Downloaded', report: 'Q1 2026 Portfolio Performance', date: 'Apr 28, 2026' },
  { action: 'Viewed', report: '2025 Annual Tax Summary', date: 'Apr 22, 2026' },
  { action: 'Shared', report: 'Estate Planning Overview', date: 'Apr 15, 2026' },
  { action: 'Downloaded', report: 'Risk Assessment Report', date: 'Apr 12, 2026' },
]

function statusColor(status: string) {
  return status === 'ready' ? '#2E7D32' : '#EA580C'
}

function statusLabel(status: string) {
  return status === 'ready' ? 'Ready' : 'Draft'
}
</script>

<template>
  <div class="reports-page" style="max-width: 1100px; margin: 0 auto; padding: 40px 24px;">
    <h1 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.8rem; margin-bottom: 8px;">
      Reports
    </h1>
    <p style="color: #78819B; font-size: 0.9rem; margin-bottom: 32px;">
      Access and download your financial documents
    </p>

    <div class="reports-grid">
      <!-- Reports List -->
      <section class="reports-card">
        <div class="d-flex align-center" style="margin-bottom: 20px;">
          <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600;">All Reports</h3>
          <v-spacer />
          <span style="font-size: 0.8rem; color: #78819B;">{{ reports.length }} documents</span>
        </div>

        <div class="report-list">
          <div
            v-for="report in reports"
            :key="report.id"
            class="report-row"
          >
            <div class="d-flex align-center" style="gap: 12px; flex: 1;">
              <v-icon :icon="report.icon" color="primary" size="22" />
              <div>
                <div style="font-weight: 600; font-size: 0.9rem;">{{ report.title }}</div>
                <div style="font-size: 0.75rem; color: #78819B;">{{ report.type }} · {{ report.date }}</div>
              </div>
            </div>
            <span
              class="status-badge"
              :style="{ background: statusColor(report.status) + '1A', color: statusColor(report.status) }"
            >
              {{ statusLabel(report.status) }}
            </span>
            <button class="download-btn" aria-label="Download report">
              <v-icon icon="mdi-download" size="18" />
            </button>
          </div>
        </div>
      </section>

      <!-- Recent Activity -->
      <section class="reports-card">
        <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 600; margin-bottom: 20px;">
          Recent Activity
        </h3>
        <div class="activity-list">
          <div
            v-for="(activity, i) in recentActivity"
            :key="i"
            class="activity-item"
          >
            <div class="activity-dot" />
            <div>
              <div style="font-size: 0.85rem;">
                <strong>{{ activity.action }}</strong> {{ activity.report }}
              </div>
              <div style="font-size: 0.75rem; color: #78819B;">{{ activity.date }}</div>
            </div>
          </div>
        </div>

        <div class="quick-stats" style="margin-top: 24px;">
          <h4 style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.9rem; margin-bottom: 14px;">
            Summary
          </h4>
          <div class="stat-row">
            <span>Total Reports</span>
            <strong>{{ reports.length }}</strong>
          </div>
          <div class="stat-row">
            <span>Ready</span>
            <strong>{{ reports.filter(r => r.status === 'ready').length }}</strong>
          </div>
          <div class="stat-row">
            <span>Drafts</span>
            <strong>{{ reports.filter(r => r.status === 'draft').length }}</strong>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.reports-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid #ECEEF4;
}

.reports-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
  align-items: start;
}

.report-list {
  display: flex;
  flex-direction: column;
}

.report-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #F5F6FA;
}

.report-row:last-child {
  border-bottom: none;
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}

.download-btn {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #ECEEF4;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
  transition: all 0.15s ease;
}

.download-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0E7490;
  margin-top: 6px;
  flex-shrink: 0;
}

.quick-stats {
  background: #F5F6FA;
  border-radius: 12px;
  padding: 18px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  padding: 6px 0;
  color: #455A64;
}

@media (max-width: 768px) {
  .reports-grid {
    grid-template-columns: 1fr;
  }
}
</style>
