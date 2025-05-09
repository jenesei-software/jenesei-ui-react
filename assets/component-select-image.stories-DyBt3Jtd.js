import{n as T,j as t,l as u,d as R}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as s}from"./index-CnY36iC1.js";import"./context.constants-DH1WXOXG.js";import{u as G}from"./context.hooks-BUawNPtL.js";import{K as j}from"./theme-yMIRbExU.js";import"./theme.global-C6REP-xE.js";import{m as p}from"./proxy-BgqLTuwE.js";import{B as m}from"./component-DkPovXgP.js";import{I as D}from"./component.styles-D6SSC0aK.js";import{S as E}from"./component-ZyHH9g1r.js";import{T as b}from"./component-D15g8Xja.js";import"./style-pCqVTddV.js";import"./jsx-runtime-uV6E1Fxi.js";import"./v4-C6aID195.js";import"./component.styles-BbZ0qEuD.js";import"./style-C2EjhzEB.js";import"./component-BejfL9p2.js";import"./component.functions-BGGwQnpg.js";import"./area-naVJa5LK.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";const w=e=>{const{onChange:r}=e,[N,d]=s.useState(e.images||[]),[A,f]=s.useState(!1),I=s.useRef(null),h=T(),k=s.useCallback(n=>{d(i=>{const{maxSize:a,maxCount:c}=e.imageSettings,B=c-i.length,O=Array.from(n).filter(o=>o.size>a?(console.warn(`File ${o.name} exceeds the allowed size of ${a} bytes`),!1):!0).slice(0,B).map((o,v)=>({id:Date.now()+v,file:o,url:URL.createObjectURL(o),index:i.length+v,isNew:!0,name:o.name})),$=[...i,...O];return r==null||r($),$})},[r,e.imageSettings]),_=n=>{var i;n.preventDefault(),(i=n.dataTransfer.files)!=null&&i.length&&k(n.dataTransfer.files)},F=n=>{d(i=>{const a=i.filter(c=>c.id!==n);return r==null||r(a),a})},y=()=>{var n;(n=I.current)==null||n.click()},q=()=>{d(e.images||[]),r==null||r(e.images||[])};s.useEffect(()=>{d(e.images||[])},[e.images]);const l=s.useMemo(()=>j[e.size],[e.size]),x=s.useMemo(()=>`${l.radius}px`,[l.radius]),{add:S}=G({br:x}),L=s.useCallback(n=>{S({borderRadius:x,padding:"0",background:"whiteStandard",content:(i,a)=>t.jsxDEV(E,{sx:{default:{position:"relative",overflow:"hidden",aspectRatio:"900 / 600",width:"auto",maxWidth:"70dvw",height:"85dvh",borderRadius:i==null?void 0:i.br},tablet:{maxWidth:"95dvw"}},children:[t.jsxDEV(D,{propsStack:{sx:c=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:c.palette.black10,position:"absolute",pointerEvents:"none"}})},propsImage:{objectFit:"contain"},alt:n==null?void 0:n.imageSrc,src:n==null?void 0:n.imageSrc,fallback:t.jsxDEV(b,{variant:"h6",children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:134,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:115,columnNumber:13},void 0),t.jsxDEV(m,{sx:{default:{position:"absolute",bottom:15,right:15}},genre:"realebail-white",size:"small",icon:{type:"id",name:"Arrow4"},width:"asHeight",isHiddenBorder:!0,isRadius:!0,onClick:()=>a==null?void 0:a()},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:136,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:99,columnNumber:11},void 0)})},[S,x,e.locale.textFallbackImage]);return t.jsxDEV(J,{$genre:e.genre,$size:e.size,id:e.id,$width:e.width,$isError:e.isError,children:[t.jsxDEV(K,{onDrop:n=>{_(n),f(!1)},onDragOver:n=>n.preventDefault(),onDragEnter:()=>f(!0),onDragLeave:()=>f(!1),animate:{borderColor:A?h.colors.selectImage[e.genre].border.hover:h.colors.selectImage[e.genre].border.rest},transition:{duration:.3},$genre:e.genre,$size:e.size,children:[t.jsxDEV(p.div,{transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},layout:!0,style:{display:"flex",flexWrap:"wrap",gap:`${l.padding-2}px`},children:[N.map(n=>n.url&&t.jsxDEV(p.div,{style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${l.radius}px`,flexGrow:1},layout:!0,transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},children:[t.jsxDEV(D,{propsStack:{sx:i=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:i.palette.black10,position:"absolute",pointerEvents:"none"}})},alt:n.name||"image",src:n.url,fallback:t.jsxDEV(b,{variant:"h6",children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:236,columnNumber:31},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:220,columnNumber:19},void 0),t.jsxDEV(m,{sx:{default:{position:"absolute",top:5,right:5}},genre:e.genre,size:"small",icon:{type:"id",name:"Close"},width:"asHeight",isHiddenBorder:!0,isRadius:!0,onClick:()=>F(n.id)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:238,columnNumber:19},void 0),t.jsxDEV(m,{sx:{default:{position:"absolute",bottom:5,right:5}},genre:e.genre,size:"small",icon:{type:"id",name:"Activity"},width:"asHeight",isHiddenBorder:!0,isRadius:!0,onClick:()=>n.url&&L({id:n.id,imageSrc:n.url})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:257,columnNumber:19},void 0)]},n.id,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:200,columnNumber:17},void 0)),N.length===0&&t.jsxDEV("div",{onClick:y,style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${l.radius}px`,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:t.jsxDEV(b,{style:{color:h.colors.selectImage[e.genre].color.rest},children:e.locale.dragAndDrop},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:298,columnNumber:15},void 0)},"empty",!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:280,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:186,columnNumber:9},void 0),t.jsxDEV("input",{ref:I,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:n=>{n.target.files&&k(n.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:309,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:169,columnNumber:7},void 0),t.jsxDEV(E,{sx:{default:{flexGrow:1,gap:`${l.padding-2}px`}},children:[t.jsxDEV(m,{type:"button",genre:e.genre,size:e.size,sx:{default:{flexGrow:3}},isRadius:!0,onClick:y,children:e.locale.textAddImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:321,columnNumber:9},void 0),t.jsxDEV(m,{isRadius:!0,type:"button",sx:{default:{flexGrow:1}},onClick:q,genre:e.genre,size:e.size,children:e.locale.textResetImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:335,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:320,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/select-image/component.tsx",lineNumber:162,columnNumber:5},void 0)};try{w.displayName="SelectImage",w.__docgenInfo={description:"",displayName:"SelectImage",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ textFallbackImage: string; textAddImage: string; textResetImage: string; dragAndDrop: string; }"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((images: SelectImageItemProps[]) => void)"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; }"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"SelectImageItemProps[]"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}}}}}catch{}const H=u`
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
  ${e=>W(j[e.$size])};
`,W=e=>u`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,P=u`
  ${e=>Y(j[e.$size])};
`,Y=e=>u`
  gap: ${e.padding-2}px;
`,J=R.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${P}
`,K=R(p.div)`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${H}
  ${M}
`,pe={component:w,title:"Component/SelectImage"},g={args:{genre:"realebail-white",width:"100%",size:"medium",onChange(e){console.log("Selected images:",e)},imageSettings:{maxSize:5*1024*1024,maxCount:5,width:200,height:200},locale:{textFallbackImage:"Fallback image",textAddImage:"Add image",textResetImage:"Reset image",dragAndDrop:"Drag and drop your files here"},images:[{id:0,index:0,isNew:!1,url:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v"}]}};var V,z,C;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    images: [{
      id: 0,
      index: 0,
      isNew: false,
      url: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v'
    }]
  }
}`,...(C=(z=g.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const we=["SelectImage"];export{g as SelectImage,we as __namedExportsOrder,pe as default};
