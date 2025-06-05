import{n as p,j as s,d}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as u}from"./index-CnY36iC1.js";import{a as y}from"./style-DFpQ9kAZ.js";import{a as j}from"./style-CHwZntvm.js";const f=e=>{const{onChange:c}=e,h=u.useCallback((n,a)=>{const r=[...e.values];r[n]=Math.min(e.max,Math.max(e.min,a)),c(r.sort((m,k)=>m-k))},[c,e.max,e.min,e.values]),g=u.useCallback(n=>(n-e.min)/(e.max-e.min)*100,[e.max,e.min]),o=u.useMemo(()=>e.values.map(n=>g(n)),[g,e.values]),i=p(),t=i.colors.range[e.genre].track.background.rest,l=i.colors.range[e.genre].track.gradient.rest,x=i.colors.range[e.genre].thumb.border.rest,v=i.colors.range[e.genre].thumb.background.rest,b=u.useMemo(()=>o.map((n,a)=>{const r=a===0,m=a===o.length-1;return r?`${t} 0%, ${t} ${n}%, ${l} ${n}%`:m?`${l} ${n}%, ${t} ${n}%, ${t} 100%`:`${l} ${n}%`}).join(", "),[l,t,o]),$=u.useMemo(()=>`linear-gradient(to right, ${b})`,[b]);return s.jsxDEV(V,{$size:e.size,$sx:e.sx,$error:e.error,onBlur:e.onBlur,children:[e.values.map((n,a)=>s.jsxDEV(B,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:n,onChange:r=>h(a,parseFloat(r.target.value)),style:{zIndex:100+a},$colorBackground:v,$colorBorder:x},a,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:52,columnNumber:9},void 0)),s.jsxDEV(w,{$size:e.size,$genre:e.genre,style:{background:$}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/range/component.tsx",lineNumber:50,columnNumber:5},void 0)};try{f.displayName="Range",f.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; tablet?: CSSObject; mobile?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const V=d.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${y};
  ${j};
`,w=d.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`,B=d.input`
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
`;export{f as R};
