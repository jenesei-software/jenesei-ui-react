import { LibraryIconItemProps, TLibraryIconNameString } from '../../main'
import {
  JeneseiThemeVariablesKeys
} from '../../theme'

export interface IconProps extends LibraryIconItemProps{
  icon: TLibraryIconNameString
  color: JeneseiThemeVariablesKeys
}
