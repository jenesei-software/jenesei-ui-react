import{n as O,j as t,l as u,d as A}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as s}from"./index-CnY36iC1.js";import"./context.constants-_uES7CTn.js";import{u as T}from"./context.hooks-DwdjmNCY.js";import{E as G,a as H}from"./style-DP4WPrh4.js";import{K as w}from"./theme-D8gwu-FP.js";import"./theme.global-C6REP-xE.js";import{m as p}from"./proxy-BgqLTuwE.js";import{B as c}from"./component-DEPDE1I-.js";import{I as D}from"./component.styles-DPr1Q1NB.js";import{S as z}from"./component-ZyHH9g1r.js";import{T as b}from"./component-CXRT2tYE.js";import"./style-KtjdfyVq.js";import"./jsx-runtime-uV6E1Fxi.js";import"./v4-C6aID195.js";import"./component.functions-BGGwQnpg.js";import"./component.styles-HSoMfZk7.js";import"./style-C2EjhzEB.js";import"./component-BejfL9p2.js";import"./area-DMlAQ2qz.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";const j=e=>{const{onChange:r}=e,[N,d]=s.useState(e.images||[]),[R,f]=s.useState(!1),I=s.useRef(null),h=O(),k=s.useCallback(n=>{d(i=>{const{maxSize:a,maxCount:m}=e.imageSettings,W=m-i.length,B=Array.from(n).filter(o=>o.size>a?(console.warn(`File ${o.name} exceeds the allowed size of ${a} bytes`),!1):!0).slice(0,W).map((o,v)=>({id:Date.now()+v,file:o,url:URL.createObjectURL(o),index:i.length+v,isNew:!0,name:o.name})),$=[...i,...B];return r==null||r($),$})},[r,e.imageSettings]),_=n=>{var i;n.preventDefault(),(i=n.dataTransfer.files)!=null&&i.length&&k(n.dataTransfer.files)},F=n=>{d(i=>{const a=i.filter(m=>m.id!==n);return r==null||r(a),a})},y=()=>{var n;(n=I.current)==null||n.click()},q=()=>{d(e.defaultImages||[]),r==null||r(e.defaultImages||[])};s.useEffect(()=>{d(e.images||[])},[e.images]);const l=s.useMemo(()=>w[e.size],[e.size]),x=s.useMemo(()=>`${l.radius}px`,[l.radius]),{add:S}=T({br:x}),L=s.useCallback(n=>{S({borderRadius:x,padding:"0",background:"whiteStandard",content:(i,a)=>t.jsxDEV(z,{sx:{default:{position:"relative",overflow:"hidden",aspectRatio:"900 / 600",width:"auto",maxWidth:"70dvw",height:"85dvh",borderRadius:i==null?void 0:i.br},tablet:{maxWidth:"95dvw"}},children:[t.jsxDEV(D,{propsStack:{sx:m=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:m.palette.black10,position:"absolute",pointerEvents:"none"}})},propsImage:{objectFit:"contain"},alt:n==null?void 0:n.imageSrc,src:n==null?void 0:n.imageSrc,fallback:t.jsxDEV(b,{sx:{default:{variant:"h6"}},children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:136,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:116,columnNumber:13},void 0),t.jsxDEV(c,{sx:{default:{position:"absolute",bottom:15,right:15}},genre:"realebail-white",size:"small",icons:[{type:"id",name:"Arrow4"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>a==null?void 0:a()},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:147,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:100,columnNumber:11},void 0)})},[S,x,e.locale.textFallbackImage]);return t.jsxDEV(t.Fragment,{children:[t.jsxDEV(U,{$genre:e.genre,$size:e.size,id:e.id,$width:e.width,$error:e.error,children:[t.jsxDEV(Z,{onDrop:n=>{_(n),f(!1)},onDragOver:n=>n.preventDefault(),onDragEnter:()=>f(!0),onDragLeave:()=>f(!1),animate:{borderColor:R?h.colors.selectImage[e.genre].border.hover:h.colors.selectImage[e.genre].border.rest},transition:{duration:.3},$genre:e.genre,$size:e.size,children:[t.jsxDEV(p.div,{transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},layout:!0,style:{display:"flex",flexWrap:"wrap",gap:`${l.padding-2}px`},children:[N.map(n=>n.url&&t.jsxDEV(p.div,{style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${l.radius}px`,flexGrow:1},layout:!0,transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},children:[t.jsxDEV(D,{propsStack:{sx:i=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:i.palette.black10,position:"absolute",pointerEvents:"none"}})},alt:n.name||"image",src:n.url,fallback:t.jsxDEV(b,{sx:{default:{variant:"h6"}},children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:251,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:234,columnNumber:21},void 0),t.jsxDEV(c,{sx:{default:{position:"absolute",top:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Close"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>F(n.id)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:262,columnNumber:21},void 0),t.jsxDEV(c,{sx:{default:{position:"absolute",bottom:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Activity"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>n.url&&L({id:n.id,imageSrc:n.url})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:283,columnNumber:21},void 0)]},n.id,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:214,columnNumber:19},void 0)),N.length===0&&t.jsxDEV("div",{onClick:y,style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${l.radius}px`,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:t.jsxDEV(b,{style:{color:h.colors.selectImage[e.genre].color.rest},sx:{default:{}},children:e.locale.dragAndDrop},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:326,columnNumber:17},void 0)},"empty",!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:308,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:200,columnNumber:11},void 0),t.jsxDEV("input",{ref:I,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:n=>{n.target.files&&k(n.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:340,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:183,columnNumber:9},void 0),t.jsxDEV(z,{sx:{default:{flexGrow:1,gap:`${l.padding-2}px`}},children:[t.jsxDEV(c,{type:"button",genre:e.genre,size:e.size,sx:{default:{flexGrow:3}},isRadius:!0,onClick:y,children:e.locale.textAddImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:352,columnNumber:11},void 0),t.jsxDEV(c,{isRadius:!0,type:"button",sx:{default:{flexGrow:1}},onClick:q,genre:e.genre,size:e.size,children:e.locale.textResetImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:366,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:351,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:176,columnNumber:7},void 0),e!=null&&e.error?t.jsxDEV(G,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:382,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:175,columnNumber:5},void 0)};try{j.displayName="SelectImage",j.__docgenInfo={description:"",displayName:"SelectImage",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ textFallbackImage: string; textAddImage: string; textResetImage: string; dragAndDrop: string; }"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((images: SelectImageItemProps[]) => void)"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; }"}},defaultImages:{defaultValue:null,description:"",name:"defaultImages",required:!0,type:{name:"SelectImageItemProps[]"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"SelectImageItemProps[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const P=u`
  ${e=>u`
    background: ${e.theme.colors.selectImage[e.$genre].background.rest};
    color: ${e.theme.colors.selectImage[e.$genre].color.rest};
    &:active {
      background: ${e.theme.colors.selectImage[e.$genre].background.rest};
      color: ${e.theme.colors.selectImage[e.$genre].color.rest};
    }
    &:focus-visible {
      background: ${e.theme.colors.selectImage[e.$genre].background.rest};
      color: ${e.theme.colors.selectImage[e.$genre].color.rest};
    }
  `};
`,M=u`
  ${e=>Y(w[e.$size])};
`,Y=e=>u`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,J=u`
  ${e=>K(w[e.$size])};
`,K=e=>u`
  gap: ${e.padding-2}px;
`,U=A.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${J}
  ${H}
`,Z=A(p.div)`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${P}
  ${M}
`,Ne={component:j,title:"Component/SelectImage"},g={args:{genre:"realebail-white",width:"100%",size:"medium",onChange(e){console.log("Selected images:",e)},imageSettings:{maxSize:5*1024*1024,maxCount:5,width:200,height:200},locale:{textFallbackImage:"Fallback image",textAddImage:"Add image",textResetImage:"Reset image",dragAndDrop:"Drag and drop your files here"},defaultImages:[],images:[{id:0,index:0,isNew:!1,url:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v"}]}};var V,E,C;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    genre: 'realebail-white',
    width: '100%',
    size: 'medium',
    onChange(images) {
      console.log('Selected images:', images);
    },
    imageSettings: {
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200
    },
    locale: {
      textFallbackImage: 'Fallback image',
      textAddImage: 'Add image',
      textResetImage: 'Reset image',
      dragAndDrop: 'Drag and drop your files here'
    },
    defaultImages: [],
    images: [{
      id: 0,
      index: 0,
      isNew: false,
      url: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v'
    }]
  }
}`,...(C=(E=g.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const Ie=["SelectImage"];export{g as SelectImage,Ie as __namedExportsOrder,Ne as default};
