<script setup lang="ts">
import { ref } from 'vue'
import ScheduleButton from './ScheduleButton.vue'
import MessageButton from './MessageButton.vue'

const teamMembers = [
  { initials: 'JM', name: 'James Mitchell', role: 'Financial Advisor', color: '#0E7490', avatar: 'https://i.pravatar.cc/150?img=12' },
  { initials: 'SK', name: 'Sarah Kim', role: 'Estate Attorney', color: '#7B1FA2', avatar: 'https://i.pravatar.cc/150?img=5' },
  { initials: 'RP', name: 'Robert Park', role: 'Tax Advisor', color: '#EA580C', avatar: 'https://i.pravatar.cc/150?img=53' },
  { initials: 'LC', name: 'Lisa Chen', role: 'SEI Operations', color: '#2E7D32', avatar: 'https://i.pravatar.cc/150?img=9' },
  { initials: 'DW', name: 'David Wu', role: 'Portfolio Analyst', color: '#1565C0', avatar: 'https://i.pravatar.cc/150?img=60' },
]

const messages = ref([
  { from: 'James Mitchell', avatar: 'https://i.pravatar.cc/150?img=12', text: 'Hi Marsali, I\'ve updated your retirement projections with the Q1 results. Looking great — let\'s review together next week.', time: 'Apr 28, 2:15 PM', unread: true, replies: [] as { text: string; time: string }[] },
  { from: 'Sarah Kim', avatar: 'https://i.pravatar.cc/150?img=5', text: 'The trust amendment is ready for your signature. I\'ve sent the DocuSign link to your email.', time: 'Apr 26, 10:42 AM', unread: true, replies: [] as { text: string; time: string }[] },
  { from: 'Robert Park', avatar: 'https://i.pravatar.cc/150?img=53', text: 'Quick reminder — estimated tax payment for Q2 is due June 15. Let me know if you need the amount.', time: 'Apr 24, 4:30 PM', unread: false, replies: [] as { text: string; time: string }[] },
  { from: 'Lisa Chen', avatar: 'https://i.pravatar.cc/150?img=9', text: 'Your account rebalancing has been completed. New allocation is reflected in your dashboard.', time: 'Apr 22, 9:05 AM', unread: false, replies: [] as { text: string; time: string }[] },
  { from: 'David Wu', avatar: 'https://i.pravatar.cc/150?img=60', text: 'Market note: International equities saw a 1.2% uptick this week. Your allocation is benefiting nicely.', time: 'Apr 20, 3:18 PM', unread: false, replies: [] as { text: string; time: string }[] },
])

const showModal = ref(false)
const showMessagesPanel = ref(false)
const selectedMember = ref(teamMembers[0])
const messageText = ref('')
const replyingTo = ref<number | null>(null)
const replyText = ref('')

function openMessage(member: typeof teamMembers[0]) {
  selectedMember.value = member
  messageText.value = ''
  showModal.value = true
}

function sendMessage() {
  showModal.value = false
  messageText.value = ''
}

function submitReply(index: number) {
  if (!replyText.value.trim()) return
  messages.value[index].replies.push({
    text: replyText.value.trim(),
    time: 'Just now',
  })
  replyText.value = ''
  replyingTo.value = null
}
</script>

<template>
  <section class="dash-card" aria-label="Quick Connect">
    <div class="d-flex align-center" style="margin-bottom: 24px;">
      <v-icon icon="mdi-account-group" color="primary" size="28" style="margin-right: 10px;" aria-hidden="true" />
      <h3>Quick Connect</h3>
    </div>

    <div class="team-row">
      <div
        v-for="member in teamMembers"
        :key="member.initials"
        class="team-member"
      >
        <button
          class="team-avatar"
          :aria-label="`Message ${member.name}, ${member.role}`"
          @click="openMessage(member)"
        >
          <img :src="member.avatar" :alt="member.name" class="avatar-img" />
        </button>
        <span class="team-name">{{ member.name.split(' ')[0] }}</span>
      </div>
    </div>

    <div style="margin-top: 20px;">
      <button class="view-messages-btn" @click="showMessagesPanel = true">
        <v-icon icon="mdi-message-text-outline" size="16" style="margin-right: 8px;" aria-hidden="true" />
        View Messages
      </button>
    </div>

    <!-- Compose Message Modal -->
    <v-dialog v-model="showModal" max-width="440">
      <v-card style="border-radius: 16px; padding: 24px;">
        <div class="d-flex align-center" style="margin-bottom: 20px;">
          <img :src="selectedMember.avatar" :alt="selectedMember.name" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px;" />
          <div>
            <div style="font-family: 'Quicksand', sans-serif; font-weight: 600;">{{ selectedMember.name }}</div>
            <div style="font-size: 0.75rem; color: #78819B;">{{ selectedMember.role }}</div>
          </div>
        </div>

        <textarea
          v-model="messageText"
          placeholder="Write a message..."
          rows="3"
          class="compose-textarea"
        ></textarea>

        <div class="d-flex" style="gap: 12px;">
          <ScheduleButton label="Send" hide-icon @click="sendMessage" />
          <MessageButton label="Cancel" hide-icon @click="showModal = false" />
        </div>
      </v-card>
    </v-dialog>

    <!-- View Messages Modal -->
    <v-dialog v-model="showMessagesPanel" max-width="500">
      <v-card style="border-radius: 16px; padding: 24px;">
        <div class="d-flex align-center" style="margin-bottom: 20px;">
          <v-icon icon="mdi-message-text" color="primary" size="24" style="margin-right: 10px;" />
          <h3 style="font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 1.1rem;">Messages</h3>
          <v-spacer />
          <button style="border: none; background: none; cursor: pointer; color: #78819B;" @click="showMessagesPanel = false">
            <v-icon icon="mdi-close" size="20" />
          </button>
        </div>

        <div class="messages-list">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="message-item"
            :class="{ unread: msg.unread }"
          >
            <img :src="msg.avatar" :alt="msg.from" class="message-avatar" />
            <div class="message-content">
              <div class="d-flex align-center" style="gap: 8px; margin-bottom: 4px;">
                <span class="message-from">{{ msg.from }}</span>
                <span v-if="msg.unread" class="unread-dot" />
                <span class="message-time">{{ msg.time }}</span>
              </div>
              <p class="message-text">{{ msg.text }}</p>

              <!-- Replies -->
              <div v-if="msg.replies && msg.replies.length" class="replies-section">
                <div v-for="(reply, ri) in msg.replies" :key="ri" class="reply-item">
                  <span class="reply-from">Marsali</span>
                  <span class="reply-time">{{ reply.time }}</span>
                  <p class="reply-text">{{ reply.text }}</p>
                </div>
              </div>

              <!-- Reply input -->
              <div class="reply-input-row" v-if="replyingTo === i">
                <input
                  v-model="replyText"
                  class="reply-input"
                  placeholder="Type a reply..."
                  @keyup.enter="submitReply(i)"
                />
                <button class="reply-send-btn" @click="submitReply(i)">
                  <v-icon icon="mdi-send" size="16" />
                </button>
              </div>
              <button v-else class="reply-btn" @click="replyingTo = i">
                Reply
              </button>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
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

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.view-messages-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
  background: transparent;
  color: #1C2536;
  border: 1.5px solid #ECEEF4;
}

.view-messages-btn:hover {
  background: #F5F6FA;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-height: 400px;
  overflow-y: auto;
}

.message-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid #F5F6FA;
}

.message-item:last-child {
  border-bottom: none;
}

.message-item.unread {
  background: #F8FFFE;
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.message-content {
  flex: 1;
  min-width: 0;
}

.message-from {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
}

.unread-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0E7490;
  flex-shrink: 0;
}

.message-time {
  font-size: 0.68rem;
  color: #78819B;
  margin-left: auto;
}

.message-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  color: #455A64;
  line-height: 1.5;
  margin: 0;
}

.compose-textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #ECEEF4;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  color: #1C2536;
  resize: vertical;
  margin-bottom: 16px;
  outline: none;
}

.compose-textarea:focus {
  border-color: #0E7490;
}

.compose-textarea::placeholder {
  color: #78819B;
}
</style>
