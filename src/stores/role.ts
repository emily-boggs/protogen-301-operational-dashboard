import { ref } from 'vue'

export type Role = 'client' | 'advisor'

export const currentRole = ref<Role>('client')

export const roles = [
  { id: 'client' as Role, label: 'Client', icon: 'mdi-account' },
  { id: 'advisor' as Role, label: 'Financial Advisor', icon: 'mdi-briefcase' },
]

export function setRole(role: Role) {
  currentRole.value = role
}
