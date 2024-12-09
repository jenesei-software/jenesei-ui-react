import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{h as a,b as We,d as Ie}from"./select.styles-DUhWtEZu.js";import{r as n}from"./index-DJO9vBfz.js";import{g as w}from"./index-DjKJqAo0.js";import{n as je,d as b,l as f}from"./styled-components.browser.esm-CCP31c1y.js";import{B as he,R as Be}from"./button-DxJKBbe2.js";import{a as Te,b as qe,S as Ne}from"./input.styles-woq1x1mu.js";import{S as ge}from"./stack-gMuxSjiR.js";import{K as j}from"./theme-6wvtFABo.js";import"./theme.global-j_wjL8sr.js";import"./typography-3k44A8Yn.js";import{g as Se}from"./typography.functions-_Xr-RK7k.js";import"./index-rCr475hU.js";import"./checkbox.styles-9ARhFGtm.js";import"./loading.styles-92ldLbyd.js";import"./icon.styles-ig3CQChh.js";import"./base.styles-BarGonPG.js";function Fe(e){const c=Math.floor(e/7);return e%7>0?c+1:c}const B=e=>{var X,p,ee,te,ae,ne,re,se,ie,ue,de,oe,le,ce;const O=je(),[c,C]=n.useState(e.value?a(e.value).utc():a.utc()),[d,M]=n.useState(c.clone().month()),[o,E]=n.useState(c.clone().year()),[h,S]=n.useState(c.clone().date()),ze=n.useMemo(()=>e.value?a(e.value).utc().format("D MMMM YYYY"):"",[e.value]),Y=n.useMemo(()=>{const t=a.utc(),r=a.utc().year(o).month(d).startOf("month"),u=a.utc().year(o).month(d).endOf("month"),y=[],_=e.startDate?a.utc(e.startDate):null,K=e.endDate?a.utc(e.endDate):null,me=r.isoWeekday()-1;if(me>0)for(let m=me;m>0;m--){const i=r.clone().subtract(m,"days");y.push({value:i.valueOf(),labelString:i.format("dd"),labelNumber:i.date(),dayOfWeek:i.isoWeekday(),isWeekend:i.isoWeekday()===6||i.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:i.isSame(t,"day"),isCurrentMonth:!1,isDisabled:i.isBefore(_,"day")||i.isAfter(K,"day")})}const l=r.clone();for(;l<=u;)y.push({value:l.valueOf(),labelString:l.format("dd"),labelNumber:l.date(),dayOfWeek:l.isoWeekday(),isWeekend:l.isoWeekday()===6||l.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:l.isSame(t,"day"),isCurrentMonth:!0,isDisabled:l.isBefore(_,"day")||l.isAfter(K,"day")}),l.add(1,"day");const fe=7-u.isoWeekday();if(fe>0)for(let m=1;m<=fe;m++){const i=u.clone().add(m,"days").startOf("day");y.push({value:i.valueOf(),labelString:i.format("dd"),labelNumber:i.date(),dayOfWeek:i.isoWeekday(),isWeekend:i.isoWeekday()===6||i.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:i.isSame(t,"day"),isCurrentMonth:!1,isDisabled:i.isBefore(_,"day")||i.isAfter(K,"day")})}return y.sort((m,i)=>m.value-i.value),y},[d,o,e.endDate,e.startDate]),Pe=()=>{const t=a.utc().year(o).month(d).date(h).add(1,"month");S(t.date()),M(t.month()),E(t.year())},Ae=()=>{const t=a.utc().year(o).month(d).date(h).subtract(1,"month");S(t.date()),M(t.month()),E(t.year())};n.useEffect(()=>{if(e.value){const t=a(e.value).utc();S(t.date()),M(t.month()),E(t.year())}},[e.value]);const[D,Z]=n.useState(!1),[z,P]=n.useState(!1),q=n.useRef(null),$=n.useRef(null),g=n.useRef(null),U=n.useRef(null),A=n.useMemo(()=>Fe(Y.length)+1,[Y]),k=n.useMemo(()=>40+A*28+(A-1)*6+j[e.size].padding*2,[e.size,A]),Le=n.useMemo(()=>j[e.size].radius,[e.size]),L=n.useCallback(()=>{q.current&&(P(!1),Z(!0))},[]),G=n.useCallback(()=>{q.current&&(w.to($.current,{duration:.1}),w.to(g.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var r,u;P(!1),Z(!1),(r=U.current)==null||r.blur(),(u=$.current)==null||u.blur()}}))},[]),N=n.useCallback(()=>{w.to($.current,{duration:.1,onComplete:()=>{w.to(g.current,{height:`${k}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{L()}})}})},[L,k]),F=n.useCallback(()=>{z||D||(P(!0),N())},[N,z,D]),He=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),F())},[F,e]);n.useEffect(()=>{D&&N()},[k]);const v=n.useCallback(()=>{z||D&&(P(!0),w.to(g.current,{duration:.2,onComplete:()=>{G()}}))},[G,z,D]),Ve=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),v())},[v,e]),R=n.useCallback(t=>{g.current&&g.current.contains(t.target)&&t.preventDefault()},[]),J=n.useMemo(()=>{const t=a.utc().year(o).month(d).date(h).add(1,"month").startOf("month");return e.endDate?t.isAfter(a.utc(e.endDate),"month"):!1},[o,d,h,e.endDate]),Q=n.useMemo(()=>{const t=a.utc().year(o).month(d).date(h).subtract(1,"month").startOf("month");return e.startDate?t.isBefore(a.utc(e.startDate),"month"):!1},[o,d,h,e.startDate]);n.useEffect(()=>(document.addEventListener("mousedown",R),()=>{document.removeEventListener("mousedown",R)}),[R]),n.useEffect(()=>{const t=r=>{g.current&&$.current&&!g.current.contains(r.target)&&!$.current.contains(r.target)&&v()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[v]),n.useEffect(()=>{D&&L()},[L,D]);const x=n.useCallback((t,r)=>{const u=a(t).utc();e.onChange(u.valueOf()),S(u.date()),M(u.month()),E(u.year()),e.isOnClickClose&&r&&v()},[v,e]);return n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc();C(t)},[e.value]),n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc(),r=e.startDate?a(e.startDate).utc():null,u=e.endDate?a(e.endDate).utc():null;r&&t.isBefore(r,"day")?x(r.startOf("day").valueOf()):u&&t.isAfter(u,"day")&&x(u.startOf("day").valueOf())},[e.endDate,e.startDate,e.value,x]),s.jsxs(s.Fragment,{children:[s.jsxs(Re,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:Le,$parentListHeight:k,onFocus:He,onBlur:Ve,ref:U,children:[s.jsx(pe,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(X=e==null?void 0:e.inputProps)==null?void 0:X.isError,$isLoading:(p=e==null?void 0:e.inputProps)==null?void 0:p.isLoading,$postfixChildren:(ee=e==null?void 0:e.inputProps)==null?void 0:ee.postfixChildren,$prefixChildren:(te=e==null?void 0:e.inputProps)==null?void 0:te.prefixChildren,$isBold:(ae=e==null?void 0:e.inputProps)==null?void 0:ae.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(ne=e==null?void 0:e.inputProps)==null?void 0:ne.isRequired,defaultValue:(re=e==null?void 0:e.inputProps)==null?void 0:re.defaultValue,value:ze,type:(se=e==null?void 0:e.inputProps)==null?void 0:se.type,onChange:t=>{var r,u;return((r=e.inputProps)==null?void 0:r.onChange)&&((u=e.inputProps)==null?void 0:u.onChange(t.target.value))},onBlur:(ie=e==null?void 0:e.inputProps)==null?void 0:ie.onBlur,onFocus:(ue=e==null?void 0:e.inputProps)==null?void 0:ue.onFocus,onClick:F,ref:$}),s.jsx(_e,{ref:g,$genre:e.genre,$size:e.size,style:{height:`${k}px`},children:s.jsxs(Ue,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:q,children:[s.jsxs(ge,{justifyContent:"space-between",alignItems:"center",children:[s.jsx(he,{type:"button",isRadius:!0,iconName:"ArrowLeft2",width:"asHeight",genre:e.genre,size:"small",onClick:()=>!Q&&Ae(),isHidden:Q}),s.jsxs(ge,{gap:"8px",children:[s.jsx(We,{genre:e.genre,size:"small",inputProps:void 0,value:a.utc().year(o).month(d).date(h).startOf("day").utc().valueOf(),onChange:x,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"90px"}),s.jsx(Ie,{genre:e.genre,size:"small",value:a.utc().year(o).month(d).date(h).startOf("day").utc().valueOf(),onChange:x,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"})]}),s.jsx(he,{type:"button",onClick:()=>!J&&Pe(),width:"asHeight",isRadius:!0,iconName:"ArrowRight2",genre:e.genre,size:"small",isHidden:J})]}),s.jsxs(Ge,{$rows:A,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,r)=>s.jsx(Xe,{$isToday:!1,$isWeekend:!1,type:"button",$genre:e.genre,$size:e.size,$row:Y[0].weekOfMonth-1,$column:r+1,children:t},r)),Y.map(t=>t.isDisabled?null:s.jsxs(Qe,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>x(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===c.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[s.jsx(Be,{color:O.colors.date[e.genre].color.rest}),t.labelNumber]},t.value))]})]})})]}),((de=e==null?void 0:e.inputProps)==null?void 0:de.isError)&&((oe=e==null?void 0:e.inputProps)==null?void 0:oe.errorMessage)&&s.jsx(Te,{$size:e.size,$width:e.width,$isErrorAbsolute:(le=e.inputProps)==null?void 0:le.isErrorAbsolute,children:(ce=e.inputProps)==null?void 0:ce.errorMessage})]})};try{B.displayName="DatePicker",B.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "size" | "name" | "width" | "id" | "value" | "placeholder" | "genre" | "isDisabled" | "isInputEffect">'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Re=b.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,_e=b.div`
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
`,Ke=f`
  ${e=>e.$size&&Ze(j[e.$size])};
`,Ze=e=>f`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Ue=b.div`
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
  ${Ke}
  ${qe};
  justify-content: flex-start;
  gap: 10px;
`,Ge=b.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,Ye=f`
  ${e=>e.$size&&Je({...j[e.$size]})};
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
    ${e=>f`
      background: ${e.theme.colors.date[e.$genre].background.hover};
      border-color: ${e.theme.colors.date[e.$genre].border.hover};
      color: ${e.theme.colors.date[e.$genre].color.hover};
    `}
  }
  transition:
    all ${e=>e.theme.transition},
    outline 0s;

  ${e=>e.$isWeekend&&f`
      background: ${e.theme.colors.date[e.$genre].background.weekend};
      border-color: ${e.theme.colors.date[e.$genre].border.weekend};
      color: ${e.theme.colors.date[e.$genre].color.weekend};
    `}
  ${e=>e.$isToday&&f`
      background: ${e.theme.colors.date[e.$genre].background.today};
      border-color: ${e.theme.colors.date[e.$genre].border.today};
      color: ${e.theme.colors.date[e.$genre].color.today};
    `}
    ${e=>e.$isChoice&&f`
      background: ${e.theme.colors.date[e.$genre].background.choice};
      border-color: ${e.theme.colors.date[e.$genre].border.choice};
      color: ${e.theme.colors.date[e.$genre].color.choice};
    `}
    ${e=>!e.$isCurrentMonth&&f`
      opacity: 0.5;
    `}
  ${Se(12,700,"Inter")}
`,Je=e=>f`
  border-radius: ${e.radius}px;
  ${Se(12,700,"Inter")};
`,Qe=b.button`
  ${Ye}
`,Xe=b.button`
  ${Ye}
  opacity: 1;
  background-color: transparent;
`,pe=b(Ne)``,Yt={component:B,title:"Component/DatePicker",tags:["autodocs"]},T=e=>{const[O,c]=n.useState(e.value),C=d=>{c(d)};return n.useEffect(()=>{c(e.value)},[e.value]),s.jsx(B,{...e,placeholder:"Month",value:O,onChange:C})},et=a.utc().subtract(100,"years").startOf("year").valueOf(),tt=a.utc().startOf("day").valueOf(),at=a.utc().startOf("day").valueOf(),H={render:e=>s.jsx(T,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:et,endDate:tt,value:at}},nt=a.utc().subtract(118,"years").startOf("year").valueOf(),rt=a.utc().subtract(18,"years").valueOf(),st=a.utc().subtract(18,"years").startOf("day").valueOf(),V={render:e=>s.jsx(T,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:nt,endDate:rt,value:st}},it=a.utc().subtract(121,"years").startOf("year").valueOf(),ut=a.utc().subtract(21,"years").valueOf(),dt=a.utc().subtract(21,"years").startOf("day").valueOf(),W={render:e=>s.jsx(T,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:it,endDate:ut,value:dt}},ot=a.utc().startOf("day").valueOf(),lt=a.utc().add(3,"months").startOf("day").valueOf(),ct=a.utc().startOf("day").valueOf(),I={render:e=>s.jsx(T,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:ot,endDate:lt,value:ct}};var ye,De,be;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: PastHundredYearsStartDate,
    endDate: PastHundredYearsEndDate,
    value: PastHundredYearsValue
  }
}`,...(be=(De=H.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var $e,ve,xe;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear18YearsAgoStartDate,
    endDate: LastHundredYear18YearsAgoEndDate,
    value: LastHundredYear18YearsAgoValue
  }
}`,...(xe=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ke,we,Oe;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear21YearsAgoStartDate,
    endDate: LastHundredYear21YearsAgoEndDate,
    value: LastHundredYear21YearsAgoValue
  }
}`,...(Oe=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var Ce,Me,Ee;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: NextThreeMonthsStartDate,
    endDate: NextThreeMonthsEndDate,
    value: NextThreeMonthsValue
  }
}`,...(Ee=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};const zt=["PastHundredYears","LastHundredYear18YearsAgo","LastHundredYear21YearsAgo","NextThreeMonths"];export{V as LastHundredYear18YearsAgo,W as LastHundredYear21YearsAgo,I as NextThreeMonths,H as PastHundredYears,zt as __namedExportsOrder,Yt as default};
