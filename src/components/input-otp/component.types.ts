import { FocusEventHandler } from 'react'

import { AddDollarSign } from '@local/types'

import { InputStandardProps } from '../input/component.types'

export type InputOTPProps = {
  length: number
  onComplete?: (otp: string) => void
  onBlur?: FocusEventHandler<HTMLDivElement>
} & Pick<InputStandardProps, 'size' | 'genre' | 'id' | 'sx' | 'error' | 'onChange'>

export type InputOTPWrapperProps = AddDollarSign<Pick<InputOTPProps, 'size' | 'sx' | 'error'>>
