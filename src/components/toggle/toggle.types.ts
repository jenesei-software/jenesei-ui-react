import { AddDollarSign } from 'src/types'

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

export type StyledToggleProps = AddDollarSign<Pick<ToggleProps, 'genre' | 'isDisabled' | 'isError' | 'value' | 'size'>>
