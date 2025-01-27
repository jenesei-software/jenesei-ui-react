import{l as i,d as a,j as r}from"./theme-DVxtux_W.js";import{B as s}from"./button-r7mH7ie0.js";const l=i`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
`,p=a.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?l:d}
`,o=e=>{var t;return r.jsxDEV(p,{$position:e.position,className:e.className,id:"jenesei-button-group",children:(t=e.value)==null?void 0:t.map((n,u)=>r.jsxDEV(s,{id:"jenesei-button",...n,width:e.width??"auto"},u,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/button-group.tsx",lineNumber:11,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/button-group.tsx",lineNumber:9,columnNumber:5},void 0)};try{o.displayName="ButtonGroup",o.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{o as B};
