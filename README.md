# jenesei-ui-react

This is a frontend library for React from Jenesei Software. Test.

## Customize the theme

To use themes in your application, create a declaration themes file and extend `styled-comments` as follows:

```typescript
// styled-components.d.ts
import { IJeneseiTheme } from '@jenesei-software/jenesei-ui-react/style-theme'
import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IJeneseiTheme {}
}
```

Import `JeneseiTheme` and `JeneseiGlobalStyles` from our library and apply them in the root component of your application:

```typescript
// app.tsx
import { JeneseiGlobalStyles, JeneseiTheme } from '@jenesei-software/jenesei-ui-react/style-theme'


import '@fontsource/inter/100.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

function App() {
  return (
    ...
      <ThemeProvider theme={JeneseiTheme}>
        <JeneseiGlobalStyles />
        {/* Your components */}
      </ThemeProvider>
    ...
  )
}
```

## Customize the cookie and local storage

```typescript
//jenesei-ui-react.d.ts
import '@jenesei-software/jenesei-ui-react/context-cookie'
import '@jenesei-software/jenesei-ui-react/context-local-storage'

declare module '@jenesei-software/jenesei-ui-react/context-cookie' {
  export interface ValidCookieObject {
    access_token: string
    refresh_token: string
  }
}
declare module '@jenesei-software/jenesei-ui-react/context-local-storage' {
  export interface ValidLocalStorageObject {
    access_token: string
    refresh_token: string
  }
}
```

# IMPORTANT


## Installing dependencies

To work correctly you need to install the following dependencies:

```bash
npm install @tanstack/react-router --save
npm install react --save
npm install react-dom --save
npm install react-helmet-async --save
npm install styled-components --save
```
