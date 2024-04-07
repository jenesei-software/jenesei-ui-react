export function applyOpacityToHexColor(
  hexColor: string | undefined,
  opacity: number
): string | null {
  if (!hexColor) {
    console.error('Invalid HEX color format')
    return null
  }

  const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(hexColor)

  if (!isValidHex) {
    console.error('Invalid HEX color format')
    return null
  }

  const hexToRgb = (hex: string): string => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgb(${r}, ${g}, ${b})`
  }

  const rgbColor = hexToRgb(hexColor)

  return `rgba${rgbColor.slice(3, -1)}, ${opacity})`
}
