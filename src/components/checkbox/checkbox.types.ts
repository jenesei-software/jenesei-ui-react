import { PropsWithChildren } from 'react'
import { AddDollarSign } from 'src/types'

import { TLibraryIconCheckboxNameString } from '@components/icon'

import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@theme/index'

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean

  genre: TCheckboxGenre

  view: TLibraryIconCheckboxNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  isNotBackground?: boolean

  onChange?: (checked: boolean) => void

  width?: string

  size: TJeneseiThemeSize

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number
}

export type StyledCheckboxProps = AddDollarSign<
  Pick<
    CheckboxProps,
    | 'checked'
    | 'genre'
    | 'view'
    | 'width'
    | 'size'
    | 'isDisabled'
    | 'isNotBackground'
    | 'isHiddenBorder'
    | 'customFontFamily'
    | 'customFontSize'
    | 'customFontWeight'
  >
>

export type TCheckboxGenre = keyof TJeneseiThemeGenre

export type StyledIconProps = AddDollarSign<Pick<CheckboxProps, 'genre' | 'checked'>>
