import { InputProps, StyledInputProps, StyledInputWrapperProps } from '../input'

export interface ISelectItem {
  label: string
  value: string
  id: number
}

export interface SelectProps {
  inputProps: InputProps
  option: ISelectItem[]
}

export interface SelectWrapperProps extends StyledInputWrapperProps {}

export interface SelectStyledInputProps extends StyledInputProps {}
