import { CSSProperties, PropsWithChildren } from 'react'

import { TDateGenre } from '@components/date'

import { TJeneseiThemeSize } from '@theme/index'

export interface FormProps extends PropsWithChildren {
  width?: string
  handleSubmit?: () => void
  size?: TJeneseiThemeSize
  genre?: TDateGenre
  style?: CSSProperties
  variant?: 'sign'
}

export interface WrapperFormProps {
  $width?: FormProps['width']
  $genre?: FormProps['genre']
  $variant?: FormProps['variant']
}
