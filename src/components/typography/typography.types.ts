import { CSSProperties, PropsWithChildren, ReactNode } from 'react'

import { TooltipProps } from '@local/components/tooltip'
import { JeneseiThemeVariablesKeys, TJeneseiDevice, TJeneseiFontFamily } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface TypographyDefaultProps extends PropsWithChildren {
  clamp?: number
  device?: TJeneseiDevice
  clampOrient?: CSSProperties['boxOrient']
  overflow?: CSSProperties['overflow']
  color?: JeneseiThemeVariablesKeys
  family?: TJeneseiFontFamily
  textAlign?: CSSProperties['textAlign']
  textWrap?: CSSProperties['textWrap']
  cursor?: CSSProperties['cursor']
  style?: CSSProperties
  className?: string
  weight?: 100 | 300 | 400 | 500 | 700 | 900
  height?: number
  flex?: string
  onClick?: () => void
  isHoverUnderlining?: boolean
}

export interface TypographyDataProps extends TypographyDefaultProps {
  size?: number
}

export interface TypographyVariantProps extends TypographyDefaultProps {
  variant: TypographyVariant
}

export type TypographyProps = TypographyDataProps | TypographyVariantProps

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'

export type TypographyCSSProps = Partial<
  AddDollarSign<
    Pick<
      TypographyDefaultProps,
      | 'clamp'
      | 'clampOrient'
      | 'overflow'
      | 'color'
      | 'family'
      | 'textAlign'
      | 'textWrap'
      | 'flex'
      | 'isHoverUnderlining'
      | 'cursor'
      | 'weight'
      | 'height'
      | 'device'
    > &
      Pick<TypographyVariantProps, 'variant'> &
      Pick<TypographyDataProps, 'size'>
  > &
    Pick<TypographyDefaultProps, 'className' | 'style' | 'onClick'>
>

export interface TypographyTooltipProps {
  typography: Omit<TypographyProps, 'children'>
  tooltip: Omit<TooltipProps, 'children' | 'content'>
  children: ReactNode
}
