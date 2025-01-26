import { LoadingType } from 'react-loading'

import { JeneseiPaletteKeys, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface LoadingProps {
  type?: LoadingType
  colorKey?: JeneseiPaletteKeys
  color?: string
  size: TJeneseiThemeSize
  className?: string
  order?: number
}

export type StyledReactLoadingProps = AddDollarSign<Pick<LoadingProps, 'order'>>
