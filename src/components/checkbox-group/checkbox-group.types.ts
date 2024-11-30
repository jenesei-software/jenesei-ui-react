import { AddDollarSign } from 'src/types'

import { CheckboxProps } from '@components/checkbox'

export interface ICheckboxValue {
  label: string | number
  value: string | number
}

export interface CheckboxGroupProps<T extends ICheckboxValue> {
  checkboxGenre: CheckboxProps['genre']

  checkBoxView: CheckboxProps['view']

  checkboxWidth?: CheckboxProps['width']

  checkboxIsHiddenBorder?: CheckboxProps['isHiddenBorder']

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

export type CheckboxGroupWrapperProps = AddDollarSign<Pick<CheckboxGroupProps<ICheckboxValue>, 'width' | 'size'>>
