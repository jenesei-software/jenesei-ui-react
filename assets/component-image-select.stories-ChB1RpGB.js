import{n as q,j as n,l as d,d as $}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as l}from"./index-CnY36iC1.js";import{I as P}from"./consts-C0czNpwt.js";import"./context.constants-CBKrka8W.js";import{u as W}from"./context.hooks-BLFvBG7O.js";import{E as L,a as M}from"./style-J1eytVMD.js";import{K as b}from"./theme.global-CKNmeFpz.js";import{m as I}from"./proxy-BS1eh56F.js";import{B as c}from"./component-DVjaNw_-.js";import{I as V}from"./component.styles-D-Hnk_uF.js";import{u as O}from"./component-CRmrMLGk.js";import{S as C}from"./component-BPa6yCZC.js";import{T as S}from"./component-Dh-bcLtB.js";import"./area-DMU-5v0B.js";import"./style-IM99yq-C.js";import"./index-DgedcAJ4.js";import"./jsx-runtime-uV6E1Fxi.js";import"./v4-C6aID195.js";import"./component.functions-BGGwQnpg.js";import"./motion-BdlOunNt.js";import"./component.styles-Xz0ZKPYU.js";import"./style-CHwZntvm.js";import"./component-kqn1VMYM.js";import"./area-Ogxdy6gM.js";import"./area-ChQ9N3im.js";import"./component.constants-BKYiBj0u.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";const w=e=>{const{onChange:i}=e,[s,o]=l.useState(e.images||[]),[k,a]=l.useState(!1),u=l.useRef(null),m=q(),p=t=>{var r;t.preventDefault(),(r=t.dataTransfer.files)!=null&&r.length&&N(t.dataTransfer.files)},E=t=>{o(r=>{const f=r.filter(h=>h.id!==t);return i==null||i(f),f})},_=l.useCallback(t=>{t&&o(r=>{const f=t.map((F,R)=>({...F,index:r.length+R})),h=[...r,...f];return i==null||i(h),h})},[i]),{handleAddFiles:N}=O({onSave:_,locale:e.locale,dialog:{button:{genre:e.propsButton.default.genre,size:e.propsButton.default.size},buttonDelete:{genre:e.propsButton.delete.genre,size:e.propsButton.delete.size}},imageSettings:{maxSize:e.imageSettings.maxSize,maxCount:e.imageSettings.maxCount-s.length,aspect:e.imageSettings.aspect},inputRef:u}),y=()=>{var t;(t=u.current)==null||t.click()},A=()=>{o(e.defaultImages||[]),i==null||i(e.defaultImages||[])};l.useEffect(()=>{o(e.images||[])},[e.images]);const g=l.useMemo(()=>b[e.size],[e.size]),{handleAdd:B}=j({size:e.size,locale:{textFallbackImage:e.locale.textFallbackImage},imageSettings:e.imageSettings,genre:e.genre});return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(K,{$genre:e.genre,$size:e.size,id:e.id,$width:e.width,$error:e.error,children:[n.jsxDEV(Z,{onDrop:t=>{p(t),a(!1)},onDragOver:t=>t.preventDefault(),onDragEnter:()=>a(!0),onDragLeave:()=>a(!1),animate:{borderColor:k?m.colors.selectImage[e.genre].border.hover:m.colors.selectImage[e.genre].border.rest},transition:{duration:.3},$genre:e.genre,$size:e.size,children:[n.jsxDEV(I.div,{transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},layout:!0,style:{display:"flex",flexWrap:"wrap",gap:`${g.padding-2}px`},children:[s.map(t=>t.url&&n.jsxDEV(I.div,{style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${g.radius}px`,flexGrow:1},layout:!0,transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},children:[n.jsxDEV(V,{sxStack:r=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:r.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:e.isContain,sxImage:{default:{objectFit:e.isContain?"contain":"cover"}},alt:t.name||"image",src:t.url,componentFallback:n.jsxDEV(S,{sx:{default:{variant:"h6"}},children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:187,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:166,columnNumber:21},void 0),n.jsxDEV(c,{sx:{default:{position:"absolute",top:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Close"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>E(t.id)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:198,columnNumber:21},void 0),n.jsxDEV(c,{sx:{default:{position:"absolute",bottom:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Activity"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>t.url&&B({id:t.id,imageSrc:t.url})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:219,columnNumber:21},void 0)]},t.id,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:146,columnNumber:19},void 0)),s.length===0&&n.jsxDEV("div",{onClick:y,style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${g.radius}px`,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:n.jsxDEV(S,{style:{color:m.colors.selectImage[e.genre].color.rest},sx:{default:{}},children:e.locale.dragAndDrop},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:262,columnNumber:17},void 0)},"empty",!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:244,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:132,columnNumber:11},void 0),n.jsxDEV("input",{ref:u,type:"file",accept:P,multiple:!0,style:{display:"none"},onChange:t=>{t.target.files&&N(t.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:276,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:115,columnNumber:9},void 0),n.jsxDEV(C,{sx:{default:{flexGrow:1,gap:`${g.padding-2}px`}},children:[n.jsxDEV(c,{type:"button",genre:e.genre,size:e.size,sx:{default:{flexGrow:3}},isRadius:!0,onClick:y,children:e.locale.textImageButton},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:288,columnNumber:11},void 0),n.jsxDEV(c,{isRadius:!0,type:"button",sx:{default:{flexGrow:1}},onClick:A,genre:e.genre,size:e.size,children:e.locale.textResetImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:302,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:287,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:108,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(L,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:318,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:107,columnNumber:5},void 0)},j=e=>{const i=l.useMemo(()=>b[e.size],[e.size]),s=l.useMemo(()=>`${i.radius}px`,[i.radius]),{add:o}=W({br:s});return{handleAdd:l.useCallback(a=>{o({borderRadius:s,padding:"0",background:"whiteStandard",content:(u,m)=>n.jsxDEV(C,{sx:{default:{position:"relative",overflow:"hidden",aspectRatio:`${e.imageSettings.aspect*2} / 2`,width:"auto",maxWidth:"70dvw",height:"85dvh",borderRadius:u==null?void 0:u.br},tablet:{maxWidth:"95dvw"}},children:[n.jsxDEV(V,{sxStack:p=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:p.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:!0,sxImage:{default:{objectFit:"contain"}},alt:a==null?void 0:a.imageSrc,src:a==null?void 0:a.imageSrc,componentFallback:n.jsxDEV(S,{sx:{default:{variant:"h6"}},children:e.locale.textFallbackImage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:376,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:355,columnNumber:13},void 0),n.jsxDEV(c,{sx:{default:{position:"absolute",bottom:15,right:15}},genre:"realebail-white",size:"small",icons:[{type:"id",name:"Arrow4"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>m==null?void 0:m()},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:387,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:339,columnNumber:11},void 0)})},[o,s,e.imageSettings.aspect,e.locale.textFallbackImage])}};try{w.displayName="ImageSelect",w.__docgenInfo={description:"",displayName:"ImageSelect",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ textFallbackImage: string; textImageButton: string; textResetImage: string; dragAndDrop: string; } & { dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},propsButton:{defaultValue:null,description:"",name:"propsButton",required:!0,type:{name:'{ default: Pick<ButtonProps, "size" | "genre">; delete: Pick<ButtonProps, "size" | "genre">; }'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((images: ImageSelectItemProps[]) => void)"}},isContain:{defaultValue:null,description:"",name:"isContain",required:!1,type:{name:"boolean"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},defaultImages:{defaultValue:null,description:"",name:"defaultImages",required:!0,type:{name:"ImageSelectItemProps[]"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageSelectItemProps[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}try{j.displayName="useImageView",j.__docgenInfo={description:"",displayName:"useImageView",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:'Pick<{ textFallbackImage: string; textImageButton: string; textResetImage: string; dragAndDrop: string; } & { dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }, "textFallbackImage">'}}}}}catch{}const T=d`
  ${e=>d`
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
`,G=d`
  ${e=>H(b[e.$size])};
`,H=e=>d`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,Y=d`
  ${e=>J(b[e.$size])};
`,J=e=>d`
  gap: ${e.padding-2}px;
`,K=$.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${Y}
  ${M}
`,Z=$(I.div)`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: ${e=>e.$width||"100%"};
  ${T}
  ${G}
`,ve={component:w,title:"Component/Image/Select"},x={args:{propsButton:{default:{genre:"realebail-white",size:"medium"},delete:{genre:"blackBorder",size:"medium"}},width:"100%",onChange(e){console.log("Selected images:",e)},genre:"realebail-white",size:"medium",imageSettings:{aspect:900/600,maxSize:5*1024*1024,maxCount:5,width:200,height:200},isContain:!0,locale:{dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete",textFallbackImage:"Fallback image",textImageButton:"Add image",textResetImage:"Reset image",dragAndDrop:"Drag and drop your files here"},defaultImages:[],images:[{id:0,index:0,isNew:!1,url:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v"}]}};var v,z,D;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    propsButton: {
      default: {
        genre: 'realebail-white',
        size: 'medium'
      },
      delete: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    width: '100%',
    onChange(images) {
      console.log('Selected images:', images);
    },
    genre: 'realebail-white',
    size: 'medium',
    imageSettings: {
      aspect: 900 / 600,
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200
    },
    isContain: true,
    locale: {
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete',
      textFallbackImage: 'Fallback image',
      textImageButton: 'Add image',
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
}`,...(D=(z=x.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const ze=["Select"];export{x as Select,ze as __namedExportsOrder,ve as default};
