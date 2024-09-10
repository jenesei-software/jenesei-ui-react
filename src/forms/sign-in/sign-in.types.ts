import { FormProps } from '@forms/default'

export interface FormSignInProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  isError: boolean
  onSubmit: (field: { nickname: string; password: string }) => void
  onSignUp: () => void
  onForgot: () => void
  onRestore: () => void
}
