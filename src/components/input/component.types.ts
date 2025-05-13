import {
  ClipboardEventHandler,
  FocusEventHandler,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  PropsWithChildren
} from 'react'
import { NumberFormatValues, NumericFormatProps, PatternFormatProps } from 'react-number-format'

import { addNewErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreInput, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

type InputDefaultProps = addNewErrorProps & {
  name?: string

  id?: string

  className?: string

  defaultValue?: string

  isNotShowHoverStyle?: boolean

  autocomplete?: HTMLInputAutoCompleteAttribute

  isAllowEmptyFormatting?: boolean

  genre: TInputGenre

  size: TJeneseiThemeSize

  tabIndex?: number

  width?: string

  isWidthAsHeight?: boolean

  isDisabled?: boolean

  isLoading?: boolean

  isReadOnly?: boolean

  isInputEffect?: boolean

  isRequired?: boolean

  isNoSpaces?: boolean

  onBlur?: FocusEventHandler<HTMLInputElement>

  onPaste?: ClipboardEventHandler<HTMLInputElement>

  onFocus?: FocusEventHandler<HTMLInputElement>

  onKeyDown?: KeyboardEventHandler<HTMLInputElement>

  placeholder?: string

  isBold?: boolean

  postfixChildren?: InputChildrenProps

  prefixChildren?: InputChildrenProps

  value?: string | null | number

  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

  maxLength?: number
  minLength?: number
}
export type InputStandardProps = InputDefaultProps & {
  variety: 'standard'
  onChange?: (value: string) => void
  type?: HTMLInputTypeAttribute
  min?: number
  max?: number
  step?: number
}
export type InputPatternProps = InputDefaultProps & {
  variety: 'pattern'
  onChange?: (value: NumberFormatValues) => void
  propsPattern: Pick<
    PatternFormatProps,
    'format' | 'mask' | 'allowEmptyFormatting' | 'patternChar' | 'valueIsNumericString' | 'type'
  >
}
export type InputNumericProps = InputDefaultProps & {
  variety: 'numeric'
  onChange?: (value: NumberFormatValues) => void
  propsNumeric: Pick<
    NumericFormatProps,
    | 'allowLeadingZeros'
    | 'thousandSeparator'
    | 'allowNegative'
    | 'allowedDecimalSeparators'
    | 'decimalScale'
    | 'decimalSeparator'
    | 'fixedDecimalScale'
    | 'prefix'
    | 'thousandsGroupStyle'
    | 'isAllowed'
    | 'suffix'
  >
}
export type InputProps = InputStandardProps | InputPatternProps | InputNumericProps

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
    | 'error'
    | 'isLoading'
    | 'isInputEffect'
    | 'isDisabled'
    | 'postfixChildren'
    | 'prefixChildren'
    | 'isBold'
    | 'isNotShowHoverStyle'
  >
>

export type StyledInputWrapperProps = AddDollarSign<
  Pick<InputProps, 'isDisabled' | 'isInputEffect' | 'width' | 'size' | 'isWidthAsHeight'>
>
