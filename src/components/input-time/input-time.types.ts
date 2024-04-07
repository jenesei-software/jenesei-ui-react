import { InputDefaultProps } from '../../main'

export interface InputTimeProps {
  className?: string
  input: InputDefaultProps
  onChange?: (minutes: number) => void
  isShowMinutes?: boolean
}
