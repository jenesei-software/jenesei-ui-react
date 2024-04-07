import { IJeneseiTheme, LibraryIconNameString } from '../../main'

export interface ButtonProps {
  className?: string

  color?: ButtonColorType

  content?: React.ReactNode

  genre?: ButtonGenreType

  size?: ButtonSizeType

  icon?: LibraryIconNameString

  isDisabled?: boolean

  isHidden?: boolean

  isLoading?: boolean

  onClick?: () => void

  type?: 'button' | 'submit' | 'reset'

  width?: string
}

export type ButtonGenreType = 'primary' | 'secondary'

export type ButtonSizeType = 'large' | 'medium'

export type ButtonColorType = keyof IJeneseiTheme['colors']['button']

export interface StyledButtonProps {
  $color?: ButtonProps['color']

  $genre?: ButtonProps['genre']

  $isHidden?: ButtonProps['isHidden']

  $width?: ButtonProps['width']

  $size?: ButtonProps['size']
}
