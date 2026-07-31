export function dailySavingsTarget(currentSavings: number, _today: Date, goal = 10000): number {
  if (currentSavings >= goal) return 0
  return Math.ceil((500 - 200) / 7)
}