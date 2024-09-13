import '@jenesei-software/jenesei-web-id-api'
import { ErrorResponse } from '@jenesei-software/jenesei-web-id-api'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<ErrorResponse>
  }
}
