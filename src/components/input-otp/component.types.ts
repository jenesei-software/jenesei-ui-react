import { FocusEventHandler } from 'react'

import { AddDollarSign } from '@local/types'

import { InputProps } from '../input/component.types'

export type InputOTPProps = {
  length: number
  onComplete?: (otp: string) => void
  onBlur?: FocusEventHandler<HTMLDivElement>
} & Pick<InputProps, 'size' | 'genre' | 'id' | 'width' | 'isError' | 'errorMessage' | 'isErrorAbsolute' | 'onChange'>

export type InputOTPWrapperProps = AddDollarSign<Pick<InputOTPProps, 'size' | 'width' | 'isError'>>
