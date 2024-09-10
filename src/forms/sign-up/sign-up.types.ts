import { FormProps } from '@forms/default'

export interface FormSignUpProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  isError: boolean
  onSignIn: () => void
  onRestore: () => void
  onTermOfService: () => void
  onPrivacyPolicy: () => void
  onSubmit: (field: {
    nickname: string
    email: string
    currentPassword: string
    confirmPassword: string
    dateOfBirthday: number
  }) => void | Promise<void>
}
