export type Task = {
  id: string
  title: string
  area: '兼职群' | '英语' | '健身' | '新媒体' | '存钱' | '阅读'
}

const groupTasks: Task[] = [
  { id: 'group-post', title: '发布帖子', area: '兼职群' },
  { id: 'group-merchant', title: '找商家', area: '兼职群' },
  { id: 'group-leads', title: '有效评论 / 私信获客', area: '兼职群' },
  { id: 'group-review', title: '晚上复盘', area: '兼职群' }
]

const englishTasks: Task[] = [
  { id: 'english-words', title: '完成 5 个六级词汇', area: '英语' },
  { id: 'english-vlog', title: '完成今日 vlog 学习', area: '英语' }
]

export function buildTodayTasks(date: Date): Task[] {
  const weekday = date.getDay()

  if (weekday === 0) {
    return [
      ...englishTasks,
      { id: 'sunday-money', title: '分配本周 500 元生活费', area: '存钱' },
      { id: 'sunday-review', title: '完成本周兼职群结算', area: '存钱' },
      { id: 'reading-30', title: '阅读 30 分钟', area: '阅读' }
    ]
  }

  const tasks = [...groupTasks, ...englishTasks, { id: 'reading-30', title: '阅读 30 分钟', area: '阅读' } as Task]

  if (weekday <= 3) {
    const workout = ['push', 'pull', 'shoulder'][weekday - 1]
    const labels = { push: '推', pull: '拉', shoulder: '肩' }
    tasks.push({ id: `fitness-${workout}`, title: `完成${labels[workout as keyof typeof labels]}训练`, area: '健身' })
  } else {
    const media = {
      4: { id: 'media-recruit', title: '招新 / 拉群' },
      5: { id: 'media-content', title: '发内容或完成选题' },
      6: { id: 'media-followup', title: '私域跟进' }
    }[weekday]
    if (media) tasks.push({ ...media, area: '新媒体' })
  }

  return tasks
}
