import { RefObject } from 'react'

import { addSXProps } from '@local/styles/sx'

import { ButtonProps } from '../button'
import { SelectImageItemProps } from '../select-image'

export interface AddImageProps extends addSXProps {
  imageSettings: {
    maxSize: number
    maxCount: number
    aspect: number
  }
  onSave: (files: SelectImageItemProps[] | null) => void
  button: ButtonProps
  dialog: {
    button: ButtonProps
  }
  locale: {
    dialogSave: string
  }
}

export type useImageCropProps = Pick<AddImageProps, 'onSave' | 'locale' | 'dialog' | 'imageSettings'> & {
  inputRef: RefObject<HTMLInputElement | null>
}
