import { TJeneseiThemeGenreToggle, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface ToggleProps {
  value: boolean
  onChange?: (checked: boolean) => void
  isDisabled?: boolean
  genre: TToggleGenre
  size: TJeneseiThemeSize
  isError?: boolean
}

export type TToggleGenre = keyof TJeneseiThemeGenreToggle

export type StyledToggleProps = AddDollarSign<Pick<ToggleProps, 'genre' | 'isDisabled' | 'isError' | 'value' | 'size'>>
