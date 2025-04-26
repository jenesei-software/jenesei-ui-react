import { CSSProperties, ReactNode } from 'react'

import { FlexShortStylesProps } from '../stack'

export interface ImageProps {
  src: string
  alt: string
  fallback?: ReactNode
  loading?: ReactNode
  propsImage?: CSSProperties
  propsStack?: FlexShortStylesProps
}

export interface ImageIMGProps {
  $isPending: boolean
}
