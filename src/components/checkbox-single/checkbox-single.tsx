import { CheckboxSingleProps, CheckboxSingleWrapper } from '.'
import { Checkbox } from '../../main'
import { FC } from 'react'

export const CheckboxSingle: FC<CheckboxSingleProps> = (props) => {
  return (
    <CheckboxSingleWrapper
      onClick={() => props.onChange && props.onChange(!props.value)}
      className={props?.className}
    >
      <Checkbox {...props.checkbox} genre={props.genre} checked={props.value} />
      {props.content && props.content}
    </CheckboxSingleWrapper>
  )
}
