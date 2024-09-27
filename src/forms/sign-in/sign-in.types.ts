import { FormProps } from '@forms/default'

export interface FormSignInProps extends Omit<FormProps, 'children'> {
  isLoadingLogin: boolean
  isLoadingQR: boolean
  isLoadingPasskey: boolean
  isLoadingAuthApp: boolean
  isLoadingBiometry: boolean
  isError: boolean
  isIncorrect: boolean
  onSubmit: (field: { nickname: string; password: string }) => void
  onSignUp: () => void
  onForgot: () => void
  onRestore: () => void
  onQR?: () => void
  onPasskey?: () => void
  onAuthApp?: () => void
  onBiometry?: () => void
}
