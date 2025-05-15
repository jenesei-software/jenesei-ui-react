import{j as w}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as b}from"./index-CnY36iC1.js";import{I as P}from"./component.styles-DN-IJVMO.js";import"./style-DP4WPrh4.js";import"./component.functions-BGGwQnpg.js";import"./component-CXRT2tYE.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context.constants-_uES7CTn.js";import"./style-KtjdfyVq.js";import"./proxy-BgqLTuwE.js";import"./theme-D8gwu-FP.js";import"./theme.global-C6REP-xE.js";const q={component:P,title:"Component/Input"},r={genre:"blackBorder",size:"largeMedium",error:{errorMessage:"Error",isError:!1,isErrorAbsolute:!1},isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,width:"300px"},A=e=>{const[a,k]=b.useState("");return w.jsxDEV(P,{...e,value:a,variety:"standard",onChange:D=>k(D)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-input.stories.tsx",lineNumber:27,columnNumber:10},void 0)},o={render:e=>w.jsxDEV(A,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-input.stories.tsx",lineNumber:30,columnNumber:19},void 0),args:{...r,onChange(e){console.log(e)},variety:"standard",type:"password",placeholder:"Password"}},n={args:{...r,onChange(e){console.log(e)},variety:"pattern",propsPattern:{format:"+7 (9##) ###-##-##",mask:"_",type:"tel"},placeholder:"Phone"}},s={args:{...r,variety:"pattern",onChange(e){console.log(e)},propsPattern:{format:"### ### ### ###",mask:"",type:"text"},placeholder:"INN"}},t={args:{...r,onChange(e){console.log(e)},placeholder:"Code",variety:"pattern",propsPattern:{format:"# # # #",mask:"_",type:"text"}}},l={args:{...r,placeholder:"Cost",variety:"numeric",onChange(e){console.log(e)},propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",fixedDecimalScale:!0,prefix:"$",suffix:" USD",thousandsGroupStyle:"thousand",isAllowed:e=>{const{floatValue:a}=e;return(a??0)>=0&&(a??0)<=1e4}}}};var p,i,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,C,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const z=["Password","Phone","INN","Code","Cost"];export{t as Code,l as Cost,s as INN,o as Password,n as Phone,z as __namedExportsOrder,q as default};
