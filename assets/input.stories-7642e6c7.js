import{j as n}from"./styled-components.browser.esm-028b5a71.js";import{r as k}from"./index-ff614419.js";import{I as y}from"./input.styles-3432116f.js";import"./modal-loading.styles-b2147eb5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./typography-193d1fd6.js";import"./index-4da86cf0.js";import"./typography.functions-dcbec177.js";const W={component:y,title:"Input"},t={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},E=r=>{const[N,P]=k.useState("");return n.jsx(y,{...r,value:N,onChange:S=>P(S)})},e={render:r=>n.jsx(E,{...r}),args:{...t,type:"password",errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Password"}},s={render:r=>n.jsx(E,{...r}),args:{...t,format:"+7 (9##) ###-##-##",mask:"_",formatType:"tel",placeholder:"Phone"}},a={args:{...t,format:"### ### ### ###",placeholder:"INN",mask:"",formatType:"text"}},o={args:{...t,format:"# # # #",placeholder:"Code",mask:"_",formatType:"text"}};var p,m,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Password'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    format: '+7 (9##) ###-##-##',
    mask: '_',
    formatType: 'tel',
    placeholder: 'Phone'
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text'
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const O=["Password","Phone","INN","Code"];export{o as Code,a as INN,e as Password,s as Phone,O as __namedExportsOrder,W as default};
