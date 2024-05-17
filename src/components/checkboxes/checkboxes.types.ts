import { TJeneseiThemeSize } from '../../theme'
import { CheckboxProps } from '../checkbox/checkbox.types'

export interface CheckboxesProps<T extends Record<string, unknown>> {
  checkboxGenre: CheckboxProps['genre']

  checkboxGenreType: CheckboxProps['genreType']

  checkBoxView: CheckboxProps['view']

  checkboxWidth?: CheckboxProps['width']

  checkboxIsHiddenBorder?: CheckboxProps['isHiddenBorder']

  checkboxIsActive?: CheckboxProps['isActive']

  className?: string

  childrenField?: keyof T

  isClickOnlyIcon?: boolean

  size: CheckboxProps['size']

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

  $size: TJeneseiThemeSize
}
