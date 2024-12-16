import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{l as o,d as h,n as T}from"./styled-components.browser.esm-CCP31c1y.js";import{E as C}from"./index-rCr475hU.js";import{J as W}from"./theme-3X06DcYZ.js";const $=o`
  font-style: normal;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;

  ${e=>e.$flex&&o`
      flex: ${e.$flex};
    `};
  ${e=>e.$cursor&&o`
      cursor: ${e.$cursor};
    `};
  ${e=>e.$textAlign&&o`
     text-align ${e.$textAlign};
    `};
  ${e=>e.$textWrap&&o`
     text-wrap ${e.$textWrap};
    `};

  ${e=>e.$overflow&&o`
     overflow ${e.$overflow};
    `};
  ${e=>e.$clamp&&o`
      display: -webkit-box;
      -webkit-line-clamp: ${e.$clamp};
    `};
  ${e=>e.$clampOrient&&o`
      -webkit-box-orient: ${e.$clampOrient};
    `};
  ${e=>e.$family&&o`
      font-family: ${e.$family};
    `};
  ${e=>e.$size&&o`
      font-size: ${e.$size}px;
    `};
  ${e=>e.$weight&&o`
      font-weight: ${e.$weight};
    `};
  ${e=>e.$height&&o`
      line-height: ${e.$height}px;
    `};
  ${e=>e.$color&&o`
      color: ${W[e.$color]};
    `};
  ${e=>e.$textAlign&&o`
      text-align: ${e.$textAlign};
    `};
  ${e=>e.$textWrap&&o`
      text-wrap: ${e.$textWrap};
    `};

  ${e=>e.$isHoverUnderlining&&o`
      &:hover {
        text-decoration: underline;
      }
    `};
`,w=h.span`
  ${$}
`,V=h.h1`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,q=h.h2`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,j=h.h3`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,D=h.h4`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,S=h.h5`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,P=h.h6`
  ${$}
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,_=h.span`
  font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.mobile}px;
  }
  ${$};
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,R=h.span`
  font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.mobile}px;
  }
  ${$};
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,N=h.span`
  font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.mobile}px;
  }
  ${$};
  ${e=>e.$device&&o`
      font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,A=h.div`
  display: contents;
`,M=h.div`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  width: auto;
  min-width: 0;

  padding: 8px;
  border-radius: 6px;

  background-color: ${e=>e.theme.palette.grayPatricia};
  color: ${e=>e.theme.palette.whiteStandard};

  white-space: ${e=>e.$whiteSpace??"normal"};
  max-width: ${e=>e.$maxWidth??"300px"};
  max-height: ${e=>e.$maxHeight??"200px"};

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity ${e=>e.theme.transition.default};
`,O=h.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity ${e=>e.theme.transition.default};
`,p=s.memo(e=>e.isDisabled?u.jsx(u.Fragment,{children:e.children}):u.jsx(E,{...e})),E=e=>{const l=T(),[d,f]=s.useState(!1),v=s.useMemo(()=>10,[]),a=s.useMemo(()=>`${v}px`,[]),c=s.useMemo(()=>v,[]),b=s.useRef(null),g=s.useRef(null),z=s.useCallback(()=>{f(!0)},[]),y=s.useCallback(m=>{var t,n;const i=m.relatedTarget;(!(i instanceof Node)||!((t=b.current)!=null&&t.contains(i))&&!((n=g.current)!=null&&n.contains(i)))&&f(!1)},[]),k=s.useMemo(()=>{if(!b.current||!g.current&&!d)return{};const m=b.current,i=g.current;if(!m||!i)return{};const t=m.getBoundingClientRect(),n=i.children[0].getBoundingClientRect(),r={};switch(e.placement){case"top":r.left=`${n.left+n.width/2-t.width/2}px`,r.top=`${n.top-t.height-c}px`;break;case"top-start":r.left=`${n.left}px`,r.top=`${n.top-t.height-c}px`;break;case"top-end":r.left=`${n.right-t.width}px`,r.top=`${n.top-t.height-c}px`;break;case"right":r.left=`${n.right+c}px`,r.top=`${n.top+n.height/2-t.height/2}px`;break;case"right-start":r.left=`${n.right+c}px`,r.top=`${n.top}px`;break;case"right-end":r.left=`${n.right+c}px`,r.top=`${n.bottom-t.height}px`;break;case"bottom":r.left=`${n.left+n.width/2-t.width/2}px`,r.top=`${n.bottom+c}px`;break;case"bottom-start":r.left=`${n.left}px`,r.top=`${n.bottom+c}px`;break;case"bottom-end":r.left=`${n.right-t.width}px`,r.top=`${n.bottom+c}px`;break;case"left":r.left=`${n.left-t.width-c}px`,r.top=`${n.top+n.height/2-t.height/2}px`;break;case"left-start":r.left=`${n.left-t.width-c}px`,r.top=`${n.top}px`;break;case"left-end":r.left=`${n.left-t.width-c}px`,r.top=`${n.bottom-t.height}px`;break}return r},[c,e.placement,d]),H=s.useMemo(()=>{if(!g.current&&!d)return{};const m=g.current;if(!m)return{};const i=m.children[0].getBoundingClientRect(),t={};switch(e.placement){case"right":t.left=`${i.right}px`,t.top=`${i.top+i.height/2-10}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${l.palette.grayPatricia} transparent transparent`;break;case"right-start":t.left=`${i.right}px`,t.top=`${i.top+5}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${l.palette.grayPatricia} transparent transparent`;break;case"right-end":t.left=`${i.right}px`,t.top=`${i.top+i.height-25}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${l.palette.grayPatricia} transparent transparent`;break;case"left":t.left=`${i.left-10}px`,t.top=`${i.top+i.height/2-10}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${l.palette.grayPatricia}`;break;case"left-start":t.left=`${i.left-10}px`,t.top=`${i.top+5}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${l.palette.grayPatricia}`;break;case"left-end":t.left=`${i.left-10}px`,t.top=`${i.top+i.height-25}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${l.palette.grayPatricia}`;break;case"top":t.left=`${i.left+i.width/2-10}px`,t.top=`${i.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${l.palette.grayPatricia} transparent transparent transparent`;break;case"top-start":t.left=`${i.left+10}px`,t.top=`${i.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${l.palette.grayPatricia} transparent transparent transparent`;break;case"top-end":t.left=`${i.right-30}px`,t.top=`${i.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${l.palette.grayPatricia} transparent transparent transparent`;break;case"bottom":t.left=`${i.left+i.width/2-10}px`,t.top=`${i.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${l.palette.grayPatricia}  transparent`;break;case"bottom-start":t.left=`${i.left+10}px`,t.top=`${i.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${l.palette.grayPatricia}  transparent`;break;case"bottom-end":t.left=`${i.right-30}px`,t.top=`${i.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${l.palette.grayPatricia}  transparent`;break}return t},[a,e.placement,l.palette.grayPatricia,d]);return u.jsxs(u.Fragment,{children:[u.jsx(A,{ref:g,onMouseEnter:z,onMouseLeave:y,children:e.children}),C.createPortal(u.jsxs(u.Fragment,{children:[u.jsx(O,{$visible:d,style:H}),u.jsx(M,{ref:b,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:d,onMouseLeave:y,style:k,children:u.jsx(x,{size:e.size??14,children:e.content})})]}),document.body)]})};p.displayName="Tooltip";try{p.displayName="Tooltip",p.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const x=s.forwardRef((e,l)=>{const d={$clamp:e.clamp,$clampOrient:e.clampOrient,$color:e.color,$family:e.family,$overflow:e.overflow,$textAlign:e.textAlign,$textWrap:e.textWrap,$weight:e.weight,$height:e.height,$flex:e.flex,$cursor:e.cursor,$isHoverUnderlining:e.isHoverUnderlining,$device:e.device,$size:"size"in e?e.size:void 0,$variant:"variant"in e?e.variant:void 0,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}};if("variant"in e){if(e.variant==="h1")return u.jsx(V,{ref:l,...d,children:e.children});if(e.variant==="h2")return u.jsx(q,{ref:l,...d,children:e.children});if(e.variant==="h3")return u.jsx(j,{ref:l,...d,children:e.children});if(e.variant==="h4")return u.jsx(D,{ref:l,...d,children:e.children});if(e.variant==="h5")return u.jsx(S,{ref:l,...d,children:e.children});if(e.variant==="h6")return u.jsx(P,{ref:l,...d,children:e.children});if(e.variant==="h7")return u.jsx(_,{ref:l,...d,children:e.children});if(e.variant==="h8")return u.jsx(R,{ref:l,...d,children:e.children});if(e.variant==="h9")return u.jsx(N,{ref:l,...d,children:e.children})}return"size"in e?u.jsx(w,{ref:l,...d,$height:e.height,$size:e.size,$weight:e.weight,children:e.children}):u.jsx(w,{ref:l,...d,children:e.children})});x.displayName="Typography";const B=s.memo(e=>{const[l,d]=s.useState(!1),f=s.useRef(null);return s.useEffect(()=>{const v=()=>{f.current&&d(f.current.scrollWidth>f.current.clientWidth)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e.children]),u.jsx(p,{isDisabled:!l,content:e.children,...e.tooltip,children:u.jsx(x,{ref:f,...e.typography,style:{position:"relative"},children:e.children})})});B.displayName="TypographyTooltip";try{x.displayName="Typography",x.__docgenInfo={description:"",displayName:"Typography",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},clamp:{defaultValue:null,description:"",name:"clamp",required:!1,type:{name:"number"}},device:{defaultValue:null,description:"",name:"device",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"mobile"'},{value:'"tablet"'}]}},clampOrient:{defaultValue:null,description:"",name:"clampOrient",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"block-axis"'},{value:'"inline-axis"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"Overflow"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},family:{defaultValue:null,description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"wrap"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"balance"'},{value:'"stable"'},{value:'"pretty"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"Cursor"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"100"},{value:"300"},{value:"400"},{value:"500"},{value:"700"},{value:"900"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isHoverUnderlining:{defaultValue:null,description:"",name:"isHoverUnderlining",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'}]}}}}}catch{}export{x as T,B as a,p as b};
