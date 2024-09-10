import { CSSProperties, PropsWithChildren } from 'react'

export interface AuthLayoutProps extends PropsWithChildren {
  backUrl: string
  style?: CSSProperties
}

export interface AuthLayoutWrapperBackgroundProps {
  $backUrl: AuthLayoutProps['backUrl']
}