import { FocusEventHandler, KeyboardEventHandler, RefObject } from 'react'

import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { IThemeGenreTextArea, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

type BaseTextAreaProps = addErrorProps &
  addSXProps & {
    name?: string
    id?: string
    ref?: RefObject<HTMLTextAreaElement | null>
    className?: string
    defaultValue?: string
    isAllowEmptyFormatting?: boolean
    genre: TTextAreaGenre
    minRows: number
    sizeHeight?: number
    sizePadding?: number
    size: IThemeSize
    isDisabled?: boolean
    isResize?: boolean
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

type AutoHeightTextAreaProps = BaseTextAreaProps & {
  isAutoHeight: true
  maxRows?: number
}

type FixedHeightTextAreaProps = BaseTextAreaProps & {
  isAutoHeight?: false | undefined
  maxRows?: never
}

export type TextAreaProps = AutoHeightTextAreaProps | FixedHeightTextAreaProps

export type TTextAreaGenre = keyof IThemeGenreTextArea

export type StyledTextAreaProps = AddDollarSign<
  Pick<
    TextAreaProps,
    'genre' | 'size' | 'error' | 'isLoading' | 'isTextAreaEffect' | 'isDisabled' | 'isBold' | 'isResize'
  >
>

export type StyledTextAreaWrapperProps = AddDollarSign<Pick<TextAreaProps, 'isDisabled' | 'isTextAreaEffect' | 'sx'>>
