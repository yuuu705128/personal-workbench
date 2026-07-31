import { describe, expect, it } from 'vitest'
import { dailySavingsTarget } from './savings'

describe('dailySavingsTarget', () => {
  it('spreads the remaining amount across the days left in the year', () => {
    expect(dailySavingsTarget(0, new Date('2026-07-31T12:00:00'))).toBe(43)
  })

  it('returns zero after the target is already reached', () => {
    expect(dailySavingsTarget(10000, new Date('2026-07-31T12:00:00'))).toBe(0)
  })
})
