import { TLibraryIconNameString } from '../../main'
import {
  TJeneseiFontFamily,
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../theme'

export interface ButtonProps {
  className?: string

  genre: TButtonGenre

  genreType: TButtonGenreType

  children?: React.ReactNode

  size: TJeneseiThemeSize

  icon?: TLibraryIconNameString

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isActive?: boolean

  isRipple?: boolean

  onClick?: () => void

  type?: 'button' | 'submit' | 'reset'

  width?: string

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number
}

export type TButtonGenre = keyof TJeneseiThemeGenre

export type TButtonGenreType = keyof TJeneseiThemeGenreType

export interface StyledButtonProps {
  $genreType: ButtonProps['genreType']

  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isHidden?: ButtonProps['isHidden']

  $isActive?: ButtonProps['isActive']

  $width?: ButtonProps['width']

  $size: ButtonProps['size']

  $customFontFamily?: ButtonProps['customFontFamily']

  $customFontSize?: ButtonProps['customFontSize']

  $customFontWeight?: ButtonProps['customFontWeight']
}
