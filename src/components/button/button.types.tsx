import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
  TLibraryIconNameString,
} from '../../main'

export interface ButtonProps {
  className?: string

  genre: TButtonGenre

  genreType: TButtonGenreType

  children?: React.ReactNode

  size: TJeneseiThemeSize

  icon?: TLibraryIconNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isActive?: boolean

  onClick?: () => void

  type?: 'button' | 'submit' | 'reset'

  width?: string
}

export type TButtonGenre = keyof TJeneseiThemeGenre

export type TButtonGenreType = keyof TJeneseiThemeGenreType

export interface StyledButtonProps {
  $genreType: ButtonProps['genreType']

  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $isActive?: ButtonProps['isActive']

  $width?: ButtonProps['width']

  $size: ButtonProps['size']
}
