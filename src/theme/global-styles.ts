import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset};
  :root {
  font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  font-synthesis: none;
  font-weight: 400;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  max-width: 100dvw;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
}

@media screen and (max-width: 1024px) {
  body:has(.LayoutModal) {
    overflow: hidden !important;
  }
}

input[type='checkbox'] {
  appearance: none;
}
input[type='checkbox'],
input[type='radio'] {
  transform: translate(0px);
}

input[type='time']::-webkit-calendar-picker-indicator {
  background: none;
}

& ::-webkit-scrollbar {
    height: 24px;
    width: 24px;
  }

& ::-webkit-scrollbar-track {
  background: #f3f5f7;
}

& ::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background: #b7cbd7;
  border: 8px solid #f3f5f7;
  background-clip: border-box;
}
`
