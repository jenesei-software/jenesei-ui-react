import { FocusEventHandler } from 'react'

import {
  InputProps,
  StyledInputProps,
  StyledInputWrapperProps,
  TInputGenre,
} from '@components/input'

import { TJeneseiThemeSize } from '@theme/index'

export interface DateProps {
  name?: string
  id?: string

  size: TJeneseiThemeSize
  genre: TInputGenre
  width?: string
  placeholder?: string

  inputProps: Omit<
    InputProps,
    'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'
  >
  value?: number | null
  onChange: (timestamp: number) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export interface DateWrapperProps extends StyledInputWrapperProps {
  $parentListHeight: number
  $radius: number
  $genre: DateStyledInputProps['$genre']
}

export interface DateStyledInputProps extends StyledInputProps {}

export interface DateStyledOptionProps extends StyledInputProps {
  $isSelectedItem?: boolean
  $isCheckboxProps?: boolean
}

export interface DateStyledListProps {
  $genre: DateStyledInputProps['$genre']
  $size?: DateStyledInputProps['$size']
}

export interface DateDropdownListProps {
  $genre: DateStyledInputProps['$genre']
  $size?: DateStyledInputProps['$size']
}
