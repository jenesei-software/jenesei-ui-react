import { CSSProperties, PropsWithChildren } from 'react'

import { AddDollarSign } from '@local/types'

export interface AuthLayoutProps extends PropsWithChildren {
  backUrl: string
  backUrlWebp: string
  style?: CSSProperties
}

export type AuthLayoutWrapperBackgroundProps = AddDollarSign<Pick<AuthLayoutProps, 'backUrl'>>
