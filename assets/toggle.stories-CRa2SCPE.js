import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{T as m}from"./toggle.styles-C0AOjq0c.js";import"./styled-components.browser.esm-CCP31c1y.js";import"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import"./index-C20QuurF.js";const j={component:m,title:"Component/Toggle"},u=e=>{const[g,s]=a.useState(!1);return a.useEffect(()=>{s(e.value??!1)},[e.value]),l.jsx(m,{...e,value:g,onChange:p=>s(p)})},r={render:e=>l.jsx(u,{...e}),args:{genre:"product",isDisabled:!1,value:!0,size:"small"}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const E=["Toggle"];export{r as Toggle,E as __namedExportsOrder,j as default};
