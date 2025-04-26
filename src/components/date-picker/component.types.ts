import { FocusEvent } from 'react'

import { InputProps, StyledInputProps, StyledInputWrapperProps } from '@local/components/input'
import { TJeneseiThemeGenreDate, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

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
export interface DatePickerProps {
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

  value: number | null

  isDisabled?: boolean

  onChange: (timestamp: number) => void
  onFocus?: (event: FocusEvent<HTMLDivElement, Element>) => void
  onBlur?: (event: MouseEvent) => void
}

export type DateWrapperProps = AddDollarSign<
  Pick<InputProps, 'genre' | 'isDisabled'> & {
    parentListHeight: number
    radius: number
  }
> &
  StyledInputWrapperProps

export type DateStyledInputProps = StyledInputProps

export type DateStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  isCheckboxProps?: boolean
}> &
  StyledInputProps

export type DateStyledListProps = AddDollarSign<Pick<InputProps, 'genre' | 'size'>>

export type DateDropdownListProps = AddDollarSign<
  Pick<DatePickerProps, 'isInputEffect'> & Pick<DatePickerProps, 'genre' | 'size'>
>

export type DateDropdownDayProps = AddDollarSign<
  Pick<DatePickerProps, 'genre' | 'size'> &
    Pick<DateDayProps, 'isToday' | 'isWeekend'> & {
      row: number
      column: number
      isChoice?: boolean
      isCurrentMonth?: boolean
    }
>
