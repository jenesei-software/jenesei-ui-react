import{r as i,n as V,j as o,c as S,d as b,S as D}from"./iframe-NXvRQG3e.js";import{b as x}from"./component.styles-B4aaW5CP.js";import{a as E}from"./style-Fk9c2Kpi.js";import"./component-uNoer6cp.js";import"./index-CpXWg0wM.js";import"./motion-Cx9e5g0b.js";const f=e=>{const{onChange:l}=e,d=i.useCallback((a,t)=>{const m=[...e.values];m[a]=Math.min(e.max,Math.max(e.min,t)),l(m.sort((p,j)=>p-j))},[l,e.max,e.min,e.values]),s=i.useCallback(a=>(a-e.min)/(e.max-e.min)*100,[e.max,e.min]),u=i.useMemo(()=>e.values.map(a=>s(a)),[s,e.values]),r=V(),n=r.colors.range[e.genre].track.background.rest,c=r.colors.range[e.genre].track.gradient.rest,w=r.colors.range[e.genre].thumb.border.rest,y=r.colors.range[e.genre].thumb.background.rest,h=i.useMemo(()=>u.map((a,t)=>{const m=t===0,p=t===u.length-1;return m?`${n} 0%, ${n} ${a}%, ${c} ${a}%`:p?`${c} ${a}%, ${n} ${a}%, ${n} 100%`:`${c} ${a}%`}).join(", "),[c,n,u]),N=i.useMemo(()=>`linear-gradient(to right, ${h})`,[h]);return o.jsxDEV(z,{$size:e.size,$sx:e.sx,$error:e.error,onBlur:e.onBlur,children:[e.values.map((a,t)=>o.jsxDEV(q,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:a,onChange:m=>d(t,parseFloat(m.target.value)),style:{zIndex:100+t},$colorBackground:y,$colorBorder:w},t,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:52,columnNumber:9},void 0)),o.jsxDEV(B,{$size:e.size,$genre:e.genre,style:{background:N}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:50,columnNumber:5},void 0)};try{f.displayName="Range",f.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const z=b.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${E};
  ${S};
`,B=b.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`,q=b.input`
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
`,F={component:f,title:"Component/Range"},M=e=>{const[l,d]=i.useState(100),[s,u]=i.useState(1e6);return o.jsxDEV(D,{sx:{default:{flexDirection:"column",gap:"4px",padding:"10px",width:"500px"}},children:[o.jsxDEV(x,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=0&&(n??0)<=(s??1e7)}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:l.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&d(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:24,columnNumber:7},void 0),o.jsxDEV(x,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:r=>{const{floatValue:n}=r;return(n??0)>=(l??0)&&(n??0)<=1e7}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:s.toString(),onChange:r=>{const n=r.floatValue;console.log(n),n!==void 0&&u(n)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:43,columnNumber:7},void 0),o.jsxDEV(f,{...e,min:0,max:1e6,values:[l,s],onChange:r=>{d(r[0]),u(r[1])}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:62,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:16,columnNumber:10},void 0)},g={render:e=>o.jsxDEV(M,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:69,columnNumber:19},void 0),args:{genre:"realebail-white",size:"medium",step:1e3}};var v,k,$;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000
  }
}`,...($=(k=g.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};const I=["Default"];export{g as Default,I as __namedExportsOrder,F as default};
