import { FlexStylesProps, TLibraryIconNameString } from '../../main'
import {
  TJeneseiFontFamily,
  TJeneseiThemeGenre,
  TJeneseiThemeSize,
} from '../../theme'

export interface ButtonProps extends FlexStylesProps{
  className?: string

  genre: TButtonGenre

  children?: React.ReactNode

  size: TJeneseiThemeSize

  icon?: TLibraryIconNameString

  iconPosition?: TButtonIconPosition

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  loadingPosition?: TButtonIconPosition

  isActive?: boolean

  isHiddenBorder?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string | 'asHeight'

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  isFullSize?: boolean
}

export type TButtonGenre = keyof TJeneseiThemeGenre
export type TButtonIconPosition = 'right' | 'left'

export interface StyledButtonProps extends FlexStylesProps{
  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isHidden?: ButtonProps['isHidden']

  $isActive?: ButtonProps['isActive']

  $isHiddenBorder?: ButtonProps['isHiddenBorder']

  $width?: ButtonProps['width']

  $size: ButtonProps['size']

  $customFontFamily?: ButtonProps['customFontFamily']

  $customFontSize?: ButtonProps['customFontSize']

  $customFontWeight?: ButtonProps['customFontWeight']

  $isFullSize?: ButtonProps['isFullSize']
}
