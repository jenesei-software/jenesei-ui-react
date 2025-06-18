import{j as n,d as o,l as i}from"./styled-components.browser.esm-CyaOpMkv.js";import{r}from"./index-CnY36iC1.js";import{S as u}from"./component-BNDODjX_.js";import{I as l}from"./component.styles-CCzgObkh.js";import{a as m}from"./style-DC1hPGwE.js";const c=e=>{const a=r.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),d=r.useCallback(t=>{e.onClickIcon&&(t.stopPropagation(),e.onClickIcon())},[e]);return n.jsxDEV(u,{...e.wrapperProps,children:n.jsxDEV(s,{children:[n.jsxDEV(p,{onClick:a,children:[n.jsxDEV(f,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:34,columnNumber:11},void 0),e.isAccordionIcon&&n.jsxDEV(y,{$expanded:e.expanded,onClick:d,name:"Arrow1",primaryColor:"black100",type:"id",size:"large"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:33,columnNumber:9},void 0),n.jsxDEV(x,{$expanded:e.expanded,children:e.accordionDetails},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:31,columnNumber:5},void 0)};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"StackProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactNode"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const s=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,p=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,f=o.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&i`
      width: calc(100% - 26px);
    `}
`,x=o.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  ${m};
`,y=o(l)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?i`
          transform: rotate(180deg);
        `:i`
          transform: rotate(0deg);
        `}
`;export{c as A};
