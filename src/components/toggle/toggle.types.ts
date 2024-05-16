import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../main'

export interface ToggleProps {
  value: boolean
  onChange?: (checked: boolean) => void
  isError?: boolean
  isDisabled?: boolean
  genre: TToggleGenre
  genreType: TToggleGenreType
  size: TJeneseiThemeSize
}

export type TToggleGenre = keyof TJeneseiThemeGenre

export type TToggleGenreType = keyof TJeneseiThemeGenreType

export interface StyledToggleProps {
  $genre: ToggleProps['genre']

  $genreType: ToggleProps['genreType']

  $isDisabled?: ToggleProps['isDisabled']

  $value: ToggleProps['value']

  $size: ToggleProps['size']
}
