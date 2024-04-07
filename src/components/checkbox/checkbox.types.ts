import { IJeneseiTheme } from '../../main'

export interface CheckboxProps {
  checked?: boolean

  color?: CheckboxColorType

  content?: React.ReactNode

  genre?: CheckboxGenreType

  onChange?: (checked: boolean) => void

  width?: string

  size?: CheckboxSizeType
}

export interface StyledCheckboxProps {
  $checked?: CheckboxProps['checked']

  $color?: CheckboxProps['color']

  $width?: CheckboxProps['width']

  $size?: CheckboxProps['size']
}

export type CheckboxSizeType = 'large' | 'medium'

export type CheckboxGenreType = 'square' | 'circle'

export type CheckboxColorType = keyof IJeneseiTheme['colors']['checkbox']
