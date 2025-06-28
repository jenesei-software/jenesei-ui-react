import{r,K as p,j as n,S as D,n as q,m as S,c as P,d as V,l as m}from"./iframe-NXvRQG3e.js";import{I as W}from"./consts-BHQTl92h.js";import{u as L}from"./use-JMJcFmEA.js";import{B as f}from"./component-DaaONhq_.js";import{I as C}from"./component.styles-WqIduGmJ.js";import{T as v}from"./component-uNoer6cp.js";import{u as M}from"./context.hooks-LFC01ji2.js";import{E as O,a as T}from"./style-Fk9c2Kpi.js";import"./area-Cgfu1e9B.js";import"./component.styles-BphGMU0u.js";import"./component.constants-HdbJcpCS.js";import"./area-Cgj73TPV.js";import"./index-CpXWg0wM.js";import"./v4-C6aID195.js";import"./motion-Cx9e5g0b.js";const j=e=>{const i=r.useMemo(()=>p[e.size],[e.size]),s=r.useMemo(()=>`${i.radius}px`,[i.radius]),{add:d}=M({br:s,propsDialog:{borderRadius:s,padding:"0",background:"whiteStandard"}});return{handleAdd:r.useCallback(l=>{d({content:(o,u)=>n.jsxDEV(D,{sx:{default:{position:"relative",overflow:"hidden",aspectRatio:`${e.imageSettings.aspect*2} / 2`,width:"auto",maxWidth:"70dvw",height:"85dvh",borderRadius:o==null?void 0:o.br},tablet:{maxWidth:"95dvw"}},children:[n.jsxDEV(C,{sxStack:g=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:g.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:!0,sxImage:{default:{objectFit:"contain"}},alt:l==null?void 0:l.imageSrc,src:l==null?void 0:l.imageSrc,componentFallback:n.jsxDEV(v,{sx:{default:{variant:"h6"}},children:e.locale.imageFallback},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/hooks/use-image-view/use.tsx",lineNumber:68,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/hooks/use-image-view/use.tsx",lineNumber:47,columnNumber:13},void 0),n.jsxDEV(f,{sx:{default:{position:"absolute",bottom:15,right:15}},genre:"realebail-white",size:"small",icons:[{type:"id",name:"Arrow4"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>u==null?void 0:u()},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/hooks/use-image-view/use.tsx",lineNumber:79,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/hooks/use-image-view/use.tsx",lineNumber:31,columnNumber:11},void 0)})},[d,e.imageSettings.aspect,e.locale.imageFallback])}};try{j.displayName="useImageView",j.__docgenInfo={description:"",displayName:"useImageView",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:'Pick<{ imageFallback: string; buttonReset: string; dragAndDrop: string; } & { buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }, "imageFallback">'}}}}}catch{}const k=e=>{const{onChange:i}=e,s=r.useMemo(()=>p[e.size],[e.size]),[d,c]=r.useState(e.images||[]),[l,o]=r.useState(!1),u=r.useRef(null),g=q(),$=t=>{var a;t.preventDefault(),(a=t.dataTransfer.files)!=null&&a.length&&N(t.dataTransfer.files)},A=t=>{c(a=>{const h=a.filter(b=>b.id!==t);return i==null||i(h),h})},E=r.useCallback(t=>{t&&c(a=>{const h=t.map((F,R)=>({...F,index:a.length+R})),b=[...a,...h];return i==null||i(b),b})},[i]),w=()=>{var t;(t=u.current)==null||t.click()},_=()=>{c(e.defaultImages||[]),i==null||i(e.defaultImages||[])},{handleAddFiles:N}=L({onSave:E,locale:e.locale,dialog:{button:{genre:e.propsButton.default.genre,size:e.propsButton.default.size},buttonDelete:{genre:e.propsButton.delete.genre,size:e.propsButton.delete.size}},imageSettings:{maxSize:e.imageSettings.maxSize,maxCount:e.imageSettings.maxCount-d.length,aspect:e.imageSettings.aspect},refInput:u}),{handleAdd:B}=j({size:e.size,locale:e.locale,imageSettings:e.imageSettings,genre:e.genre});return r.useEffect(()=>{c(e.images||[])},[e.images]),n.jsxDEV(n.Fragment,{children:[n.jsxDEV(X,{$genre:e.genre,$size:e.size,id:e.id,$sx:e.sx,$error:e.error,children:[n.jsxDEV(Z,{onDrop:t=>{$(t),o(!1)},onDragOver:t=>t.preventDefault(),onDragEnter:()=>o(!0),onDragLeave:()=>o(!1),animate:{borderColor:l?g.colors.imageSelect[e.genre].border.hover:g.colors.imageSelect[e.genre].border.rest},transition:{duration:.3},$genre:e.genre,$size:e.size,children:[n.jsxDEV(S.div,{transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},layout:!0,style:{display:"flex",flexWrap:"wrap",gap:`${s.padding-2}px`},children:[d.map(t=>t.url&&n.jsxDEV(S.div,{style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${s.radius}px`,flexGrow:1},layout:!0,transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},children:[n.jsxDEV(C,{sxStack:a=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:a.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:e.isContain,sxImage:{default:{objectFit:e.isContain?"contain":"cover"}},alt:t.name||"image",src:t.url,componentFallback:n.jsxDEV(v,{sx:{default:{variant:"h6"}},children:e.locale.imageFallback},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:178,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:157,columnNumber:21},void 0),n.jsxDEV(f,{sx:{default:{position:"absolute",top:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Close"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>A(t.id)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:189,columnNumber:21},void 0),n.jsxDEV(f,{sx:{default:{position:"absolute",bottom:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Activity"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>t.url&&B({id:t.id,imageSrc:t.url})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:210,columnNumber:21},void 0)]},t.id,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:137,columnNumber:19},void 0)),d.length===0&&n.jsxDEV("div",{onClick:w,style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${s.radius}px`,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:n.jsxDEV(v,{style:{color:g.colors.imageSelect[e.genre].color.rest},sx:{default:{}},children:e.locale.dragAndDrop},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:253,columnNumber:17},void 0)},"empty",!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:235,columnNumber:15},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:123,columnNumber:11},void 0),n.jsxDEV("input",{ref:u,type:"file",accept:W,multiple:!0,style:{display:"none"},onChange:t=>{t.target.files&&N(t.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:267,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:106,columnNumber:9},void 0),n.jsxDEV(D,{sx:{default:{flexGrow:1,gap:`${s.padding-2}px`}},children:[n.jsxDEV(f,{type:"button",genre:e.genre,size:e.size,sx:{default:{flexGrow:3}},isRadius:!0,onClick:w,children:e.locale.buttonAdd},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:279,columnNumber:11},void 0),n.jsxDEV(f,{isRadius:!0,type:"button",sx:{default:{flexGrow:1}},onClick:_,genre:e.genre,size:e.size,children:e.locale.buttonReset},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:293,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:278,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:105,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(O,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:309,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-select/component.tsx",lineNumber:104,columnNumber:5},void 0)};try{k.displayName="ImageSelect",k.__docgenInfo={description:"",displayName:"ImageSelect",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ imageFallback: string; buttonReset: string; dragAndDrop: string; } & { buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},propsButton:{defaultValue:null,description:"",name:"propsButton",required:!0,type:{name:'{ default: Pick<ButtonProps, "size" | "genre">; delete: Pick<ButtonProps, "size" | "genre">; }'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((images: ImageSelectItemProps[]) => void)"}},isContain:{defaultValue:null,description:"",name:"isContain",required:!1,type:{name:"boolean"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},defaultImages:{defaultValue:null,description:"",name:"defaultImages",required:!0,type:{name:"ImageSelectItemProps[]"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageSelectItemProps[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const G=m`
  ${e=>m`
    background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
    color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    &:active {
      background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
      color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    }
    &:focus-visible {
      background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
      color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    }
  `};
`,H=m`
  ${e=>Y(p[e.$size])};
`,Y=e=>m`
  padding: ${e.padding}px;
  border-radius: ${e.radius}px;
`,J=m`
  ${e=>K(p[e.$size])};
`,K=e=>m`
  gap: ${e.padding-2}px;
`,X=V.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${J};
  ${T};
  ${P};
`,Z=V(S.div)`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: 100%;
  ${G}
  ${H}
`,ge={component:k,title:"Component/Image/Select"},x={args:{propsButton:{default:{genre:"product",size:"medium"},delete:{genre:"blackBorder",size:"medium"}},sx:{default:{width:"100%"}},onChange(e){console.log("Selected images:",e)},genre:"realebail-white",size:"medium",imageSettings:{aspect:900/600,maxSize:5*1024*1024,maxCount:5,width:200,height:200},isContain:!0,locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete",imageFallback:"Fallback image",buttonReset:"Reset image",dragAndDrop:"Drag and drop your files here"},defaultImages:[],images:[{id:0,index:0,isNew:!1,url:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v"}]}};var y,I,z;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    propsButton: {
      default: {
        genre: 'product',
        size: 'medium'
      },
      delete: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    sx: {
      default: {
        width: '100%'
      }
    },
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
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete',
      imageFallback: 'Fallback image',
      buttonReset: 'Reset image',
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
}`,...(z=(I=x.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const fe=["Select"];export{x as Select,fe as __namedExportsOrder,ge as default};
