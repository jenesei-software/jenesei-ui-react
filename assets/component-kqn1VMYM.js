import{d as _,l as d,j as m}from"./styled-components.browser.esm-CyaOpMkv.js";import{r}from"./index-CnY36iC1.js";const f=600,c="JENESEI_RIPPLE",u=_.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,p=_.span`
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
`,w=d`
  ${e=>e.$isRipple&&d`
      position: relative;
      overflow: hidden;
      isolation: isolate;

      & *:not(#${c}) {
        user-select: none;
        pointer-events: none;
      }
    `}
`,E=d`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  & *:not(#${c}) {
    user-select: none;
    pointer-events: none;
  }
`;try{u.displayName="RippleContainer",u.__docgenInfo={description:"",displayName:"RippleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="RippleSpan",p.__docgenInfo={description:"",displayName:"RippleSpan",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const T=(e,o,a)=>{r.useLayoutEffect(()=>{let t=null;return e>0&&(t&&clearTimeout(t),t=setTimeout(()=>{a(),t&&clearTimeout(t)},o*4)),()=>{t&&clearTimeout(t)}},[e,o,a])},y=e=>{const o=r.useMemo(()=>e.color??"unset",[e.color]),a=r.useMemo(()=>e.duration??f,[e.duration]),[t,l]=r.useState([]);T(t.length,a??f,()=>{l([])});const h=r.useCallback(n=>{if(!n.isTrusted)return;const i=n.currentTarget.getBoundingClientRect(),s=i.width>i.height?i.width:i.height,b=n.pageX-i.x-s/2,g=n.pageY-i.y-s/2,R={x:b,y:g,size:s};l([]),setTimeout(()=>{l([R])},0)},[]);return e.isDisabled||e.isHidden?null:m.jsxDEV(u,{id:c,$duration:a,$color:o,onMouseDown:h,children:t.length>0&&t.map((n,i)=>m.jsxDEV(p,{$duration:a,$color:o,style:{top:n.y,left:n.x,width:n.size,height:n.size}},"span"+i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/component.tsx",lineNumber:66,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/component.tsx",lineNumber:62,columnNumber:5},void 0)};try{y.displayName="Ripple",y.__docgenInfo={description:"",displayName:"Ripple",props:{duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}}}}}catch{}export{y as R,w as a,E as b};
