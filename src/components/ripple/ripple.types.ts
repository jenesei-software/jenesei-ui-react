import { AddDollarSign } from '@local/types'

export interface RippleProps {
  duration?: number
  color: string
}

export interface RippleArrayElement {
  x: number
  y: number
  size: number
}

export type RippleContainerProps = AddDollarSign<RippleProps>
