import { InputProps, StyledInputProps, StyledInputWrapperProps } from '../input'

export interface ISelectItem {
  label: string | number
  value: string | number
  id: number
}

export interface SelectProps<T extends ISelectItem> {
  inputProps: InputProps
  option: T[]
  value: T[]
  onChange: (option: T[]) => void
}

export interface SelectWrapperProps extends StyledInputWrapperProps {}

export interface SelectStyledInputProps extends StyledInputProps {}
