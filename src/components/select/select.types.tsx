import { GroupBase, Props } from 'react-select'

import {
  TCheckboxGenre,
  TCheckboxGenreView,
  TJeneseiThemeGenre,
  TJeneseiThemeSize,
} from '../../main'

export type TSelectGenre = keyof TJeneseiThemeGenre

export type InputSelectOptionType = {
  value: string | number
  label?: string
  content?: React.ReactNode
  isIconHidden?: boolean
  isContentHidden?: boolean
  isDisabled?: boolean
  iconGenre: TCheckboxGenre
  iconView: TCheckboxGenreView
  iconSize: TJeneseiThemeSize
}

export type CustomSelectProps = {
  size: TJeneseiThemeSize
  genre: TSelectGenre
  className?: string
  background?: string
  color?: string
  isSearchable?: boolean
  isOnlyDefaultValue?: boolean
  isMenuIsOpen?: boolean
  isHideIndicatorSeparator?: boolean
  isError?: boolean
  isDisabled?: boolean
  isHideArrow?: boolean
  isCloseMenuOnSelect?: boolean
  isFetching?: boolean
  isCustomPlaceholder?: boolean
  fetchNextPage: () => void
}

export interface WrapperInputSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> extends Props<Option, IsMulti, Group>,
    CustomSelectProps {}

export type InputSelectProps = WrapperInputSelectProps<
  InputSelectOptionType,
  boolean,
  GroupBase<InputSelectOptionType>
>

export interface StyledSelectWrapperProps {
  $genre: CustomSelectProps['genre']
  $isHideArrow?: CustomSelectProps['isHideArrow']
  $isError?: CustomSelectProps['isError']
  $isCustomPlaceholder?: CustomSelectProps['isCustomPlaceholder']
  $size: CustomSelectProps['size']
}
