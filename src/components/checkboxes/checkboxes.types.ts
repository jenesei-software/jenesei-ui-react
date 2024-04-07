import { CheckboxGenreType } from '@components/checkbox'

export interface CheckboxesProps<T extends Record<string, unknown>> {
  value: T[]
  onChange?: (props: T[]) => void
  multiple?: boolean
  options: T[]
  labelField: keyof T
  contentField?: keyof T
  valueField: keyof T
  className?: string
  genre: CheckboxesGenreType
  checkboxGenre: CheckboxGenreType
  isClickOnlyIcon?: boolean
}

export type CheckboxesGenreType = 'agreements' | 'auth' | 'objects-edit'
