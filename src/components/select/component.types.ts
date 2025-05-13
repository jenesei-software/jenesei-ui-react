import { FocusEventHandler, ReactNode } from 'react'

import { InputStandardProps, StyledInputProps, StyledInputWrapperProps } from '@local/components/input'
import { addNewErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreSelect, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { MonthItem } from '../date-picker'
import { MapTheme } from '../map'

export type TInputSelect = keyof TJeneseiThemeGenreSelect

export interface ISelectItem {
  label: string | number | ReactNode
  value: string | number
  [key: string]: unknown
}

export type SelectProps<T extends ISelectItem> = addNewErrorProps & {
  name?: string
  id?: string

  size: TJeneseiThemeSize
  genre: TInputSelect
  width?: string
  placeholder?: string
  isDisabled?: boolean
  isShowDropdownOptionIcon?: boolean
  isShowSelectInputIcon?: boolean
  isOnClickOptionClose?: boolean

  isEmptyOption?: boolean
  labelEmptyOption?: string

  inputProps?: Omit<
    InputStandardProps,
    'isDisabled' | 'error' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'
  >
  optionProps?: Omit<InputStandardProps, 'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'>
  isMulti?: boolean
  option: T[]
  value: T[]
  onChange: (option: T[]) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  maxView?: number
  minView?: number
  fetchNextPage?: () => void
  getEstimateSize?: (index: number) => number
  isFetching?: boolean
  footer?: {
    erase?: {
      label: string
      onCLick?: () => void
    }
    selectAll?: {
      defaultValue?: boolean
      isPagination?: boolean
      label: string
      onCLick?: () => void
    }
  }
}

export interface ISelectLanguageOption extends ISelectItem {
  search?: string
  placeholder: string
}

export type SelectLanguageProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: string
  onChange: (language: string) => void
}

export interface ISelectMapThemeOption extends ISelectItem {
  search?: string
  placeholder: string
}
export type SelectMapThemeProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: MapTheme
  onChange: (theme: MapTheme | null) => void
}
export type SelectDateProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number
  endDate?: number
  value: number
  onChange: (timestamp: number) => void
  lang: 'ru' | 'en'
  monthsLocale: MonthItem[]
}

export type SelectYearProps = Omit<SelectDateProps, 'monthsLocale'> & {
  startDate?: number
  endDate?: number
  sortOrder?: 'asc' | 'desc'
}

export type SelectWrapperProps = AddDollarSign<
  Pick<InputStandardProps, 'genre'> & { parentListHeight: number; radius: number }
> &
  StyledInputWrapperProps

export type SelectStyledInputProps = StyledInputProps

export type SelectStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  checked?: boolean
}> &
  StyledInputProps

export type DropdownOptionIconProps = AddDollarSign<{
  checked?: boolean
  genre: TInputSelect
  size: TJeneseiThemeSize
}>

export type SelectStyledListProps = AddDollarSign<
  Pick<InputStandardProps, 'genre' | 'size'> & {
    isShowScroll?: boolean
    isFooter?: boolean
  }
>

export type SelectStyledFooterProps = StyledInputProps &
  AddDollarSign<{
    isErase?: boolean
    isSelectAll?: boolean
  }>
