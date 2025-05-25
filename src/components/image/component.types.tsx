import { ReactNode } from 'react'

import { addSXProps, addSXStyleProps } from '@local/styles/sx'

import { StackProps } from '../stack'

export interface ImageProps {
  src: string
  alt: string
  fallback?: ReactNode
  loading?: ReactNode
  isShowBeforeImage?: boolean
  propsImage?: addSXProps['sx']
  propsStack?: StackProps
}

export type ImageIMGProps = {
  $isPending: boolean
} & addSXStyleProps
