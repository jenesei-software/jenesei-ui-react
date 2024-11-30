import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{h as a,b as Ve,d as We}from"./select.styles-BzMa4DYZ.js";import{r as n}from"./index-DJO9vBfz.js";import{g as C}from"./index-DjKJqAo0.js";import{B as fe,R as Ie}from"./button-DS29UrEA.js";import{a as je,b as Be,S as Te}from"./input.styles-DZwuulkh.js";import{S as he}from"./stack-Db-lxqry.js";import{K as I}from"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";import{d as $,l as m}from"./styled-components.browser.esm-CCP31c1y.js";import"./typography--gcTkdSy.js";import{g as Ee}from"./typography.functions-_Xr-RK7k.js";import"./index-rCr475hU.js";import"./checkbox.styles-uw8iikki.js";import"./loading.styles-C9X5Vsl2.js";import"./icon.styles-ke4R2kUL.js";import"./base.styles-lMUunFc3.js";function qe(e){const D=Math.floor(e/7);return e%7>0?D+1:D}const j=e=>{var Q,X,p,ee,te,ae,ne,re,se,ie,ue,de,le,oe;const[y,D]=n.useState(e.value?a(e.value).utc():a.utc()),[d,v]=n.useState(y.clone().month()),[l,M]=n.useState(y.clone().year()),[f,E]=n.useState(y.clone().date()),Ye=n.useMemo(()=>e.value?a(e.value).utc().format("D MMMM YYYY"):"",[e.value]),S=n.useMemo(()=>{const t=a.utc(),r=a.utc().year(l).month(d).startOf("month"),u=a.utc().year(l).month(d).endOf("month"),g=[],R=e.startDate?a.utc(e.startDate):null,_=e.endDate?a.utc(e.endDate):null,ce=r.isoWeekday()-1;if(ce>0)for(let c=ce;c>0;c--){const i=r.clone().subtract(c,"days");g.push({value:i.valueOf(),labelString:i.format("dd"),labelNumber:i.date(),dayOfWeek:i.isoWeekday(),isWeekend:i.isoWeekday()===6||i.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:i.isSame(t,"day"),isCurrentMonth:!1,isDisabled:i.isBefore(R,"day")||i.isAfter(_,"day")})}const o=r.clone();for(;o<=u;)g.push({value:o.valueOf(),labelString:o.format("dd"),labelNumber:o.date(),dayOfWeek:o.isoWeekday(),isWeekend:o.isoWeekday()===6||o.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:o.isSame(t,"day"),isCurrentMonth:!0,isDisabled:o.isBefore(R,"day")||o.isAfter(_,"day")}),o.add(1,"day");const me=7-u.isoWeekday();if(me>0)for(let c=1;c<=me;c++){const i=u.clone().add(c,"days").startOf("day");g.push({value:i.valueOf(),labelString:i.format("dd"),labelNumber:i.date(),dayOfWeek:i.isoWeekday(),isWeekend:i.isoWeekday()===6||i.isoWeekday()===7,weekOfMonth:Math.ceil((g.length+1)/7),isToday:i.isSame(t,"day"),isCurrentMonth:!1,isDisabled:i.isBefore(R,"day")||i.isAfter(_,"day")})}return g.sort((c,i)=>c.value-i.value),g},[d,l,e.endDate,e.startDate]),ze=()=>{const t=a.utc().year(l).month(d).date(f).add(1,"month");E(t.date()),v(t.month()),M(t.year())},Pe=()=>{const t=a.utc().year(l).month(d).date(f).subtract(1,"month");E(t.date()),v(t.month()),M(t.year())};n.useEffect(()=>{if(e.value){const t=a(e.value).utc();E(t.date()),v(t.month()),M(t.year())}},[e.value]);const[b,K]=n.useState(!1),[Y,z]=n.useState(!1),T=n.useRef(null),x=n.useRef(null),h=n.useRef(null),Z=n.useRef(null),P=n.useMemo(()=>qe(S.length)+1,[S]),O=n.useMemo(()=>40+P*28+(P-1)*6+I[e.size].padding*2,[e.size,P]),Ae=n.useMemo(()=>I[e.size].radius,[e.size]),A=n.useCallback(()=>{T.current&&(z(!1),K(!0))},[]),U=n.useCallback(()=>{T.current&&(C.to(x.current,{duration:.1}),C.to(h.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var r,u;z(!1),K(!1),(r=Z.current)==null||r.blur(),(u=x.current)==null||u.blur()}}))},[]),q=n.useCallback(()=>{C.to(x.current,{duration:.1,onComplete:()=>{C.to(h.current,{height:`${O}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{A()}})}})},[A,O]),N=n.useCallback(()=>{Y||b||(z(!0),q())},[q,Y,b]),Le=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),N())},[N,e]);n.useEffect(()=>{b&&q()},[O]);const k=n.useCallback(()=>{Y||b&&(z(!0),C.to(h.current,{duration:.2,onComplete:()=>{U()}}))},[U,Y,b]),He=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),k())},[k,e]),F=n.useCallback(t=>{h.current&&h.current.contains(t.target)&&t.preventDefault()},[]),G=n.useMemo(()=>{const t=a.utc().year(l).month(d).date(f).add(1,"month").startOf("month");return e.endDate?t.isAfter(a.utc(e.endDate),"month"):!1},[l,d,f,e.endDate]),J=n.useMemo(()=>{const t=a.utc().year(l).month(d).date(f).subtract(1,"month").startOf("month");return e.startDate?t.isBefore(a.utc(e.startDate),"month"):!1},[l,d,f,e.startDate]);n.useEffect(()=>(document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}),[F]),n.useEffect(()=>{const t=r=>{h.current&&x.current&&!h.current.contains(r.target)&&!x.current.contains(r.target)&&k()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[k]),n.useEffect(()=>{b&&A()},[A,b]);const w=n.useCallback((t,r)=>{const u=a(t).utc();e.onChange(u.valueOf()),E(u.date()),v(u.month()),M(u.year()),e.isOnClickClose&&r&&k()},[k,e]);return n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc();D(t)},[e.value]),n.useEffect(()=>{const t=e.value?a(e.value).utc():a.utc(),r=e.startDate?a(e.startDate).utc():null,u=e.endDate?a(e.endDate).utc():null;r&&t.isBefore(r,"day")?w(r.startOf("day").valueOf()):u&&t.isAfter(u,"day")&&w(u.startOf("day").valueOf())},[e.endDate,e.startDate,e.value,w]),s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:Ae,$parentListHeight:O,onFocus:Le,onBlur:He,ref:Z,children:[s.jsx(Qe,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(Q=e==null?void 0:e.inputProps)==null?void 0:Q.isError,$isLoading:(X=e==null?void 0:e.inputProps)==null?void 0:X.isLoading,$postfixChildren:(p=e==null?void 0:e.inputProps)==null?void 0:p.postfixChildren,$prefixChildren:(ee=e==null?void 0:e.inputProps)==null?void 0:ee.prefixChildren,$isBold:(te=e==null?void 0:e.inputProps)==null?void 0:te.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(ae=e==null?void 0:e.inputProps)==null?void 0:ae.isRequired,defaultValue:(ne=e==null?void 0:e.inputProps)==null?void 0:ne.defaultValue,value:Ye,type:(re=e==null?void 0:e.inputProps)==null?void 0:re.type,onChange:t=>{var r,u;return((r=e.inputProps)==null?void 0:r.onChange)&&((u=e.inputProps)==null?void 0:u.onChange(t.target.value))},onBlur:(se=e==null?void 0:e.inputProps)==null?void 0:se.onBlur,onFocus:(ie=e==null?void 0:e.inputProps)==null?void 0:ie.onFocus,onClick:N,ref:x}),s.jsx(Fe,{ref:h,$genre:e.genre,$size:e.size,style:{height:`${O}px`},children:s.jsxs(Ke,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:T,children:[s.jsxs(he,{justifyContent:"space-between",alignItems:"center",children:[s.jsx(fe,{type:"button",isRadius:!0,iconName:"ArrowLeft2",width:"asHeight",genre:e.genre,size:"small",onClick:()=>!J&&Pe(),isHidden:J}),s.jsxs(he,{gap:"8px",children:[s.jsx(Ve,{genre:e.genre,size:"small",inputProps:void 0,value:a.utc().year(l).month(d).date(f).startOf("day").utc().valueOf(),onChange:w,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"90px"}),s.jsx(We,{genre:e.genre,size:"small",value:a.utc().year(l).month(d).date(f).startOf("day").utc().valueOf(),onChange:w,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"})]}),s.jsx(fe,{type:"button",onClick:()=>!G&&ze(),width:"asHeight",isRadius:!0,iconName:"ArrowRight2",genre:e.genre,size:"small",isHidden:G})]}),s.jsxs(Ze,{$rows:P,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,r)=>s.jsx(Je,{$isToday:!1,$isWeekend:!1,type:"button",$genre:e.genre,$size:e.size,$row:S[0].weekOfMonth-1,$column:r+1,children:t},r)),S.map(t=>t.isDisabled?null:s.jsxs(Ge,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>w(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===y.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[s.jsx(Ie,{}),t.labelNumber]},t.value))]})]})})]}),((ue=e==null?void 0:e.inputProps)==null?void 0:ue.isError)&&((de=e==null?void 0:e.inputProps)==null?void 0:de.errorMessage)&&s.jsx(je,{$size:e.size,$width:e.width,$isErrorAbsolute:(le=e.inputProps)==null?void 0:le.isErrorAbsolute,children:(oe=e.inputProps)==null?void 0:oe.errorMessage})]})};try{j.displayName="DatePicker",j.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "size" | "name" | "width" | "id" | "value" | "placeholder" | "genre" | "isDisabled" | "isInputEffect">'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Ne=$.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,Fe=$.div`
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
`,Re=m`
  ${e=>e.$size&&_e(I[e.$size])};
`,_e=e=>m`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Ke=$.div`
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
  ${Re}
  ${Be};
  justify-content: flex-start;
  gap: 10px;
`,Ze=$.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,Se=m`
  ${e=>e.$size&&Ue({...I[e.$size]})};
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
  ${Ee(12,700,"Inter")}
`,Ue=e=>m`
  border-radius: ${e.radius}px;
  ${Ee(12,700,"Inter")};
`,Ge=$.button`
  ${Se}
`,Je=$.button`
  ${Se}
  opacity: 1;
  background-color: transparent;
`,Qe=$(Te)``,Et={component:j,title:"Component/DatePicker",tags:["autodocs"]},B=e=>{const[y,D]=n.useState(e.value),d=v=>{D(v)};return n.useEffect(()=>{D(e.value)},[e.value]),s.jsx(j,{...e,placeholder:"Month",value:y,onChange:d})},Xe=a.utc().subtract(100,"years").startOf("year").valueOf(),pe=a.utc().startOf("day").valueOf(),et=a.utc().startOf("day").valueOf(),L={render:e=>s.jsx(B,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:Xe,endDate:pe,value:et}},tt=a.utc().subtract(118,"years").startOf("year").valueOf(),at=a.utc().subtract(18,"years").valueOf(),nt=a.utc().subtract(18,"years").startOf("day").valueOf(),H={render:e=>s.jsx(B,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:tt,endDate:at,value:nt}},rt=a.utc().subtract(121,"years").startOf("year").valueOf(),st=a.utc().subtract(21,"years").valueOf(),it=a.utc().subtract(21,"years").startOf("day").valueOf(),V={render:e=>s.jsx(B,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:rt,endDate:st,value:it}},ut=a.utc().startOf("day").valueOf(),dt=a.utc().add(3,"months").startOf("day").valueOf(),lt=a.utc().startOf("day").valueOf(),W={render:e=>s.jsx(B,{...e}),args:{size:"medium",genre:"gray",width:"300px",startDate:ut,endDate:dt,value:lt}};var ge,ye,De;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: PastHundredYearsStartDate,
    endDate: PastHundredYearsEndDate,
    value: PastHundredYearsValue
  }
}`,...(De=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var be,$e,ve;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear18YearsAgoStartDate,
    endDate: LastHundredYear18YearsAgoEndDate,
    value: LastHundredYear18YearsAgoValue
  }
}`,...(ve=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:ve.source}}};var xe,ke,we;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear21YearsAgoStartDate,
    endDate: LastHundredYear21YearsAgoEndDate,
    value: LastHundredYear21YearsAgoValue
  }
}`,...(we=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Oe,Ce,Me;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: NextThreeMonthsStartDate,
    endDate: NextThreeMonthsEndDate,
    value: NextThreeMonthsValue
  }
}`,...(Me=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source}}};const St=["PastHundredYears","LastHundredYear18YearsAgo","LastHundredYear21YearsAgo","NextThreeMonths"];export{H as LastHundredYear18YearsAgo,V as LastHundredYear21YearsAgo,W as NextThreeMonths,L as PastHundredYears,St as __namedExportsOrder,Et as default};
