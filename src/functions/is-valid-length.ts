export const isValidLength = (
  value: string,
  minLength: number,
  maxLength: number
) => {
  return value.length >= minLength && value.length <= maxLength
}
