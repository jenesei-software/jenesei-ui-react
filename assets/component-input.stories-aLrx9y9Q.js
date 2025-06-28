import{j as i,r as j,S as D}from"./iframe-NXvRQG3e.js";import{b as k}from"./component.styles-B4aaW5CP.js";import"./style-Fk9c2Kpi.js";import"./component-uNoer6cp.js";import"./index-CpXWg0wM.js";import"./motion-Cx9e5g0b.js";const G={component:k,title:"Component/Input"},r={genre:"blackBorder",size:"largeMedium",error:{errorMessage:"Большая страшная ошибка на много строк",isError:!0,isErrorAbsolute:!0},isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,sx:{default:{width:"300px"}}},A=e=>{const[a,P]=j.useState("");return i.jsxDEV(D,{sx:{default:{position:"relative",height:"fit-content"}},children:i.jsxDEV(k,{...e,value:a,variety:"standard",onChange:b=>P(b)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-input.stories.tsx",lineNumber:38,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-input.stories.tsx",lineNumber:32,columnNumber:10},void 0)},o={render:e=>i.jsxDEV(A,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-input.stories.tsx",lineNumber:42,columnNumber:19},void 0),args:{...r,onChange(e){console.log(e)},variety:"standard",type:"password",placeholder:"Password"}},n={args:{...r,onChange(e){console.log(e)},variety:"pattern",propsPattern:{format:"+7 (9##) ###-##-##",mask:"_",type:"tel"},placeholder:"Phone"}},s={args:{...r,variety:"pattern",onChange(e){console.log(e)},propsPattern:{format:"### ### ### ###",mask:"",type:"text"},placeholder:"INN"}},t={args:{...r,onChange(e){console.log(e)},placeholder:"Code",variety:"pattern",propsPattern:{format:"# # # #",mask:"_",type:"text"}}},l={args:{...r,placeholder:"Cost",variety:"numeric",onChange(e){console.log(e)},propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",fixedDecimalScale:!0,prefix:"$",suffix:" USD",thousandsGroupStyle:"thousand",isAllowed:e=>{const{floatValue:a}=e;return(a??0)>=0&&(a??0)<=1e4}}}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,x,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var N,C,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const M=["Password","Phone","INN","Code","Cost"];export{t as Code,l as Cost,s as INN,o as Password,n as Phone,M as __namedExportsOrder,G as default};
