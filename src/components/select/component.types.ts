import { FocusEventHandler, ReactNode } from 'react'

import { addErrorProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { IThemeGenreSelect, IThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { MonthItem } from '../date-picker'
import { MapTheme } from '../map'

export type TInputSelect = keyof IThemeGenreSelect

export interface ISelectItem {
  [key: string]: unknown

  isDisabled?: boolean

  isLoading?: boolean

  label: string | number | ReactNode

  value: string | number
}

export type SelectProps<T extends ISelectItem> = addErrorProps &
  addSXProps & {
    name?: string
    id?: string

    size: IThemeSize
    genre: TInputSelect
    placeholder?: string
    isDisabled?: boolean
    isShowDropdownOptionIcon?: boolean
    isShowSelectInputIcon?: boolean
    isOnClickOptionClose?: boolean
    isNotShowHoverStyle?: boolean
    isCenter?: boolean
    isStayValueAfterSelect?: boolean
    isBold?: boolean
    labelEmptyOption?: string

    // inputProps?: Omit<
    //   InputStandardProps,
    //   'isDisabled' | 'error' | 'name' | 'id' | 'genre' | 'size' | 'placeholder' | 'width'
    // >
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
  }

export interface ISelectLanguageOption extends ISelectItem {
  placeholder: string

  search?: string
}

export type SelectLanguageProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: string
  onChange: (language: string) => void
}

export interface ISelectMapThemeOption extends ISelectItem {
  placeholder: string

  search?: string
}
export type SelectMapThemeProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  value: MapTheme
  onChange: (theme: MapTheme | null) => void
}
export type SelectDateProps = Omit<SelectProps<ISelectItem>, 'option' | 'value' | 'onChange'> & {
  startDate?: number
  endDate?: number
  value: number
  isShortLabel?: boolean
  onChange: (timestamp: number) => void
  monthsLocale: MonthItem[]
}

export type SelectYearProps = Omit<SelectDateProps, 'monthsLocale'> & {
  startDate?: number
  endDate?: number
  sortOrder?: 'asc' | 'desc'
}

export type SelectWrapperProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'sx' | 'size' | 'isNotShowHoverStyle'> & { isOpen: boolean }
>

export type DropdownListOptionProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold'> & {
    item: ISelectItem
    isChecked?: boolean
  }
>

export type DropdownListOptionIconProps = AddDollarSign<
  Pick<SelectProps<ISelectItem>, 'genre' | 'size'> & {
    checked?: boolean
  }
>

export type ContainerDropdownOptionProps<T extends ISelectItem> = Pick<
  SelectProps<T>,
  'genre' | 'size' | 'isCenter' | 'isNotShowHoverStyle' | 'isBold' | 'isShowDropdownOptionIcon'
> & {
  item: T

  isChecked?: boolean

  onClick: () => void

  virtualRowSize: number

  virtualRowStart: number
}
