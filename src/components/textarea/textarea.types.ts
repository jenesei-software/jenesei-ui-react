import { FocusEventHandler, KeyboardEventHandler, PropsWithChildren } from 'react'
import { AddDollarSign } from 'src/types'

import { TJeneseiThemeGenreTextArea, TJeneseiThemeSize } from '@theme/index'

export interface TextAreaProps {
  name?: string

  id?: string

  className?: string

  defaultValue?: string

  errorMessage?: string

  isErrorAbsolute?: boolean

  isAllowEmptyFormatting?: boolean

  genre: TTextAreaGenre

  height?: number

  maxRows?: number

  size: TJeneseiThemeSize

  width?: string

  isDisabled?: boolean

  isError?: boolean

  isResize?: boolean

  isAutoHeight?: boolean

  isLoading?: boolean

  isReadOnly?: boolean

  isTextAreaEffect?: boolean

  isRequired?: boolean

  isCustomIcon?: boolean

  isNoSpaces?: boolean

  onBlur?: FocusEventHandler<HTMLTextAreaElement>

  onChange?: (value: string) => void

  onFocus?: FocusEventHandler<HTMLTextAreaElement>

  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>

  placeholder?: string

  isBold?: boolean

  value?: string | null
}

export type TTextAreaGenre = keyof TJeneseiThemeGenreTextArea

export type StyledTextAreaProps = AddDollarSign<
  Pick<
    TextAreaProps,
    | 'genre'
    | 'size'
    | 'isError'
    | 'isLoading'
    | 'isTextAreaEffect'
    | 'isDisabled'
    | 'isBold'
    | 'isCustomIcon'
    | 'isResize'
  >
>

export type StyledTextAreaWrapperProps = AddDollarSign<Pick<TextAreaProps, 'isDisabled' | 'isTextAreaEffect' | 'width'>>

export type TextAreaErrorMessageProps = AddDollarSign<Pick<TextAreaProps, 'isErrorAbsolute' | 'width' | 'size'>>
