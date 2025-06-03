import { AnimationProps, DraggableProps, LayoutProps } from 'framer-motion'
import { CSSProperties, DragEvent, DragEventHandler, PropsWithChildren, Ref } from 'react'

import { addSXProps } from '@local/styles/sx'
import { AddDollarSign } from '@local/types'

export interface StackProps extends addSXProps, PropsWithChildren {
  className?: string
  isHover?: boolean
  isRipple?: boolean
  onClick?: () => void
  onDrop?: (e: DragEvent<HTMLDivElement>) => void
  onDragOver?: DragEventHandler<HTMLDivElement>
  ref?: Ref<HTMLDivElement | null>
}

export type StackMotionProps = StackProps &
  LayoutProps &
  AnimationProps &
  DraggableProps & {
    style?: CSSProperties
    className?: string
    isHover?: boolean
    isRipple?: boolean
    onClick?: () => void
    ref?: Ref<HTMLDivElement | null>
  }

export type StyledStackProps = AddDollarSign<StackProps>
