import { addErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreSelectImage, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { AddImageProps } from '../add-image'

export type TSelectImageGenre = keyof TJeneseiThemeGenreSelectImage

export type SelectImageItemProps = {
  url?: string
  file?: File
  id: number
  index: number
  name?: string
  isNew?: boolean
  format?: string
}
export type SelectImageProps = {
  locale: {
    textFallbackImage: string
    textAddImage: string
    textResetImage: string
    dragAndDrop: string
  } & AddImageProps['locale']
  genre: TSelectImageGenre
  size: TJeneseiThemeSize
  id?: string
  width?: string
  onChange?: (images: SelectImageItemProps[]) => void
  isContain?: boolean
  imageSettings: {
    maxSize: number
    maxCount: number
    width: number
    height: number
    aspect: number
  }
  defaultImages: SelectImageItemProps[]
  images: SelectImageItemProps[]
} & addErrorProps

export type SelectImageWrapperProps = AddDollarSign<Pick<SelectImageProps, 'size' | 'width' | 'error' | 'genre'>>
export type useImageViewProps = Pick<SelectImageProps, 'size'> & {
  locale: Pick<SelectImageProps['locale'], 'textFallbackImage'>
}
