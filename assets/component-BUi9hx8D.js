import{l as i,d as l,j as o}from"./styled-components.browser.esm-CyaOpMkv.js";import{B as s}from"./component-DkPovXgP.js";const u=i`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,d=i`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,c=l.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?u:d}
`,r=e=>{var t;return o.jsxDEV(c,{$position:e.position,className:e.className,id:"jenesei-button-group",children:(t=e.value)==null?void 0:t.map((n,a)=>o.jsxDEV(s,{id:"jenesei-button",...n,width:e.width??"auto"},a,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:11,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:9,columnNumber:5},void 0)};try{r.displayName="ButtonGroup",r.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{r as B};
