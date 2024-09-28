import{l as s,f as a}from"./styled-components.browser.esm-028b5a71.js";import{J as n}from"./theme-8055a2b2.js";var r=globalThis&&globalThis.__makeTemplateObject||function(e,i){return Object.defineProperty?Object.defineProperty(e,"raw",{value:i}):e.raw=i,e},l=s(t||(t=r([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));a(o||(o=r(["",""],["",""])),l);var t,o;const b=a`
  ${l};
  
  .sb-show-main.sb-main-padded {
    padding:0;
  }

  :root {
    --font-family:  ${e=>e.theme.fontFamily}, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --font-weight: 400;
    --font-size: 16px;
    --font-line-height: 1;
    --scrollbar-width: 16px;
    --scrollbar-background: ${n.black05};
    --scrollbar-thumb-background: ${n.black10};
    --scrollbar-thumb-border: 1px solid ${n.black05};

    --heading-1-font-size: 2.5rem; 
    --heading-2-font-size: 2.25rem;
    --heading-3-font-size: 2rem;
    --heading-4-font-size: 1.75rem; 
    --heading-5-font-size: 1.5rem; 
    --heading-6-font-size: 1.25rem;
    --heading-7-font-size: 1rem; 
    --heading-8-font-size: 0.75rem; 
    --heading-9-font-size: 0.5rem; 

    --heading-line-height: normal;

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
    transition: font-size ${e=>e.theme.transition};
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
    line-height: var(--heading-line-height);
    margin: 0;
  }

  h2 {
    font-size: var(--heading-2-font-size);
    line-height: var(--heading-line-height);
    margin: 0;
  }

  h3 {
    font-size: var(--heading-3-font-size);
    line-height: var(--heading-line-height);
    margin: 0;
  }

  h4 {
    font-size: var(--heading-4-font-size);
    line-height: var(--heading-line-height);
    margin: 0;
  }

  h5 {
    font-size: var(--heading-5-font-size);
    line-height: var(--heading-line-height);
    margin: 0;
  }

  h6 {
    font-size: var(--heading-6-font-size);
    line-height: var(--heading-line-height);
    margin: 0;
  }


  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    :root {
      --font-size: 14px;
    }
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    :root {
      --font-size: 12px;
    }
  }
`;export{b as J};
