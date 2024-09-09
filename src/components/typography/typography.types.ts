import { CSSProperties, ReactNode } from 'react'

import { TooltipProps } from '@components/tooltip'

import { JeneseiThemeVariablesKeys, TJeneseiFontFamily } from '@theme/index'

export interface TypographyDefaultProps {
  clamp?: number
  clampOrient?: CSSProperties['boxOrient']
  overflow?: CSSProperties['overflow']
  color?: JeneseiThemeVariablesKeys
  family?: TJeneseiFontFamily
  textAlign?: CSSProperties['textAlign']
  textWrap?: CSSProperties['textWrap']
  className?: string
  children: React.ReactNode
  style?: CSSProperties
  weight?: 100 | 300 | 400 | 500 | 700 | 900
  height?: number
  flex?: string
}

export interface TypographyDataProps extends TypographyDefaultProps {
  size?: number
}

export interface TypographyVariantProps extends TypographyDefaultProps {
  variant: TypographyVariant
}

export type TypographyProps = TypographyDataProps | TypographyVariantProps

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'

export interface TypographyCSSProps {
  $clamp?: TypographyDefaultProps['clamp']
  $clampOrient?: TypographyDefaultProps['clampOrient']
  $overflow?: TypographyDefaultProps['overflow']
  $color?: TypographyDefaultProps['color']
  $family?: TypographyDefaultProps['family']
  $textAlign?: TypographyDefaultProps['textAlign']
  $textWrap?: TypographyDefaultProps['textWrap']
  $flex?: TypographyDefaultProps['flex']
  $variant?: TypographyVariantProps['variant']

  $size?: TypographyDataProps['size']
  $weight?: TypographyDataProps['weight']
  $height?: TypographyDataProps['height']
}

export interface TypographyTooltipProps {
  typography: Omit<TypographyProps, 'children'>
  tooltip: Omit<TooltipProps, 'children' | 'content'>
  children: ReactNode
}
