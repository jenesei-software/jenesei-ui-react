import { LoadingType } from 'react-loading'

import { JeneseiThemeVariablesKeys, TJeneseiThemeSize } from '@theme/index' 

export interface ModalLoadingProps {
  type?: LoadingType
  colorKey?: JeneseiThemeVariablesKeys
  color?: string
  size: TJeneseiThemeSize
  className?: string
}
