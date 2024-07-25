# jenesei-react-ui

This is a frontend library for React from Jenesei Software.

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

# IMPORTANT

## Установка зависимостей

Для корректной работы вам необходимо установить следующие зависимости:

```bash
npm install @emotion/styled --save
npm install @fontsource/inter --save
npm install @tanstack/react-virtual --save
npm install gsap --save
npm install react --save
npm install react-currency-input-field --save
npm install react-dom --save
npm install react-hook-form --save
npm install react-loading --save
npm install react-loading-skeleton --save
npm install react-number-format --save
npm install react-toggle --save
npm install styled-components --save
npm install styled-reset --save
```
