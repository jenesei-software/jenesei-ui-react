import React, { CSSProperties, PropsWithChildren } from 'react'

import { LibraryIconItemProps, TLibraryIconIdNameString } from '@local/components/icon'
import { DollarFlexContainerAndItemProps, FlexContainerAndItemProps } from '@local/styles/base'
import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type TButtonGenre = keyof TJeneseiThemeGenre

export interface ButtonProps extends PropsWithChildren {
  isIconGroup?: boolean

  size: TJeneseiThemeSize

  iconGroupOrder?: number

  id?: string

  className?: string

  genre: TButtonGenre

  iconName?: TLibraryIconIdNameString

  iconSize?: TJeneseiThemeSize

  iconOrder?: LibraryIconItemProps['order']

  iconTurn?: LibraryIconItemProps['turn']

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

  styleCustom?: FlexContainerAndItemProps

  styleCSS?: CSSProperties
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
