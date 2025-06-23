import { Placement } from '@floating-ui/react'
import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import { TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps } from '../typography'

export type TooltipProps = PropsWithChildren & {
  content: ReactNode
  placement?: Placement
  padding?: number
  offset?: number
  maxWidth?: string
  maxHeight?: string
  whiteSpace?: CSSProperties['whiteSpace']
  isDisabled?: boolean
  size?: TJeneseiThemeSize
} & addSXTypographyProps

export type TooltipBoxProps = AddDollarSign<Pick<TooltipProps, 'whiteSpace' | 'maxWidth' | 'maxHeight' | 'size'>>
