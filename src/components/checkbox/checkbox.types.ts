import { PropsWithChildren } from 'react'

import { TLibraryIconCheckboxNameString } from '@components/icon'

import {
  TJeneseiFontFamily,
  TJeneseiThemeGenre,
  TJeneseiThemeSize,
} from '@theme/index'

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean

  genre: TCheckboxGenre

  view: TLibraryIconCheckboxNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  isNotBackground?: boolean

  onChange?: (checked: boolean) => void

  width?: string

  size: TJeneseiThemeSize

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number
}

export interface StyledCheckboxProps {
  $checked?: CheckboxProps['checked']

  $genre: CheckboxProps['genre']

  $view?: CheckboxProps['view']

  $width?: CheckboxProps['width']

  $size: CheckboxProps['size']

  $isDisabled?: CheckboxProps['isDisabled']

  $isNotBackground?: CheckboxProps['isNotBackground']

  $isHiddenBorder?: CheckboxProps['isHiddenBorder']

  $customFontFamily?: CheckboxProps['customFontFamily']

  $customFontSize?: CheckboxProps['customFontSize']

  $customFontWeight?: CheckboxProps['customFontWeight']
}

export type TCheckboxGenre = keyof TJeneseiThemeGenre

export interface StyledIconProps {
  $genre: CheckboxProps['genre']
  $checked?: CheckboxProps['checked']
}
