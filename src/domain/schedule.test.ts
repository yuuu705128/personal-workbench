import { describe, expect, it } from 'vitest'
import { buildTodayTasks } from './schedule'

describe('buildTodayTasks', () => {
  it('creates group, English and push tasks on Monday', () => {
    const tasks = buildTodayTasks(new Date('2026-08-03T12:00:00'))

    expect(tasks.map((task) => task.id)).toEqual([
      'group-post',
      'group-merchant',
      'group-leads',
      'group-review',
      'english-words',
      'english-vlog',
      'reading-30',
      'fitness-push'
    ])
  })

  it('creates English and Sunday settlement only on Sunday', () => {
    const tasks = buildTodayTasks(new Date('2026-08-02T12:00:00'))

    expect(tasks.map((task) => task.id)).toEqual([
      'english-words',
      'english-vlog',
      'sunday-money',
      'sunday-review',
      'reading-30'
    ])
  })
})
