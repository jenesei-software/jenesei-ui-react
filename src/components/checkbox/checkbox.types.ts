import { CSSProperties, PropsWithChildren } from 'react'

import { LibraryIconItemProps, TLibraryIconCheckboxNameString } from '@local/components/icon'
import { TJeneseiFontFamily, TJeneseiThemeGenre, TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean

  genre: TCheckboxGenre

  view: TLibraryIconCheckboxNameString

  isDisabled?: boolean

  isOnlyLoading?: boolean

  isLoading?: boolean

  isHiddenBorder?: boolean

  isNotBackground?: boolean

  iconOrder?: LibraryIconItemProps['order']

  isError?: boolean

  errorMessage?: string

  isErrorAbsolute?: boolean

  sizeIcon?: TJeneseiThemeSize

  onChange?: (checked: boolean) => void

  width?: string

  size: TJeneseiThemeSize

  customFontFamily?: TJeneseiFontFamily

  customFontSize?: number

  customFontWeight?: number

  style?: CSSProperties
}

export type StyledCheckboxProps = AddDollarSign<
  Pick<
    CheckboxProps,
    | 'checked'
    | 'genre'
    | 'view'
    | 'width'
    | 'size'
    | 'isError'
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

export type CheckboxErrorMessageProps = AddDollarSign<Pick<CheckboxProps, 'isErrorAbsolute' | 'width' | 'size'>>
