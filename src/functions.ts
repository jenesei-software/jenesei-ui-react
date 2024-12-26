type EnumOption = {
  value: string
  label: string
  placeholder: string
  search: string
}

export function transformEnumToOptions<T extends Record<string, string>>(enumObj: T): EnumOption[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    value: key,
    label: value,
    placeholder: value,
    search: `${value}, ${key}`
  }))
}
