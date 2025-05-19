import React, { PropsWithChildren } from 'react'

import { IconTypeMap, LibraryIconItemProps } from '@local/components/icon'
import { addSXProps, addSXStyleProps } from '@local/styles/sx'
import { TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography'

export type TButtonGenre = keyof TJeneseiThemeGenre

type IconPropsByType<T extends keyof IconTypeMap> = {
  type: T
  name: IconTypeMap[T]
  size?: TJeneseiThemeSize
  order?: LibraryIconItemProps['order']
  turn?: LibraryIconItemProps['turn']
  isHidden?: boolean
}

type ButtonPropsDefault = PropsWithChildren & {
  size: TJeneseiThemeSize
  genre: TButtonGenre

  id?: string

  className?: string

  icons?: (
    | IconPropsByType<'id'>
    | IconPropsByType<'checkbox'>
    | IconPropsByType<'loading'>
    | IconPropsByType<'realebail'>
    | IconPropsByType<'logo'>
  )[]

  isDisabled?: boolean

  isHidden?: boolean

  isOnlyIcon?: boolean

  isWidthAsHeight?: boolean

  isRadius?: boolean

  isHiddenBorder?: boolean

  isPlaystationEffect?: boolean

  isFullSize?: boolean

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

  type?: 'button' | 'submit' | 'reset'
} & addSXProps &
  addSXTypographyProps

export type ButtonPropsStandard = ButtonPropsDefault & {
  isIconGroup?: false
}
export type ButtonPropsIconGroup = ButtonPropsDefault & {
  isIconGroup?: true
  iconGroupOrder?: number
}

export type ButtonProps = ButtonPropsStandard | ButtonPropsIconGroup
export type StyledDollarButtonProps = AddDollarSign<
  Pick<
    ButtonProps,
    | 'genre'
    | 'isDisabled'
    | 'isHidden'
    | 'isWidthAsHeight'
    | 'isRadius'
    | 'isHiddenBorder'
    | 'isPlaystationEffect'
    | 'size'
    | 'isFullSize'
  >
> &
  addSXStyleProps &
  addSXTypographyStyleProps

export type StyledDollarButtonIconsWrapperProps = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size'> & Pick<ButtonPropsIconGroup, 'iconGroupOrder'>
>
