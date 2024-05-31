import { TJeneseiThemeSize } from '../../theme'
import { CheckboxProps } from '../checkbox'
import { InputProps, StyledInputProps, StyledInputWrapperProps } from '../input'

export interface ISelectItem {
  label: string | number
  value: string | number
}

export interface SelectProps<T extends ISelectItem> {
  size: TJeneseiThemeSize
  inputProps: InputProps
  checkboxProps: CheckboxProps
  optionProps: InputProps
  listProps: InputProps
  option: T[]
  value: T[]
  onChange: (option: T[]) => void
  maxView?: number
  maxValueLength?: number
}

export interface SelectWrapperProps extends StyledInputWrapperProps {}

export interface SelectStyledInputProps extends StyledInputProps {}

export interface SelectStyledOptionProps extends StyledInputProps {
  $isSelectedItem?: boolean
  $isCheckboxProps?: boolean
}
