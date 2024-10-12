import{j as l,d as D,l as f}from"./styled-components.browser.esm-028b5a71.js";import{h as r,b as ve,d as we}from"./select.styles-9a345c15.js";import{r as n}from"./index-ff614419.js";import{g as O}from"./index-7d9a9c74.js";import{B as ue,R as xe}from"./button-b2a6fc4f.js";import{S as de}from"./icon.styles-6515b290.js";import{a as Ce,b as Oe,S as Me}from"./input.styles-f98c6732.js";import{K as j}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./typography-eb8d59f5.js";import{g as fe}from"./typography.functions-dcbec177.js";import"./index-4da86cf0.js";import"./checkbox.styles-ccb52e51.js";import"./modal-loading.styles-b2147eb5.js";function Se(e){const u=Math.floor(e/7),h=e%7;return u+h}const B=e=>{var K,Z,G,J,Q,U,X,p,ee,te,ne,ae,ie,re;const $=e.value?r(e.value).utc():r.utc(),[u,h]=n.useState($.clone().month()),[d,k]=n.useState($.clone().year()),[c,M]=n.useState($.clone().date()),ge=n.useMemo(()=>e.value?r(e.value).utc().format("D MMMM YYYY"):"",[e.value]),S=n.useMemo(()=>{const t=r.utc(),i=r.utc().year(d).month(u).startOf("month"),o=r.utc().year(d).month(u).endOf("month"),y=[],R=e.startDate?r.utc(e.startDate):null,w=e.endDate?r.utc(e.endDate):null,le=i.isoWeekday()-1;if(le>0)for(let m=le;m>0;m--){const a=i.clone().subtract(m,"days");y.push({value:a.valueOf(),labelString:a.format("dd"),labelNumber:a.date(),dayOfWeek:a.isoWeekday(),isWeekend:a.isoWeekday()===6||a.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:a.isSame(t,"day"),isCurrentMonth:!1,isDisabled:a.isBefore(R,"day")||a.isAfter(w,"day")||a.isSame(w,"day")})}const s=i.clone();for(;s<=o;)y.push({value:s.valueOf(),labelString:s.format("dd"),labelNumber:s.date(),dayOfWeek:s.isoWeekday(),isWeekend:s.isoWeekday()===6||s.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:s.isSame(t,"day"),isCurrentMonth:!0,isDisabled:s.isBefore(R,"day")||s.isAfter(w,"day")||s.isSame(w,"day")}),s.add(1,"day");const oe=7-o.isoWeekday();if(oe>0)for(let m=1;m<=oe;m++){const a=o.clone().add(m,"days").startOf("day");y.push({value:a.valueOf(),labelString:a.format("dd"),labelNumber:a.date(),dayOfWeek:a.isoWeekday(),isWeekend:a.isoWeekday()===6||a.isoWeekday()===7,weekOfMonth:Math.ceil((y.length+1)/7),isToday:a.isSame(t,"day"),isCurrentMonth:!1,isDisabled:a.isBefore(R,"day")||a.isAfter(w,"day")||a.isSame(w,"day")})}return y.sort((m,a)=>m.value-a.value),y},[u,d,e.endDate,e.startDate]),ye=()=>{const t=r.utc().year(d).month(u).date(c).add(1,"month");M(t.date()),h(t.month()),k(t.year())},$e=()=>{const t=r.utc().year(d).month(u).date(c).subtract(1,"month");M(t.date()),h(t.month()),k(t.year())},V=(t,i)=>{const o=r(t).utc();e.onChange(o.valueOf()),M(o.date()),h(o.month()),k(o.year()),e.isOnClickClose&&i&&C()};n.useEffect(()=>{if(e.value){const t=r(e.value).utc();M(t.date()),h(t.month()),k(t.year())}},[e.value]);const[b,T]=n.useState(!1),[E,z]=n.useState(!1),q=n.useRef(null),v=n.useRef(null),g=n.useRef(null),Y=n.useRef(null),I=n.useMemo(()=>Se(S.length)+1,[S.length]),x=n.useMemo(()=>40+I*28+(I-1)*6+j[e.size].padding*2,[e.size,I]),be=n.useMemo(()=>j[e.size].radius,[e.size]),W=n.useCallback(()=>{q.current&&(z(!1),T(!0))},[]),_=n.useCallback(()=>{q.current&&(O.to(v.current,{duration:.1}),O.to(g.current,{height:"0px",display:"none",zIndex:"auto",duration:.1,ease:"power2.out",onComplete:()=>{var i,o;z(!1),T(!1),(i=Y.current)==null||i.blur(),(o=v.current)==null||o.blur()}}))},[]),L=n.useCallback(()=>{O.to(v.current,{duration:.1,onComplete:()=>{O.to(g.current,{height:`${x}px`,display:"flex",zIndex:"1",duration:.1,onComplete:()=>{W()}})}})},[W,x]),A=n.useCallback(()=>{E||b||(z(!0),L())},[L,E,b]),De=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onFocus&&e.onFocus(t),A())},[A,e]);n.useEffect(()=>{b&&L()},[x]);const C=n.useCallback(()=>{E||b&&(z(!0),O.to(g.current,{duration:.2,onComplete:()=>{_()}}))},[_,E,b]),ke=n.useCallback(t=>{e!=null&&e.isDisabled||(e.onBlur&&t&&e.onBlur(t),C())},[C,e]),F=n.useCallback(t=>{g.current&&g.current.contains(t.target)&&t.preventDefault()},[]),H=n.useMemo(()=>{const t=r.utc().year(d).month(u).date(c).add(1,"month").startOf("year").year(),i=r(e.endDate).year();return e.endDate?t>=i:!1},[d,u,c,e.endDate]),N=n.useMemo(()=>{const t=r.utc().year(d).month(u).date(c).subtract(1,"month").startOf("year").year(),i=r(e.startDate).year();return e.startDate?t<i:!1},[d,u,c,e.startDate]);return n.useEffect(()=>(document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}),[F]),n.useEffect(()=>{const t=i=>{g.current&&v.current&&!g.current.contains(i.target)&&!v.current.contains(i.target)&&C()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[C]),n.useEffect(()=>{b&&W()},[W,b]),l.jsxs(l.Fragment,{children:[l.jsxs(Ee,{$genre:e.genre,$width:e.width,$isDisabled:e==null?void 0:e.isDisabled,tabIndex:0,$radius:be,$parentListHeight:x,onFocus:De,onBlur:ke,ref:Y,children:[l.jsx(Le,{id:e.id,name:e.name,$genre:e.genre,$size:e.size,placeholder:e==null?void 0:e.placeholder,$isError:(K=e==null?void 0:e.inputProps)==null?void 0:K.isError,$isLoading:(Z=e==null?void 0:e.inputProps)==null?void 0:Z.isLoading,$postfixChildren:(G=e==null?void 0:e.inputProps)==null?void 0:G.postfixChildren,$prefixChildren:(J=e==null?void 0:e.inputProps)==null?void 0:J.prefixChildren,$isBold:(Q=e==null?void 0:e.inputProps)==null?void 0:Q.isBold,disabled:e==null?void 0:e.isDisabled,$isDisabled:e==null?void 0:e.isDisabled,$isInputEffect:e==null?void 0:e.isInputEffect,readOnly:!0,required:(U=e==null?void 0:e.inputProps)==null?void 0:U.isRequired,defaultValue:(X=e==null?void 0:e.inputProps)==null?void 0:X.defaultValue,value:ge,type:(p=e==null?void 0:e.inputProps)==null?void 0:p.type,onChange:t=>{var i,o;return((i=e.inputProps)==null?void 0:i.onChange)&&((o=e.inputProps)==null?void 0:o.onChange(t.target.value))},onBlur:(ee=e==null?void 0:e.inputProps)==null?void 0:ee.onBlur,onFocus:(te=e==null?void 0:e.inputProps)==null?void 0:te.onFocus,onClick:A,ref:v}),l.jsx(ze,{ref:g,$genre:e.genre,$size:e.size,style:{height:`${x}px`},children:l.jsxs(Pe,{$isInputEffect:e.isInputEffect,$genre:e.genre,$size:e.size,ref:q,children:[l.jsxs(de,{justifyContent:"space-between",alignItems:"center",children:[l.jsx(ue,{type:"button",isRadius:!0,iconName:"ArrowLeft2",width:"asHeight",genre:e.genre,size:"small",onClick:()=>!N&&$e(),isHidden:N}),l.jsxs(de,{gap:"8px",children:[l.jsx(ve,{genre:e.genre,size:"small",inputProps:void 0,value:r.utc().year(d).month(u).date(c).startOf("day").utc().valueOf(),onChange:V,lang:"ru",width:"90px"}),l.jsx(we,{genre:e.genre,size:"small",value:r.utc().year(d).month(u).date(c).startOf("day").utc().valueOf(),onChange:V,startDate:e.startDate,endDate:e.endDate,lang:"ru",width:"70px"})]}),l.jsx(ue,{type:"button",onClick:()=>!H&&ye(),width:"asHeight",isRadius:!0,iconName:"ArrowRight2",genre:e.genre,size:"small",isHidden:H})]}),l.jsxs(je,{$rows:I,children:[["Mo","Tu","We","Th","Fr","Sa","Su"].map((t,i)=>l.jsx(qe,{$isToday:!1,$isWeekend:!1,type:"button",$genre:e.genre,$size:e.size,$row:S[0].weekOfMonth-1,$column:i+1,children:t},i)),S.map(t=>!t.isDisabled&&l.jsxs(Ve,{type:"button",$genre:e.genre,$size:e.size,$row:t.weekOfMonth+1,$column:t.dayOfWeek,onClick:()=>V(t.value,!0),$isToday:t.isToday,$isWeekend:t.isWeekend,$isChoice:t.value===$.valueOf(),$isCurrentMonth:t.isCurrentMonth,children:[l.jsx(xe,{}),t.labelNumber]},t.value))]})]})})]}),((ne=e==null?void 0:e.inputProps)==null?void 0:ne.isError)&&((ae=e==null?void 0:e.inputProps)==null?void 0:ae.errorMessage)&&l.jsx(Ce,{$size:e.size,$width:e.width,$isErrorAbsolute:(ie=e.inputProps)==null?void 0:ie.isErrorAbsolute,children:(re=e.inputProps)==null?void 0:re.errorMessage})]})};try{B.displayName="DatePicker",B.__docgenInfo={description:"",displayName:"DatePicker",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"number"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isOnClickClose:{defaultValue:null,description:"",name:"isOnClickClose",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Omit<InputProps, "value" | "width" | "size" | "id" | "genre" | "isDisabled" | "isInputEffect" | "name" | "placeholder">'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | null"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timestamp: number) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const Ee=D.div`
  width: ${e=>e.$width??"100%"};
  position: relative;

  outline: none !important;

  &:focus-visible {
    outline: none !important;
  }
`,ze=D.div`
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
`,Ie=f`
  ${e=>e.$size&&We(j[e.$size])};
`,We=e=>f`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Pe=D.div`
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
  ${Oe};
  justify-content: flex-start;
  gap: 10px;
`,je=D.div`
  display: grid;
  column-gap: normal;
  row-gap: normal;
  gap: 6px;
  grid-template-columns: repeat(7, 28px);
  grid-template-rows: repeat(${e=>e.$rows}, 28px);
  justify-content: space-between;
`,he=f`
  ${e=>e.$size&&Be({...j[e.$size]})};
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
  ${fe(12,700,"Inter")}
`,Be=e=>f`
  border-radius: ${e.radius}px;
  ${fe(12,700,"Inter")};
`,Ve=D.button`
  ${he}
`,qe=D.button`
  ${he}
  opacity: 1;
  background-color: transparent;
`,Le=D(Me)``,pe={component:B,title:"DatePicker"},Ae=e=>{const $=r.utc().subtract(100,"years").startOf("year").valueOf(),u=r.utc().add(1,"year").startOf("year").valueOf(),[h,d]=n.useState(r.utc().startOf("day").valueOf()),k=c=>{d(c)};return l.jsx(B,{...e,placeholder:"Month",value:h,onChange:k,startDate:$,endDate:u})},P={render:e=>l.jsx(Ae,{...e}),args:{size:"medium",genre:"gray",width:"300px"}};var se,ce,me;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <DatePickerWrapper {...args} />,
  args: {
    size: 'medium',
    genre: 'gray',
    width: '300px'
  }
}`,...(me=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const et=["Default"];export{P as Default,et as __namedExportsOrder,pe as default};
