<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { completedActions, markActionComplete } from '../stores/completedActions'

const router = useRouter()

const showScheduleModal = ref(false)
const showToast = ref(false)
const toastMessage = ref('')

const advisorName = 'James Mitchell'
const availableTimes = [
  { date: 'Mon, May 5', times: ['9:00 AM', '11:30 AM', '2:00 PM'] },
  { date: 'Tue, May 6', times: ['10:00 AM', '1:00 PM', '3:30 PM'] },
  { date: 'Wed, May 7', times: ['9:30 AM', '12:00 PM', '4:00 PM'] },
]

const selectedSlot = ref<string | null>(null)

function selectSlot(date: string, time: string) {
  selectedSlot.value = `${date} at ${time}`
}

function confirmSchedule() {
  showScheduleModal.value = false
  markActionComplete(2)
  toastMessage.value = `Meeting scheduled with ${advisorName} — ${selectedSlot.value}`
  showToast.value = true
  selectedSlot.value = null
}

const actionItems = [
  {
    id: 1,
    title: 'Review updated financial plan',
    description: 'Your advisor has updated your retirement projections with the latest Q1 results.',
    priority: 'high',
    icon: 'mdi-file-document-outline',
    dueDate: 'May 5, 2026',
    linkLabel: 'View Retirement Projections',
    action: 'navigate',
  },
  {
    id: 2,
    title: 'Schedule annual review',
    description: 'It\'s time to schedule your yearly comprehensive portfolio and goals review.',
    priority: 'medium',
    icon: 'mdi-calendar-clock',
    dueDate: 'May 12, 2026',
    linkLabel: 'Schedule Meeting',
    action: 'modal',
  },
]

function priorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'error'
    case 'medium': return 'warning'
    case 'low': return 'success'
    default: return 'grey'
  }
}

function priorityIcon(priority: string): string {
  switch (priority) {
    case 'high': return 'mdi-alert-circle-outline'
    case 'medium': return 'mdi-alert-outline'
    case 'low': return 'mdi-check-circle-outline'
    default: return 'mdi-circle-outline'
  }
}

function priorityLabel(priority: string): string {
  return priority.charAt(0).toUpperCase() + priority.slice(1)
}

function handleAction(item: typeof actionItems[0]) {
  if (item.action === 'navigate') {
    router.push({ name: 'retirement-projections' })
  } else {
    showScheduleModal.value = true
  }
}

const pendingItems = computed(() => actionItems.filter(i => !completedActions.has(i.id)))
const completedItems = computed(() => actionItems.filter(i => completedActions.has(i.id)))
</script>

<template>
  <section class="dash-card pa-6" aria-label="Action Items">
    <div class="d-flex align-center" style="margin-bottom: 24px;">
      <v-icon icon="mdi-clipboard-check" color="primary" size="28" style="margin-right: 10px;" aria-hidden="true" />
      <h3>Action Items</h3>
      <v-spacer />
      <span style="font-size: 0.75rem; color: #78819B;">
        {{ completedItems.length }} / {{ actionItems.length }} complete
      </span>
    </div>

    <div>
      <div
        v-for="item in pendingItems"
        :key="item.id"
        class="action-item d-flex align-start"
        style="background: rgba(245,246,250,0.8); border-radius: 14px; padding: 24px; margin-bottom: 24px;"
      >
        <v-icon
          :icon="item.icon"
          :color="priorityColor(item.priority)"
          size="24"
          style="margin-right: 10px; margin-top: 4px;"
          aria-hidden="true"
        />
        <div class="flex-grow-1">
          <div class="d-flex align-center mb-1">
            <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.95rem;">
              {{ item.title }}
            </span>
            <v-spacer />
            <v-chip
              :color="priorityColor(item.priority)"
              size="x-small"
              variant="flat"
              :prepend-icon="priorityIcon(item.priority)"
            >
              {{ priorityLabel(item.priority) }}
            </v-chip>
            <span style="font-size: 0.7rem; color: #546E7A; margin-left: 8px;">
              Due: {{ item.dueDate }}
            </span>
          </div>
          <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; color: #455A64; margin-top: 8px;">
            {{ item.description }}
          </p>
          <a
            class="action-link"
            @click.prevent="handleAction(item)"
          >
            {{ item.linkLabel }}
          </a>
        </div>
      </div>
    </div>

    <!-- Completed Actions -->
    <div v-if="completedItems.length" style="margin-top: 8px;">
      <div class="d-flex align-center" style="margin-bottom: 12px;">
        <v-icon icon="mdi-check-circle" color="success" size="18" style="margin-right: 8px;" />
        <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.85rem; color: #78819B;">
          Completed
        </span>
      </div>
      <div
        v-for="item in completedItems"
        :key="item.id"
        class="action-item d-flex align-start completed-item"
        style="background: rgba(240,253,250,0.6); border-radius: 14px; padding: 20px; margin-bottom: 12px;"
      >
        <v-icon
          icon="mdi-check-circle"
          color="success"
          size="24"
          style="margin-right: 10px; margin-top: 4px;"
          aria-hidden="true"
        />
        <div class="flex-grow-1">
          <span style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.9rem; color: #78819B; text-decoration: line-through;">
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="!pendingItems.length && completedItems.length" style="text-align: center; padding: 20px; color: #78819B;">
      <v-icon icon="mdi-party-popper" size="28" color="success" style="margin-bottom: 8px;" />
      <p style="font-family: 'Open Sans', sans-serif; font-size: 0.85rem;">All action items complete!</p>
    </div>

    <!-- Schedule Meeting Modal -->
    <v-dialog v-model="showScheduleModal" max-width="460">
      <v-card style="border-radius: 16px; padding: 24px;">
        <div class="d-flex align-center" style="margin-bottom: 20px;">
          <v-icon icon="mdi-calendar-clock" color="primary" size="24" style="margin-right: 10px;" />
          <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.1rem;">Schedule Meeting</h3>
          <v-spacer />
          <button style="border: none; background: none; cursor: pointer; color: #78819B;" @click="showScheduleModal = false">
            <v-icon icon="mdi-close" size="20" />
          </button>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="font-family: 'Open Sans', sans-serif; font-size: 0.85rem; color: #455A64; margin-bottom: 4px;">
            Your Advisor
          </p>
          <p style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 1rem;">
            {{ advisorName }}
          </p>
        </div>

        <div style="margin-bottom: 20px;">
          <p style="font-family: 'Open Sans', sans-serif; font-size: 0.85rem; color: #455A64; margin-bottom: 12px;">
            Available Times
          </p>
          <div v-for="day in availableTimes" :key="day.date" style="margin-bottom: 14px;">
            <p style="font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 0.85rem; margin-bottom: 8px;">
              {{ day.date }}
            </p>
            <div class="d-flex flex-wrap" style="gap: 8px;">
              <button
                v-for="time in day.times"
                :key="time"
                class="time-slot"
                :class="{ selected: selectedSlot === `${day.date} at ${time}` }"
                @click="selectSlot(day.date, time)"
              >
                {{ time }}
              </button>
            </div>
          </div>
        </div>

        <div v-if="selectedSlot" style="background: #F0FDFA; border-radius: 8px; padding: 12px; margin-bottom: 16px;">
          <p style="font-family: 'Open Sans', sans-serif; font-size: 0.82rem; color: #0E7490;">
            Selected: <strong>{{ selectedSlot }}</strong>
          </p>
        </div>

        <button
          class="confirm-btn"
          :disabled="!selectedSlot"
          @click="confirmSchedule"
        >
          Confirm Meeting
        </button>
      </v-card>
    </v-dialog>

    <!-- Toast -->
    <v-snackbar
      v-model="showToast"
      :timeout="4000"
      color="success"
      location="top center"
      style="margin-top: 50px;"
    >
      <div class="d-flex align-center" style="gap: 8px; padding: 4px 16px;">
        <v-icon icon="mdi-check-circle" size="20" />
        {{ toastMessage }}
      </div>
    </v-snackbar>
  </section>
</template>

<style scoped>
.action-link {
  display: inline-block;
  margin-top: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0E7490;
  cursor: pointer;
  text-decoration: none;
}

.action-link:hover {
  text-decoration: underline;
}

.time-slot {
  padding: 8px 16px;
  border-radius: 50px;
  border: 1.5px solid #ECEEF4;
  background: transparent;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1C2536;
  cursor: pointer;
  transition: all 0.15s ease;
}

.time-slot:hover {
  background: #F5F6FA;
}

.time-slot.selected {
  background: #0E7490;
  color: #FFFFFF;
  border-color: #0E7490;
}

.confirm-btn {
  width: 100%;
  padding: 12px 20px;
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

.confirm-btn:hover:not(:disabled) {
  background: #0A5E75;
}

.confirm-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
