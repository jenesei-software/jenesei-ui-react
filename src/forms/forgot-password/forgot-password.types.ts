import { FormProps } from '@forms/default'

export interface FormForgotPasswordProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  isError: boolean
  onBack: () => void
  onRestore: () => void
  onSubmit: (field: { email: string }) => void | Promise<void>
}
