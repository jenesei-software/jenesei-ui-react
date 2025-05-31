import{n as S,j as i,l as $,d as h}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as o}from"./index-CnY36iC1.js";import{I as x}from"./component.styles-DSwDte8L.js";import{S as z}from"./component-BPa6yCZC.js";import{a as E}from"./style-J1eytVMD.js";import{K as D}from"./theme.global-CKNmeFpz.js";import"./component.functions-BGGwQnpg.js";import"./component-Dh-bcLtB.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./proxy-BS1eh56F.js";import"./index-DgedcAJ4.js";import"./style-IM99yq-C.js";import"./style-CHwZntvm.js";import"./component-kqn1VMYM.js";import"./motion-BdlOunNt.js";const f=e=>{const{onChange:l}=e,d=o.useCallback((a,t)=>{const m=[...e.values];m[a]=Math.min(e.max,Math.max(e.min,t)),l(m.sort((p,V)=>p-V))},[l,e.max,e.min,e.values]),u=o.useCallback(a=>(a-e.min)/(e.max-e.min)*100,[e.max,e.min]),s=o.useMemo(()=>e.values.map(a=>u(a)),[u,e.values]),r=S(),n=r.colors.range[e.genre].track.background.rest,c=r.colors.range[e.genre].track.gradient.rest,y=r.colors.range[e.genre].thumb.border.rest,N=r.colors.range[e.genre].thumb.background.rest,b=o.useMemo(()=>s.map((a,t)=>{const m=t===0,p=t===s.length-1;return m?`${n} 0%, ${n} ${a}%, ${c} ${a}%`:p?`${c} ${a}%, ${n} ${a}%, ${n} 100%`:`${c} ${a}%`}).join(", "),[c,n,s]),j=o.useMemo(()=>`linear-gradient(to right, ${b})`,[b]);return i.jsxDEV(q,{$size:e.size,$width:e.width,$error:e.error,onBlur:e.onBlur,children:[e.values.map((a,t)=>i.jsxDEV(M,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:a,onChange:m=>d(t,parseFloat(m.target.value)),style:{zIndex:100+t},$colorBackground:N,$colorBorder:y},t,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:52,columnNumber:9},void 0)),i.jsxDEV(C,{$size:e.size,$genre:e.genre,style:{background:j}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:50,columnNumber:5},void 0)};try{f.displayName="Range",f.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const R=$`
  ${e=>B({...D[e.$size],...e})};
`,B=e=>$`
  width: ${e.$width??"100%"};
`,q=h.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${R};
  ${E};
`,C=h.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`,M=h.input`
  position: absolute;
  width: 100%;
  outline: none !important;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  left: 0;
  margin: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: ${e=>e.$colorBackground};
    border: 3px ${e=>e.$colorBorder} solid;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
    transition:
      transform ${e=>e.theme.transition.default},
      color ${e=>e.theme.transition.default},
      background-color ${e=>e.theme.transition.default};
    &:hover {
      transform: scale(1.2);
    }
  }
`,ne={component:f,title:"Component/Range"},_=e=>{const[l,d]=o.useState(100),[u,s]=o.useState(1e6);return i.jsxDEV(z,{sx:{default:{flexDirection:"column",gap:"4px",padding:"10px",width:"500px"}},children:[i.jsxDEV(x,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=0&&(n??0)<=(u??1e7)}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:l.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&d(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:24,columnNumber:7},void 0),i.jsxDEV(x,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=(l??0)&&(n??0)<=1e7}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:u.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&s(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:43,columnNumber:7},void 0),i.jsxDEV(f,{...e,min:0,max:1e6,values:[l,u],onChange:r=>{d(r[0]),s(r[1])}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:62,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:16,columnNumber:10},void 0)},g={render:e=>i.jsxDEV(_,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:69,columnNumber:19},void 0),args:{genre:"realebail-white",size:"medium",step:1e3}};var w,k,v;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000
  }
}`,...(v=(k=g.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const re=["Default"];export{g as Default,re as __namedExportsOrder,ne as default};
