# jenesei-react-ui

This is a frontend library for React from Jenesei Software.

## Настройка темы

Для использования темы в вашем приложении, создайте файл с декларацией темы и расширьте `styled-components` следующим образом:

```typescript
// styled.d.ts
import 'styled-components';
import { IJeneseiTheme } from '@jenesei-software/jenesei-ui-react';

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {
    // Ваши дополнительные свойства темы
  }
}

```

Импортируйте `JeneseiTheme` и `JeneseiGlobalStyles` из нашей библиотеки и примените их в корневом компоненте вашего приложения:

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
        {/* Ваши компоненты */}
      </ThemeProvider>
    ...
  )
}
```

## Дополнительная информация

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
