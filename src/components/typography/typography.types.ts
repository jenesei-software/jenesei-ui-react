import { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { AddDollarSign } from 'src/types'

import { TooltipProps } from '@components/tooltip'

import { JeneseiThemeVariablesKeys, TJeneseiFontFamily } from '@theme/index'

export interface TypographyDefaultProps extends PropsWithChildren {
  clamp?: number
  clampOrient?: CSSProperties['boxOrient']
  overflow?: CSSProperties['overflow']
  color?: JeneseiThemeVariablesKeys
  family?: TJeneseiFontFamily
  textAlign?: CSSProperties['textAlign']
  textWrap?: CSSProperties['textWrap']
  cursor?: CSSProperties['cursor']
  className?: string
  style?: CSSProperties
  weight?: 100 | 300 | 400 | 500 | 700 | 900
  height?: number
  flex?: string
  onClick?: () => void
}

export interface TypographyDataProps extends TypographyDefaultProps {
  size?: number
}

export interface TypographyVariantProps extends TypographyDefaultProps {
  variant: TypographyVariant
}

export type TypographyProps = TypographyDataProps | TypographyVariantProps

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'

export type TypographyCSSProps = Partial<
  AddDollarSign<
    Pick<
      TypographyDefaultProps,
      'clamp' | 'clampOrient' | 'overflow' | 'color' | 'family' | 'textAlign' | 'textWrap' | 'flex'
    > &
      Pick<TypographyVariantProps, 'variant' | 'cursor'> &
      Pick<TypographyDataProps, 'size' | 'weight' | 'height'>
  >
>

export interface TypographyTooltipProps {
  typography: Omit<TypographyProps, 'children'>
  tooltip: Omit<TooltipProps, 'children' | 'content'>
  children: ReactNode
}
