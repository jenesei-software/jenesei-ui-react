import { TJeneseiThemeSize } from '../../theme'
import { CheckboxProps } from '../checkbox'
import {
  InputProps,
  StyledInputProps,
  StyledInputWrapperProps,
  TInputGenre,
} from '../input'

export interface ISelectItem {
  label: string | number
  value: string | number
}

export interface SelectProps<T extends ISelectItem> {
  size: TJeneseiThemeSize
  genre: TInputGenre
  width?: string

  inputProps: InputProps
  checkboxProps: CheckboxProps
  optionProps: InputProps

  option: T[]
  value: T[]
  onChange: (option: T[]) => void
  maxView?: number
  minView?: number
  maxValueLength?: number
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

export interface SelectWrapperProps extends StyledInputWrapperProps {}

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
