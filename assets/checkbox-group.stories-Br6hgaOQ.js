import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{C as v}from"./checkbox.styles-uw8iikki.js";import{l as x,d as u}from"./styled-components.browser.esm-CCP31c1y.js";import"./typography--gcTkdSy.js";import{g as f}from"./typography.functions-_Xr-RK7k.js";import{K as k}from"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";import"./loading.styles-C9X5Vsl2.js";import"./icon.styles-ke4R2kUL.js";import"./base.styles-lMUunFc3.js";import"./index-rCr475hU.js";const t=e=>{const d=l=>({__html:l}),o=s.useCallback(l=>{const c=e.value.some(n=>n[e.valueField]===l[e.valueField])?e.value.filter(n=>n[e.valueField]!==l[e.valueField]):e.multiple?[...e.value,l]:[l];e.onChange&&e.onChange(c)},[e]);return a.jsx(y,{className:e.className,$width:e.width,$size:e.size,children:e.options.map((l,i)=>{const c=e.value.some(n=>n[e.valueField]===l[e.valueField]);return a.jsxs(C,{onClick:()=>!e.isClickOnlyIcon&&o(l),children:[a.jsx(v,{genre:e.checkboxGenre,isHiddenBorder:e.checkboxIsHiddenBorder,view:e.checkBoxView,size:e.size,width:e.checkboxWidth,checked:c,children:e.labelField&&(l==null?void 0:l[e.labelField])!==void 0&&a.jsx(F,{dangerouslySetInnerHTML:d(l[e.labelField])})}),e.childrenField&&(l==null?void 0:l[e.childrenField])!==void 0&&a.jsx(V,{children:l[e.childrenField]})]},i)})})};try{t.displayName="CheckboxGroup",t.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{checkboxGenre:{defaultValue:null,description:"",name:"checkboxGenre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'}]}},checkBoxView:{defaultValue:null,description:"",name:"checkBoxView",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'}]}},checkboxWidth:{defaultValue:null,description:"",name:"checkboxWidth",required:!1,type:{name:"string"}},checkboxIsHiddenBorder:{defaultValue:null,description:"",name:"checkboxIsHiddenBorder",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},childrenField:{defaultValue:null,description:"",name:"childrenField",required:!1,type:{name:"string | number | symbol"}},isClickOnlyIcon:{defaultValue:null,description:"",name:"isClickOnlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},labelField:{defaultValue:null,description:"",name:"labelField",required:!1,type:{name:"string | number | symbol"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((props: T[]) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T[]"}},valueField:{defaultValue:null,description:"",name:"valueField",required:!0,type:{name:"string | number | symbol"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const p=x`
  ${e=>g(k[e.$size])};
`,g=e=>x`
  gap: ${e.padding-2}px;
  ${f(e.font,700,"Inter")};
`,y=u.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${e=>e.$width??"100%"};
  ${p};
`,C=u.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,F=u.div`
  user-select: none;
`,V=u.div`
  user-select: none;
`,E={component:t,title:"Component/CheckboxGroup",tags:["autodocs"]},G={checkboxGenre:"gray",checkBoxView:"Radio",checkboxWidth:"100%",checkboxIsHiddenBorder:!1,multiple:!0,size:"medium",labelField:"label",valueField:"value",width:"300px"},q=e=>{const[d,o]=s.useState([]),[l]=s.useState([{value:0,label:"First"},{value:1,label:"Second"}]);return a.jsx(t,{...e,value:d,options:l,onChange:i=>o(i)})},r={render:e=>a.jsx(q,{...e}),args:{...G}};var m,h,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <CheckboxGroupWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const A=["CheckboxGroup"];export{r as CheckboxGroup,A as __namedExportsOrder,E as default};
