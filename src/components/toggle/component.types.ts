import { addErrorProps, addErrorStylesProps } from '@local/styles/error'
import { TJeneseiThemeGenreToggle, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type ToggleProps = {
  value: boolean
  onChange?: (checked: boolean) => void
  isDisabled?: boolean
  genre: TToggleGenre
  size: TJeneseiThemeSize
} & addErrorProps

export type TToggleGenre = keyof TJeneseiThemeGenreToggle

export type StyledToggleProps = AddDollarSign<Pick<ToggleProps, 'genre' | 'isDisabled' | 'value' | 'size'>> &
  addErrorStylesProps
