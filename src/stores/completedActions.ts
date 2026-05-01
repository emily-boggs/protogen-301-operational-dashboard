import { reactive } from 'vue'

export const completedActions = reactive<Set<number>>(new Set())

export function markActionComplete(id: number) {
  completedActions.add(id)
}
