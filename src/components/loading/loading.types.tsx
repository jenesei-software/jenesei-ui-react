import { LoadingType } from 'react-loading'

import { JeneseiThemeVariablesKeys, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface LoadingProps {
  type?: LoadingType
  colorKey?: JeneseiThemeVariablesKeys
  color?: string
  size: TJeneseiThemeSize
  className?: string
  order?: number
}

export type StyledReactLoadingProps = AddDollarSign<Pick<LoadingProps, 'order'>>
