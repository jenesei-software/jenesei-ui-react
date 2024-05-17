import { FocusEventHandler, HTMLInputTypeAttribute } from 'react'

import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../theme'

export interface InputDefaultProps {
  className?: string

  defaultValue?: string

  errorMessage?: string

  genreType: TInputDefaultGenreType

  genre: TInputDefaultGenre

  size: TJeneseiThemeSize

  width?: string

  isDisabled?: boolean

  isError?: boolean

  isLoading?: boolean

  isActive?: boolean

  isReadOnly?: boolean

  isRequired?: boolean

  onBlur?: FocusEventHandler<HTMLInputElement>

  onChange?: (value: string) => void

  onFocus?: FocusEventHandler<HTMLInputElement>

  placeholder?: string

  isBold?: boolean

  postfixChildren?: InputDefaultChildrenProps

  prefixChildren?: InputDefaultChildrenProps

  type?: HTMLInputTypeAttribute

  value?: string | null

  format?: string

  formatType?: 'text' | 'tel' | 'password'

  mask?: string | string[]
}

export interface InputDefaultChildrenProps {
  children: React.ReactNode

  left: string

  right: string

  width: string
}

export type TInputDefaultGenre = keyof TJeneseiThemeGenre

export type TInputDefaultGenreType = keyof TJeneseiThemeGenreType

export interface StyledInputDefaultProps {
  $genre: InputDefaultProps['genre']

  $genreType: InputDefaultProps['genreType']

  $size: InputDefaultProps['size']

  $isError?: InputDefaultProps['isError']

  $isLoading?: InputDefaultProps['isLoading']

  $isActive?: InputDefaultProps['isActive']

  $postfixChildren?: InputDefaultChildrenProps

  $prefixChildren?: InputDefaultChildrenProps

  $isBold?: InputDefaultProps['isBold']
}

export interface StyledInputDefaultWrapperProps {
  $isDisabled?: InputDefaultProps['isDisabled']

  $width?: InputDefaultProps['width']
}
