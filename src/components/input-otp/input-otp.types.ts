import { InputProps } from '../input/input.types'

export type InputOTPProps = {
  length: number
  onComplete: (otp: string) => void
} & Pick<InputProps, 'size' | 'genre'>
