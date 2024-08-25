import { FlexContainerAndItemAndBasicProps } from '@components/flex'

import { JeneseiThemeVariablesKeys, TJeneseiThemeSize } from '@theme/index'

export interface LibraryIconCurvedItemProps {
  name: TLibraryIconCurvedNameString
  type: 'curved'
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TJeneseiThemeSize
  primaryColor?: JeneseiThemeVariablesKeys
  secondColor?: JeneseiThemeVariablesKeys
  styles?: FlexContainerAndItemAndBasicProps
  turn?: number
  order?: number
}

export interface StyledLibraryIconCurvedItemProps
  extends FlexContainerAndItemAndBasicProps {
  $size: LibraryIconCurvedItemProps['size']
  $turn?: LibraryIconCurvedItemProps['turn']
  $order?: LibraryIconCurvedItemProps['order']
}

export enum LibraryIconCurvedName {
  Search,
  Folder,
}

export type TLibraryIconCurvedNameString = keyof typeof LibraryIconCurvedName
