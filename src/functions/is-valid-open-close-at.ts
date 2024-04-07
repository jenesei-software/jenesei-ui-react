export const validateOpenCloseAt = (
  openAt?: string | null,
  closeAt?: string | null,
  isAlwaysOpen?: boolean
): boolean => {
  if (isAlwaysOpen) return true
  if (openAt && closeAt) return true
  return false
}
