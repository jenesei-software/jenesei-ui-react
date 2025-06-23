import { CSSObject, DefaultTheme } from 'styled-components'

import { TJeneseiDevice } from '@local/theme'
import { AddDollarSign } from '@local/types'

export interface addSXProps {
  sx?: SXProps
}
export type SXProps =
  | ({
      default: CSSObject
    } & {
      [K in TJeneseiDevice]?: CSSObject
    })
  | ((theme: DefaultTheme) => {
      default: CSSObject
    } & {
      [K in TJeneseiDevice]?: CSSObject
    })

export type addSXStyleProps = AddDollarSign<addSXProps>
