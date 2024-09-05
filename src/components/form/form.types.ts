import { AxiosInstance } from 'axios'
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
  variant?: 'sign'
}

export interface FormSignInProps extends Omit<FormProps, 'children'> {
  onSubmit: (field: { nickname: string; password: string }) => void
  onSignUp: () => void
}
export interface FormSignUpProps extends Omit<FormProps, 'children'> {
  axiosInstance: AxiosInstance
  onBack: () => void
  onSubmit: (field: {
    login: string
    email: string
    currentPassword: string
    confirmPassword: string
    dateOfBirthday: number
  }) => void | Promise<void>
}
export interface WrapperFormProps {
  $width?: FormProps['width']
  $genre?: FormProps['genre']
  $variant?: FormProps['variant']
}
