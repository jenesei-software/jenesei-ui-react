import { FocusEventHandler, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, PropsWithChildren } from 'react'

import { TJeneseiThemeGenreInput, TJeneseiThemeSize } from '@theme/index'

export interface InputProps {
  name?: string

  id?: string

  className?: string

  defaultValue?: string

  errorMessage?: string

  isErrorAbsolute?: boolean

  autocomplete?: HTMLInputAutoCompleteAttribute

  isAllowEmptyFormatting?: boolean

  genre: TInputGenre

  size: TJeneseiThemeSize

  width?: string

  isDisabled?: boolean

  isError?: boolean

  isLoading?: boolean

  isReadOnly?: boolean

  isInputEffect?: boolean

  isRequired?: boolean

  isCustomIcon?: boolean

  onBlur?: FocusEventHandler<HTMLInputElement>

  onChange?: (value: string) => void

  onFocus?: FocusEventHandler<HTMLInputElement>

  placeholder?: string

  isBold?: boolean

  postfixChildren?: InputChildrenProps

  prefixChildren?: InputChildrenProps

  type?: HTMLInputTypeAttribute

  value?: string | null

  format?: string

  formatType?: 'text' | 'tel' | 'password'

  mask?: string | string[]
}

export interface InputChildrenProps extends PropsWithChildren {
  left: string

  right: string

  width: string
}

export interface StyledInputChildrenProps {
  $left: InputChildrenProps['left']

  $right: InputChildrenProps['right']

  $width: InputChildrenProps['width']

  $isDisabled?: InputProps['isDisabled']
}

export type TInputGenre = keyof TJeneseiThemeGenreInput

export interface StyledInputProps {
  $genre: InputProps['genre']

  $size: InputProps['size']

  $isError?: InputProps['isError']

  $isLoading?: InputProps['isLoading']

  $isInputEffect?: InputProps['isInputEffect']

  $isDisabled?: InputProps['isDisabled']

  $postfixChildren?: InputChildrenProps

  $prefixChildren?: InputChildrenProps

  $isBold?: InputProps['isBold']

  $isCustomIcon?: InputProps['isCustomIcon']
}

export interface StyledInputWrapperProps {
  $isDisabled?: InputProps['isDisabled']
  $isInputEffect?: InputProps['isInputEffect']
  $width?: InputProps['width']
}

export interface InputErrorMessageProps {
  $isErrorAbsolute?: InputProps['isErrorAbsolute']
  $width?: InputProps['width']
  $size: InputProps['size']
}
