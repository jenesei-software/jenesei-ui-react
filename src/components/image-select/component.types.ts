import { Area } from 'react-easy-crop'

import { ButtonProps, addSXProps } from '@local/index'
import { addErrorProps } from '@local/styles/error'
import { TJeneseiThemeGenreImageSelect, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { ImageButtonProps } from '../image-button'

export type TImageSelectGenre = keyof TJeneseiThemeGenreImageSelect

export type ImageSelectItemProps = {
  crop?: {
    x: number
    y: number
  }

  croppedArea?: Area | null

  file?: File

  format?: string

  id: number

  index: number

  isCropped?: boolean

  isDeleted?: boolean

  isNew?: boolean

  name?: string

  url?: string

  zoom?: number
}
export type ImageSelectProps = {
  locale: {
    imageFallback: string
    buttonReset: string
    dragAndDrop: string
  } & ImageButtonProps['locale']
  genre: TImageSelectGenre
  size: TJeneseiThemeSize
  propsButton: {
    default: Pick<ButtonProps, 'size' | 'genre'>
    delete: Pick<ButtonProps, 'size' | 'genre'>
  }
  id?: string
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
} & addErrorProps &
  addSXProps

export type ImageSelectWrapperProps = AddDollarSign<Pick<ImageSelectProps, 'sx' | 'error' | 'genre' | 'size'>>
