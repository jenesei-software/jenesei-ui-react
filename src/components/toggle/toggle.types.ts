import { TJeneseiThemeGenre, TJeneseiThemeSize } from '../../theme'

export interface ToggleProps {
  value: boolean
  onChange?: (checked: boolean) => void
  isError?: boolean
  isDisabled?: boolean
  genre: TToggleGenre
  size: TJeneseiThemeSize
}

export type TToggleGenre = keyof TJeneseiThemeGenre

export interface StyledToggleProps {
  $genre: ToggleProps['genre']

  $isDisabled?: ToggleProps['isDisabled']

  $value: ToggleProps['value']

  $size: ToggleProps['size']
}
