import { CSSProperties, PropsWithChildren } from 'react'
import { DefaultTheme } from 'styled-components'

import {
  JeneseiPaletteKeys,
  TJeneseiDevice,
  TJeneseiFontFamily,
  TJeneseiTypographyHeading,
  TJeneseiTypographyWeight
} from '@local/theme'
import { AddDollarSign } from '@local/types'

import { TooltipProps } from '../tooltip'

export type TypographyDefaultProps = PropsWithChildren & {
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
  style?: CSSProperties
  className?: string
  isParagraph?: boolean
  isAnchor?: boolean
  href?: string
  weight?: TJeneseiTypographyWeight
  height?: number
  flex?: string
  onClick?: () => void
  isHoverUnderlining?: boolean
}

export type TypographyDataProps = TypographyDefaultProps & {
  size?: number
}

export type TypographyVariantProps = TypographyDefaultProps & {
  variant: TJeneseiTypographyHeading
}

export type TypographyProps = TypographyDataProps | TypographyVariantProps
export interface addSXTypographyProps {
  sx?:
    | ({
        default: TypographyProps
      } & {
        [K in TJeneseiDevice]?: TypographyProps
      })
    | ((theme: DefaultTheme) => {
        default: TypographyProps
      } & {
        [K in TJeneseiDevice]?: TypographyProps
      })
}
export type styledAddSXTypographyProps = AddDollarSign<addSXTypographyProps>

export type TypographyCSSProps = styledAddSXTypographyProps

export type TypographyTooltipProps = {
  typography: styledAddSXTypographyProps
  tooltip: Omit<TooltipProps, 'children' | 'content'>
} & PropsWithChildren
