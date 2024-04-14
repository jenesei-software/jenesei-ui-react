import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../main'

export interface CheckboxProps {
  checked?: boolean

  genre: CheckboxGenre

  children?: React.ReactNode

  view: CheckboxGenreView

  genreType: CheckboxGenreType

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  onChange?: (checked: boolean) => void

  width?: string

  size?: TJeneseiThemeSize
}

export interface StyledCheckboxProps {
  $checked?: CheckboxProps['checked']

  $genre: CheckboxProps['genre']

  $view?: CheckboxProps['view']

  $genreType: CheckboxProps['genreType']

  $width?: CheckboxProps['width']

  $size?: CheckboxProps['size']

  $isDisabled?: CheckboxProps['isDisabled']

  $isHiddenBorder?: CheckboxProps['isHiddenBorder']
}

export type CheckboxGenreView = 'square' | 'circle'

export type CheckboxGenre = keyof TJeneseiThemeGenre

export type CheckboxGenreType = keyof TJeneseiThemeGenreType
