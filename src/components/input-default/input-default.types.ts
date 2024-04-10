import { FocusEventHandler, HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { IJeneseiTheme } from '../../main'

export interface InputDefaultProps {
  className?: string

  defaultValue?: string

  errorMessage?: string

  genre: TInputGenre

  color: TInputColor

  size: TInputSize

  isDisabled?: boolean

  isError?: boolean

  isFocus?: boolean

  isOnlyText?: boolean

  isReadOnly?: boolean

  isRequired?: boolean

  maxLength?: number

  minLength?: number

  onBlur?: FocusEventHandler<HTMLInputElement>

  onChange?: (value: string) => void

  onFocus?: FocusEventHandler<HTMLInputElement>

  placeholder?: string

  postfixChildren?: InputDefaultChildrenProps

  prefixChildren?: InputDefaultChildrenProps

  register?: UseFormRegisterReturn

  type?: HTMLInputTypeAttribute

  value?: string
}

export interface InputDefaultChildrenProps {
  children: React.ReactNode

  left: string

  right: string

  width: string
}

export type TInputGenre = 'primary' | 'secondary'

export type TInputSize = 'large' | 'medium'

export type TInputColor = keyof IJeneseiTheme['colors']['button']

export interface StyledInputDefaultProps {
  $genre: InputDefaultProps['genre']

  $size: InputDefaultProps['size']

  $color: InputDefaultProps['color']

  $isError?: InputDefaultProps['isError']

  $isFocus?: InputDefaultProps['isFocus']

  $isOnlyText?: InputDefaultProps['isOnlyText']

  $postfixChildren?: InputDefaultChildrenProps

  $prefixChildren?: InputDefaultChildrenProps
}
