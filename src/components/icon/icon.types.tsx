import {
  LibraryIconCurvedItemProps,
  TLibraryIconCurvedNameString,
} from '@assets/library-icon-curved'

import { JeneseiThemeVariablesKeys } from '@theme/index' 

export interface IconProps extends LibraryIconCurvedItemProps {
  icon: TLibraryIconCurvedNameString
  color: JeneseiThemeVariablesKeys
}
