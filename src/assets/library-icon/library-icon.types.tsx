export type LibraryIconProps = {
  [icon in LibraryIconNameString]: (props: LibraryIconItemProps) => JSX.Element
}

export interface LibraryIconItemProps {
  className?: string
  onClick?: () => void
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

export type LibraryIconNameString = keyof typeof LibraryIconName
