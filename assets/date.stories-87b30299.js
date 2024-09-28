import{j as m}from"./styled-components.browser.esm-028b5a71.js";import{h as e}from"./moment-a9aaa855.js";import{r as f}from"./index-ff614419.js";import{D as p}from"./date.styles-235983f5.js";import"./index-7d9a9c74.js";import"./button-a8373048.js";import"./icon.styles-d3024de5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./modal-loading.styles-b2147eb5.js";import"./typography-62fdeef1.js";import"./index-4da86cf0.js";import"./typography.functions-dcbec177.js";import"./input.styles-62b8acb5.js";import"./select.styles-43c2d1f6.js";import"./checkbox.styles-d5776580.js";const b={component:p,title:"DatePicker"},g=t=>{const n=e.utc().subtract(100,"years").startOf("year").valueOf(),i=e.utc().add(1,"year").startOf("year").valueOf(),[c,u]=f.useState(e.utc().startOf("day").valueOf()),d=l=>{u(l)};return m.jsx(p,{...t,placeholder:"Month",value:c,onChange:d,startDate:n,endDate:i})},r={render:t=>m.jsx(g,{...t}),args:{size:"medium",genre:"gray",width:"300px"}};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px'
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,b as default};
