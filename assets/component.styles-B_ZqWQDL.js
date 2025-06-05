import{j as t,l as r,d as n}from"./styled-components.browser.esm-CyaOpMkv.js";import{a}from"./style-KtjdfyVq.js";import{a as u}from"./style-DFpQ9kAZ.js";import{a as i}from"./theme.global-CNBZeL1_.js";import{m as l}from"./proxy-BS1eh56F.js";import{A as c}from"./index-DgedcAJ4.js";const o=e=>t.jsxDEV(c,{children:t.jsxDEV($,{$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error,tabIndex:0,onClick:()=>e.onChange&&e.onChange(!e.value),children:t.jsxDEV(b,{layout:!0,transition:g,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:17,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:8,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:7,columnNumber:5},void 0),g={type:"spring",stiffness:700,damping:30};try{o.displayName="Toggle",o.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const d=r`
  ${e=>m(i[e.$size])};
`,m=e=>r`
  height: ${e.height}px;
  width: ${e.width}px;
  padding: ${e.padding}px;
  border-radius: 100px;
`,s=r`
  ${e=>h(i[e.$size])};
`,h=e=>r`
  height: ${e.thumb}px;
  width: ${e.thumb}px;
  border-radius: 100px;
`,$=n(l.div)`
  ${d};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${a};

  &:focus-visible {
    outline: 1px solid ${e=>e.theme.colors.focus};
  }
  ${e=>e.$isDisabled?r`
          opacity: 0.5;
        `:r`
          opacity: 1;
        `};

  ${e=>e.$value?r`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].active.rest.border};
          justify-content: flex-end;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].active.hover.border};
          }
        `:r`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].unActive.hover.border};
          }
        `};

  ${u};
`,b=n(l.div)`
  ${s};
  ${a};

  ${e=>e.$value?r`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].active.hover.thumbBoxShadow};
          }
        `:r`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`;export{o as T};
