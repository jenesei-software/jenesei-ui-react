import{l as r,K as o,d as n,j as a}from"./theme-DVxtux_W.js";import{g as l}from"./typography.functions-CWlWgfdK.js";import"./typography-eKbfPWa3.js";import"./theme.global-C_7ReLae.js";const d=r`
  ${e=>u({...o[e.$size],$isErrorAbsolute:e.$isErrorAbsolute})};
`,u=e=>r`
  ${e.$isErrorAbsolute?r`
        position: absolute;
        padding-top: 6px;
        padding-left: ${e.padding}px;
        color: ${s=>s.theme.colors.danger};
      `:r`
        position: static;
        padding: 0px ${e.padding}px;
        color: ${s=>s.theme.colors.danger};
      `}
`,t=n.div`
  ${l(12,400,"Inter")};
  width: ${e=>e.$width??"100%"};
  ${d}
`,i=e=>a.jsxDEV(a.Fragment,{children:e.isError&&e.errorMessage?a.jsxDEV(t,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/error.styles.tsx",lineNumber:39,columnNumber:9},void 0):null},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/styles/error/error.styles.tsx",lineNumber:37,columnNumber:5},void 0);try{t.displayName="ErrorMessageComponent",t.__docgenInfo={description:"",displayName:"ErrorMessageComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="ErrorMessage",i.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}export{i as E};
