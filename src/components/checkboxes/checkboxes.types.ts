import { CheckboxProps } from '@components/checkbox'

import { TJeneseiThemeSize } from '@theme/index'

export interface ICheckboxValue {
  label: string | number
  value: string | number
}

export interface CheckboxesProps<T extends ICheckboxValue> {
  checkboxGenre: CheckboxProps['genre']

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
