import { addSXProps } from '@local/styles/sx'

import { ButtonProps } from '../button'

export interface AddImageProps extends addSXProps {
  imageSettings: {
    maxSize: number
    maxCount: number
    aspect: number
  }
  onAdd: (files: File[] | null) => void
  propsButton: ButtonProps
}
