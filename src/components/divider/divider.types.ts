import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface DividerProps {
  width?: string
  height: string
  radius?: string
  color: JeneseiThemeVariablesKeys
}

export interface DividerWrapperProps {
  $width?: DividerProps['width']
  $height: DividerProps['height']
  $radius?: DividerProps['radius']
  $color: DividerProps['color']
}
