import{n as $,j as i,l as k,d as g}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as u}from"./index-CnY36iC1.js";import{I as b}from"./component.styles-D_1S29PK.js";import{S as j}from"./component-BPa6yCZC.js";import{a as V}from"./style-CIOD8UhR.js";import{K as S}from"./theme.global-CglKeZg3.js";import"./component.functions-BGGwQnpg.js";import"./component-i2ZQUSf5.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./proxy-BS1eh56F.js";import"./index-DgedcAJ4.js";import"./style-KtjdfyVq.js";import"./style-CHwZntvm.js";import"./component-kqn1VMYM.js";import"./motion-BdlOunNt.js";const f=e=>{const{onChange:s}=e,d=u.useCallback((a,t)=>{const m=[...e.values];m[a]=Math.min(e.max,Math.max(e.min,t)),s(m.sort((p,N)=>p-N))},[s,e.max,e.min,e.values]),o=u.useCallback(a=>(a-e.min)/(e.max-e.min)*100,[e.max,e.min]),l=u.useMemo(()=>e.values.map(a=>o(a)),[o,e.values]),n=$().palette.grayAdriana,h=u.useMemo(()=>l.map((a,t)=>{const m=t===0,p=t===l.length-1;return m?`${n} 0%, ${n} ${a}%, #007bff ${a}%`:p?`#007bff ${a}%, ${n} ${a}%, ${n} 100%`:`#007bff ${a}%`}).join(", "),[n,l]),y=u.useMemo(()=>`linear-gradient(to right, ${h})`,[h]);return i.jsxDEV(D,{$size:e.size,$width:e.width,$error:e.error,onBlur:e.onBlur,children:[e.values.map((a,t)=>i.jsxDEV(M,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:a,onChange:m=>d(t,parseFloat(m.target.value)),style:{zIndex:100+t}},t,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:45,columnNumber:9},void 0)),i.jsxDEV(R,{$size:e.size,$genre:e.genre,style:{background:y},children:e.isShowMarker&&l.map((a,t)=>i.jsxDEV(q,{$size:e.size,$genre:e.genre,style:{position:"absolute",left:`calc(${o(a)}% - 2px)`}},`marker-${t}`,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:67,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:58,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:43,columnNumber:5},void 0)};try{f.displayName="Range",f.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}}}}}catch{}const z=k`
  ${e=>E({...S[e.$size],...e})};
`,E=e=>k`
  width: ${e.$width??"100%"};
`,D=g.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${z};
  ${V};
`,R=g.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  background: #ccc;
  border-radius: 2px;
`,M=g.input`
  position: absolute;
  width: 100%;
  outline: none !important;
  pointer-events: none;
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
    background: #f7faff;
    border: 3px #2a77ee solid;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
  }
`,q=g.div`
  position: absolute;
  top: -20px;
  width: 12px;
  height: 12px;
  background: #2a77ee;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`,X={component:f,title:"Component/Range"},C=e=>{const[s,d]=u.useState(100),[o,l]=u.useState(1e6);return i.jsxDEV(j,{sx:{default:{flexDirection:"column",gap:"4px",padding:"10px",width:"500px"}},children:[i.jsxDEV(b,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=0&&(n??0)<=(o??1e7)}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:s.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&d(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:24,columnNumber:7},void 0),i.jsxDEV(b,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=(s??0)&&(n??0)<=1e7}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:o.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&l(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:43,columnNumber:7},void 0),i.jsxDEV(f,{...e,min:0,max:1e6,values:[s,o],onChange:r=>{d(r[0]),l(r[1])}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:62,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:16,columnNumber:10},void 0)},c={render:e=>i.jsxDEV(C,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-range.stories.tsx",lineNumber:69,columnNumber:19},void 0),args:{genre:"realebail-white",size:"medium",step:1e3}};var x,w,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const ee=["Default"];export{c as Default,ee as __namedExportsOrder,X as default};
