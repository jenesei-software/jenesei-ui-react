import { ReactNode } from '@tanstack/react-router'

import { FlexShortStylesProps } from '../stack'

export type SliderProps = {
  images: { id: number; imageSrc: string; children?: ReactNode }[]
  onIndexChange?: (index: number) => void
  propsStack?: Pick<FlexShortStylesProps, 'w' | 'h' | 'br'>
}
