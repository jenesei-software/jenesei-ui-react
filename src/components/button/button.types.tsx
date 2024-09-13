import { LibraryIconItemProps, TLibraryIconCurvedNameString } from '@assets/library-icon'

import { FlexContainerAndItemProps, FlexContainerAndItemPropsNormalized } from '@components/flex'
import { ModalLoadingProps } from '@components/modal-loading'

import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@theme/index'

export interface ButtonProps {
  id?: string

  className?: string

  genre: TButtonGenre

  children?: React.ReactNode

  size: TJeneseiThemeSize

  iconName?: TLibraryIconCurvedNameString

  iconOrder?: LibraryIconItemProps['order']

  iconTurn?: LibraryIconItemProps['turn']

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

  flex?: string

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  isFullSize?: boolean

  customStyles?: FlexContainerAndItemPropsNormalized
}

export type TButtonGenre = keyof TJeneseiThemeGenre

export interface StyledButtonProps extends FlexContainerAndItemProps {
  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isHidden?: ButtonProps['isHidden']

  $isRadius?: ButtonProps['isRadius']

  $isHiddenBorder?: ButtonProps['isHiddenBorder']

  $isPlaystationEffect?: ButtonProps['isPlaystationEffect']

  $width?: ButtonProps['width']

  $flex?: ButtonProps['flex']

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
