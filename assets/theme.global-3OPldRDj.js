import{l as h,f as o}from"./styled-components.browser.esm-CCP31c1y.js";var a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},l=h(n||(n=a([`
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
`])));o(i||(i=a(["",""],["",""])),l);var n,i;const r=o`
  ${l};
  
  .sb-show-main.sb-main-padded {
    padding:0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${e=>e.theme.font.sizeDefault.default}px;
    font-family: ${e=>e.theme.font.family}, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: ${e=>e.theme.font.weight};
    line-height: ${e=>e.theme.font.lineHeight};
    transition: font-size ${e=>e.theme.transition.default};
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
    width: ${e=>e.theme.scrollbar.width}px;
    height: ${e=>e.theme.scrollbar.width}px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.scrollbar.background};
  }

  ::-webkit-scrollbar-thumb {
    background:  ${e=>e.theme.scrollbar.thumb};
    border: ${e=>e.theme.scrollbar.thumbBorder};
    background-clip: padding-box;
  }

  h1 {
    font-size:  ${e=>e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }

  h2 {
    font-size: ${e=>e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }

  h3 {
    font-size: ${e=>e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }

  h4 {
    font-size: ${e=>e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }

  h5 {
    font-size: ${e=>e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }

  h6 {
    font-size: v${e=>e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault.default}px;
    line-height: ${e=>e.theme.font.lineHeight};
    margin: 0;
  }


  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    h1 {
      font-size:  ${e=>e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault.tablet}px;
    }

    h2 {
      font-size: ${e=>e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault.tablet}px;
    }

    h3 {
      font-size: ${e=>e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault.tablet}px;
    }

    h4 {
      font-size: ${e=>e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault.tablet}px;
    }

    h5 {
      font-size: ${e=>e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault.tablet}px;
    }

    h6 {
      font-size: v${e=>e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault.tablet}px;
    }
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    h1 {
      font-size:  ${e=>e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault.mobile}px;
    }

    h2 {
      font-size: ${e=>e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault.mobile}px;
    }

    h3 {
      font-size: ${e=>e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault.mobile}px;
    }

    h4 {
      font-size: ${e=>e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault.mobile}px;
    }

    h5 {
      font-size: ${e=>e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault.mobile}px;
    }

    h6 {
      font-size: v${e=>e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault.mobile}px;
    }
  }
`;export{r as J};
