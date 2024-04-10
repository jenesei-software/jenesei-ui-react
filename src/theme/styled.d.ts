import 'styled-components'

import { IJeneseiTheme } from '../main'

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {}
}
