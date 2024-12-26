import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{C as m}from"./checkbox.styles-DNPN2n3b.js";import{l as r,d as n}from"./styled-components.browser.esm-CCP31c1y.js";import"./typography-DY6CFA4c.js";import{g as h}from"./typography.functions-CeSMEUjp.js";import{K as v}from"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";const u=e=>{const c=l=>({__html:l}),o=s.useCallback(l=>{const t=e.value.some(a=>a[e.valueField]===l[e.valueField])?e.value.filter(a=>a[e.valueField]!==l[e.valueField]):e.multiple?[...e.value,l]:[l];e.onChange&&e.onChange(t)},[e]);return i.jsx(x,{className:e.className,$width:e.width,$size:e.size,children:e.options.map((l,d)=>{const t=e.value.some(a=>a[e.valueField]===l[e.valueField]);return i.jsxs(k,{onClick:()=>!e.isClickOnlyIcon&&o(l),children:[i.jsx(m,{genre:e.checkboxGenre,isHiddenBorder:e.checkboxIsHiddenBorder,view:e.checkBoxView,size:e.size,width:e.checkboxWidth,checked:t,children:e.labelField&&(l==null?void 0:l[e.labelField])!==void 0&&i.jsx(y,{dangerouslySetInnerHTML:c(l[e.labelField])})}),e.childrenField&&(l==null?void 0:l[e.childrenField])!==void 0&&i.jsx(g,{children:l[e.childrenField]})]},d)})})};try{u.displayName="CheckboxGroup",u.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{checkboxGenre:{defaultValue:null,description:"",name:"checkboxGenre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'}]}},checkBoxView:{defaultValue:null,description:"",name:"checkBoxView",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'},{value:'"Arrow"'}]}},checkboxWidth:{defaultValue:null,description:"",name:"checkboxWidth",required:!1,type:{name:"string"}},checkboxIsHiddenBorder:{defaultValue:null,description:"",name:"checkboxIsHiddenBorder",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},childrenField:{defaultValue:null,description:"",name:"childrenField",required:!1,type:{name:"string | number | symbol"}},isClickOnlyIcon:{defaultValue:null,description:"",name:"isClickOnlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},labelField:{defaultValue:null,description:"",name:"labelField",required:!1,type:{name:"string | number | symbol"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((props: T[]) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"T[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T[]"}},valueField:{defaultValue:null,description:"",name:"valueField",required:!0,type:{name:"string | number | symbol"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const b=r`
  ${e=>f(v[e.$size])};
`,f=e=>r`
  gap: ${e.padding-2}px;
  ${h(e.font,700,"Inter")};
`,x=n.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${e=>e.$width??"100%"};
  ${b};
`,k=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,y=n.div`
  user-select: none;
`,g=n.div`
  user-select: none;
`;export{u as C};
