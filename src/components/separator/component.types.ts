import { addSXProps } from '@local/index'
import { JeneseiPaletteKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface SeparatorProps {
  sx?: addSXProps['sx']
  radius?: string
  type?: 'horizontal' | 'vertical'
  color?: JeneseiPaletteKeys
}

export type SeparatorWrapperProps = AddDollarSign<Pick<SeparatorProps, 'sx' | 'radius' | 'color' | 'type'>>
