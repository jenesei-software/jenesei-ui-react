import { FlexContainerAndItemAndBasicProps } from '@components/flex'

import { JeneseiThemeVariablesKeys, TJeneseiThemeSize } from '@theme/index'

export interface BaseLibraryIconProps {
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TJeneseiThemeSize
  primaryColor?: JeneseiThemeVariablesKeys
  secondColor?: JeneseiThemeVariablesKeys
  styles?: FlexContainerAndItemAndBasicProps
  turn?: number
  order?: number
}

export interface LibraryIconCurvedItemProps extends BaseLibraryIconProps {
  type: 'curved'
  name: TLibraryIconCurvedNameString
}

export interface LibraryIconCheckboxItemProps extends BaseLibraryIconProps {
  type: 'checkbox'
  name: TLibraryIconCheckboxNameString
}

export type LibraryIconItemProps =
  | LibraryIconCurvedItemProps
  | LibraryIconCheckboxItemProps

export interface StyledLibraryIconCurvedItemProps
  extends FlexContainerAndItemAndBasicProps {
  $size: LibraryIconItemProps['size']
  $turn?: LibraryIconItemProps['turn']
  $order?: LibraryIconItemProps['order']
}

export enum LibraryIconCurvedName {
  Biometry,
  QR,
  Search,
  Folder,
  Wallet,
  Graph,
  Bookmark,
  Category,
  Home,
  Notification,
  Chat,
  Heart,
  Paper,
  PaperPlus,
  PaperNegative,
  PaperFail,
  PaperDownload,
  PaperUpload,
  Send,
  Password,
  Swap,
  Work,
  ArrowDownCircle,
  ArrowDownSquare,
  ArrowDown,
  ArrowDown2,
  ArrowDown3,
  Scan,
  Activity,
  Calendar,
  Message,
  Plus,
  Chart,
  Game,
  Bag1,
  Bag2,
  TicketStar,
  MoreCircle,
  MoreSquare,
  Discount,
  Buy,
  InfoSquare,
  DangerSquare,
  DangerTriangle,
  CloseSquare,
  TickSquare,
  ArrowRightCircle,
  ArrowRightSquare,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  Video,
  Discovery,
  Location,
  Document,
  Setting,
  TimeSquare,
  TimeCircle,
  VolumeUp,
  VolumeDown,
  VolumeOff,
  Star,
  Ticket,
  Camera,
  Profile,
  AddUser,
  TwoUser,
  ThreeUser,
  Login,
  Logout,
  Download,
  Upload,
  ArrowUpCircle,
  ArrowUpSquare,
  ArrowUp,
  ArrowUp2,
  ArrowUp3,
  Voice,
  Voice2,
  Delete,
  Edit,
  EditSquare,
  Play,
  ShieldDone,
  ShieldFail,
  Show,
  Hide,
  Filter,
  Filter2,
  Image,
  Image2,
  Call,
  Calling,
  CallMissed,
  CallSilent,
  Lock,
  Unlock,
  ArrowLeftCircle,
  ArrowLeftSquare,
  ArrowLeft,
  ArrowLeft2,
  ArrowLeft3
}
export enum LibraryIconCheckboxName {
  Radio,
  Square
}
export type TLibraryIconCurvedNameString = keyof typeof LibraryIconCurvedName
export type TLibraryIconCheckboxNameString =
  keyof typeof LibraryIconCheckboxName
