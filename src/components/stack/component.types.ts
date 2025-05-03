import { AnimationProps, DraggableProps, LayoutProps } from 'framer-motion'
import { CSSProperties, PropsWithChildren } from 'react'

import { addSXProps } from '@local/styles/sx'
import { AddDollarSign } from '@local/types'

export interface StackProps extends addSXProps, PropsWithChildren {
  className?: string
  isHover?: boolean
  onClick?: () => void
}

export type StackMotionProps = StackProps &
  LayoutProps &
  AnimationProps &
  DraggableProps & {
    style?: CSSProperties
    className?: string
    isHover?: boolean
    onClick?: () => void
  }

export type StyledStackProps = AddDollarSign<StackProps>
