import { Ref } from 'react'

import { ImageButtonProps } from '@local/components/image-button'

export type useImageCropProps = Pick<ImageButtonProps, 'onSave' | 'locale' | 'dialog' | 'imageSettings'> & {
  refInput: Ref<HTMLInputElement | null>
}

export type useImageCropAddProps = Pick<ImageButtonProps, 'imageSettings' | 'onSave' | 'dialog' | 'locale'> & {
  br?: string
}
