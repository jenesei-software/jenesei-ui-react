import{j as a,l as r,d as n}from"./styled-components.browser.esm-028b5a71.js";const i=e=>a.jsx(d,{$width:e.width,onSubmit:t=>{t.preventDefault(),t.stopPropagation(),e.handleSubmit&&e.handleSubmit()},style:e.style,children:e.children});try{i.displayName="Form",i.__docgenInfo={description:"",displayName:"Form",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const l=r`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: height ${e=>e.theme.transition};
  height: auto;
  max-width: ${e=>e.$width};
  width: 100%;
`,d=n.form`
  ${l}
`;export{i as F};
