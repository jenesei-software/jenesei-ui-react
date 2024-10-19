import { AddDollarSign } from 'src/types'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface DividerProps {
  width?: string
  height: string
  radius?: string
  color: JeneseiThemeVariablesKeys
}

export type DividerWrapperProps = AddDollarSign<Pick<DividerProps, 'width' | 'height' | 'radius' | 'color'>>
