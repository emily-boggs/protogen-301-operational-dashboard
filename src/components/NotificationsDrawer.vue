<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  open: boolean
  sidebarCollapsed: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const drawerMargin = computed(() => props.sidebarCollapsed ? '72px' : '240px')

const notifications = [
  {
    id: 1,
    icon: 'mdi-alert-circle',
    color: '#E53935',
    title: 'Portfolio drift detected',
    description: 'International equities allocation has drifted 3.2% above target.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    icon: 'mdi-file-document-check',
    color: '#0E7490',
    title: 'Quarterly report ready',
    description: 'Your Q1 2026 performance report is available for review.',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: 3,
    icon: 'mdi-target',
    color: '#2E7D32',
    title: 'Goal milestone reached',
    description: 'Retirement fund has passed the 75% funded mark.',
    time: '1 day ago',
    unread: false,
  },
  {
    id: 4,
    icon: 'mdi-calendar-clock',
    color: '#EA580C',
    title: 'Upcoming review meeting',
    description: 'Annual portfolio review scheduled for June 15, 2026.',
    time: '2 days ago',
    unread: false,
  },
  {
    id: 5,
    icon: 'mdi-cash-refund',
    color: '#7B1FA2',
    title: 'Tax loss harvesting opportunity',
    description: 'Potential $12,400 in tax savings identified in taxable account.',
    time: '3 days ago',
    unread: false,
  },
  {
    id: 6,
    icon: 'mdi-shield-check',
    color: '#0E7490',
    title: 'Beneficiary update confirmed',
    description: 'Trust beneficiary changes have been processed successfully.',
    time: '5 days ago',
    unread: false,
  },
]

const unreadCount = computed(() => notifications.filter(n => n.unread).length)
</script>

<template>
  <Transition name="drawer">
    <div v-if="open" class="drawer-overlay" @click.self="emit('close')">
      <aside class="notifications-drawer" :style="{ left: drawerMargin }" role="dialog" aria-label="Notifications">
        <div class="drawer-header">
          <h2 class="drawer-title">Notifications</h2>
          <span v-if="unreadCount" class="unread-badge">{{ unreadCount }} new</span>
          <button class="close-btn" aria-label="Close notifications" @click="emit('close')">
            <v-icon icon="mdi-close" size="20" />
          </button>
        </div>

        <div class="drawer-content">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="notification-item"
            :class="{ unread: notification.unread }"
          >
            <div class="notification-icon" :style="{ background: notification.color + '15', color: notification.color }">
              <v-icon :icon="notification.icon" size="20" />
            </div>
            <div class="notification-body">
              <p class="notification-title">{{ notification.title }}</p>
              <p class="notification-desc">{{ notification.description }}</p>
              <span class="notification-time">{{ notification.time }}</span>
            </div>
          </div>
        </div>

        <div class="drawer-footer">
          <button class="mark-all-btn">Mark all as read</button>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 200;
}

.notifications-drawer {
  width: 300px;
  max-width: 85vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #FFFFFF;
  border-right: 1px solid #ECEEF4;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: left 0.25s ease;
}

.drawer-header {
  display: flex;
  align-items: center;
  padding: 20px 18px 14px;
  border-bottom: 1px solid #ECEEF4;
}

.drawer-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1C2536;
  margin: 0;
}

.unread-badge {
  margin-left: 12px;
  background: #0E7490;
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 12px;
}

.close-btn {
  margin-left: auto;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #78819B;
  transition: all 0.15s ease;
}

.close-btn:hover {
  background: #F0F1F5;
  color: #1C2536;
}

.drawer-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.notification-item {
  display: flex;
  gap: 14px;
  padding: 16px 24px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.notification-item:hover {
  background: #F8F9FB;
}

.notification-item.unread {
  background: #F0FAFB;
}

.notification-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-body {
  flex: 1;
  min-width: 0;
}

.notification-title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  color: #1C2536;
  margin: 0 0 4px;
}

.notification-desc {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 0.82rem;
  color: #78819B;
  margin: 0 0 6px;
  line-height: 1.4;
}

.notification-time {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.72rem;
  color: #A0A8B8;
}

.drawer-footer {
  padding: 16px 24px;
  border-top: 1px solid #ECEEF4;
  text-align: center;
}

.mark-all-btn {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: #0E7490;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.15s ease;
}

.mark-all-btn:hover {
  background: #E6F7F9;
}

/* Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease;
}

.drawer-enter-active .notifications-drawer,
.drawer-leave-active .notifications-drawer {
  transition: opacity 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .notifications-drawer,
.drawer-leave-to .notifications-drawer {
  opacity: 0;
}

@media (max-width: 959px) {
  .notifications-drawer {
    width: 100%;
    max-width: 100%;
    left: 0 !important;
    border-right: none;
  }
}
</style>
