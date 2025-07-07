import { FocusEventHandler, KeyboardEventHandler, RefObject } from 'react'

import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { IThemeGenreTextArea, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type TextAreaProps = addErrorProps &
  addSXProps & {
    name?: string

    id?: string

    ref?: RefObject<HTMLTextAreaElement | null>

    className?: string

    defaultValue?: string

    isAllowEmptyFormatting?: boolean

    genre: TTextAreaGenre

    height?: number

    sizeHeight?: number

    sizePadding?: number

    maxRows?: number

    size: IThemeSize

    isDisabled?: boolean

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

export type TTextAreaGenre = keyof IThemeGenreTextArea

export type StyledTextAreaProps = AddDollarSign<
  Pick<
    TextAreaProps,
    'genre' | 'size' | 'error' | 'isLoading' | 'isTextAreaEffect' | 'isDisabled' | 'isBold' | 'isResize'
  >
>

export type StyledTextAreaWrapperProps = AddDollarSign<Pick<TextAreaProps, 'isDisabled' | 'isTextAreaEffect' | 'sx'>>
