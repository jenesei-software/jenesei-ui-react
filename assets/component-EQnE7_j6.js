import{l as i,d as l,j as o}from"./styled-components.browser.esm-CyaOpMkv.js";import{B as s}from"./component-B0_Gew7e.js";import{a as u}from"./style-CHwZntvm.js";const d=i`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  & #jenesei-button {
    &:not(:only-child) {
      flex-grow: 1;
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
`,c=i`
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
`,p=l.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?d:c};
  ${u};
`,r=e=>{var t;return o.jsxDEV(p,{$sx:e.sx,$position:e.position,className:e.className,id:"jenesei-button-group",children:(t=e.value)==null?void 0:t.map((n,a)=>o.jsxDEV(s,{id:"jenesei-button",...n},a,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:10,columnNumber:41},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:9,columnNumber:5},void 0)};try{r.displayName="ButtonGroup",r.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; tablet?: CSSObject; mobile?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}}}}}catch{}export{r as B};
