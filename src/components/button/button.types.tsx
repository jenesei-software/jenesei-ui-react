import { TLibraryIconNameString } from '../../main'
import {
  TJeneseiFontFamily,
  TJeneseiThemeGenre,
  TJeneseiThemeSize,
} from '../../theme'

export interface ButtonProps {
  className?: string

  genre: TButtonGenre

  children?: React.ReactNode

  size: TJeneseiThemeSize

  icon?: TLibraryIconNameString

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isActive?: boolean

  isHiddenBorder?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number
}

export type TButtonGenre = keyof TJeneseiThemeGenre

export interface StyledButtonProps {
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
}
