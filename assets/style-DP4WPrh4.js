import{l as s,d as l,j as o}from"./styled-components.browser.esm-CyaOpMkv.js";import{g as n}from"./component.functions-BGGwQnpg.js";import"./component-CXRT2tYE.js";import{K as d}from"./theme-D8gwu-FP.js";import"./theme.global-C6REP-xE.js";const u=s`
  ${e=>e.$size?m({...d[e.$size],$isErrorAbsolute:e.$isErrorAbsolute}):null};
`,m=e=>s`
  ${e.$isErrorAbsolute?s`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${e.padding}px;
        color: ${r=>r.theme.colors.danger};
      `:s`
        position: static;
        padding: 0px ${e.padding}px;
        color: ${r=>r.theme.colors.danger};
      `}
`,i=l.div`
  ${e=>n(12,400,e.theme.font.family)};
  width: ${e=>e.$width??"100%"};
  ${u}
`,y=s`
  ${e=>{var r;return((r=e.$error)==null?void 0:r.isError)&&s`
      border-color: ${a=>a.theme.colors.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${a=>a.theme.colors.danger};
      }
    `}};
`,t=e=>o.jsxDEV(o.Fragment,{children:e.isError&&e.errorMessage?o.jsxDEV(i,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/style.tsx",lineNumber:54,columnNumber:9},void 0):null},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/style.tsx",lineNumber:52,columnNumber:5},void 0);try{i.displayName="ErrorMessageComponent",i.__docgenInfo={description:"",displayName:"ErrorMessageComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="ErrorMessage",t.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{t as E,y as a};
