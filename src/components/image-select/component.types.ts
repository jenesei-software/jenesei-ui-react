import { addErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreImageSelect, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { ImageButtonProps } from '../image-button'

export type TImageSelectGenre = keyof TJeneseiThemeGenreImageSelect

export type ImageSelectItemProps = {
  url?: string
  file?: File
  id: number
  index: number
  name?: string
  isNew?: boolean
  format?: string
}
export type ImageSelectProps = {
  locale: {
    textFallbackImage: string
    textImageButton: string
    textResetImage: string
    dragAndDrop: string
  } & ImageButtonProps['locale']
  genre: TImageSelectGenre
  size: TJeneseiThemeSize
  id?: string
  width?: string
  onChange?: (images: ImageSelectItemProps[]) => void
  isContain?: boolean
  imageSettings: {
    maxSize: number
    maxCount: number
    width: number
    height: number
    aspect: number
  }
  defaultImages: ImageSelectItemProps[]
  images: ImageSelectItemProps[]
} & addErrorProps

export type ImageSelectWrapperProps = AddDollarSign<Pick<ImageSelectProps, 'size' | 'width' | 'error' | 'genre'>>
export type useImageViewProps = Pick<ImageSelectProps, 'size' | 'imageSettings'> & {
  locale: Pick<ImageSelectProps['locale'], 'textFallbackImage'>
}
