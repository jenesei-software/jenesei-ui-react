import{d as t,j as i}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as n}from"./index-CnY36iC1.js";import{I as c}from"./component.styles-BbZ0qEuD.js";import{a as l}from"./style-pCqVTddV.js";const m=t.div`
  background-color: ${e=>e.theme.palette.whiteStandard};

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?0:1};
  ${l};
`,f=t.div`
  display: contents;
  opacity: ${e=>e.$visible?1:0};
  ${l};
`,b=t.div`
  position: absolute;
  width: 8vmin;
  height: 8vmin;
`,v=t.div`
  position: relative;
  margin-top: calc(18vmin);
  z-index: 1;
  ${l};
`,o=e=>{const[r,u]=n.useState(e.defaultVisible??!1),a=n.useMemo(()=>"visible"in e?e.visible:null,[e]),s=n.useMemo(()=>"time"in e?e.time:null,[e]);return n.useEffect(()=>{if(s!==null){const d=setTimeout(()=>{u(!0)},s);return()=>{clearTimeout(d)}}},[s]),n.useEffect(()=>{a!==null&&u(!a)},[a]),i.jsxDEV(i.Fragment,{children:[i.jsxDEV(m,{$visible:r,children:[i.jsxDEV(b,{children:i.jsxDEV(c,{size:"100%",type:"loading",primaryColor:"blueFocus",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:35,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:34,columnNumber:9},void 0),!r&&e.content&&i.jsxDEV(v,{children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:37,columnNumber:39},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:33,columnNumber:7},void 0),i.jsxDEV(f,{$visible:r,children:r?e.children:null},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:39,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/preview/area.tsx",lineNumber:32,columnNumber:5},void 0)};try{o.displayName="Preview",o.__docgenInfo={description:"",displayName:"Preview",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}export{o as P};
