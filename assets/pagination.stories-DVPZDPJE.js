import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{S as Q}from"./stack-Df5_hcBM.js";import{B as f}from"./button-Bcaqca6Z.js";import{K as j}from"./theme-3X06DcYZ.js";import{d as P}from"./styled-components.browser.esm-CCP31c1y.js";import"./base.styles-CKuPPCfG.js";import"./theme.global-3OPldRDj.js";import"./icon.styles-CWbskPAg.js";import"./loading.styles-_WGkLspa.js";import"./typography-DCobQ7y0.js";import"./index-rCr475hU.js";import"./typography.functions-CeSMEUjp.js";const c=e=>{const r=n.useMemo(()=>e.index==0&&!e.isInfinity,[e.index,e.isInfinity]),d=n.useMemo(()=>e.index==e.length-1&&!e.isInfinity,[e.index,e.isInfinity,e.length]),i=n.useMemo(()=>"small",[]),l=n.useMemo(()=>12,[]),x=n.useMemo(()=>j[i].height,[i]),M=n.useMemo(()=>`${l}px`,[l]),V=n.useCallback(()=>{e.index==0?e.isInfinity&&e.changeIndex(e.length-1):e.changeIndex(e.index-1)},[e]),$=n.useCallback(()=>{e.index==e.length-1?e.isInfinity&&e.changeIndex(0):e.changeIndex(e.index+1)},[e]),y=n.useMemo(()=>e.length-1-e.index,[e.index,e.length]),m=n.useMemo(()=>e.index,[e.index]),s=n.useMemo(()=>Math.floor(e.viewQuantity/2),[e.viewQuantity]),_=n.useMemo(()=>{let a=0;return m<=s?a=0:y<=s?a=e.length-e.viewQuantity:a=m-s,`-${a*x+a*l}px`},[m,s,y,x,l,e.length,e.viewQuantity]),w=n.useMemo(()=>`${e.viewQuantity*30+(e.viewQuantity-1)*12}px`,[e.viewQuantity]);return t.jsxs(Q,{gap:M,children:[t.jsx(f,{isDisabled:r,isHidden:r,onClick:V,size:i,genre:e.genre,iconName:"ArrowLeft2",iconOrder:-1,children:"Previous"}),t.jsx(g,{$left:_,$width:w,children:t.jsx(h,{$left:_,$width:w,children:Array.from({length:e.length}).map((a,u)=>t.jsx(f,{width:"asHeight",size:i,genre:u===e.index?"blackBorder":"white",onClick:()=>e.changeIndex(u),children:u+1},u))})}),t.jsx(f,{isDisabled:d,isHidden:d,onClick:$,size:i,genre:e.genre,iconName:"ArrowRight2",children:"Next"})]})};try{c.displayName="Pagination",c.__docgenInfo={description:"",displayName:"Pagination",props:{genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"black"'}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},isInfinity:{defaultValue:null,description:"",name:"isInfinity",required:!1,type:{name:"boolean"}},viewQuantity:{defaultValue:null,description:"",name:"viewQuantity",required:!0,type:{name:"number"}},changeIndex:{defaultValue:null,description:"",name:"changeIndex",required:!0,type:{name:"(index: number) => void"}}}}}catch{}const g=P.div`
  position: relative;
  width: ${e=>e.$width};
  overflow: hidden;
  transition:
    width ${e=>e.theme.transition.default},
    outline 0s;
`,h=P.div`
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  left: ${e=>e.$left};
  transition:
    left ${e=>e.theme.transition.default},
    outline 0s;
`;try{g.displayName="PaginationQuantityWrapper",g.__docgenInfo={description:"",displayName:"PaginationQuantityWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="PaginationQuantityButtons",h.__docgenInfo={description:"",displayName:"PaginationQuantityButtons",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const L={component:c,title:"Component/Pagination"},q={},A=e=>{const[r,d]=n.useState(e.index);return n.useEffect(()=>{d(e.index)},[e.index]),t.jsx(Q,{p:"10px",children:t.jsx(c,{...e,index:r,changeIndex:i=>d(i)})})},o={render:e=>t.jsx(A,{...e}),args:{...q,index:1,length:12,genre:"black",isInfinity:!1,viewQuantity:4}};var I,v,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    ...defaultArgs,
    index: 1,
    length: 12,
    genre: 'black',
    isInfinity: false,
    viewQuantity: 4
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,L as default};
