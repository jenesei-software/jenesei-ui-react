import { FocusEventHandler, ReactNode } from 'react'

import { CheckboxProps } from '@components/checkbox'
import {
  InputProps,
  StyledInputProps,
  StyledInputWrapperProps,
  TInputGenre,
} from '@components/input'

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

  inputProps: Omit<
    InputProps,
    'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'
  >
  checkboxProps?: Omit<CheckboxProps, 'genre' | 'size'>
  optionProps?: Omit<
    InputProps,
    'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'
  >
  isMulti?: boolean
  isCheckbox?: boolean
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
}

export type SelectCountryProps = Omit<
  SelectProps<ISelectCountryOption>,
  'option' | 'value' | 'onChange'
> & {
  value: string
  onChange: (value: string) => void
  onChangeDialCode: (value: string) => void
}
export interface SelectWrapperProps extends StyledInputWrapperProps {
  $parentListHeight: number
  $radius: number
  $genre: SelectStyledInputProps['$genre']
}

export interface SelectStyledInputProps extends StyledInputProps {}

export interface SelectStyledOptionProps extends StyledInputProps {
  $isSelectedItem?: boolean
  $isCheckboxProps?: boolean
}

export interface SelectStyledListProps {
  $genre: SelectStyledInputProps['$genre']
  $isShowScroll?: boolean
  $isFooter?: boolean
  $size?: SelectStyledInputProps['$size']
}

export interface SelectStyledFooterProps extends StyledInputProps {
  $isErase?: boolean
  $isSelectAll?: boolean
}
