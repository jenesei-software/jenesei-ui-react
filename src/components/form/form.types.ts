import { CSSProperties, ReactElement } from 'react'

import { TDateGenre } from '@components/date'

import { TJeneseiThemeSize } from '@theme/index'

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
  isLoading: boolean
  onSubmit: (field: { nickname: string; password: string }) => void
  onSignUp: () => void
  onForgot: () => void
}
export interface FormSignUpProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  onSignIn: () => void
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
