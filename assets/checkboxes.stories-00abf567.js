import{j as a,l as x,d}from"./styled-components.browser.esm-028b5a71.js";import{r as o}from"./index-ff614419.js";import{C as v}from"./checkbox.styles-6aa4778c.js";import"./typography-193d1fd6.js";import{g as k}from"./typography.functions-dcbec177.js";import{K as f}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./modal-loading.styles-b2147eb5.js";import"./icon.styles-0c25b35e.js";import"./index-4da86cf0.js";const r=e=>{const u=l=>({__html:l}),c=o.useCallback(l=>{const s=e.value.some(n=>n[e.valueField]===l[e.valueField])?e.value.filter(n=>n[e.valueField]!==l[e.valueField]):e.multiple?[...e.value,l]:[l];e.onChange&&e.onChange(s)},[e]);return a.jsx(C,{className:e.className,$width:e.width,$size:e.size,children:e.options.map((l,i)=>{const s=e.value.some(n=>n[e.valueField]===l[e.valueField]);return a.jsxs(p,{onClick:()=>!e.isClickOnlyIcon&&c(l),children:[a.jsx(v,{genre:e.checkboxGenre,isHiddenBorder:e.checkboxIsHiddenBorder,view:e.checkBoxView,size:e.size,width:e.checkboxWidth,checked:s,children:e.labelField&&(l==null?void 0:l[e.labelField])!==void 0&&a.jsx(F,{dangerouslySetInnerHTML:u(l[e.labelField])})}),e.childrenField&&(l==null?void 0:l[e.childrenField])!==void 0&&a.jsx(V,{children:l[e.childrenField]})]},i)})})};try{r.displayName="Checkboxes",r.__docgenInfo={description:"",displayName:"Checkboxes",props:{checkboxGenre:{defaultValue:null,description:"",name:"checkboxGenre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'}]}},checkBoxView:{defaultValue:null,description:"",name:"checkBoxView",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'}]}},checkboxWidth:{defaultValue:null,description:"",name:"checkboxWidth",required:!1,type:{name:"string"}},checkboxIsHiddenBorder:{defaultValue:null,description:"",name:"checkboxIsHiddenBorder",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},childrenField:{defaultValue:null,description:"",name:"childrenField",required:!1,type:{name:"string | number | symbol"}},isClickOnlyIcon:{defaultValue:null,description:"",name:"isClickOnlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},labelField:{defaultValue:null,description:"",name:"labelField",required:!1,type:{name:"string | number | symbol"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((props: T[]) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T[]"}},valueField:{defaultValue:null,description:"",name:"valueField",required:!0,type:{name:"string | number | symbol"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const g=x`
  ${e=>y(f[e.$size])};
`,y=e=>x`
  gap: ${e.padding-2}px;
  ${k(e.font,700,"Inter")};
`,C=d.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${e=>e.$width??"100%"};
  ${g};
`,p=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,F=d.div`
  user-select: none;
`,V=d.div`
  user-select: none;
`,N={component:r,title:"Checkbox/Checkboxes"},q={checkboxGenre:"gray",checkBoxView:"Radio",checkboxWidth:"100%",checkboxIsHiddenBorder:!1,multiple:!0,size:"medium",labelField:"label",valueField:"value",width:"300px"},w=e=>{const[u,c]=o.useState([]),[l]=o.useState([{value:0,label:"First"},{value:1,label:"Second"}]);return a.jsx(r,{...e,value:u,options:l,onChange:i=>c(i)})},t={render:e=>a.jsx(w,{...e}),args:{...q}};var m,h,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <CheckboxesWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const E=["Checkboxes"];export{t as Checkboxes,E as __namedExportsOrder,N as default};
