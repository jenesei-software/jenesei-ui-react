import {
  TJeneseiThemeGenre,
  TJeneseiThemeGenreType,
  TJeneseiThemeSize,
} from '../../main'

export interface CheckboxProps {
  checked?: boolean

  genre: TCheckboxGenre

  children?: React.ReactNode

  view: TCheckboxGenreView

  genreType: TCheckboxGenreType

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

export type TCheckboxGenreView = 'square' | 'circle'

export type TCheckboxGenre = keyof TJeneseiThemeGenre

export type TCheckboxGenreType = keyof TJeneseiThemeGenreType
