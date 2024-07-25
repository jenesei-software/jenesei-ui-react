import { FlexShortStylesProps } from '@components/flex'

import { TJeneseiThemeSize } from '@theme/index'

export type LibraryIconProps = {
  [icon in TLibraryIconNameString]: (props: LibraryIconItemProps) => JSX.Element
}

export interface LibraryIconItemProps {
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TJeneseiThemeSize
  color?: string
  id?: string
  styles?: FlexShortStylesProps
}

export interface StyledLibraryIconItemProps extends FlexShortStylesProps {
  $size: LibraryIconItemProps['size']
}

export enum LibraryIconName {
  HelpCircle,
  ArrowLeft,
  ChevronLeft,
  AlertCircle,
  Person,
  Support,
  GridCross,
  Download,
  FileText,
  Delete,
  Edit,
  Globe,
  Phone,
  WiFi,
  Coffee,
  CreditCard,
  Copy,
  Plus,
  MinPlus,
  Menu,
  Trash,
  ArrowDown,
}

export type TLibraryIconNameString = keyof typeof LibraryIconName
