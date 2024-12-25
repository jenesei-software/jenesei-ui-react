import { FocusEventHandler, ReactNode } from 'react'

import { InputProps, StyledInputProps, StyledInputWrapperProps } from '@local/components/input'
import { TJeneseiThemeGenreSelect, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type TInputSelect = keyof TJeneseiThemeGenreSelect

export interface ISelectItem {
  label: string | number | ReactNode
  value: string | number
  [key: string]: unknown
}

export interface SelectProps<T extends ISelectItem> {
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
  inputProps?: Omit<InputProps, 'isDisabled' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'>
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
  onChange: (props: {
    countryCode: string
    countryDialCode: string
    lengthNumberWithoutCountryDialCode: number
  }) => void
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
  startDate?: number
  endDate?: number
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

export type SelectStyledInputProps = StyledInputProps

export type SelectStyledOptionProps = AddDollarSign<{
  isSelectedItem?: boolean
  checked?: boolean
}> &
  StyledInputProps

export type DropdownOptionIconProps = AddDollarSign<{ checked?: boolean; genre: TInputSelect; size: TJeneseiThemeSize }>

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
