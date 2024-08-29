import{j as e}from"./theme.global-ac8e1350.js";import{r as R}from"./index-ff614419.js";import{S as p,I as i}from"./icon.styles-9b2ba782.js";import{I}from"./input.styles-c72d9cd9.js";import"./modal-loading.styles-bbd5e16e.js";import"./typography-94c20418.js";import"./index-4da86cf0.js";import"./typography.functions-ddb2bed8.js";const _={component:I,title:"Input"},o={genre:"gray",size:"medium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},k=r=>{const[j,S]=R.useState("");return e.jsx(I,{...r,value:j,onChange:w=>S(w)})},n={render:r=>e.jsx(k,{...r}),args:{...o,type:"password",placeholder:"Password",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(i,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Password"})})}}},t={render:r=>e.jsx(k,{...r}),args:{...o,format:"+7 (9##) ###-##-##",mask:"_",formatType:"tel",placeholder:"Phone",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(i,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Call"})})}}},a={args:{...o,format:"### ### ### ###",placeholder:"INN",mask:"",formatType:"text",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(i,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"ShieldDone"})})}}},s={args:{...o,format:"# # # #",placeholder:"Code",mask:"_",formatType:"text",postfixChildren:{width:"32px",left:"4px",right:"0px",children:e.jsx(p,{alignItems:"center",justifyContent:"center",p:"2px",style:{borderRadius:"0px 6px 6px 0px"},bg:"black60",minH:"100%",h:"100%",children:e.jsx(i,{size:"largeMedium",primaryColor:"grayJanice",type:"curved",name:"Chat"})})}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'password',
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var x,m,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,C,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const A=["Password","Phone","INN","Code"];export{s as Code,a as INN,n as Password,t as Phone,A as __namedExportsOrder,_ as default};
