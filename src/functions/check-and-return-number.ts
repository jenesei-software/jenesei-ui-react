export function checkAndReturnNumber(s?: string): number | undefined {
  if (!s) return undefined
  const number = parseFloat(s)
  if (!isNaN(number)) {
    return number
  }
  return undefined
}
