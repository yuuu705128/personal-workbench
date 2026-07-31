export function splitWeeklyMoney(allowance: number, netProfit: number) {
  const living = Math.min(300, allowance)
  const savingsFromAllowance = Math.max(0, allowance - living)
  const operations = Math.min(50, Math.round(netProfit * 0.1333))
  const flexible = Math.min(25, Math.round(netProfit * 0.0667))
  const savings = savingsFromAllowance + Math.max(0, netProfit - operations - flexible)

  return { living, savings, operations, flexible }
}
