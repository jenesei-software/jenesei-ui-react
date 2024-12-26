import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{g as x}from"./index-DjKJqAo0.js";import{h as a,b as De,d as ve}from"./select.styles-DEjaW0e-.js";import{r as n}from"./index-DJO9vBfz.js";import{n as ke,d as b,l as m}from"./styled-components.browser.esm-CCP31c1y.js";import{B as oe,R as we}from"./button-DS91_tax.js";import{a as xe,b as Ce,S as Oe}from"./input.styles-B9wNqWi1.js";import{S as de}from"./stack-C1_CtTyx.js";import{K as B}from"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import"./typography-DY6CFA4c.js";import{g as ce}from"./typography.functions-CeSMEUjp.js";import{r as Me}from"./base.styles-62mSIwMs.js";function Ee(e){const y=Math.floor(e/7);return e%7>0?y+1:y}const se=e=>{var K,Z,U,G,J,Q,X,p,ee,te,ne,ae,ie,le;const F=ke(),[y,R]=n.useState(e.value?a(e.value).utc():a.utc()),[o,C]=n.useState(y.clone().month()),[d,O]=n.useState(y.clone().year()),[f,M]=n.useState(y.clone().date()),fe=n.useMemo(()=>e.value?a(e.value).utc().format("D MMMM YYYY"):"",[e.value]),E=n.useMemo(()=>{const t=a.utc(),i=a.utc().year(d).month(o).startOf("month"),r=a.utc().year(d).month(o).endOf("month"),g=[],A=e.startDate?a.utc(e.startDate):null,L=e.endDate?a.utc(e.endDate):null,re=i.isoWeekday()-1;if(re>0)for(let c=re;c>0;c--){const l=i.clone().subtract(c,"days");g.push({value:l.valueOf(),labelString:l.format("dd"),labelNumber:l.date(),dayOfWeek:l.isoWeekday(),isWeekend:l.isoWeekday()===6||l.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:l.isSame(t,"day"),isCurrentMonth:!1,isDisabled:l.isBefore(A,"day")||l.isAfter(L,"day")})}const s=i.clone();for(;s<=r;)g.push({value:s.valueOf(),labelString:s.format("dd"),labelNumber:s.date(),dayOfWeek:s.isoWeekday(),isWeekend:s.isoWeekday()===6||s.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:s.isSame(t,"day"),isCurrentMonth:!0,isDisabled:s.isBefore(A,"day")||s.isAfter(L,"day")}),s.add(1,"day");const ue=7-r.isoWeekday();if(ue>0)for(let c=1;c<=ue;c++){const l=r.clone().add(c,"days").startOf("day");g.push({value:l.valueOf(),labelString:l.format("dd"),labelNumber:l.date(),dayOfWeek:l.isoWeekday(),isWeekend:l.isoWeekday()===6||l.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:l.isSame(t,"day"),isCurrentMonth:!1,isDisabled:l.isBefore(A,"day")||l.isAfter(L,"day")})}return g.sort((c,l)=>c.value-l.value),g},[o,d,e.endDate,e.startDate]),he=()=>{const t=a.utc().year(d).month(o).date(f).add(1,"month");M(t.date()),C(t.month()),O(t.year())},ge=()=>{const t=a.utc().year(d).month(o).date(f).subtract(1,"month");M(t.date()),C(t.month()),O(t.year())};n.useEffect(()=>{if(e.value){const t=a(e.value).utc();M(t.date()),C(t.month()),O(t.year())}},[e.value]);const[$,T]=n.useState(!1),[S,z]=n.useState(!1),P=n.useRef(null),D=n.useRef(null),h=n.useRef(null),_=n.useRef(null),I=n.useMemo(()=>Ee(E.length)+1,[E]),w=n.useMemo(()=>40+I*28+(I-1)*6+B[e.size].padding*2,[e.size,I]),ye=n.useMemo(()=>B[e.size].radius,[e.size]),W=n.useCallback(()=>{P.current&&(z(!1),T(!0))},[]),H=n.useCallback(()=>{P.current&&(x.to(D.current,{duration:.1}),x.to(h.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var i,r;z(!1),T(!1),(i=_.current)==null||i.blur(),(r=D.current)==null||r.blur()}}))},[]),j=n.useCallback(()=>{x.to(D.current,{duration:.1,onComplete:()=>{x.to(h.current,{height:`${w}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{W()}})}})},[W,w]),V=n.useCallback(()=>{S||$||(z(!0),j())},[j,S,$]),$e=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),V())},[V,e]);n.useEffect(()=>{$&&j()},[w]);const v=n.useCallback(()=>{S||$&&(z(!0),x.to(h.current,{duration:.2,onComplete:()=>{H()}}))},[H,S,$]),be=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),v())},[v,e]),q=n.useCallback(t=>{h.current&&h.current.contains(t.target)&&t.preventDefault()},[]),N=n.useMemo(()=>{const t=a.utc().year(d).month(o).date(f).add(1,"month").startOf("month");return e.endDate?t.isAfter(a.utc(e.endDate),"month"):!1},[d,o,f,e.endDate]),Y=n.useMemo(()=>{const t=a.utc().year(d).month(o).date(f).subtract(1,"month").startOf("month");return e.startDate?t.isBefore(a.utc(e.startDate),"month"):!1},[d,o,f,e.startDate]);n.useEffect(()=>(document.addEventListener("mousedown",q),()=>{document.removeEventListener("mousedown",q)}),[q]),n.useEffect(()=>{const t=i=>{h.current&&D.current&&!h.current.contains(i.target)&&!D.current.contains(i.target)&&v()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[v]),n.useEffect(()=>{$&&W()},[W,$]);const k=n.useCallback((t,i)=>{const r=a(t).utc();e.onChange(r.valueOf()),M(r.date()),C(r.month()),O(r.year()),e.isOnClickClose&&i&&v()},[v,e]);return n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc();R(t)},[e.value]),n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc(),i=e.startDate?a(e.startDate).utc():null,r=e.endDate?a(e.endDate).utc():null;i&&t.isBefore(i,"day")?k(i.startOf("day").valueOf()):r&&t.isAfter(r,"day")&&k(r.startOf("day").valueOf())},[e.endDate,e.startDate,e.value,k]),u.jsxs(u.Fragment,{children:[u.jsxs(Se,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:ye,$parentListHeight:w,onFocus:$e,onBlur:be,ref:_,children:[u.jsx(Ae,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(K=e==null?void 0:e.inputProps)==null?void 0:K.isError,$isLoading:(Z=e==null?void 0:e.inputProps)==null?void 0:Z.isLoading,$postfixChildren:(U=e==null?void 0:e.inputProps)==null?void 0:U.postfixChildren,$prefixChildren:(G=e==null?void 0:e.inputProps)==null?void 0:G.prefixChildren,$isBold:(J=e==null?void 0:e.inputProps)==null?void 0:J.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(Q=e==null?void 0:e.inputProps)==null?void 0:Q.isRequired,defaultValue:(X=e==null?void 0:e.inputProps)==null?void 0:X.defaultValue,value:fe,type:(p=e==null?void 0:e.inputProps)==null?void 0:p.type,onChange:t=>{var i,r;return((i=e.inputProps)==null?void 0:i.onChange)&&((r=e.inputProps)==null?void 0:r.onChange(t.target.value))},onBlur:(ee=e==null?void 0:e.inputProps)==null?void 0:ee.onBlur,onFocus:(te=e==null?void 0:e.inputProps)==null?void 0:te.onFocus,onClick:V,ref:D}),u.jsx(ze,{ref:h,$genre:e.genre,$size:e.size,style:{height:`${w}px`},children:u.jsxs(Be,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:P,children:[u.jsxs(de,{justifyContent:"space-between",alignItems:"center",children:[u.jsx(oe,{type:"button",isRadius:!0,iconName:"ArrowLeft2",width:"asHeight",genre:e.genre,size:"small",onClick:()=>!Y&&ge(),isHidden:Y}),u.jsxs(de,{gap:"8px",children:[u.jsx(De,{genre:e.genre,size:"small",inputProps:void 0,value:a.utc().year(d).month(o).date(f).startOf("day").utc().valueOf(),onChange:k,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"90px"}),u.jsx(ve,{genre:e.genre,size:"small",value:a.utc().year(d).month(o).date(f).startOf("day").utc().valueOf(),onChange:k,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"})]}),u.jsx(oe,{type:"button",onClick:()=>!N&&he(),width:"asHeight",isRadius:!0,iconName:"ArrowRight2",genre:e.genre,size:"small",isHidden:N})]}),u.jsxs(Pe,{$rows:I,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,i)=>u.jsx(qe,{$isToday:!1,$isWeekend:!1,type:"button",$genre:e.genre,$size:e.size,$row:E[0].weekOfMonth-1,$column:i+1,children:t},i)),E.map(t=>t.isDisabled?null:u.jsxs(Ve,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>k(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===y.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[u.jsx(we,{color:F.colors.date[e.genre].color.rest}),t.labelNumber]},t.value))]})]})})]}),((ne=e==null?void 0:e.inputProps)==null?void 0:ne.isError)&&((ae=e==null?void 0:e.inputProps)==null?void 0:ae.errorMessage)&&u.jsx(xe,{$size:e.size,$width:e.width,$isErrorAbsolute:(ie=e.inputProps)==null?void 0:ie.isErrorAbsolute,children:(le=e.inputProps)==null?void 0:le.errorMessage})]})};try{se.displayName="DatePicker",se.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "size" | "name" | "width" | "id" | "value" | "placeholder" | "isDisabled" | "genre" | "isInputEffect">'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Se=b.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,ze=b.div`
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

  ${Me};
`,Ie=m`
  ${e=>e.$size&&We(B[e.$size])};
`,We=e=>m`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Be=b.div`
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
  ${Ie}
  ${Ce};
  justify-content: flex-start;
  gap: 10px;
`,Pe=b.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,me=m`
  ${e=>e.$size&&je({...B[e.$size]})};
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
`,je=e=>m`
  border-radius: ${e.radius}px;
  ${ce(12,700,"Inter")};
`,Ve=b.button`
  ${me}
`,qe=b.button`
  ${me}
  opacity: 1;
  background-color: transparent;
`,Ae=b(Oe)``;export{se as D};
