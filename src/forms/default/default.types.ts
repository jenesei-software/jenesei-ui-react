import { CSSProperties, PropsWithChildren } from 'react'

export interface FormProps extends PropsWithChildren {
  width?: string
  handleSubmit?: () => void
  style?: CSSProperties
}

export interface WrapperFormProps {
  $width?: FormProps['width']
}
