import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ActionDetailView from '../views/ActionDetailView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import ReportsView from '../views/ReportsView.vue'
import RetirementProjectionsView from '../views/RetirementProjectionsView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/action/:role/:id',
    name: 'action-detail',
    component: ActionDetailView,
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView,
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView,
  },
  {
    path: '/retirement-projections',
    name: 'retirement-projections',
    component: RetirementProjectionsView,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
