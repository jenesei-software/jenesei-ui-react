import { FlexShortStylesProps } from '@local/components/stack'
import { AddDollarSign } from '@local/types'

type DefaultScrollProps = {
  vertical?: boolean
  horizontal?: boolean
  isAlwaysVertical?: boolean
  isAlwaysHorizontal?: boolean
}

export type ScrollProps = FlexShortStylesProps & DefaultScrollProps
export type StyledScrollProps = FlexShortStylesProps & AddDollarSign<DefaultScrollProps>
