import { CSSProperties, PropsWithChildren } from 'react'

import { JeneseiThemeVariablesKeys, TJeneseiDevice, TJeneseiFontFamily } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { TooltipProps } from '../tooltip'

export type TypographyDefaultProps = PropsWithChildren & {
  clamp?: number
  device?: TJeneseiDevice
  clampOrient?: CSSProperties['boxOrient']
  overflow?: CSSProperties['overflow']
  color?: JeneseiThemeVariablesKeys
  family?: TJeneseiFontFamily
  align?: CSSProperties['textAlign']
  decoration?: CSSProperties['textDecoration']
  transform?: CSSProperties['textTransform']
  wrap?: CSSProperties['textWrap']
  cursor?: CSSProperties['cursor']
  style?: CSSProperties
  className?: string
  isParagraph?: boolean
  isAnchor?: boolean
  href?: string
  weight?: 100 | 300 | 400 | 500 | 700 | 900
  height?: number
  flex?: string
  onClick?: () => void
  isHoverUnderlining?: boolean
}

export type TypographyDataProps = TypographyDefaultProps & {
  size?: number
  sizeMobile?: number
  sizeTablet?: number
}

export type TypographyVariantProps = TypographyDefaultProps & {
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
      | 'align'
      | 'wrap'
      | 'flex'
      | 'isHoverUnderlining'
      | 'cursor'
      | 'weight'
      | 'height'
      | 'device'
      | 'decoration'
      | 'transform'
    > &
      Pick<TypographyVariantProps, 'variant'> &
      Pick<TypographyDataProps, 'size' | 'sizeMobile' | 'sizeTablet'>
  > &
    Pick<TypographyDefaultProps, 'className' | 'style' | 'onClick'>
>

export type TypographyTooltipProps = {
  typography: Omit<TypographyDataProps, 'children'> | Omit<TypographyVariantProps, 'children'>
  tooltip: Omit<TooltipProps, 'children' | 'content'>
} & PropsWithChildren
