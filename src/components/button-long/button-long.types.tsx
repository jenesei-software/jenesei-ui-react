import { IJeneseiTheme, LibraryIconNameString } from '../../main'

export interface ButtonLongProps {
  className?: string

  color?: ButtonLongColorType

  content?: React.ReactNode

  genre?: ButtonLongGenreType

  size?: ButtonLongSizeType

  icon?: LibraryIconNameString

  isDisabled?: boolean

  isHidden?: boolean

  isLoading?: boolean

  onClick?: () => void

  type?: 'button' | 'submit' | 'reset'

  width?: string
}

export type ButtonLongGenreType = 'primary' | 'secondary'

export type ButtonLongSizeType = 'large' | 'medium'

export type ButtonLongColorType = keyof IJeneseiTheme['colors']['button']

export interface StyledButtonLongProps {
  $color?: ButtonLongProps['color']

  $genre?: ButtonLongProps['genre']

  $isHidden?: ButtonLongProps['isHidden']

  $width?: ButtonLongProps['width']

  $size?: ButtonLongProps['size']
}
