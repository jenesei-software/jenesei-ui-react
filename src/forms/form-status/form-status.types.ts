import { FormProps } from '@forms/default'

export interface FormStatusProps extends Omit<FormProps, 'children' | 'handleSubmit'> {
  status: 'success' | 'fail'
  onBack: () => void
  onRestore: () => void
  isError: boolean
}
