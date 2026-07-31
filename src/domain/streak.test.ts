import { describe, expect, it } from 'vitest'
import { calculateStreak } from './streak'

describe('calculateStreak', () => {
  it('counts backward only through fully completed scheduled days', () => {
    const status = new Map([
      ['2026-08-01', true],
      ['2026-08-02', true],
      ['2026-08-03', false],
      ['2026-08-04', true]
    ])

    expect(calculateStreak('2026-08-04', status)).toBe(1)
  })
})
