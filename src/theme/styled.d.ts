import { IJeneseiTheme } from '.'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {}
}
