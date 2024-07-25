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