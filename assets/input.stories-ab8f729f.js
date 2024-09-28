import{j as e}from"./styled-components.browser.esm-028b5a71.js";import{r as R}from"./index-ff614419.js";import{S as p,I as o}from"./icon.styles-d3024de5.js";import{I}from"./input.styles-62b8acb5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./modal-loading.styles-b2147eb5.js";import"./typography-62fdeef1.js";import"./index-4da86cf0.js";import"./typography.functions-dcbec177.js";const _={component:I,title:"Input"},i={genre:"gray",size:"medium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},k=r=>{const[j,S]=R.useState("");return e.jsx(I,{...r,value:j,onChange:w=>S(w)})},n={render:r=>e.jsx(k,{...r}),args:{...i,type:"password",isError:!0,errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Password",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(o,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Password"})})}}},t={render:r=>e.jsx(k,{...r}),args:{...i,format:"+7 (9##) ###-##-##",mask:"_",formatType:"tel",placeholder:"Phone",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(o,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Call"})})}}},a={args:{...i,format:"### ### ### ###",placeholder:"INN",mask:"",formatType:"text",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(o,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"ShieldDone"})})}}},s={args:{...i,format:"# # # #",placeholder:"Code",mask:"_",formatType:"text",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(o,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Chat"})})}}};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
    isError: true,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Password',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: <Stack alignItems={'center'} justifyContent={'center'} p={'2px'} style={{
        borderRadius: '0px 6px 6px 0px'
      }} bg={'black60'} minH={'100%'} h={'100%'}>
          <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Password'} />
        </Stack>
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,x,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    format: '+7 (9##) ###-##-##',
    mask: '_',
    formatType: 'tel',
    placeholder: 'Phone',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: <Stack alignItems={'center'} justifyContent={'center'} p={'2px'} style={{
        borderRadius: '0px 6px 6px 0px'
      }} bg={'black60'} minH={'100%'} h={'100%'}>
          <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Call'} />
        </Stack>
    }
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,h,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: 'INN',
    mask: '',
    formatType: 'text',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: <Stack alignItems={'center'} justifyContent={'center'} p={'2px'} style={{
        borderRadius: '0px 6px 6px 0px'
      }} bg={'black60'} minH={'100%'} h={'100%'}>
          <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'ShieldDone'} />
        </Stack>
    }
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,C,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: 'Code',
    mask: '_',
    formatType: 'text',
    postfixChildren: {
      width: '32px',
      left: '4px',
      right: '0px',
      children: <Stack alignItems={'center'} justifyContent={'center'} p={'2px'} style={{
        borderRadius: '0px 6px 6px 0px'
      }} bg={'black60'} minH={'100%'} h={'100%'}>
          <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Chat'} />
        </Stack>
    }
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const D=["Password","Phone","INN","Code"];export{s as Code,a as INN,n as Password,t as Phone,D as __namedExportsOrder,_ as default};
