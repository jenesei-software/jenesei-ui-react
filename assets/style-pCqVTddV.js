import{l as e}from"./styled-components.browser.esm-CyaOpMkv.js";const i=e`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-horizontal {
    display: none;
  }

  &::-webkit-scrollbar-vertical {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,a=e`
  transition:
    outline 0s,
    opacity ${t=>t.theme.transition.default},
    transform ${t=>t.theme.transition.default},
    background-color ${t=>t.theme.transition.default},
    height ${t=>t.theme.transition.default},
    max-height ${t=>t.theme.transition.default},
    width ${t=>t.theme.transition.default},
    color ${t=>t.theme.transition.default},
    visibility ${t=>t.theme.transition.default},
    box-shadow ${t=>t.theme.transition.default},
    border-color ${t=>t.theme.transition.default},
    left ${t=>t.theme.transition.default},
    right ${t=>t.theme.transition.default},
    grid-template-areas ${t=>t.theme.transition.default},
    grid-template-rows ${t=>t.theme.transition.default},
    grid-template-columns ${t=>t.theme.transition.default};
`,n=e`
  transition:
    outline 0s,
    opacity ${t=>t.theme.transition.default},
    transform ${t=>t.theme.transition.default},
    background-color ${t=>t.theme.transition.default},
    color ${t=>t.theme.transition.default},
    visibility ${t=>t.theme.transition.default},
    box-shadow ${t=>t.theme.transition.default},
    border-color ${t=>t.theme.transition.default},
    left ${t=>t.theme.transition.default},
    right ${t=>t.theme.transition.default},
    grid-template-areas ${t=>t.theme.transition.default},
    grid-template-rows ${t=>t.theme.transition.default},
    grid-template-columns ${t=>t.theme.transition.default};
`,s=e`
  transition:
    grid-template-areas ${t=>t.theme.transition.default},
    grid-template-rows ${t=>t.theme.transition.default},
    grid-template-columns ${t=>t.theme.transition.default};
`,r=e`
  transition:
    outline 0s,
    opacity ${t=>t.theme.transition.default},
    background-color ${t=>t.theme.transition.default},
    color ${t=>t.theme.transition.default},
    box-shadow ${t=>t.theme.transition.default},
    border-color ${t=>t.theme.transition.default};
`,l=e`
  outline: 2px solid transparent;
  outline-offset: 1px;
  &:focus-visible {
    outline: 2px solid ${t=>t.theme.colors.focus};
  }
`,d=e`
  border: 1px solid transparent;
  &:focus-visible {
    border-color: ${t=>t.theme.colors.focus};
  }
`,m=e`
  outline: 0px solid transparent;
  outline-offset: 0px;
  &:focus-visible {
    outline: 0px solid ${t=>t.theme.colors.focus};
  }
`,u=e`
  ${t=>t.$customFontFamily&&e`
      font-family: ${t.$customFontFamily};
    `};
  ${t=>t.$customFontSize&&e`
      font-size: ${t.$customFontSize};
    `};
  ${t=>t.$customFontWeight&&e`
      font-weight: ${t.$customFontWeight};
    `};
`;export{a,l as b,u as c,i as d,n as e,s as f,r as g,m as h,d as i};
