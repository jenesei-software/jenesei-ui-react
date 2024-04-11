import {
  CheckboxColorType,
  CheckboxGenreType,
  CheckboxProps,
  CheckboxSizeType,
} from '../../main'

export interface CheckboxesProps<T extends Record<string, unknown>> {
  checkboxGenre: CheckboxGenreType

  checkboxColor: CheckboxColorType

  checkboxSize: CheckboxSizeType

  checkboxWidth?: CheckboxProps['width']

  className?: string

  childrenField?: keyof T

  isClickOnlyIcon?: boolean

  labelField?: keyof T

  multiple?: boolean

  onChange?: (props: T[]) => void

  options: T[]

  value: T[]

  valueField: keyof T

  width?: string
}

export interface CheckboxesWrapperProps {
  $width?: string
}
