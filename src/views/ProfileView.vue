<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  firstName: 'Marsali',
  lastName: 'Chen',
  email: 'marsali.chen@email.com',
  phone: '(215) 555-0142',
  address: '1247 Walnut Street, Philadelphia, PA 19107',
  accountType: 'Joint Account',
  memberSince: 'March 2019',
})

const notificationSettings = ref({
  portfolioAlerts: true,
  goalMilestones: true,
  actionReminders: true,
  marketUpdates: false,
  meetingReminders: true,
  documentUpdates: true,
  emailDigest: 'daily' as 'realtime' | 'daily' | 'weekly' | 'off',
})

const digestOptions = [
  { value: 'realtime', label: 'Real-time' },
  { value: 'daily', label: 'Daily digest' },
  { value: 'weekly', label: 'Weekly digest' },
  { value: 'off', label: 'Off' },
]
</script>

<template>
  <div class="profile-page">
    <h1 class="page-title">Profile</h1>

    <!-- Profile Information -->
    <section class="profile-card">
      <div class="card-header">
        <v-icon icon="mdi-account-circle" size="24" color="primary" />
        <h2 class="card-title">Personal Information</h2>
      </div>

      <div class="profile-grid">
        <div class="profile-field">
          <label class="field-label">First Name</label>
          <p class="field-value">{{ profile.firstName }}</p>
        </div>
        <div class="profile-field">
          <label class="field-label">Last Name</label>
          <p class="field-value">{{ profile.lastName }}</p>
        </div>
        <div class="profile-field">
          <label class="field-label">Email</label>
          <p class="field-value">{{ profile.email }}</p>
        </div>
        <div class="profile-field">
          <label class="field-label">Phone</label>
          <p class="field-value">{{ profile.phone }}</p>
        </div>
        <div class="profile-field full-width">
          <label class="field-label">Address</label>
          <p class="field-value">{{ profile.address }}</p>
        </div>
        <div class="profile-field">
          <label class="field-label">Account Type</label>
          <p class="field-value">{{ profile.accountType }}</p>
        </div>
        <div class="profile-field">
          <label class="field-label">Member Since</label>
          <p class="field-value">{{ profile.memberSince }}</p>
        </div>
      </div>
    </section>

    <!-- Notification Settings -->
    <section class="profile-card">
      <div class="card-header">
        <v-icon icon="mdi-bell-cog-outline" size="24" color="primary" />
        <h2 class="card-title">Notification Settings</h2>
      </div>

      <div class="settings-list">
        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Portfolio Alerts</p>
            <p class="setting-desc">Drift warnings, rebalancing signals, and performance changes</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.portfolioAlerts" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Goal Milestones</p>
            <p class="setting-desc">Progress updates when goals hit key milestones</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.goalMilestones" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Action Reminders</p>
            <p class="setting-desc">Reminders for pending action items and deadlines</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.actionReminders" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Market Updates</p>
            <p class="setting-desc">Daily market summaries and relevant news</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.marketUpdates" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Meeting Reminders</p>
            <p class="setting-desc">Upcoming advisor meetings and review sessions</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.meetingReminders" />
            <span class="toggle-slider"></span>
          </label>
        </div>

        <div class="setting-item">
          <div class="setting-info">
            <p class="setting-label">Document Updates</p>
            <p class="setting-desc">New reports, statements, and document changes</p>
          </div>
          <label class="toggle">
            <input type="checkbox" v-model="notificationSettings.documentUpdates" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div class="digest-section">
        <p class="setting-label">Email Digest Frequency</p>
        <div class="digest-options">
          <button
            v-for="option in digestOptions"
            :key="option.value"
            class="digest-btn"
            :class="{ active: notificationSettings.emailDigest === option.value }"
            @click="notificationSettings.emailDigest = option.value as any"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-page {
  max-width: 100%;
}

.page-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #1C2536;
  margin-bottom: 28px;
}

.profile-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #ECEEF4;
  padding: 28px;
  margin-bottom: 24px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.card-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: #1C2536;
  margin: 0;
}

.profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.profile-field.full-width {
  grid-column: 1 / -1;
}

.field-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: #78819B;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  display: block;
}

.field-value {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1C2536;
  margin: 0;
}

/* Notification Settings */
.settings-list {
  display: flex;
  flex-direction: column;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #F3F4F8;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-info {
  flex: 1;
  margin-right: 16px;
}

.setting-label {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1C2536;
  margin: 0;
}

.setting-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  color: #78819B;
  margin: 4px 0 0;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: #D1D5DB;
  border-radius: 24px;
  transition: 0.2s ease;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: #FFFFFF;
  border-radius: 50%;
  transition: 0.2s ease;
}

.toggle input:checked + .toggle-slider {
  background: #0E7490;
}

.toggle input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

/* Digest Options */
.digest-section {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #F3F4F8;
}

.digest-options {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.digest-btn {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ECEEF4;
  background: #FFFFFF;
  color: #78819B;
  cursor: pointer;
  transition: all 0.15s ease;
}

.digest-btn:hover {
  border-color: #0E7490;
  color: #0E7490;
}

.digest-btn.active {
  background: #E6F7F9;
  border-color: #0E7490;
  color: #0E7490;
  font-weight: 600;
}

@media (max-width: 600px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }

  .profile-field.full-width {
    grid-column: 1;
  }

  .profile-card {
    padding: 20px;
  }

  .setting-item {
    flex-wrap: wrap;
    gap: 12px;
  }

  .setting-info {
    min-width: 0;
  }
}
</style>
