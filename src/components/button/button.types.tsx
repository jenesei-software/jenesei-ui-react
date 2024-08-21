import {
  LibraryIconCurvedItemProps,
  TLibraryIconCurvedNameString,
} from '@assets/library-icon-curved'

import { FlexStylesNormalizedProps, FlexStylesProps } from '@components/flex'
import { ModalLoadingProps } from '@components/modal-loading'

import {
  TJeneseiFontFamily,
  TJeneseiThemeGenre,
  TJeneseiThemeSize,
} from '@theme/index'

export interface ButtonProps {
  className?: string

  genre: TButtonGenre

  children?: React.ReactNode

  size: TJeneseiThemeSize

  icon?: TLibraryIconCurvedNameString

  iconOrder?: LibraryIconCurvedItemProps['order']

  iconTurn?: LibraryIconCurvedItemProps['turn']

  iconGroupOrder?: number

  isIconGroup?: boolean

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isOnlyLoadingWithGroup?: boolean

  isRadius?: boolean

  isLoading?: boolean

  loadingOrder?: ModalLoadingProps['order']

  isHiddenBorder?: boolean

  isPlaystationEffect?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string | 'asHeight'

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  isFullSize?: boolean

  customStyles?: FlexStylesNormalizedProps
}

export type TButtonGenre = keyof TJeneseiThemeGenre

export interface StyledButtonProps extends FlexStylesProps {
  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isHidden?: ButtonProps['isHidden']

  $isRadius?: ButtonProps['isRadius']

  $isHiddenBorder?: ButtonProps['isHiddenBorder']

  $isPlaystationEffect?: ButtonProps['isPlaystationEffect']

  $width?: ButtonProps['width']

  $size: ButtonProps['size']

  $customFontFamily?: ButtonProps['customFontFamily']

  $customFontSize?: ButtonProps['customFontSize']

  $customFontWeight?: ButtonProps['customFontWeight']

  $isFullSize?: ButtonProps['isFullSize']
}

export interface StyledButtonIconsWrapperProps {
  $isIconGroup?: ButtonProps['isIconGroup']
  $size: ButtonProps['size']
  $iconGroupOrder?: ButtonProps['iconGroupOrder']
}
