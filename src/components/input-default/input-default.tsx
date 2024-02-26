import { InputDefaultProps, StyledUIInputDefault } from '.'
import React from 'react'
import { FC } from 'react'

export const InputDefault: FC<InputDefaultProps> = (props) => {
  return (
    <StyledUIInputDefault
      $prefixWidth={props.prefixContent && props.prefixContent.width}
      $prefixLeft={props.prefixContent && props.prefixContent.left}
      $prefixRight={props.prefixContent && props.prefixContent.right}
      $isError={props.isError}
      disabled={props.disabled}
      step={props.step}
      readOnly={props.readOnly}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
    />
  )
}
