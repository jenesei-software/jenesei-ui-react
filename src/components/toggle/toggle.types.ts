import { TJeneseiThemeGenreToggle, TJeneseiThemeSize } from '@theme/index'

export interface ToggleProps {
  value: boolean
  onChange?: (checked: boolean) => void
  isDisabled?: boolean
  genre: TToggleGenre
  size: TJeneseiThemeSize
  isError?: boolean
}

export type TToggleGenre = keyof TJeneseiThemeGenreToggle

export interface StyledToggleProps {
  $genre: ToggleProps['genre']

  $isDisabled?: ToggleProps['isDisabled']

  $isError?: ToggleProps['isError']

  $value: ToggleProps['value']

  $size: ToggleProps['size']
}
