import { CSSProperties, ReactNode } from 'react'

export interface ImageProps {
  src: string
  alt: string
  fallback?: ReactNode
  loading?: ReactNode
  styleImage?: CSSProperties
  styleStack?: CSSProperties
}

export interface ImageIMGProps {
  $isPending: boolean
}
