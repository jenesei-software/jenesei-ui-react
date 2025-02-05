import { FocusEventHandler, KeyboardEventHandler } from 'react'

import { TJeneseiThemeGenreTextArea, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

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
    'genre' | 'size' | 'isError' | 'isLoading' | 'isTextAreaEffect' | 'isDisabled' | 'isBold' | 'isResize'
  >
>

export type StyledTextAreaWrapperProps = AddDollarSign<Pick<TextAreaProps, 'isDisabled' | 'isTextAreaEffect' | 'width'>>
