import { FocusEvent } from 'react'

import { InputStandardProps, StyledInputProps, StyledInputWrapperProps } from '@local/components/input'
import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { TJeneseiThemeGenreDate, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { SelectDateProps } from '../select'

export type TDateGenre = keyof TJeneseiThemeGenreDate

export interface DateDayProps {
  dayOfWeek: number

  isCurrentMonth: boolean

  isDisabled: boolean

  isToday: boolean

  isWeekend: boolean

  labelNumber: number

  labelString: string

  value: number

  weekOfMonth: number
}
export type DatePickerProps = addErrorProps &
  addSXProps & {
    endDate?: number

    genre: TDateGenre

    id?: string

    inputProps: Omit<
      InputStandardProps,
      'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width' | 'value' | 'isInputEffect' | 'error'
    >

    isDisabled?: boolean

    isInputEffect?: InputStandardProps['isInputEffect']

    isOnClickClose?: boolean

    locale: {
      months: SelectDateProps['monthsLocale']
      weeks: WeekItem[]
      inputs: InputItem
    }

    name?: string

    onBlur?: (event?: MouseEvent) => void

    onChange: (timestamp: number | null) => void

    onFocus?: (event: FocusEvent<HTMLDivElement, Element>) => void

    size: TJeneseiThemeSize

    startDate?: number

    value: number | null
  }

export type DateWrapperProps = AddDollarSign<
  Pick<InputStandardProps, 'genre' | 'isDisabled'> & {
    parentListHeight: number
    radius: number
  }
> &
  StyledInputWrapperProps

export type DateInputProps = AddDollarSign<Pick<DatePickerProps, 'error' | 'genre' | 'size'>>

export type DateStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  isCheckboxProps?: boolean
}> &
  StyledInputProps

export type DateStyledListProps = AddDollarSign<Pick<InputStandardProps, 'genre' | 'size'>>

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

export type MonthItem = {
  localeLong: string

  localeShort: string

  value:
    | 'january'
    | 'february'
    | 'march'
    | 'april'
    | 'may'
    | 'june'
    | 'july'
    | 'august'
    | 'september'
    | 'october'
    | 'november'
    | 'december'
}
export type WeekItem = {
  localeLong: string

  localeShort: string

  value: 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su'
}
export type InputItem = {
  day: string
  month: string
  year: string
}
