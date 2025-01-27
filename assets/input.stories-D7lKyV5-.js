import{j as t}from"./theme-DVxtux_W.js";import{r as I}from"./index-CnY36iC1.js";import{I as j}from"./input.styles-BFbRpvav.js";import"./typography-BeMVh0jT.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./proxy-Dmzr5kG1.js";import"./typography.functions-4q7AKkEp.js";import"./theme.global-wZO4Grut.js";const R={component:j,title:"Component/Input"},n={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},E=e=>{const[b,k]=I.useState("");return t.jsxDEV(j,{...e,value:b,onChange:w=>k(w)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:23,columnNumber:10},void 0)},r={render:e=>t.jsxDEV(E,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:26,columnNumber:19},void 0),args:{...n,type:"password",errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Password"}},s={render:e=>t.jsxDEV(E,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input/input.stories.tsx",lineNumber:36,columnNumber:19},void 0),args:{...n,format:"+7 (9##) ###-##-##",mask:"_",formatType:"tel",placeholder:"Phone"}},a={args:{...n,format:"### ### ### ###",placeholder:"INN",mask:"",formatType:"text"}},o={args:{...n,format:"# # # #",placeholder:"Code",mask:"_",formatType:"text"}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,f,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text'
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,N,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text'
  }
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const W=["Password","Phone","INN","Code"];export{o as Code,a as INN,r as Password,s as Phone,W as __namedExportsOrder,R as default};
