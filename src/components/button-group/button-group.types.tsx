import { ButtonProps } from "@components/button"

export interface ButtonGroupProps {
  value: ButtonProps[]
  className?: string
  position: 'horizontal' | 'vertical'
  width?: ButtonProps['width']
}

export interface StyledButtonGroupProps {
  $position: ButtonGroupProps['position']
}
