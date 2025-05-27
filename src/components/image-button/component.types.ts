import { RefObject } from 'react'

import { addSXProps } from '@local/styles/sx'

import { ButtonProps } from '../button'
import { ImageSelectItemProps } from '../image-select'

export interface ImageButtonProps extends addSXProps {
  imageSettings: {
    maxSize: number
    maxCount: number
    aspect: number
  }
  onSave: (files: ImageSelectItemProps[] | null) => void
  button: ButtonProps
  dialog: {
    button: ButtonProps
  }
  locale: {
    dialogSave: string
  }
}

export type useImageCropProps = Pick<ImageButtonProps, 'onSave' | 'locale' | 'dialog' | 'imageSettings'> & {
  inputRef: RefObject<HTMLInputElement | null>
}
