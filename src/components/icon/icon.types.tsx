import {
  LibraryIconItemProps,
  TLibraryIconNameString,
} from '@assets/library-icon'

import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface IconProps extends LibraryIconItemProps {
  icon: TLibraryIconNameString
  color: JeneseiThemeVariablesKeys
}
