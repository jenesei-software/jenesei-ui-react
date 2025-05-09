import{m as s,d as o,l as a,j as m}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as t}from"./index-CnY36iC1.js";import{S as c}from"./component-ZyHH9g1r.js";import{a as r}from"./style-pCqVTddV.js";const f=s`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,i=o(c)`
  background: transparent;

  ${e=>a`
    ${!e.$visible&&a`
      ${e.$type==="secondary"?a`
            background: rgba(130, 130, 130, 0.4);
            background: linear-gradient(
              to right,
              rgba(130, 130, 130, 0.4) 8%,
              rgba(130, 130, 130, 0.5) 18%,
              rgba(130, 130, 130, 0.4) 33%
            );
          `:a`
            background: rgba(130, 130, 130, 0.2);
            background: linear-gradient(
              to right,
              rgba(130, 130, 130, 0.2) 8%,
              rgba(130, 130, 130, 0.3) 18%,
              rgba(130, 130, 130, 0.2) 33%
            );
          `}
      background-size: 800px 100px;
      animation: ${f} 2s infinite ease-out;
    `}
  `}
  ${r};
  & > * {
    opacity: ${e=>e.$visible?1:0};
    ${r};
  }
`;try{i.displayName="StyledSkeleton",i.__docgenInfo={description:"",displayName:"StyledSkeleton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=e=>{const[d,n]=t.useState(e.defaultVisible??!1);return t.useEffect(()=>{if("time"in e){const u=setTimeout(()=>{n(!0)},e.time);return()=>{clearTimeout(u)}}},[e]),t.useEffect(()=>{"visible"in e&&n(!e.visible)},[e]),m.jsxDEV(i,{...e,$visible:d,$type:e.type,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/skeleton/area.tsx",lineNumber:27,columnNumber:5},void 0)};try{l.displayName="Skeleton",l.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; mobile?: CSSObject; tablet?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}export{l as S};
