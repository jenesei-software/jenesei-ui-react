import React, { PropsWithChildren } from 'react'

import { IconItemProps } from '@local/components/icon'
import { addSXProps, addSXStyleProps } from '@local/styles/sx'
import { TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

import { addSXTypographyProps, addSXTypographyStyleProps } from '../typography'

export type TButtonGenre = keyof TJeneseiThemeGenre

type ButtonPropsDefault = PropsWithChildren & {
  size: TJeneseiThemeSize
  genre: TButtonGenre

  id?: string

  className?: string

  icons?: (
    | (Omit<IconItemProps<'id'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'id'>['size'] })
    | (Omit<IconItemProps<'checkbox'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'checkbox'>['size'] })
    | (Omit<IconItemProps<'loading'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'loading'>['size'] })
    | (Omit<IconItemProps<'realebail'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'realebail'>['size'] })
    | (Omit<IconItemProps<'logo'>, 'size'> & { isHidden?: boolean; size?: IconItemProps<'logo'>['size'] })
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
