import { CSSProperties, ReactNode } from 'react'

import { StackProps } from '../stack'

export interface ImageProps {
  src: string
  alt: string
  fallback?: ReactNode
  loading?: ReactNode
  propsImage?: CSSProperties
  propsStack?: StackProps
}

export interface ImageIMGProps {
  $isPending: boolean
}
