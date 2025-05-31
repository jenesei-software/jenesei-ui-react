import { ReactNode } from '@tanstack/react-router'

import { useImageSliderProps } from '@local/hooks/use-image-slider'
import { TJeneseiThemeSize } from '@local/theme'

import { TImageSelectGenre } from '../image-select'
import { StackProps } from '../stack'

export type SliderProps = {
  genre: TImageSelectGenre
  size: TJeneseiThemeSize
  imageSettings: {
    aspect: number
  }
  images: { id: number; imageSrc: string; children?: ReactNode }[]
  children?: (props: { isDialog: boolean }) => ReactNode | ReactNode
  onIndexChange?: (index: number) => void
  propsStack?: StackProps
  isLoading?: boolean
  locales: {
    noImagesAvailable: string
  } & useImageSliderProps['locales']
}
export type SliderImageProps = { id: number; imageSrc: string; children?: ReactNode }
