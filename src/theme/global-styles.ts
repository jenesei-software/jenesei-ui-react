import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset};

  :root {
    --font-family: Inter, Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-weight-normal: 400;
    --line-height: 1.5;
    --scrollbar-width: 24px;
    --scrollbar-background: #f3f5f7;
    --scrollbar-thumb-background: #b7cbd7;
    --scrollbar-thumb-border: 8px solid #f3f5f7;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    overflow: hidden;
    overflow-y: auto;
    max-width: 100vw;
  }

  @media screen and (max-width: 1024px) {
    body:has(.LayoutModal) {
      overflow: hidden !important;
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    appearance: none;
    transform: translate(0px);
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }

  ::-webkit-scrollbar {
    width: var(--scrollbar-width);
    height: var(--scrollbar-width);
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: calc(var(--scrollbar-width) / 2);
    background: var(--scrollbar-thumb-background);
    border: var(--scrollbar-thumb-border);
    background-clip: padding-box;
  }
`
