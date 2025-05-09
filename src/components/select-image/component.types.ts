import { TJeneseiThemeGenreSelectImage, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { InputProps } from '../input/component.types'

export type TSelectImageGenre = keyof TJeneseiThemeGenreSelectImage

export type SelectImageItemProps = {
  url?: string
  file?: File
  id: number
  index: number
  name?: string
  isNew?: boolean
}
export type SelectImageProps = {
  genre: TSelectImageGenre
  size: TJeneseiThemeSize
  id?: string
  width?: string | 'asHeight'
  onChange?: (images: SelectImageItemProps[]) => void
  images: SelectImageItemProps[]
} & Pick<InputProps, 'isError' | 'errorMessage' | 'isErrorAbsolute'>

export type SelectImageWrapperProps = AddDollarSign<Pick<SelectImageProps, 'size' | 'width' | 'isError'>>
