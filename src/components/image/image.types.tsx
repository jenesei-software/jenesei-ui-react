import { CSSProperties, ReactNode } from 'react'

import { FlexShortStylesMotionProps } from '../stack'

export interface ImageProps {
  src: string
  alt: string
  fallback?: ReactNode
  loading?: ReactNode
  propsImage?: CSSProperties
  propsStack?: FlexShortStylesMotionProps
}

export interface ImageIMGProps {
  $isPending: boolean
}
