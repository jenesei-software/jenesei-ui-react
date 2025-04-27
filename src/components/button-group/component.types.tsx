import { ButtonProps } from '@local/components/button'
import { AddDollarSign } from '@local/types'

export interface ButtonGroupProps {
  value: ButtonProps[]
  className?: string
  position: 'horizontal' | 'vertical'
  width?: ButtonProps['width']
}

export type StyledButtonGroupProps = AddDollarSign<Pick<ButtonGroupProps, 'position'>>
