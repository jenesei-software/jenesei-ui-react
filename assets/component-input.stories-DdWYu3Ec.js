import{j as i}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as j}from"./index-CnY36iC1.js";import{S as D}from"./component-BPa6yCZC.js";import{I as k}from"./component.styles-DSwDte8L.js";import"./style-CHwZntvm.js";import"./component-kqn1VMYM.js";import"./proxy-BS1eh56F.js";import"./jsx-runtime-uV6E1Fxi.js";import"./style-J1eytVMD.js";import"./component.functions-BGGwQnpg.js";import"./component-Dh-bcLtB.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./theme.global-CKNmeFpz.js";import"./index-DgedcAJ4.js";import"./motion-BdlOunNt.js";import"./style-IM99yq-C.js";const J={component:k,title:"Component/Input"},r={genre:"blackBorder",size:"largeMedium",error:{errorMessage:"Большая страшная ошибка на много строк",isError:!0,isErrorAbsolute:!0},isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},A=e=>{const[a,P]=j.useState("");return i.jsxDEV(D,{sx:{default:{position:"relative",height:"fit-content"}},children:i.jsxDEV(k,{...e,value:a,variety:"standard",onChange:b=>P(b)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-input.stories.tsx",lineNumber:34,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-input.stories.tsx",lineNumber:28,columnNumber:10},void 0)},o={render:e=>i.jsxDEV(A,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-input.stories.tsx",lineNumber:38,columnNumber:19},void 0),args:{...r,onChange(e){console.log(e)},variety:"standard",type:"password",placeholder:"Password"}},n={args:{...r,onChange(e){console.log(e)},variety:"pattern",propsPattern:{format:"+7 (9##) ###-##-##",mask:"_",type:"tel"},placeholder:"Phone"}},t={args:{...r,variety:"pattern",onChange(e){console.log(e)},propsPattern:{format:"### ### ### ###",mask:"",type:"text"},placeholder:"INN"}},s={args:{...r,onChange(e){console.log(e)},placeholder:"Code",variety:"pattern",propsPattern:{format:"# # # #",mask:"_",type:"text"}}},l={args:{...r,placeholder:"Cost",variety:"numeric",onChange(e){console.log(e)},propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",fixedDecimalScale:!0,prefix:"$",suffix:" USD",thousandsGroupStyle:"thousand",isAllowed:e=>{const{floatValue:a}=e;return(a??0)>=0&&(a??0)<=1e4}}}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value);
    },
    variety: 'standard',
    type: 'password',
    placeholder: 'Password'
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value);
    },
    variety: 'pattern',
    propsPattern: {
      format: '+7 (9##) ###-##-##',
      mask: '_',
      type: 'tel'
    },
    placeholder: 'Phone'
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variety: 'pattern',
    onChange(value) {
      console.log(value);
    },
    propsPattern: {
      format: '### ### ### ###',
      mask: '',
      type: 'text'
    },
    placeholder: 'INN'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,S,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onChange(value) {
      console.log(value);
    },
    placeholder: 'Code',
    variety: 'pattern',
    propsPattern: {
      format: '# # # #',
      mask: '_',
      type: 'text'
    }
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var N,C,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'Cost',
    variety: 'numeric',
    onChange(value) {
      console.log(value);
    },
    propsNumeric: {
      allowLeadingZeros: false,
      thousandSeparator: ' ',
      allowNegative: false,
      allowedDecimalSeparators: ['.'],
      decimalScale: 2,
      decimalSeparator: ',',
      fixedDecimalScale: true,
      prefix: '$',
      suffix: ' USD',
      thousandsGroupStyle: 'thousand',
      isAllowed: values => {
        const {
          floatValue
        } = values;
        return (floatValue ?? 0) >= 0 && (floatValue ?? 0) <= 10000;
      }
    }
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const K=["Password","Phone","INN","Code","Cost"];export{s as Code,l as Cost,t as INN,o as Password,n as Phone,K as __namedExportsOrder,J as default};
