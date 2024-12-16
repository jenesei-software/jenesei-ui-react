import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{C as c}from"./checkbox.styles-DxUYgx_a.js";import"./styled-components.browser.esm-CCP31c1y.js";import"./loading.styles-_WGkLspa.js";import"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import"./icon.styles-CWbskPAg.js";import"./base.styles-CKuPPCfG.js";import"./typography-DCobQ7y0.js";import"./index-rCr475hU.js";import"./typography.functions-CeSMEUjp.js";const L={component:c,title:"Component/Checkbox"},l=e=>{const[d,s]=a.useState(e.checked??!1);return a.useEffect(()=>{s(e.checked??!1)},[e.checked]),t.jsx(c,{...e,checked:d,onChange:m=>s(m)})},r={render:e=>t.jsx(l,{...e}),args:{genre:"gray",view:"Square",checked:!0,children:"First",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isHiddenBorder:!1}};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <CheckboxWrapper {...args} />,
  args: {
    genre: 'gray',
    view: 'Square',
    checked: true,
    children: 'First',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const S=["Checkbox"];export{r as Checkbox,S as __namedExportsOrder,L as default};
