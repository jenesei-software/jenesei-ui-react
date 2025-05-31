import{j as t,l as r,d as c}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as i}from"./index-CnY36iC1.js";import{a as g}from"./style-IM99yq-C.js";import{a as b}from"./style-J1eytVMD.js";import{a as d}from"./theme.global-CKNmeFpz.js";import{m}from"./proxy-BS1eh56F.js";import{A as f}from"./index-DgedcAJ4.js";import"./component.functions-BGGwQnpg.js";import"./component-Dh-bcLtB.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./motion-BdlOunNt.js";const n=e=>t.jsxDEV(f,{children:t.jsxDEV(N,{$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error,tabIndex:0,onClick:()=>e.onChange&&e.onChange(!e.value),children:t.jsxDEV(T,{layout:!0,transition:v,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:17,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:8,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/toggle/component.tsx",lineNumber:7,columnNumber:5},void 0),v={type:"spring",stiffness:700,damping:30};try{n.displayName="Toggle",n.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const x=r`
  ${e=>k(d[e.$size])};
`,k=e=>r`
  height: ${e.height}px;
  width: ${e.width}px;
  padding: ${e.padding}px;
  border-radius: 100px;
`,j=r`
  ${e=>y(d[e.$size])};
`,y=e=>r`
  height: ${e.thumb}px;
  width: ${e.thumb}px;
  border-radius: 100px;
`,N=c(m.div)`
  ${x};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${g};

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

  ${b};
`,T=c(m.div)`
  ${j};
  ${g};

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
`,O={component:n,title:"Component/Toggle"},w=e=>{const[h,a]=i.useState(!1);return i.useEffect(()=>{a(e.value??!1)},[e.value]),t.jsxDEV(n,{...e,value:h,onChange:$=>a($)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-toggle.stories.tsx",lineNumber:16,columnNumber:10},void 0)},o={render:e=>t.jsxDEV(w,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-toggle.stories.tsx",lineNumber:19,columnNumber:19},void 0),args:{genre:"product",isDisabled:!1,value:!0,size:"small"}};var l,u,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const P=["Toggle"];export{o as Toggle,P as __namedExportsOrder,O as default};
