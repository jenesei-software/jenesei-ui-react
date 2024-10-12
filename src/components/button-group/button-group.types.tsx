import { AddDollarSign } from 'src/types'

import { ButtonProps } from '@components/button'

export interface ButtonGroupProps {
  value: ButtonProps[]
  className?: string
  position: 'horizontal' | 'vertical'
  width?: ButtonProps['width']
}

export type StyledButtonGroupProps = AddDollarSign<Pick<ButtonGroupProps, 'position'>>
