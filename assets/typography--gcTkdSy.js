import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{l as s,d as h,n as C}from"./styled-components.browser.esm-CCP31c1y.js";import{E as W}from"./index-rCr475hU.js";import{J as V}from"./theme-DVhjlqOZ.js";const $=s`
  font-style: normal;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;

  ${e=>e.$flex&&s`
      flex: ${e.$flex};
    `};
  ${e=>e.$cursor&&s`
      cursor: ${e.$cursor};
    `};
  ${e=>e.$textAlign&&s`
     text-align ${e.$textAlign};
    `};
  ${e=>e.$textWrap&&s`
     text-wrap ${e.$textWrap};
    `};

  ${e=>e.$overflow&&s`
     overflow ${e.$overflow};
    `};
  ${e=>e.$clamp&&s`
      display: -webkit-box;
      -webkit-line-clamp: ${e.$clamp};
    `};
  ${e=>e.$clampOrient&&s`
      -webkit-box-orient: ${e.$clampOrient};
    `};
  ${e=>e.$family&&s`
      font-family: ${e.$family};
    `};
  ${e=>e.$size&&s`
      font-size: ${e.$size}px;
    `};
  ${e=>e.$weight&&s`
      font-weight: ${e.$weight};
    `};
  ${e=>e.$height&&s`
      line-height: ${e.$height}px;
    `};
  ${e=>e.$color&&s`
      color: ${V[e.$color]};
    `};
  ${e=>e.$textAlign&&s`
      text-align: ${e.$textAlign};
    `};
  ${e=>e.$textWrap&&s`
      text-wrap: ${e.$textWrap};
    `};

  ${e=>e.$isHoverUnderlining&&s`
      &:hover {
        text-decoration: underline;
      }
    `};
`,w=h.span`
  ${$}
`,q=h.h1`
  ${$}
`,j=h.h2`
  ${$}
`,S=h.h3`
  ${$}
`,H=h.h4`
  ${$}
`,P=h.h5`
  ${$}
`,_=h.h6`
  ${$}
`,R=h.span`
  font-size: var(--heading-7-font-size);
  line-height: var(--heading-line-height);
  ${$};
`,N=h.span`
  font-size: var(--heading-8-font-size);
  line-height: var(--heading-line-height);
  ${$};
`,A=h.span`
  font-size: var(--heading-9-font-size);
  line-height: var(--heading-line-height);
  ${$};
`,M=h.div`
  display: contents;
`,O=h.div`
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
  transition: opacity ${e=>e.theme.transition};
`,E=h.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity ${e=>e.theme.transition};
`,b=c.memo(e=>e.isDisabled?o.jsx(o.Fragment,{children:e.children}):o.jsx(F,{...e})),F=e=>{const n=C(),[u,p]=c.useState(!1),v=c.useMemo(()=>10,[]),a=c.useMemo(()=>`${v}px`,[]),d=c.useMemo(()=>v,[]),x=c.useRef(null),f=c.useRef(null),k=c.useCallback(()=>{p(!0)},[]),y=c.useCallback(m=>{var t,r;const l=m.relatedTarget;(!(l instanceof Node)||!((t=x.current)!=null&&t.contains(l))&&!((r=f.current)!=null&&r.contains(l)))&&p(!1)},[]),T=c.useMemo(()=>{if(!x.current||!f.current&&!u)return{};const m=x.current,l=f.current;if(!m||!l)return{};const t=m.getBoundingClientRect(),r=l.children[0].getBoundingClientRect(),i={};switch(e.placement){case"top":i.left=`${r.left+r.width/2-t.width/2}px`,i.top=`${r.top-t.height-d}px`;break;case"top-start":i.left=`${r.left}px`,i.top=`${r.top-t.height-d}px`;break;case"top-end":i.left=`${r.right-t.width}px`,i.top=`${r.top-t.height-d}px`;break;case"right":i.left=`${r.right+d}px`,i.top=`${r.top+r.height/2-t.height/2}px`;break;case"right-start":i.left=`${r.right+d}px`,i.top=`${r.top}px`;break;case"right-end":i.left=`${r.right+d}px`,i.top=`${r.bottom-t.height}px`;break;case"bottom":i.left=`${r.left+r.width/2-t.width/2}px`,i.top=`${r.bottom+d}px`;break;case"bottom-start":i.left=`${r.left}px`,i.top=`${r.bottom+d}px`;break;case"bottom-end":i.left=`${r.right-t.width}px`,i.top=`${r.bottom+d}px`;break;case"left":i.left=`${r.left-t.width-d}px`,i.top=`${r.top+r.height/2-t.height/2}px`;break;case"left-start":i.left=`${r.left-t.width-d}px`,i.top=`${r.top}px`;break;case"left-end":i.left=`${r.left-t.width-d}px`,i.top=`${r.bottom-t.height}px`;break}return i},[d,e.placement,u]),z=c.useMemo(()=>{if(!f.current&&!u)return{};const m=f.current;if(!m)return{};const l=m.children[0].getBoundingClientRect(),t={};switch(e.placement){case"right":t.left=`${l.right}px`,t.top=`${l.top+l.height/2-10}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${n.palette.grayPatricia} transparent transparent`;break;case"right-start":t.left=`${l.right}px`,t.top=`${l.top+5}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${n.palette.grayPatricia} transparent transparent`;break;case"right-end":t.left=`${l.right}px`,t.top=`${l.top+l.height-25}px`,t.borderWidth=`${a} ${a} ${a} 0`,t.borderColor=`transparent ${n.palette.grayPatricia} transparent transparent`;break;case"left":t.left=`${l.left-10}px`,t.top=`${l.top+l.height/2-10}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${n.palette.grayPatricia}`;break;case"left-start":t.left=`${l.left-10}px`,t.top=`${l.top+5}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${n.palette.grayPatricia}`;break;case"left-end":t.left=`${l.left-10}px`,t.top=`${l.top+l.height-25}px`,t.borderWidth=`${a} 0 ${a} ${a}`,t.borderColor=`transparent transparent transparent ${n.palette.grayPatricia}`;break;case"top":t.left=`${l.left+l.width/2-10}px`,t.top=`${l.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${n.palette.grayPatricia} transparent transparent transparent`;break;case"top-start":t.left=`${l.left+10}px`,t.top=`${l.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${n.palette.grayPatricia} transparent transparent transparent`;break;case"top-end":t.left=`${l.right-30}px`,t.top=`${l.top-10}px`,t.borderWidth=`${a} ${a} 0 ${a}`,t.borderColor=`${n.palette.grayPatricia} transparent transparent transparent`;break;case"bottom":t.left=`${l.left+l.width/2-10}px`,t.top=`${l.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${n.palette.grayPatricia}  transparent`;break;case"bottom-start":t.left=`${l.left+10}px`,t.top=`${l.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${n.palette.grayPatricia}  transparent`;break;case"bottom-end":t.left=`${l.right-30}px`,t.top=`${l.bottom}px`,t.borderWidth=`0 ${a} ${a} ${a}`,t.borderColor=`transparent transparent ${n.palette.grayPatricia}  transparent`;break}return t},[a,e.placement,n.palette.grayPatricia,u]);return o.jsxs(o.Fragment,{children:[o.jsx(M,{ref:f,onMouseEnter:k,onMouseLeave:y,children:e.children}),W.createPortal(o.jsxs(o.Fragment,{children:[o.jsx(E,{$visible:u,style:z}),o.jsx(O,{ref:x,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:u,onMouseLeave:y,style:T,children:o.jsx(g,{size:e.size??14,children:e.content})})]}),document.body)]})};b.displayName="Tooltip";try{b.displayName="Tooltip",b.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const g=c.forwardRef((e,n)=>{const u={$clamp:e.clamp,$clampOrient:e.clampOrient,$color:e.color,$family:e.family,$overflow:e.overflow,$textAlign:e.textAlign,$textWrap:e.textWrap,$weight:e.weight,$flex:e.flex,$cursor:e.cursor,$isHoverUnderlining:e.isHoverUnderlining,$screen:e.screen,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}};if("variant"in e){if(e.variant==="h1")return o.jsx(q,{ref:n,...u,children:e.children});if(e.variant==="h2")return o.jsx(j,{ref:n,...u,children:e.children});if(e.variant==="h3")return o.jsx(S,{ref:n,...u,children:e.children});if(e.variant==="h4")return o.jsx(H,{ref:n,...u,children:e.children});if(e.variant==="h5")return o.jsx(P,{ref:n,...u,children:e.children});if(e.variant==="h6")return o.jsx(_,{ref:n,...u,children:e.children});if(e.variant==="h7")return o.jsx(R,{ref:n,...u,children:e.children});if(e.variant==="h8")return o.jsx(N,{ref:n,...u,children:e.children});if(e.variant==="h9")return o.jsx(A,{ref:n,...u,children:e.children})}return"size"in e?o.jsx(w,{ref:n,...u,$height:e.height,$size:e.size,$weight:e.weight,children:e.children}):o.jsx(w,{ref:n,...u,children:e.children})});g.displayName="Typography";const L=c.memo(e=>{const[n,u]=c.useState(!1),p=c.useRef(null);return c.useEffect(()=>{const v=()=>{p.current&&u(p.current.scrollWidth>p.current.clientWidth)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e.children]),o.jsx(b,{isDisabled:!n,content:e.children,...e.tooltip,children:o.jsx(g,{ref:p,...e.typography,style:{position:"relative"},children:e.children})})});L.displayName="TypographyTooltip";try{g.displayName="Typography",g.__docgenInfo={description:"",displayName:"Typography",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},clamp:{defaultValue:null,description:"",name:"clamp",required:!1,type:{name:"number"}},screen:{defaultValue:null,description:"",name:"screen",required:!1,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'}]}},clampOrient:{defaultValue:null,description:"",name:"clampOrient",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"block-axis"'},{value:'"inline-axis"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"Overflow"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green25"'},{value:'"green10"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red25"'},{value:'"red10"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},family:{defaultValue:null,description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}},textWrap:{defaultValue:null,description:"",name:"textWrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"balance"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"stable"'},{value:'"pretty"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"Cursor"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"100"},{value:"300"},{value:"400"},{value:"500"},{value:"700"},{value:"900"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isHoverUnderlining:{defaultValue:null,description:"",name:"isHoverUnderlining",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'}]}}}}}catch{}export{L as T,b as a,g as b};
