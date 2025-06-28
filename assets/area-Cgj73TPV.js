import{b as l,l as a,d,v as o,S as m,r as i,j as c}from"./iframe-NXvRQG3e.js";const f=o`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,n=d(m)`
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
  ${l};
  & > * {
    opacity: ${e=>e.$visible?1:0};
    ${l};
  }
`;try{n.displayName="StyledSkeleton",n.__docgenInfo={description:"",displayName:"StyledSkeleton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const r=e=>{const[u,t]=i.useState(e.defaultVisible??!1);return i.useEffect(()=>{if("time"in e){const s=setTimeout(()=>{t(!0)},e.time);return()=>{clearTimeout(s)}}},[e]),i.useEffect(()=>{"visible"in e&&t(!e.visible)},[e]),c.jsxDEV(n,{...e,$visible:u,$type:e.type,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/skeleton/area.tsx",lineNumber:27,columnNumber:5},void 0)};try{r.displayName="Skeleton",r.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},isRipple:{defaultValue:null,description:"",name:"isRipple",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement | null>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}export{r as S};
