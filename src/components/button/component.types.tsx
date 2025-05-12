import React, { PropsWithChildren } from 'react'

import { IconTypeMap, LibraryIconItemProps } from '@local/components/icon'
import { addSXProps } from '@local/styles/sx'
import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

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
} & addSXProps

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
    | 'customFontFamily'
    | 'customFontSize'
    | 'customFontWeight'
    | 'isFullSize'
  >
> &
  AddDollarSign<addSXProps>

export type StyledDollarButtonIconsWrapperProps = AddDollarSign<
  Pick<ButtonProps, 'isIconGroup' | 'size'> & Pick<ButtonPropsIconGroup, 'iconGroupOrder'>
>
