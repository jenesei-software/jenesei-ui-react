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

type GenericObject<T> = {
  [key: string]: T
}

export function transformObjectToArray<T>(obj: GenericObject<T>): Array<T> {
  return Object.entries(obj).map(([, value]) => ({
    ...value
  }))
}

export function transformObjectValuesToKeys<T>(obj: GenericObject<T>): GenericObject<string> {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = key
    return acc
  }, {} as GenericObject<string>)
}
