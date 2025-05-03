import { TJeneseiThemeSize } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type ErrorMessagePropsDollar = AddDollarSign<ErrorMessageProps>
export type ErrorMessageProps = {
  errorMessage?: string

  isError?: boolean

  isErrorAbsolute?: boolean

  size: TJeneseiThemeSize

  width?: string
}
export interface addErrorProps {
  $isError?: boolean
}
