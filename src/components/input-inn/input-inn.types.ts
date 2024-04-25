import { InputDefaultProps } from '../../main'

export interface InputINNProps extends InputDefaultProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
}
