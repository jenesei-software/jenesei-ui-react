import { CSSProperties, PropsWithChildren } from 'react'

import { LibraryIconItemProps, TLibraryIconCheckboxNameString } from '@local/components/icon'
import { addNewErrorProps, addNewErrorStylesProps } from '@local/styles/error'
import { addSXProps } from '@local/styles/sx'
import { TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type CheckboxProps = PropsWithChildren & {
  checked?: boolean

  genre: TCheckboxGenre

  view: TLibraryIconCheckboxNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  isNotBackground?: boolean

  iconOrder?: LibraryIconItemProps['order']

  sizeIcon?: TJeneseiThemeSize

  onChange?: (checked: boolean) => void

  isWidthAsHeight?: boolean

  size: TJeneseiThemeSize

  style?: CSSProperties
} & addSXProps &
  addNewErrorProps

export type StyledCheckboxProps = AddDollarSign<
  Pick<
    CheckboxProps,
    'checked' | 'genre' | 'view' | 'isWidthAsHeight' | 'size' | 'isDisabled' | 'isNotBackground' | 'isHiddenBorder'
  >
> &
  AddDollarSign<addSXProps> &
  addNewErrorStylesProps

export type TCheckboxGenre = keyof TJeneseiThemeGenre

export type StyledIconProps = AddDollarSign<Pick<CheckboxProps, 'genre' | 'checked'>>
