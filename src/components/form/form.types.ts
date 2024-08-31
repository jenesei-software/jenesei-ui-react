import { CSSProperties, ReactElement } from 'react'

import { TJeneseiThemeGenreForm, TJeneseiThemeSize } from '@theme/index'

export type TDateGenre = keyof TJeneseiThemeGenreForm

export interface FormProps {
  width?: string
  handleSubmit?: () => void
  size?: TJeneseiThemeSize
  genre?: TDateGenre
  children?: ReactElement
  style?: CSSProperties
  isPadding?: boolean
  isBorder?: boolean
}

export interface FormSignInProps extends FormProps {
  onSubmit: (field: { nickname: string; password: string }) => void
  onBack: () => void
}
export interface FormSignUpProps extends FormProps {
  onBack: () => void
  onSubmit: (field: {
    login: string
    email: string
    currentPassword: string
    confirmPassword: string
    dateOfBirthday: number
  }) => void
}
export interface WrapperFormProps {
  $width?: FormProps['width']
  $size?: FormProps['size']
  $genre?: FormProps['genre']
  $isPadding?: FormProps['isPadding']
  $isBorder?: FormProps['isBorder']
}
