import{n as De,K as z,j as l,d as y,l as m}from"./theme-DVxtux_W.js";import{g as x}from"./index-DaYL4gH5.js";import{h as a,a as $e,b as we}from"./select.styles-Dya7Dc35.js";import{r as n}from"./index-CnY36iC1.js";import{B as de,R as ve}from"./button-r7mH7ie0.js";import{a as xe,b as Ee,S as Ne}from"./input.styles-BFbRpvav.js";import{S as oe}from"./stack-Di_R-rTa.js";import"./theme.global-wZO4Grut.js";import"./typography-BeMVh0jT.js";import{g as ce}from"./typography.functions-4q7AKkEp.js";import{r as je}from"./base.styles-eUkWGuSr.js";function Ce(e){const g=Math.floor(e/7);return e%7>0?g+1:g}const se=e=>{var K,Z,U,G,J,Q,X,p,ee,te,ne,ae,ie,re;const L=De(),[g,T]=n.useState(e.value?a(e.value).utc():a.utc()),[d,E]=n.useState(g.clone().month()),[o,N]=n.useState(g.clone().year()),[f,j]=n.useState(g.clone().date()),fe=n.useMemo(()=>e.value?a(e.value).utc().format("D MMMM YYYY"):"",[e.value]),C=n.useMemo(()=>{const t=a.utc(),i=a.utc().year(o).month(d).startOf("month"),u=a.utc().year(o).month(d).endOf("month"),b=[],q=e.startDate?a.utc(e.startDate):null,A=e.endDate?a.utc(e.endDate):null,ue=i.isoWeekday()-1;if(ue>0)for(let c=ue;c>0;c--){const r=i.clone().subtract(c,"days");b.push({value:r.valueOf(),labelString:r.format("dd"),labelNumber:r.date(),dayOfWeek:r.isoWeekday(),isWeekend:r.isoWeekday()===6||r.isoWeekday()===7,weekOfMonth:Math.ceil((b.length+1)/7),isToday:r.isSame(t,"day"),isCurrentMonth:!1,isDisabled:r.isBefore(q,"day")||r.isAfter(A,"day")})}const s=i.clone();for(;s<=u;)b.push({value:s.valueOf(),labelString:s.format("dd"),labelNumber:s.date(),dayOfWeek:s.isoWeekday(),isWeekend:s.isoWeekday()===6||s.isoWeekday()===7,weekOfMonth:Math.ceil((b.length+1)/7),isToday:s.isSame(t,"day"),isCurrentMonth:!0,isDisabled:s.isBefore(q,"day")||s.isAfter(A,"day")}),s.add(1,"day");const le=7-u.isoWeekday();if(le>0)for(let c=1;c<=le;c++){const r=u.clone().add(c,"days").startOf("day");b.push({value:r.valueOf(),labelString:r.format("dd"),labelNumber:r.date(),dayOfWeek:r.isoWeekday(),isWeekend:r.isoWeekday()===6||r.isoWeekday()===7,weekOfMonth:Math.ceil((b.length+1)/7),isToday:r.isSame(t,"day"),isCurrentMonth:!1,isDisabled:r.isBefore(q,"day")||r.isAfter(A,"day")})}return b.sort((c,r)=>c.value-r.value),b},[d,o,e.endDate,e.startDate]),he=()=>{const t=a.utc().year(o).month(d).date(f).add(1,"month");j(t.date()),E(t.month()),N(t.year())},be=()=>{const t=a.utc().year(o).month(d).date(f).subtract(1,"month");j(t.date()),E(t.month()),N(t.year())};n.useEffect(()=>{if(e.value){const t=a(e.value).utc();j(t.date()),E(t.month()),N(t.year())}},[e.value]);const[k,F]=n.useState(!1),[O,M]=n.useState(!1),I=n.useRef(null),D=n.useRef(null),h=n.useRef(null),R=n.useRef(null),V=n.useMemo(()=>Ce(C.length)+1,[C]),v=n.useMemo(()=>40+V*28+(V-1)*6+z[e.size].padding*2,[e.size,V]),ge=n.useMemo(()=>z[e.size].radius,[e.size]),S=n.useCallback(()=>{I.current&&(M(!1),F(!0))},[]),_=n.useCallback(()=>{I.current&&(x.to(D.current,{duration:.1}),x.to(h.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var i,u;M(!1),F(!1),(i=R.current)==null||i.blur(),(u=D.current)==null||u.blur()}}))},[]),W=n.useCallback(()=>{x.to(D.current,{duration:.1,onComplete:()=>{x.to(h.current,{height:`${v}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{S()}})}})},[S,v]),B=n.useCallback(()=>{O||k||(M(!0),W())},[W,O,k]),ke=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),B())},[B,e]);n.useEffect(()=>{k&&W()},[v]);const $=n.useCallback(()=>{O||k&&(M(!0),x.to(h.current,{duration:.2,onComplete:()=>{_()}}))},[_,O,k]),ye=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),$())},[$,e]),P=n.useCallback(t=>{h.current&&h.current.contains(t.target)&&t.preventDefault()},[]),H=n.useMemo(()=>{const t=a.utc().year(o).month(d).date(f).add(1,"month").startOf("month");return e.endDate?t.isAfter(a.utc(e.endDate),"month"):!1},[o,d,f,e.endDate]),Y=n.useMemo(()=>{const t=a.utc().year(o).month(d).date(f).subtract(1,"month").startOf("month");return e.startDate?t.isBefore(a.utc(e.startDate),"month"):!1},[o,d,f,e.startDate]);n.useEffect(()=>(document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}),[P]),n.useEffect(()=>{const t=i=>{h.current&&D.current&&!h.current.contains(i.target)&&!D.current.contains(i.target)&&$()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[$]),n.useEffect(()=>{k&&S()},[S,k]);const w=n.useCallback((t,i)=>{const u=a(t).utc();e.onChange(u.valueOf()),j(u.date()),E(u.month()),N(u.year()),e.isOnClickClose&&i&&$()},[$,e]);return n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc();T(t)},[e.value]),n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc(),i=e.startDate?a(e.startDate).utc():null,u=e.endDate?a(e.endDate).utc():null;i&&t.isBefore(i,"day")?w(i.startOf("day").valueOf()):u&&t.isAfter(u,"day")&&w(u.startOf("day").valueOf())},[e.endDate,e.startDate,e.value,w]),l.jsxDEV(l.Fragment,{children:[l.jsxDEV(Oe,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:ge,$parentListHeight:v,onFocus:ke,onBlur:ye,ref:R,children:[l.jsxDEV(qe,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(K=e==null?void 0:e.inputProps)==null?void 0:K.isError,$isLoading:(Z=e==null?void 0:e.inputProps)==null?void 0:Z.isLoading,$postfixChildren:(U=e==null?void 0:e.inputProps)==null?void 0:U.postfixChildren,$prefixChildren:(G=e==null?void 0:e.inputProps)==null?void 0:G.prefixChildren,$isBold:(J=e==null?void 0:e.inputProps)==null?void 0:J.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(Q=e==null?void 0:e.inputProps)==null?void 0:Q.isRequired,defaultValue:(X=e==null?void 0:e.inputProps)==null?void 0:X.defaultValue,value:fe,type:(p=e==null?void 0:e.inputProps)==null?void 0:p.type,onChange:t=>{var i,u;return((i=e.inputProps)==null?void 0:i.onChange)&&((u=e.inputProps)==null?void 0:u.onChange(t.target.value))},onBlur:(ee=e==null?void 0:e.inputProps)==null?void 0:ee.onBlur,onFocus:(te=e==null?void 0:e.inputProps)==null?void 0:te.onFocus,onClick:B,ref:D},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:355,columnNumber:9},void 0),l.jsxDEV(Me,{ref:h,$genre:e.genre,$size:e.size,style:{height:`${v}px`},children:l.jsxDEV(ze,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:I,children:[l.jsxDEV(oe,{justifyContent:"space-between",alignItems:"center",children:[l.jsxDEV(de,{type:"button",isRadius:!0,iconName:"Arrow2",iconTurn:90,width:"asHeight",genre:e.genre,size:"small",onClick:()=>!Y&&be(),isHidden:Y},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:391,columnNumber:15},void 0),l.jsxDEV(oe,{gap:"8px",children:[l.jsxDEV($e,{genre:e.genre,size:"small",inputProps:void 0,value:a.utc().year(o).month(d).date(f).startOf("day").utc().valueOf(),onChange:w,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"90px"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:403,columnNumber:17},void 0),l.jsxDEV(we,{genre:e.genre,size:"small",value:a.utc().year(o).month(d).date(f).startOf("day").utc().valueOf(),onChange:w,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:421,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:402,columnNumber:15},void 0),l.jsxDEV(de,{type:"button",onClick:()=>!H&&he(),width:"asHeight",isRadius:!0,iconName:"Arrow2",iconTurn:-90,genre:e.genre,size:"small",isHidden:H},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:439,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:390,columnNumber:13},void 0),l.jsxDEV(Ie,{$rows:V,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,i)=>l.jsxDEV(Pe,{$isToday:!1,$isWeekend:!1,type:"button",$genre:e.genre,$size:e.size,$row:C[0].weekOfMonth-1,$column:i+1,children:t},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:453,columnNumber:17},void 0)),C.map(t=>t.isDisabled?null:l.jsxDEV(Be,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>w(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===g.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[l.jsxDEV(ve,{color:L.colors.date[e.genre].color.rest},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:481,columnNumber:21},void 0),t.labelNumber]},t.value,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:468,columnNumber:19},void 0))]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:451,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:389,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:381,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:344,columnNumber:7},void 0),((ne=e==null?void 0:e.inputProps)==null?void 0:ne.isError)&&((ae=e==null?void 0:e.inputProps)==null?void 0:ae.errorMessage)&&l.jsxDEV(xe,{$size:e.size,$width:e.width,$isErrorAbsolute:(ie=e.inputProps)==null?void 0:ie.isErrorAbsolute,children:(re=e.inputProps)==null?void 0:re.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:491,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/date-picker/date-picker.tsx",lineNumber:343,columnNumber:5},void 0)};try{se.displayName="DatePicker",se.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "size" | "name" | "width" | "id" | "value" | "placeholder" | "genre" | "isDisabled" | "isInputEffect">'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Oe=y.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,Me=y.div`
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

  ${je};
`,Ve=m`
  ${e=>e.$size&&Se(z[e.$size])};
`,Se=e=>m`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,ze=y.div`
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
  ${Ve}
  ${Ee};
  justify-content: flex-start;
  gap: 10px;
`,Ie=y.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,me=m`
  ${e=>e.$size&&We({...z[e.$size]})};
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
    all ${e=>e.theme.transition.default},
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
  ${ce(12,700,"Inter")}
`,We=e=>m`
  border-radius: ${e.radius}px;
  ${ce(12,700,"Inter")};
`,Be=y.button`
  ${me}
`,Pe=y.button`
  ${me}
  opacity: 1;
  background-color: transparent;
`,qe=y(Ne)``;export{se as D};
