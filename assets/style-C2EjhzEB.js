import{l as c}from"./styled-components.browser.esm-CyaOpMkv.js";function s(t,e){const n=typeof t=="function"?t(e):t;return c(n)}const l=c`
  ${t=>{const e=t.$sx;if(!e)return null;const n=typeof e=="function"?e(t.theme):e;return s(n.default,t.theme)}}

  ${t=>{const e=t.$sx;if(!e)return null;const n=typeof e=="function"?e(t.theme):e;return Object.entries(n).filter(([r])=>r!=="default").map(([r,u])=>{var i;const f=(i=t.theme.screens[r])==null?void 0:i.width;return f?c`
          @media (max-width: ${f}) {
            ${s(u,t.theme)}
          }
        `:null})}}
`;export{l as a};
