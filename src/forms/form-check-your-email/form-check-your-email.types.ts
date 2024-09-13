import { Moment } from 'moment'

import { FormProps } from '@forms/default'

export interface FormCheckYourEmailProps extends Omit<FormProps, 'children' | 'handleSubmit'> {
  isLoading: boolean
  isError: boolean
  errorMessage?: string
  email: string
  onRestore: () => void
  onSubmit: (field: { code: string }) => void | Promise<void>
  date: Moment
  minutes: number
  onComplete: () => void
}
