import { AddDollarSign } from '@local/types'

import { InputProps } from '../input/component.types'

export type InputOTPProps = {
  length: number
  onComplete: (otp: string) => void
} & Pick<InputProps, 'size' | 'genre'>

export type InputOTPWrapperProps = AddDollarSign<Pick<InputOTPProps, 'size'>>
