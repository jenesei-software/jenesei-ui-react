# jenesei-ui-react

This is a frontend library for React from Jenesei Software. Test.

## Customize the theme

To use themes in your application, create a declaration themes file and extend `styled-comments` as follows:

```typescript
// styled.d.ts
import 'styled-components';
import { IJeneseiTheme } from '@jenesei-software/jenesei-ui-react';

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {
    // Your additional theme properties
  }
}

```

Import `JeneseiTheme` and `JeneseiGlobalStyles` from our library and apply them in the root component of your application:

```typescript
// app.tsx
import {
  JeneseiGlobalStyles,
  JeneseiTheme,
} from '@jenesei-software/jenesei-ui-react'

import 'react-ripple-click/dist/index.css'
import 'react-toggle/style.css'

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
import '@jenesei-software/jenesei-ui-react'

declare module '@jenesei-software/jenesei-ui-react' {
  export interface ValidCookieObject {
    access_token: string
    refresh_token: string
  }
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
npm install react --save
npm install react-dom --save
npm install styled-components --save
```
