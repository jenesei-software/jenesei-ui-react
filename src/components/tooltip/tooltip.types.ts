import { CSSProperties, ReactNode } from 'react'
import { AddDollarSign } from 'src/types'

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
  children: ReactNode
  placement?: Placement
  whiteSpace?: CSSProperties['whiteSpace']
  maxWidth?: number
  maxHeight?: number
  isDisabled?: boolean
  size?: number
}

export type TooltipBoxProps = AddDollarSign<
  Pick<TooltipProps, 'whiteSpace' | 'maxWidth' | 'maxHeight'> & { placement: Placement; visible: boolean }
>

export type TooltipArrowProps = Pick<TooltipBoxProps, '$visible'>
