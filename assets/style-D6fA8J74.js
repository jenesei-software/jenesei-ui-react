import{l as s,d as i,j as a}from"./styled-components.browser.esm-CyaOpMkv.js";import{g as l}from"./component.functions-BGGwQnpg.js";import"./component-D15g8Xja.js";import{K as n}from"./theme-yMIRbExU.js";import"./theme.global-C6REP-xE.js";const d=s`
  ${e=>u({...n[e.$size],$isErrorAbsolute:e.$isErrorAbsolute})};
`,u=e=>s`
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
`,o=i.div`
  ${e=>l(12,400,e.theme.font.family)};
  width: ${e=>e.$width??"100%"};
  ${d}
`,E=s`
  ${e=>e.$isError&&s`
      border-color: ${r=>r.theme.colors.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${r=>r.theme.colors.danger};
      }
    `};
`,t=e=>a.jsxDEV(a.Fragment,{children:e.isError&&e.errorMessage?a.jsxDEV(o,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/style.tsx",lineNumber:53,columnNumber:9},void 0):null},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/style.tsx",lineNumber:51,columnNumber:5},void 0);try{o.displayName="ErrorMessageComponent",o.__docgenInfo={description:"",displayName:"ErrorMessageComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="ErrorMessage",t.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{t as E,E as a};
