import {
  LibraryIconNameString,
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../main'

export interface ButtonProps {
  className?: string

  genre: ButtonGenre

  genreType: ButtonGenreType

  children?: React.ReactNode

  size?: TJeneseiThemeSize

  icon?: LibraryIconNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  onClick?: () => void

  type?: 'button' | 'submit' | 'reset'

  width?: string
}

export type ButtonGenre = keyof TJeneseiThemeGenre

export type ButtonGenreType = keyof TJeneseiThemeGenreType

export interface StyledButtonProps {
  $genreType: ButtonProps['genreType']

  $genre: ButtonProps['genre']

  $isDisabled?: ButtonProps['isDisabled']

  $width?: ButtonProps['width']

  $size?: ButtonProps['size']
}
