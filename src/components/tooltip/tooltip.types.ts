import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import { AddDollarSign } from '@local/types'

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

export interface TooltipProps extends PropsWithChildren {
  content: ReactNode
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
