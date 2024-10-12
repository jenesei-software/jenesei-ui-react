import { FocusEventHandler, ReactNode } from 'react'
import { AddDollarSign } from 'src/types'

import { CheckboxProps } from '@components/checkbox'
import { InputProps, StyledInputProps, StyledInputWrapperProps, TInputGenre } from '@components/input'

import { TJeneseiThemeSize } from '@theme/index'

export interface ISelectItem {
  label: string | number | ReactNode
  value: string | number
  [key: string]: unknown
}

export interface SelectProps<T extends ISelectItem> {
  name?: string
  id?: string

  size: TJeneseiThemeSize
  genre: TInputGenre
  width?: string
  placeholder?: string
  isDisabled?: boolean
  isOnClickOptionClose?: boolean
  inputProps?: Omit<InputProps, 'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'>
  checkboxProps?: Omit<CheckboxProps, 'genre' | 'size'>
  optionProps?: Omit<InputProps, 'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'>
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

export interface ISelectCountryOption extends ISelectItem {
  search?: string
  dialCode: string
  placeholder: string
  lengthNumberWithoutCountryDialCode: number
}

export type SelectCountryProps = Omit<SelectProps<ISelectCountryOption>, 'option' | 'value' | 'onChange'> & {
  value: string
  onChange: (countryCode: string, countryDialCode: string, lengthNumberWithoutCountryDialCode: number) => void
}

export interface ISelectLanguageOption extends ISelectItem {
  search?: string
  placeholder: string
}

export type SelectLanguageProps = Omit<SelectProps<ISelectCountryOption>, 'option' | 'value' | 'onChange'> & {
  value: string
  onChange: (language: string) => void
}

export type SelectDateProps = Omit<SelectProps<ISelectCountryOption>, 'option' | 'value' | 'onChange'> & {
  value: number
  onChange: (timestamp: number) => void
  lang: 'ru' | 'en'
}

export type SelectYearProps = SelectDateProps & {
  startDate?: number
  endDate?: number
  sortOrder?: 'asc' | 'desc'
}

export type SelectWrapperProps = AddDollarSign<
  Pick<InputProps, 'genre'> & { parentListHeight: number; radius: number }
> &
  StyledInputWrapperProps

export interface SelectStyledInputProps extends StyledInputProps {}

export type SelectStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  isCheckboxProps?: boolean
}> &
  StyledInputProps

export type SelectStyledListProps = AddDollarSign<
  Pick<InputProps, 'genre' | 'size'> & {
    isShowScroll?: boolean
    isFooter?: boolean
  }
>

export type SelectStyledFooterProps = StyledInputProps &
  AddDollarSign<{
    isErase?: boolean
    isSelectAll?: boolean
  }>
