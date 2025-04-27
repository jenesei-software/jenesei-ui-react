import 'styled-components'

import { IJeneseiTheme } from '@local/theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IJeneseiTheme {}
}
