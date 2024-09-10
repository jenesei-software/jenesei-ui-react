import { FormProps } from '@forms/default'

export interface FormCheckYourEmailProps extends Omit<FormProps, 'children'> {
  isLoading: boolean
  isError: boolean
  email: string
  onBack: () => void
  onRestore: () => void
}
