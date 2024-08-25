import { CSSProperties, ReactNode } from 'react'

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export interface TooltipProps {
  content: ReactNode
  placement?: Placement
  children: ReactNode
  whiteSpace?: CSSProperties['whiteSpace']
  maxWidth?: number
  maxHeight?: number
  isDisabled?: boolean
  size?: number
}

export interface TooltipBoxProps {
  $placement: Placement
  $visible: boolean
  $whiteSpace?: TooltipProps['whiteSpace']
  $maxWidth?: TooltipProps['maxWidth']
  $maxHeight?: TooltipProps['maxHeight']
}
export interface TooltipArrowProps {
  $visible: boolean
}
