import { addNewErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreSelectImage, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { InputStandardProps } from '../input/component.types'

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
  locale: {
    textFallbackImage: string
    textAddImage: string
    textResetImage: string
    dragAndDrop: string
  }
  genre: TSelectImageGenre
  size: TJeneseiThemeSize
  id?: string
  width?: string
  onChange?: (images: SelectImageItemProps[]) => void
  imageSettings: {
    maxSize: number
    maxCount: number
    width: number
    height: number
  }
  defaultImages: SelectImageItemProps[]
  images: SelectImageItemProps[]
} & addNewErrorProps

export type SelectImageWrapperProps = AddDollarSign<Pick<SelectImageProps, 'size' | 'width' | 'error' | 'genre'>>
