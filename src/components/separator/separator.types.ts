import { AddDollarSign } from 'src/types'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface SeparatorProps {
  width?: string
  height?: string
  radius?: string
  type?: 'horizontal' | 'vertical'
  color?: JeneseiThemeVariablesKeys
}

export type SeparatorWrapperProps = AddDollarSign<Pick<SeparatorProps, 'width' | 'height' | 'radius' | 'color'>>
