import { CSSProperties, PropsWithChildren, Ref } from 'react'

import { SXProps } from '@local/styles/sx'
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
  align?: CSSProperties['textAlign']

  color?: JeneseiPaletteKeys

  cursor?: CSSProperties['cursor']

  decoration?: CSSProperties['textDecoration']

  device?: TJeneseiDevice

  family?: TJeneseiFontFamily

  flex?: string

  height?: number

  isHoverUnderlining?: boolean

  letterSpacing?: CSSProperties['letterSpacing']

  line?: number

  overflow?: CSSProperties['overflow']

  shadow?: 'shadowPulse'

  transform?: CSSProperties['textTransform']

  weight?: TJeneseiTypographyWeight

  wrap?: CSSProperties['textWrap']
}

export type TypographyDataProps = TypographyDefaultProps & {
  size?: number
}

type TypographyVariantProps = TypographyDefaultProps & {
  variant: TJeneseiTypographyHeading
}

export type TypographyAllProps = TypographyDataProps | TypographyVariantProps

export type TypographySXProps = {
  default: TypographyAllProps
} & {
  [K in TJeneseiDevice]?: TypographyAllProps
}

export type TypographyProps = PropsWithChildren & {
  onClick?: () => void
  className?: string
  style?: CSSProperties
  href?: string

  isParagraph?: boolean
  isAnchor?: boolean

  ref?: Ref<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | null>

  sx: TypographySXProps

  sxStandard?: SXProps
}

export type addSXTypographyProps = {
  sxTypography?: TypographySXProps
}
export type addSXTypographyStyleProps = AddDollarSign<addSXTypographyProps>

export type TypographyCSSProps = AddDollarSign<{
  sxTypography: TypographySXProps
  sx?: SXProps
}>

export type TypographyTooltipProps = {
  typography: TypographyProps
  tooltip: Omit<TooltipProps, 'children' | 'content'>
} & PropsWithChildren
