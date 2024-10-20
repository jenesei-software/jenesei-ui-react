import { LoadingType } from 'react-loading'
import { AddDollarSign } from 'src/types'

import { JeneseiThemeVariablesKeys, TJeneseiThemeSize } from '@theme/index'

export interface ModalLoadingProps {
  type?: LoadingType
  colorKey?: JeneseiThemeVariablesKeys
  color?: string
  size: TJeneseiThemeSize
  className?: string
  order?: number
}

export type StyledReactLoadingProps = AddDollarSign<Pick<ModalLoadingProps, 'order'>>
