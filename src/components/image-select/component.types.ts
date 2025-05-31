import { Area } from 'react-easy-crop'

import { ButtonProps } from '@local/index'
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
  isDeleted?: boolean
  isCropped?: boolean
  format?: string
  crop?: {
    x: number
    y: number
  }
  zoom?: number
  croppedArea?: Area | null
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
  propsButton: {
    default: Pick<ButtonProps, 'size' | 'genre'>
    delete: Pick<ButtonProps, 'size' | 'genre'>
  }
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

export type ImageSelectWrapperProps = AddDollarSign<Pick<ImageSelectProps, 'width' | 'error' | 'genre' | 'size'>>
export type useImageViewProps = Pick<ImageSelectProps, 'imageSettings' | 'genre' | 'size'> & {
  locale: Pick<ImageSelectProps['locale'], 'textFallbackImage'>
}
