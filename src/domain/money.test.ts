import { describe, expect, it } from 'vitest'
import { splitWeeklyMoney } from './money'

describe('splitWeeklyMoney', () => {
  it('splits the Sunday allowance and net profit according to the agreed plan', () => {
    expect(splitWeeklyMoney(500, 375)).toEqual({
      living: 300,
      savings: 500,
      operations: 50,
      flexible: 25
    })
  })
})
