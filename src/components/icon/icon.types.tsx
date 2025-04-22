import React from 'react'

import { DollarFlexContainerAndItemAndBasicProps } from '@local/styles/base'
import { JeneseiPaletteKeys, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface BaseLibraryIconProps {
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TJeneseiThemeSize | '100%'
  primaryColor?: JeneseiPaletteKeys
  secondColor?: JeneseiPaletteKeys
  styles?: DollarFlexContainerAndItemAndBasicProps
  turn?: number
  order?: number
  tabIndex?: number
}

export interface LibraryIconIdItemProps extends BaseLibraryIconProps {
  type: 'id'
  name: TLibraryIconIdNameString
}

export interface LibraryIconCheckboxItemProps extends BaseLibraryIconProps {
  type: 'checkbox'
  name: TLibraryIconCheckboxNameString
}

export interface LibraryIconLoadingItemProps extends BaseLibraryIconProps {
  type: 'loading'
  name: TLibraryIconLoadingNameString
}

export type LibraryIconItemProps = LibraryIconIdItemProps | LibraryIconCheckboxItemProps | LibraryIconLoadingItemProps

export type StyledLibraryIconIdItemProps = AddDollarSign<Pick<LibraryIconItemProps, 'size' | 'turn' | 'order'>> &
  DollarFlexContainerAndItemAndBasicProps

export enum LibraryIconIdName {
  Close,
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
  PasswordMini,
  Swap,
  Work,
  Arrow1,
  Arrow2,
  Arrow3,
  Arrow4,
  ArrowMini1,
  ArrowMini2,
  Scan,
  Activity,
  Calendar,
  Message,
  PlusMini,
  ChartMini,
  Game,
  Bag1,
  Bag2,
  TicketStar,
  MoreCircle,
  MoreSquare,
  Discount,
  Buy,
  InfoMini,
  DangerMini,
  DangerTriangle,
  CloseMini,
  TickMini,
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
  Select,
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
  Voice,
  Voice2,
  Delete,
  Edit,
  EditSquare,
  PlayMini,
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
  Unlock
}
export enum LibraryIconCheckboxName {
  Radio,
  Square,
  Arrow
}
export enum LibraryIcoLoadingName {
  Line,
  Circle,
  Blocks,
  Balls
}
export type TLibraryIconIdNameString = keyof typeof LibraryIconIdName
export type TLibraryIconCheckboxNameString = keyof typeof LibraryIconCheckboxName
export type TLibraryIconLoadingNameString = keyof typeof LibraryIcoLoadingName
