import{j as t}from"./styled-components.browser.esm-028b5a71.js";import{r as a}from"./index-ff614419.js";import{C as c}from"./checkbox.styles-6aa4778c.js";import"./modal-loading.styles-b2147eb5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./icon.styles-0c25b35e.js";import"./typography-193d1fd6.js";import"./index-4da86cf0.js";import"./typography.functions-dcbec177.js";const y={component:c,title:"Checkbox/Checkbox"},l=e=>{const[d,s]=a.useState(e.checked??!1);return a.useEffect(()=>{s(e.checked??!1)},[e.checked]),t.jsx(c,{...e,checked:d,onChange:m=>s(m)})},r={render:e=>t.jsx(l,{...e}),args:{genre:"gray",view:"Square",checked:!0,children:"First",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isHiddenBorder:!1}};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const E=["Checkbox"];export{r as Checkbox,E as __namedExportsOrder,y as default};
