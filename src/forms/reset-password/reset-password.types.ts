import { FormProps } from '@forms/default'

export interface FormSignUpProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  isError: boolean
  onBack: () => void
  onRestore: () => void
  onSubmit: (field: { currentPassword: string; confirmPassword: string }) => void | Promise<void>
}
