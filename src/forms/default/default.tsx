import { FC } from 'react'

import { FormProps, WrapperForm } from '.'

export const Form: FC<FormProps> = (props) => {
  const defaultGenre = props.genre

  return (
    <WrapperForm
      $width={props.width}
      $genre={defaultGenre}
      $variant={props.variant}
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
