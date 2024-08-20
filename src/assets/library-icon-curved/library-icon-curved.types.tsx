import { FlexShortStylesProps } from '@components/flex'

import { TJeneseiThemeSize } from '@theme/index' 

export type LibraryIconCurvedProps = {
  [icon in TLibraryIconCurvedNameString]: (props: LibraryIconCurvedItemProps) => JSX.Element
}

export interface LibraryIconCurvedItemProps {
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TJeneseiThemeSize
  color?: string
  id?: string
  styles?: FlexShortStylesProps
}

export interface StyledLibraryIconCurvedItemProps extends FlexShortStylesProps {
  $size: LibraryIconCurvedItemProps['size']
}

export enum LibraryIconCurvedName {
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
  ArrowLeft3,
}

export type TLibraryIconCurvedNameString = keyof typeof LibraryIconCurvedName
