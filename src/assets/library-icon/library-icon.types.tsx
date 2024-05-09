import { TJeneseiThemeSize } from '../../main'

export type LibraryIconProps = {
  [icon in TLibraryIconNameString]: (props: LibraryIconItemProps) => JSX.Element
}

export interface LibraryIconItemProps {
  className?: string
  onClick?: () => void
  size: TJeneseiThemeSize
  color?: string
}

export interface StyledLibraryIconItemProps {
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
}

export type TLibraryIconNameString = keyof typeof LibraryIconName
