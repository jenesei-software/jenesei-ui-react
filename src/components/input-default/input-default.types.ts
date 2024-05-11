import { FocusEventHandler, HTMLInputTypeAttribute } from 'react'

import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../main'

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

  isFocus?: boolean

  isReadOnly?: boolean

  isRequired?: boolean

  onBlur?: FocusEventHandler<HTMLInputElement>

  onChange?: (value: string) => void

  onFocus?: FocusEventHandler<HTMLInputElement>

  placeholder?: string

  postfixChildren?: InputDefaultChildrenProps

  prefixChildren?: InputDefaultChildrenProps

  type?: HTMLInputTypeAttribute

  value?: string | null

  viewValue?: string | null
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

  $isFocus?: InputDefaultProps['isFocus']

  $postfixChildren?: InputDefaultChildrenProps

  $prefixChildren?: InputDefaultChildrenProps
}

export interface StyledInputDefaultWrapperProps {
  $isDisabled?: InputDefaultProps['isDisabled']

  $width?: InputDefaultProps['width']
}
