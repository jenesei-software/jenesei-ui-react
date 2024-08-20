import { TLibraryIconCurvedNameString } from '@assets/library-icon-curved'

import { FlexStylesProps } from '@components/flex'

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

  iconPosition?: TButtonIconPosition

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isRadius?:boolean

  isLoading?: boolean

  loadingPosition?: TButtonIconPosition

  isHiddenBorder?: boolean

  isPlaystationEffect?:boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string | 'asHeight'

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  isFullSize?: boolean

  $styles?: FlexStylesProps
}

export type TButtonGenre = keyof TJeneseiThemeGenre
export type TButtonIconPosition = 'right' | 'left'

export interface StyledButtonProps extends FlexStylesProps {
  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isHidden?: ButtonProps['isHidden']

  $isRadius?: ButtonProps['isRadius']

  $isHiddenBorder?: ButtonProps['isHiddenBorder']
  
  $isPlaystationEffect?:ButtonProps['isPlaystationEffect']
  
  $width?: ButtonProps['width']

  $size: ButtonProps['size']

  $customFontFamily?: ButtonProps['customFontFamily']

  $customFontSize?: ButtonProps['customFontSize']

  $customFontWeight?: ButtonProps['customFontWeight']

  $isFullSize?: ButtonProps['isFullSize']
}
