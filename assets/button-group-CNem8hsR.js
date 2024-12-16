import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{B as l}from"./button-Bcaqca6Z.js";import{l as i,d as s}from"./styled-components.browser.esm-CCP31c1y.js";const d=i`
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
`,u=i`
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
`,p=s.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${t=>t.$position==="horizontal"?d:u}
`,o=t=>{var e;return r.jsx(p,{$position:t.position,className:t.className,id:"jenesei-button-group",children:(e=t.value)==null?void 0:e.map((a,n)=>r.jsx(l,{id:"jenesei-button",...a,width:t.width??"auto"},n))})};try{o.displayName="ButtonGroup",o.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{o as B};
