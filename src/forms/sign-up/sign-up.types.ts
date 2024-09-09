import { FormProps } from '@forms/default'

export interface FormSignUpProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  onSignIn: () => void
  onSubmit: (field: {
    nickname: string
    email: string
    currentPassword: string
    confirmPassword: string
    dateOfBirthday: number
  }) => void | Promise<void>
}
