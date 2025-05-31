import { RefObject } from 'react'

import { addSXProps } from '@local/styles/sx'

import { ButtonProps } from '../button'
import { ImageSelectItemProps } from '../image-select'

export interface ImageButtonProps extends addSXProps {
  button: ButtonProps

  dialog: {
    button: ButtonProps
    buttonDelete: ButtonProps
  }

  imageSettings: {
    maxSize: number
    maxCount: number
    aspect?: number
  }

  locale: {
    dialogSave: string
    dialogCancel: string

    dialogAddImage: string
    dialogDeleteImage: string
  }

  onSave: (files: ImageSelectItemProps[] | null) => void
}

export type useImageCropProps = Pick<ImageButtonProps, 'onSave' | 'locale' | 'dialog' | 'imageSettings'> & {
  inputRef: RefObject<HTMLInputElement | null>
}
