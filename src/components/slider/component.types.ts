import { ReactNode } from '@tanstack/react-router'

import { StackProps } from '../stack'

export type SliderProps = {
  images: { id: number; imageSrc: string; children?: ReactNode }[]
  children?: (props: { isDialog: boolean }) => ReactNode | ReactNode
  onIndexChange?: (index: number) => void
  propsStack?: StackProps
}
export type SliderImageProps = { id: number; imageSrc: string; children?: ReactNode }
