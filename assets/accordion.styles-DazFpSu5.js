import{j as n,d as i,l as o}from"./theme-DVxtux_W.js";import{r}from"./index-CnY36iC1.js";import{S as u}from"./stack-Di_R-rTa.js";import{I as l}from"./icon.styles-PYAkx5Iy.js";const c=e=>{const a=r.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),d=r.useCallback(t=>{e.onClickIcon&&(t.stopPropagation(),e.onClickIcon())},[e]);return n.jsxDEV(u,{...e.wrapperProps,children:n.jsxDEV(s,{children:[n.jsxDEV(m,{onClick:a,children:[n.jsxDEV(p,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:34,columnNumber:11},void 0),e.isAccordionIcon&&n.jsxDEV(x,{$expanded:e.expanded,onClick:d,name:"Arrow1",primaryColor:"black100",type:"curved",size:"large"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:33,columnNumber:9},void 0),n.jsxDEV(f,{$expanded:e.expanded,children:e.accordionDetails},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/accordion.tsx",lineNumber:31,columnNumber:5},void 0)};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"FlexShortStylesProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactNode"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const s=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,m=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,p=i.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&o`
      width: calc(100% - 26px);
    `}
`,f=i.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  transition-property: max-height, opacity, height;
  transition-duration: 0.3s;
  transition-timing-function: easy;
`,x=i(l)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?o`
          transform: rotate(180deg);
        `:o`
          transform: rotate(0deg);
        `}
`;export{c as A};
