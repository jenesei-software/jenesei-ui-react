import { FocusEventHandler } from 'react'
import { AddDollarSign } from 'src/types'

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

  value: number | null

  isDisabled?: boolean

  onChange: (timestamp: number) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export type DateWrapperProps = AddDollarSign<
  Pick<InputProps, 'genre' | 'isDisabled'> & {
    parentListHeight: number
    radius: number
  }
> &
  StyledInputWrapperProps

export interface DateStyledInputProps extends StyledInputProps {}

export type DateStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  isCheckboxProps?: boolean
}> &
  StyledInputProps

export type DateStyledListProps = AddDollarSign<Pick<InputProps, 'genre' | 'size'>>

export type DateDropdownListProps = AddDollarSign<Pick<DateProps, 'isInputEffect'> & Pick<InputProps, 'genre' | 'size'>>

export type DateDropdownDayProps = AddDollarSign<
  Pick<InputProps, 'genre' | 'size'> &
    Pick<DateDayProps, 'isToday' | 'isWeekend'> & {
      row: number
      column: number
      isChoice?: boolean
      isCurrentMonth?: boolean
    }
>
