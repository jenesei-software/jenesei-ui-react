import { Moment } from 'moment'

import { FormProps } from '@forms/default'

export interface FormCheckYourEmailProps
  extends Omit<FormProps, 'children' | 'handleSubmit'> {
  isLoading: boolean
  isError: boolean
  isLoadingCodeAgain: boolean
  isDisabledCodeAgain: boolean
  errorMessage?: string
  email: string
  attemptNumber: number
  isLastAttempt: boolean
  onRestore: () => void
  onSubmit: (field: { code: string }) => void | Promise<void>
  date: Moment
  minutes: number
  onComplete: () => void
}
