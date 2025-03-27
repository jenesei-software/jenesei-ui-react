import{j as n}from"./theme-DVxtux_W.js";import{r as I}from"./index-CnY36iC1.js";import{I as j}from"./input.styles-CWQQ3XqK.js";import"./error.styles-C-xkUJAX.js";import"./typography.functions-CWlWgfdK.js";import"./typography-eKbfPWa3.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./add.styles-B_8-z0Fm.js";import"./proxy-BgqLTuwE.js";import"./context-dialog.constants-Blzdygk7.js";import"./index-Blb9MfSb.js";import"./theme.global-C_7ReLae.js";const q={component:j,title:"Component/Input"},t={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},E=e=>{const[b,k]=I.useState("");return n.jsxDEV(j,{...e,value:b,onChange:w=>k(w)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:23,columnNumber:10},void 0)},r={render:e=>n.jsxDEV(E,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:26,columnNumber:19},void 0),args:{...t,type:"password",errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Password"}},s={render:e=>n.jsxDEV(E,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:36,columnNumber:19},void 0),args:{...t,format:"+7 (9##) ###-##-##",mask:"_",formatType:"tel",placeholder:"Phone"}},o={args:{...t,format:"### ### ### ###",placeholder:"INN",mask:"",formatType:"text"}},a={args:{...t,format:"# # # #",placeholder:"Code",mask:"_",formatType:"text"}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Password'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,d,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    format: '+7 (9##) ###-##-##',
    mask: '_',
    formatType: 'tel',
    placeholder: 'Phone'
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,f,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,N,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text'
  }
}`,...(x=(N=a.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const z=["Password","Phone","INN","Code"];export{a as Code,o as INN,r as Password,s as Phone,z as __namedExportsOrder,q as default};
