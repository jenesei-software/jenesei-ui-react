import { TJeneseiThemeGenreToggle, TJeneseiThemeSize } from '@theme/index'

export interface ToggleProps {
  value: boolean
  onChange?: (checked: boolean) => void
  isDisabled?: boolean
  genre: TToggleGenre
  size: TJeneseiThemeSize
}

export type TToggleGenre = keyof TJeneseiThemeGenreToggle

export interface StyledToggleProps {
  $genre: ToggleProps['genre']

  $isDisabled?: ToggleProps['isDisabled']

  $value: ToggleProps['value']

  $size: ToggleProps['size']
}
