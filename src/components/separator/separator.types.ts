import { JeneseiPaletteKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface SeparatorProps {
  width?: string
  height?: string
  radius?: string
  type?: 'horizontal' | 'vertical'
  color?: JeneseiPaletteKeys
}

export type SeparatorWrapperProps = AddDollarSign<Pick<SeparatorProps, 'width' | 'height' | 'radius' | 'color'>>
