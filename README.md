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
    token: string
  }
  export interface ValidLocalStorageObject {
    token: number
  }
}
```

# IMPORTANT


## Installing dependencies

To work correctly you need to install the following dependencies:

```bash
npm install @emotion/styled --save
npm install @tanstack/react-form --save
npm install @tanstack/react-virtual --save
npm install @tanstack/zod-form-adapter --save
npm install @types/js-cookie --save
npm install @types/react-helmet --save
npm install country-list-with-dial-code-and-flag --save
npm install gsap --save
npm install js-cookie --save
npm install react --save
npm install react-currency-input-field --save
npm install react-dom --save
npm install react-helmet --save
npm install react-hook-form --save
npm install react-i18next --save
npm install react-loading --save
npm install react-loading-skeleton --save
npm install react-number-format --save
npm install react-ripple-click --save
npm install react-toggle --save
npm install styled-components --save
npm install styled-reset --save
npm install zod --save
```
