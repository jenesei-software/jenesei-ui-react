import { CSSProperties, ReactElement } from 'react'

import { TDateGenre } from '@components/date'

import { TJeneseiThemeSize } from '@theme/index'

export interface FormProps {
  width?: string
  handleSubmit?: () => void
  size?: TJeneseiThemeSize
  genre?: TDateGenre
  children?: ReactElement
  style?: CSSProperties
  variant?: 'sign'
}

export interface WrapperFormProps {
  $width?: FormProps['width']
  $genre?: FormProps['genre']
  $variant?: FormProps['variant']
}
