import{d as f,l as R,j as p}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as o}from"./index-CnY36iC1.js";const c=600,y="JENESEI_RIPPLE",d=f.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,u=f.span`
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: ${e=>e.$color};
  animation-name: ripple;
  animation-duration: ${e=>e.$duration}ms;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`,E=R`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  & *:not(#${y}) {
    user-select: none;
    pointer-events: none;
  }
`;try{d.displayName="RippleContainer",d.__docgenInfo={description:"",displayName:"RippleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="RippleSpan",u.__docgenInfo={description:"",displayName:"RippleSpan",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const T=(e,r,i)=>{o.useLayoutEffect(()=>{let t=null;return e>0&&(t&&clearTimeout(t),t=setTimeout(()=>{i(),t&&clearTimeout(t)},r*4)),()=>{t&&clearTimeout(t)}},[e,r,i])},m=e=>{const r=o.useMemo(()=>e.color,[e.color]),i=o.useMemo(()=>e.duration??c,[e.duration]),[t,l]=o.useState([]);T(t.length,i??c,()=>{l([])});const _=o.useCallback(n=>{if(!n.isTrusted)return;const a=n.currentTarget.getBoundingClientRect(),s=a.width>a.height?a.width:a.height,h=n.pageX-a.x-s/2,g=n.pageY-a.y-s/2,b={x:h,y:g,size:s};l([]),setTimeout(()=>{l([b])},0)},[]);return e.isDisabled||e.isHidden?null:p.jsxDEV(d,{id:y,$duration:i,$color:r,onMouseDown:_,children:t.length>0&&t.map((n,a)=>p.jsxDEV(u,{$duration:i,$color:r,style:{top:n.y,left:n.x,width:n.size,height:n.size}},"span"+a,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/component.tsx",lineNumber:66,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/component.tsx",lineNumber:62,columnNumber:5},void 0)};try{m.displayName="Ripple",m.__docgenInfo={description:"",displayName:"Ripple",props:{duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}}}}}catch{}export{E as C,m as R};
