import{j as r,l as t,a as n,d as i}from"./theme-DVxtux_W.js";import{a,b as u}from"./add.styles-B_8-z0Fm.js";import"./theme.global-C_7ReLae.js";import{m as l}from"./proxy-BgqLTuwE.js";import{A as g}from"./index-Blb9MfSb.js";const o=e=>r.jsxDEV(g,{children:r.jsxDEV($,{$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError,tabIndex:0,onClick:()=>e.onChange&&e.onChange(!e.value),children:r.jsxDEV(b,{layout:!0,transition:c,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/toggle.tsx",lineNumber:17,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/toggle.tsx",lineNumber:8,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/toggle.tsx",lineNumber:7,columnNumber:5},void 0),c={type:"spring",stiffness:700,damping:30};try{o.displayName="Toggle",o.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}const d=t`
  ${e=>s(n[e.$size])};
`,s=e=>t`
  height: ${e.height}px;
  width: ${e.width}px;
  padding: ${e.padding}px;
  border-radius: 100px;
`,m=t`
  ${e=>h(n[e.$size])};
`,h=e=>t`
  height: ${e.thumb}px;
  width: ${e.thumb}px;
  border-radius: 100px;
`,$=i(l.div)`
  ${d};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${a};

  &:focus-visible {
    outline: 1px solid ${e=>e.theme.colors.focus};
  }
  ${e=>e.$isDisabled?t`
          opacity: 0.5;
        `:t`
          opacity: 1;
        `};

  ${e=>e.$value?t`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].active.rest.border};
          justify-content: flex-end;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].active.hover.border};
          }
        `:t`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].unActive.hover.border};
          }
        `};

  ${u};
`,b=i(l.div)`
  ${m};
  ${a};

  ${e=>e.$value?t`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].active.hover.thumbBoxShadow};
          }
        `:t`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`;export{o as T};
