import { FocusEventHandler } from 'react'

import { InputProps, StyledInputProps, StyledInputWrapperProps } from '@components/input'

import { TJeneseiThemeGenreDate, TJeneseiThemeSize } from '@theme/index'

export type TDateGenre = keyof TJeneseiThemeGenreDate

export interface DateDayProps {
  value: number

  labelString: string
  labelNumber: number

  dayOfWeek: number
  weekOfMonth: number

  isWeekend: boolean
  isToday: boolean
  isCurrentMonth: boolean
  isDisabled: boolean
}
export interface DateProps {
  name?: string
  id?: string

  startDate?: number
  endDate?: number

  size: TJeneseiThemeSize
  genre: TDateGenre
  width?: string
  placeholder?: string

  isOnClickClose?: boolean
  isInputEffect?: InputProps['isInputEffect']
  inputProps: Omit<
    InputProps,
    'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width' | 'value' | 'isInputEffect'
  >

  value?: number | null

  isDisabled?: boolean

  onChange: (timestamp: number) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export interface DateWrapperProps extends StyledInputWrapperProps {
  $parentListHeight: number
  $radius: number
  $genre: DateStyledInputProps['$genre']
  $isDisabled: DateStyledInputProps['$isDisabled']
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
  $isInputEffect?: DateProps['isInputEffect']
}

export interface DateDropdownDayProps {
  $row: number
  $column: number
  $genre: DateStyledInputProps['$genre']
  $size?: DateStyledInputProps['$size']
  $isToday?: DateDayProps['isToday']
  $isWeekend?: DateDayProps['isWeekend']
  $isChoice?: boolean
  $isCurrentMonth?: boolean
}
