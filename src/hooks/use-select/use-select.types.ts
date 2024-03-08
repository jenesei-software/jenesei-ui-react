export interface UseSelectProps<T> {
  initialValue: T[] | null
  options: T[]
  labelField: keyof T
  valueField: keyof T
  onChange?: (values: T[]) => void
  addPlaceholder?: boolean
  placeholder?: string
  required?: boolean
  multi?: boolean
  searchable?: boolean
  type?: 'volumetric' | 'default'
}
