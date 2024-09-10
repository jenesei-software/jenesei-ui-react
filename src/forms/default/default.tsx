import { FC } from 'react'

import { FormProps, WrapperForm } from '.'

export const Form: FC<FormProps> = (props) => {
  return (
    <WrapperForm
      $width={props.width}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (props.handleSubmit) props.handleSubmit()
      }}
      style={props.style}
    >
      {props.children}
    </WrapperForm>
  )
}
