import { CheckboxProps } from '../../main'

export interface CheckboxesProps<T extends Record<string, unknown>> {
  checkboxGenre: CheckboxProps['genre']

  checkboxGenreType: CheckboxProps['genreType']

  checkBoxView: CheckboxProps['view']

  checkboxSize: CheckboxProps['size']

  checkboxWidth?: CheckboxProps['width']

  checkboxIsHiddenBorder?: CheckboxProps['isHiddenBorder']

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
