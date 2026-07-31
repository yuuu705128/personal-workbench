const dayMs = 24 * 60 * 60 * 1000

export function calculateStreak(lastDate: string, status: Map<string, boolean>): number {
  let cursor = new Date(`${lastDate}T12:00:00`)
  let streak = 0

  while (status.get(toDateKey(cursor)) === true) {
    streak += 1
    cursor = new Date(cursor.getTime() - dayMs)
  }

  return streak
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}
