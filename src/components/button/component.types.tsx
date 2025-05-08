import React, { PropsWithChildren } from 'react'

import {
  LibraryIconItemProps,
  TLibraryIcoRealEbailNameNameString,
  TLibraryIconCheckboxNameString,
  TLibraryIconIdNameString,
  TLibraryIconLoadingNameString
} from '@local/components/icon'
import { addSXProps } from '@local/styles/sx'
import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type TButtonGenre = keyof TJeneseiThemeGenre

export type ButtonProps = PropsWithChildren & {
  isIconGroup?: boolean

  size: TJeneseiThemeSize

  iconGroupOrder?: number

  id?: string

  className?: string

  genre: TButtonGenre

  icon?: {
    size?: TJeneseiThemeSize
    order?: LibraryIconItemProps['order']
    turn?: LibraryIconItemProps['turn']
  } & (
    | { type: 'id'; name: TLibraryIconIdNameString }
    | { type: 'checkbox'; name: TLibraryIconCheckboxNameString }
    | { type: 'loading'; name: TLibraryIconLoadingNameString }
    | { type: 'realebail'; name: TLibraryIcoRealEbailNameNameString }
  )

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isOnlyLoadingWithGroup?: boolean

  isRadius?: boolean

  isLoading?: boolean

  loadingOrder?: LibraryIconItemProps['order']

  isHiddenBorder?: boolean

  isPlaystationEffect?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string | 'asHeight'

  minWidth?: string | 'asHeight'

  flex?: string

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number | string

  customFontWeight?: number

  isFullSize?: boolean
} & addSXProps

export type StyledDollarButtonProps = AddDollarSign<
  Pick<
    ButtonProps,
    | 'genre'
    | 'isDisabled'
    | 'isHidden'
    | 'isRadius'
    | 'isHiddenBorder'
    | 'isPlaystationEffect'
    | 'width'
    | 'flex'
    | 'size'
    | 'customFontFamily'
    | 'customFontSize'
    | 'customFontWeight'
    | 'isFullSize'
    | 'minWidth'
  >
> &
  AddDollarSign<addSXProps>

export type StyledDollarButtonIconsWrapperProps = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size' | 'iconGroupOrder'>
>
