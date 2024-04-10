import { TRecordsView } from '@components/modal-period-toggle'

export function getTimestampRecords(
  view: TRecordsView = 'days',
  timestamp: number,
  direction: '+' | '-' | 'start',
): number {
  const date = new Date(timestamp)
  switch (view) {
    case 'days': {
      return direction === '+'
        ? new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 1,
            0,
            0,
            0,
          ).getTime()
        : new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() - 1,
            0,
            0,
            0,
          ).getTime()
    }
    case 'weeks': {
      const dayOfWeek = date.getDay()
      const mondayTimestamp =
        timestamp - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) * 24 * 60 * 60 * 1000 // Находим начало недели
      if (direction === 'start') {
        return new Date(mondayTimestamp).setHours(0, 0, 0)
      } else {
        return direction === '+'
          ? new Date(mondayTimestamp + 7 * 24 * 60 * 60 * 1000).setHours(
              0,
              0,
              0,
            )
          : new Date(mondayTimestamp - 7 * 24 * 60 * 60 * 1000).setHours(
              0,
              0,
              0,
            )
      }
    }
    case 'months': {
      const month = date.getMonth()
      const year = date.getFullYear()
      if (direction === 'start') {
        return new Date(year, month, 1, 0, 0, 0).getTime()
      } else {
        return direction === '+'
          ? new Date(year, month + 1, 1, 0, 0, 0).getTime()
          : new Date(year, month - 1, 1, 0, 0, 0).getTime()
      }
    }
  }
}
