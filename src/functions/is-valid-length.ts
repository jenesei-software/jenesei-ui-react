export const isValidLength = (
  value: string | null | undefined,
  minLength: number,
  maxLength: number,
) => {
  return String(value).length >= minLength && String(value).length <= maxLength
}
