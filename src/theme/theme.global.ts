import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { JeneseiThemeVariables } from '.'

export const JeneseiGlobalStyles = createGlobalStyle`
  ${reset};
  
  .sb-show-main.sb-main-padded {
    /* padding:0; */
  }

  :root {
    --font-family:  ${(props) => props.theme.fontFamily}, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-weight: 400;
    --font-size: 16px;
    --font-line-height: 1;
    --scrollbar-width: 16px;
    --scrollbar-background: ${JeneseiThemeVariables.black05};
    --scrollbar-thumb-background: ${JeneseiThemeVariables.black10};
    --scrollbar-thumb-border: 2px solid ${JeneseiThemeVariables.black05};

    --heading-1-font-size: 2.5rem; 
    --heading-2-font-size: 2rem; 
    --heading-3-font-size: 1.75rem;
    --heading-4-font-size: 1.5rem;
    --heading-5-font-size: 1.25rem; 
    --heading-6-font-size: 1rem; 

    --heading-1-line-height: 1;
    --heading-2-line-height: 1;
    --heading-3-line-height: 1;
    --heading-4-line-height: 1;
    --heading-5-line-height: 1;
    --heading-6-line-height: 1;

    --Ripple-custom-opacity: 0.2;
	  --Ripple-custom-duration: 0.6s;
	  --Ripple-custom-timing-function: ease-in;
	  --Ripple-custom-color: currentColor;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--font-size);
    font-family: var(--font-family);
    font-weight: var(--font-weight-normal);
    line-height: var(--font-line-height);
    transition: font-size ${(props) => props.theme.transition};
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    max-width: 100dvw;
    height: 100%;
  }

  html, body {
    touch-action: manipulation; 
    -ms-touch-action: manipulation; 
    overscroll-behavior: none; 
    margin: 0;
    padding: 0;
  } 

  html, body, #root {
    -webkit-overflow-scrolling: auto;
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
    background: var(--scrollbar-thumb-background);
    border: var(--scrollbar-thumb-border);
    background-clip: padding-box;
  }

  h1 {
    font-size: var(--heading-1-font-size);
    line-height: var(--heading-1-line-height);
    margin: 0;
  }

  h2 {
    font-size: var(--heading-2-font-size);
    line-height: var(--heading-2-line-height);
    margin: 0;
  }

  h3 {
    font-size: var(--heading-3-font-size);
    line-height: var(--heading-3-line-height);
    margin: 0;
  }

  h4 {
    font-size: var(--heading-4-font-size);
    line-height: var(--heading-4-line-height);
    margin: 0;
  }

  h5 {
    font-size: var(--heading-5-font-size);
    line-height: var(--heading-5-line-height);
    margin: 0;
  }

  h6 {
    font-size: var(--heading-6-font-size);
    line-height: var(--heading-6-line-height);
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    :root {
      --heading-1-font-size: 1.75rem; 
      --heading-2-font-size: 1.5rem;
      --heading-3-font-size: 1.25rem; 
      --heading-4-font-size: 1rem; 
      --heading-5-font-size: 0.875rem; 
      --heading-6-font-size: 0.75rem; 
    }
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    :root {
      --heading-1-font-size: 1.5rem; 
      --heading-2-font-size: 1.25rem;
      --heading-3-font-size: 1rem;
      --heading-4-font-size: 0.875rem; 
      --heading-5-font-size: 0.75rem; 
      --heading-6-font-size: 0.625rem;
    }
  }
`
