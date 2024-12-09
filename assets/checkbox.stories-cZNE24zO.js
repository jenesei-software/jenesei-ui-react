import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{C as c}from"./checkbox.styles-9ARhFGtm.js";import"./styled-components.browser.esm-CCP31c1y.js";import"./loading.styles-92ldLbyd.js";import"./theme-6wvtFABo.js";import"./theme.global-j_wjL8sr.js";import"./icon.styles-ig3CQChh.js";import"./base.styles-BarGonPG.js";import"./typography-3k44A8Yn.js";import"./index-rCr475hU.js";import"./typography.functions-_Xr-RK7k.js";const L={component:c,title:"Component/Checkbox",tags:["autodocs"]},l=e=>{const[d,s]=a.useState(e.checked??!1);return a.useEffect(()=>{s(e.checked??!1)},[e.checked]),n.jsx(c,{...e,checked:d,onChange:m=>s(m)})},r={render:e=>n.jsx(l,{...e}),args:{genre:"gray",view:"Square",checked:!0,children:"First",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isHiddenBorder:!1}};var o,t,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const S=["Checkbox"];export{r as Checkbox,S as __namedExportsOrder,L as default};
