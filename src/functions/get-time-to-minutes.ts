export function getTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export function getTimeToMinutesString(time: string): string {
  const [hours, minutes] = time.split(':').map(Number)
  return `${hours * 60 + minutes}`
}

export function getMinutesToTime(minutes: number): string {
  const hours: number = Math.floor(minutes / 60)
  const remainingMinutes: number = minutes % 60
  return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`
}
