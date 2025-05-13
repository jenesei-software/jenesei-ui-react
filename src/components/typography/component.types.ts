import { CSSProperties, PropsWithChildren } from 'react'

import {
  JeneseiPaletteKeys,
  TJeneseiDevice,
  TJeneseiFontFamily,
  TJeneseiTypographyHeading,
  TJeneseiTypographyWeight
} from '@local/theme'
import { AddDollarSign } from '@local/types'

import { TooltipProps } from '../tooltip'

type TypographyDefaultProps = {
  weight?: TJeneseiTypographyWeight
  clamp?: number
  device?: TJeneseiDevice
  clampOrient?: CSSProperties['boxOrient']
  overflow?: CSSProperties['overflow']
  color?: JeneseiPaletteKeys
  family?: TJeneseiFontFamily
  align?: CSSProperties['textAlign']
  decoration?: CSSProperties['textDecoration']
  transform?: CSSProperties['textTransform']
  wrap?: CSSProperties['textWrap']
  letterSpacing?: CSSProperties['letterSpacing']
  cursor?: CSSProperties['cursor']
  height?: number
  flex?: string
  isHoverUnderlining?: boolean
}

type TypographyDataProps = TypographyDefaultProps & {
  size?: number
}

type TypographyVariantProps = TypographyDefaultProps & {
  variant: TJeneseiTypographyHeading
}

export type TypographyAllProps = TypographyDataProps | TypographyVariantProps

export type TypographyProps = PropsWithChildren & {
  onClick?: () => void
  style?: CSSProperties
  className?: string

  href?: string

  isParagraph?: boolean
  isAnchor?: boolean

  sx: {
    default: TypographyAllProps
  } & {
    [K in TJeneseiDevice]?: TypographyAllProps
  }
}

export type TypographyCSSProps = AddDollarSign<Pick<TypographyProps, 'sx'>>

export type TypographyTooltipProps = {
  typography: TypographyProps
  tooltip: Omit<TooltipProps, 'children' | 'content'>
} & PropsWithChildren
