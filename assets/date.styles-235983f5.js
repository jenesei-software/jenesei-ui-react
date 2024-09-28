import{j as l,d as $,l as m}from"./styled-components.browser.esm-028b5a71.js";import{g as C}from"./index-7d9a9c74.js";import{h as r}from"./moment-a9aaa855.js";import{r as n}from"./index-ff614419.js";import{B as le,R as $e}from"./button-a8373048.js";import{S as oe}from"./icon.styles-d3024de5.js";import{b as be,c as De,S as ke}from"./input.styles-62b8acb5.js";import{b as ve,d as we}from"./select.styles-43c2d1f6.js";import{K as P}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./typography-62fdeef1.js";import{g as de}from"./typography.functions-dcbec177.js";function xe(e){const u=Math.floor(e/7),b=e%7;return u+b}const ue=e=>{var H,N,K,Z,G,J,Q,U,X,p,ee,te,ne,ae;const v=e.value?r(e.value).utc():r.utc(),[u,b]=n.useState(v.clone().month()),[s,M]=n.useState(v.clone().year()),[f,O]=n.useState(v.clone().date()),ce=n.useMemo(()=>e.value?r(e.value).utc().format("D MMMM YYYY"):"",[e.value]),E=n.useMemo(()=>{const t=r.utc(),i=r.utc().year(s).month(u).startOf("month"),o=r.utc().year(s).month(u).endOf("month"),g=[],A=e.startDate?r.utc(e.startDate):null,k=e.endDate?r.utc(e.endDate):null,ie=i.isoWeekday()-1;if(ie>0)for(let c=ie;c>0;c--){const a=i.clone().subtract(c,"days");g.push({value:a.valueOf(),labelString:a.format("dd"),labelNumber:a.date(),dayOfWeek:a.isoWeekday(),isWeekend:a.isoWeekday()===6||a.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:a.isSame(t,"day"),isCurrentMonth:!1,isDisabled:a.isBefore(A,"day")||a.isAfter(k,"day")||a.isSame(k,"day")})}const d=i.clone();for(;d<=o;)g.push({value:d.valueOf(),labelString:d.format("dd"),labelNumber:d.date(),dayOfWeek:d.isoWeekday(),isWeekend:d.isoWeekday()===6||d.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:d.isSame(t,"day"),isCurrentMonth:!0,isDisabled:d.isBefore(A,"day")||d.isAfter(k,"day")||d.isSame(k,"day")}),d.add(1,"day");const re=7-o.isoWeekday();if(re>0)for(let c=1;c<=re;c++){const a=o.clone().add(c,"days").startOf("day");g.push({value:a.valueOf(),labelString:a.format("dd"),labelNumber:a.date(),dayOfWeek:a.isoWeekday(),isWeekend:a.isoWeekday()===6||a.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:a.isSame(t,"day"),isCurrentMonth:!1,isDisabled:a.isBefore(A,"day")||a.isAfter(k,"day")||a.isSame(k,"day")})}return g.sort((c,a)=>c.value-a.value),g},[u,s,e.endDate,e.startDate]),me=()=>{const t=r.utc().year(s).month(u).date(f).add(1,"month");O(t.date()),b(t.month()),M(t.year())},fe=()=>{const t=r.utc().year(s).month(u).date(f).subtract(1,"month");O(t.date()),b(t.month()),M(t.year())},B=(t,i)=>{const o=r(t).utc();e.onChange(o.valueOf()),O(o.date()),b(o.month()),M(o.year()),e.isOnClickClose&&i&&x()};n.useEffect(()=>{if(e.value){const t=r(e.value).utc();O(t.date()),b(t.month()),M(t.year())}},[e.value]);const[y,F]=n.useState(!1),[S,z]=n.useState(!1),j=n.useRef(null),D=n.useRef(null),h=n.useRef(null),R=n.useRef(null),I=n.useMemo(()=>xe(E.length)+1,[E.length]),w=n.useMemo(()=>40+I*28+(I-1)*6+P[e.size].padding*2,[e.size,I]),he=n.useMemo(()=>P[e.size].radius,[e.size]),W=n.useCallback(()=>{j.current&&(z(!1),F(!0))},[]),T=n.useCallback(()=>{j.current&&(C.to(D.current,{duration:.1}),C.to(h.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var i,o;z(!1),F(!1),(i=R.current)==null||i.blur(),(o=D.current)==null||o.blur()}}))},[]),V=n.useCallback(()=>{C.to(D.current,{duration:.1,onComplete:()=>{C.to(h.current,{height:`${w}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{W()}})}})},[W,w]),q=n.useCallback(()=>{S||y||(z(!0),V())},[V,S,y]),ge=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),q())},[q,e]);n.useEffect(()=>{y&&V()},[w]);const x=n.useCallback(()=>{S||y&&(z(!0),C.to(h.current,{duration:.2,onComplete:()=>{T()}}))},[T,S,y]),ye=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),x())},[x,e]),L=n.useCallback(t=>{h.current&&h.current.contains(t.target)&&t.preventDefault()},[]),Y=n.useMemo(()=>{const t=r.utc().year(s).month(u).date(f).add(1,"month").startOf("year").year(),i=r(e.endDate).year();return e.endDate?t>=i:!1},[s,u,f,e.endDate]),_=n.useMemo(()=>{const t=r.utc().year(s).month(u).date(f).subtract(1,"month").startOf("year").year(),i=r(e.startDate).year();return e.startDate?t<i:!1},[s,u,f,e.startDate]);return n.useEffect(()=>(document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}),[L]),n.useEffect(()=>{const t=i=>{h.current&&D.current&&!h.current.contains(i.target)&&!D.current.contains(i.target)&&x()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[x]),n.useEffect(()=>{y&&W()},[W,y]),l.jsxs(l.Fragment,{children:[l.jsxs(Ce,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:he,$parentListHeight:w,onFocus:ge,onBlur:ye,ref:R,children:[l.jsx(Be,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(H=e==null?void 0:e.inputProps)==null?void 0:H.isError,$isLoading:(N=e==null?void 0:e.inputProps)==null?void 0:N.isLoading,$postfixChildren:(K=e==null?void 0:e.inputProps)==null?void 0:K.postfixChildren,$prefixChildren:(Z=e==null?void 0:e.inputProps)==null?void 0:Z.prefixChildren,$isBold:(G=e==null?void 0:e.inputProps)==null?void 0:G.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(J=e==null?void 0:e.inputProps)==null?void 0:J.isRequired,defaultValue:(Q=e==null?void 0:e.inputProps)==null?void 0:Q.defaultValue,value:ce,type:(U=e==null?void 0:e.inputProps)==null?void 0:U.type,onChange:t=>{var i,o;return((i=e.inputProps)==null?void 0:i.onChange)&&((o=e.inputProps)==null?void 0:o.onChange(t.target.value))},onBlur:(X=e==null?void 0:e.inputProps)==null?void 0:X.onBlur,onFocus:(p=e==null?void 0:e.inputProps)==null?void 0:p.onFocus,onClick:q,ref:D}),l.jsx(Me,{ref:h,$genre:e.genre,$size:e.size,style:{height:`${w}px`},children:l.jsxs(Se,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:j,children:[l.jsxs(oe,{justifyContent:"space-between",alignItems:"center",children:[l.jsx(le,{type:"button",isRadius:!0,iconName:"ArrowLeft2",width:"asHeight",genre:e.genre,size:"small",onClick:()=>!_&&fe(),isHidden:_}),l.jsxs(oe,{gap:"8px",children:[l.jsx(ve,{genre:e.genre,size:"small",inputProps:void 0,value:r.utc().year(s).month(u).date(f).startOf("day").utc().valueOf(),onChange:B,lang:"ru",width:"90px"}),l.jsx(we,{genre:e.genre,size:"small",value:r.utc().year(s).month(u).date(f).startOf("day").utc().valueOf(),onChange:B,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"})]}),l.jsx(le,{type:"button",onClick:()=>!Y&&me(),width:"asHeight",isRadius:!0,iconName:"ArrowRight2",genre:e.genre,size:"small",isHidden:Y})]}),l.jsxs(ze,{$rows:I,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,i)=>l.jsx(Pe,{type:"button",$genre:e.genre,$size:e.size,$row:E[0].weekOfMonth-1,$column:i+1,children:t},i)),E.map(t=>!t.isDisabled&&l.jsxs(We,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>B(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===v.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[l.jsx($e,{}),t.labelNumber]},t.value))]})]})})]}),((ee=e==null?void 0:e.inputProps)==null?void 0:ee.isError)&&((te=e==null?void 0:e.inputProps)==null?void 0:te.errorMessage)&&l.jsx(be,{$size:e.size,$width:e.width,$isErrorAbsolute:(ne=e.inputProps)==null?void 0:ne.isErrorAbsolute,children:(ae=e.inputProps)==null?void 0:ae.errorMessage})]})};try{ue.displayName="DatePicker",ue.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "genre" | "width" | "size" | "id" | "isDisabled" | "value" | "name" | "isInputEffect" | "placeholder">'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Ce=$.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,Me=$.div`
  outline: none;
  display: none;

  height: 0px;
  width: 100%;
  max-width: 270px;

  position: absolute;

  overflow: hidden;
  overflow-y: auto;

  margin: 0;
  padding: 0;
  margin-top: 6px;

  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-horizontal {
    display: none;
  }

  &::-webkit-scrollbar-vertical {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,Oe=m`
  ${e=>e.$size&&Ee(P[e.$size])};
`,Ee=e=>m`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Se=$.div`
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  padding-top: 6px;
  transform: translateZ(0);
  background: ${e=>e.theme.colors.input[e.$genre].background.rest};
  border: solid 1px ${e=>e.theme.colors.input[e.$genre].border.rest};
  ${Oe}
  ${De};
  justify-content: flex-start;
  gap: 10px;
`,ze=$.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,se=m`
  ${e=>e.$size&&Ie({...P[e.$size]})};
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  background: ${e=>e.theme.colors.date[e.$genre].background.rest};
  border-color: ${e=>e.theme.colors.date[e.$genre].border.rest};
  color: ${e=>e.theme.colors.date[e.$genre].color.rest};
  outline: 1px solid transparent;
  border: 1px solid transparent;
  grid-row: ${e=>e.$row};
  grid-column: ${e=>e.$column};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    ${e=>m`
      background: ${e.theme.colors.date[e.$genre].background.hover};
      border-color: ${e.theme.colors.date[e.$genre].border.hover};
      color: ${e.theme.colors.date[e.$genre].color.hover};
    `}
  }
  transition:
    all ${e=>e.theme.transition},
    outline 0s;

  ${e=>e.$isWeekend&&m`
      background: ${e.theme.colors.date[e.$genre].background.weekend};
      border-color: ${e.theme.colors.date[e.$genre].border.weekend};
      color: ${e.theme.colors.date[e.$genre].color.weekend};
    `}
  ${e=>e.$isToday&&m`
      background: ${e.theme.colors.date[e.$genre].background.today};
      border-color: ${e.theme.colors.date[e.$genre].border.today};
      color: ${e.theme.colors.date[e.$genre].color.today};
    `}
    ${e=>e.$isChoice&&m`
      background: ${e.theme.colors.date[e.$genre].background.choice};
      border-color: ${e.theme.colors.date[e.$genre].border.choice};
      color: ${e.theme.colors.date[e.$genre].color.choice};
    `}
    ${e=>!e.$isCurrentMonth&&m`
      opacity: 0.5;
    `}
  ${de(12,700,"Inter")}
`,Ie=e=>m`
  border-radius: ${e.radius}px;
  ${de(12,700,"Inter")};
`,We=$.button`
  ${se}
`,Pe=$.button`
  ${se}
  opacity: 1;
  background-color: transparent;
`,Be=$(ke)``;export{ue as D};
