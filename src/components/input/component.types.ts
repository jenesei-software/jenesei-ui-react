import {
  ClipboardEventHandler,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  PropsWithChildren
} from 'react'

import { TJeneseiThemeGenreInput, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface InputProps {
  name?: string

  id?: string

  className?: string

  defaultValue?: string

  errorMessage?: string

  isError?: boolean

  isNotShowHoverStyle?: boolean

  isErrorAbsolute?: boolean

  autocomplete?: HTMLInputAutoCompleteAttribute

  isAllowEmptyFormatting?: boolean

  genre: TInputGenre

  size: TJeneseiThemeSize

  tabIndex?: number

  width?: string | 'asHeight'

  isDisabled?: boolean

  isLoading?: boolean

  isReadOnly?: boolean

  isInputEffect?: boolean

  isRequired?: boolean

  isNoSpaces?: boolean

  onBlur?: FocusEventHandler<HTMLInputElement>

  onChange?: (value: string) => void

  onPaste?: ClipboardEventHandler<HTMLInputElement>

  onFocus?: FocusEventHandler<HTMLInputElement>

  onKeyDown?: KeyboardEventHandler<HTMLInputElement>

  placeholder?: string

  isBold?: boolean

  postfixChildren?: InputChildrenProps

  prefixChildren?: InputChildrenProps

  type?: HTMLInputTypeAttribute

  value?: string | null

  format?: string

  formatType?: 'text' | 'tel' | 'password'

  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

  maxLength?: number
  minLength?: number

  mask?: string | string[]
}

export interface InputChildrenProps extends PropsWithChildren {
  left: string

  right: string

  width: string
}

export type StyledInputChildrenProps = AddDollarSign<
  Pick<InputProps, 'isDisabled'> & Pick<InputChildrenProps, 'left' | 'right' | 'width'>
>

export type TInputGenre = keyof TJeneseiThemeGenreInput

export type StyledInputProps = AddDollarSign<
  Pick<
    InputProps,
    | 'genre'
    | 'size'
    | 'isError'
    | 'isLoading'
    | 'isInputEffect'
    | 'isDisabled'
    | 'postfixChildren'
    | 'prefixChildren'
    | 'isBold'
    | 'isNotShowHoverStyle'
  >
>

export type StyledInputWrapperProps = AddDollarSign<Pick<InputProps, 'isDisabled' | 'isInputEffect' | 'width' | 'size'>>
