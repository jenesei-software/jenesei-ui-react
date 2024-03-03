import { InputStringProps } from '../../main'

export interface InputCodeProps extends InputStringProps {
  value: string
  length: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
}
