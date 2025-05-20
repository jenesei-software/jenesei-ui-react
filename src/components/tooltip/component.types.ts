import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import { TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps } from '../typography'

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

export type TooltipProps = PropsWithChildren & {
  content: ReactNode
  placement?: Placement
  padding?: number
  whiteSpace?: CSSProperties['whiteSpace']
  maxWidth?: string
  maxHeight?: string
  isDisabled?: boolean
  size?: TJeneseiThemeSize
} & addSXTypographyProps

export type TooltipBoxProps = AddDollarSign<
  Pick<TooltipProps, 'whiteSpace' | 'maxWidth' | 'maxHeight' | 'size'> & { placement: Placement; visible: boolean }
>
