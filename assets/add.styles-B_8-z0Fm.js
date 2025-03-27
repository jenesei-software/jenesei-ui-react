import{l as e}from"./theme-DVxtux_W.js";const a=e`
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
`,n=e`
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
`,r=e`
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
`,l=e`
  transition:
    outline 0s,
    opacity ${t=>t.theme.transition.default},
    background-color ${t=>t.theme.transition.default},
    color ${t=>t.theme.transition.default},
    box-shadow ${t=>t.theme.transition.default},
    border-color ${t=>t.theme.transition.default};
`,d=e`
  outline: 2px solid transparent;
  outline-offset: 1px;
  &:focus-visible {
    outline: 2px solid ${t=>t.theme.colors.focus};
  }
`,u=e`
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
`,h=e`
  ${t=>t.$isError&&e`
      border-color: ${o=>o.theme.colors.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${o=>o.theme.colors.danger};
      }
    `};
`;export{n as a,h as b,d as c,a as d,r as e,l as f,m as g,u as h,s as i};
