import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";import{S as l}from"./stack-C1_CtTyx.js";import{d as o,l as i}from"./styled-components.browser.esm-CCP31c1y.js";import{I as s}from"./icon.styles-Cg4ODpap.js";const a=e=>{const t=r.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),c=r.useCallback(d=>{e.onClickIcon&&(d.stopPropagation(),e.onClickIcon())},[e]);return n.jsx(l,{...e.wrapperProps,children:n.jsxs(m,{children:[n.jsxs(u,{onClick:t,children:[n.jsx(p,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary}),e.isAccordionIcon&&n.jsx(x,{$expanded:e.expanded,onClick:c,name:"ArrowDown",primaryColor:"black100",type:"curved",size:"large"})]}),n.jsx(y,{$expanded:e.expanded,children:e.accordionDetails})]})})};try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"FlexShortStylesProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const m=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,u=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,p=o.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&i`
      width: calc(100% - 26px);
    `}
`,y=o.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  transition-property: max-height, opacity, height;
  transition-duration: 0.3s;
  transition-timing-function: easy;
`,x=o(s)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?i`
          transform: rotate(180deg);
        `:i`
          transform: rotate(0deg);
        `}
`;export{a as A};
