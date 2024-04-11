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

  width?: string

  isDisabled?: boolean

  isError?: boolean

  isLoading?: boolean

  isFocus?: boolean

  isReadOnly?: boolean

  isRequired?: boolean

  isHidden?: boolean

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

export type TInputColor = keyof IJeneseiTheme['colors']['input']

export interface StyledInputDefaultProps {
  $genre: InputDefaultProps['genre']

  $size: InputDefaultProps['size']

  $color: InputDefaultProps['color']

  $isError?: InputDefaultProps['isError']

  $isLoading?: InputDefaultProps['isLoading']

  $isFocus?: InputDefaultProps['isFocus']

  $postfixChildren?: InputDefaultChildrenProps

  $prefixChildren?: InputDefaultChildrenProps
}

export interface StyledInputDefaultWrapperProps {
  $isHidden?: InputDefaultProps['isHidden']

  $width?: InputDefaultProps['width']
}
