import { DollarFlexContainerAndItemProps, FlexContainerAndItemProps } from '@styles/base'
import React, { PropsWithChildren } from 'react'
import { AddDollarSign } from 'src/types'

import { LibraryIconItemProps, TLibraryIconCurvedNameString } from '@components/icon'
import { LoadingProps } from '@components/loading'

import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@theme/index'

export type TButtonGenre = keyof TJeneseiThemeGenre

export interface ButtonProps extends PropsWithChildren {
  isIconGroup?: boolean

  size: TJeneseiThemeSize

  iconGroupOrder?: number

  id?: string

  className?: string

  genre: TButtonGenre

  iconName?: TLibraryIconCurvedNameString

  iconOrder?: LibraryIconItemProps['order']

  iconTurn?: LibraryIconItemProps['turn']

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyLoading?: boolean

  isOnlyLoadingWithGroup?: boolean

  isRadius?: boolean

  isLoading?: boolean

  loadingOrder?: LoadingProps['order']

  isHiddenBorder?: boolean

  isPlaystationEffect?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'

  width?: string | 'asHeight'

  minWidth?: string | 'asHeight'

  flex?: string

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  isFullSize?: boolean

  customStyles?: FlexContainerAndItemProps
}

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
  DollarFlexContainerAndItemProps

export type StyledDollarButtonIconsWrapperProps = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size' | 'iconGroupOrder'>
>
