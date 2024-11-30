import { AddDollarSign } from 'src/types'

import { FlexShortStylesProps } from '@components/stack'

type DefaultScrollProps = {
  vertical?: boolean
  horizontal?: boolean
  isAlwaysVertical?: boolean
  isAlwaysHorizontal?: boolean
}

export type ScrollProps = FlexShortStylesProps & DefaultScrollProps
export type StyledScrollProps = FlexShortStylesProps & AddDollarSign<DefaultScrollProps>
