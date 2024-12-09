import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{l as t,d as s}from"./styled-components.browser.esm-CCP31c1y.js";import{a as u}from"./theme-6wvtFABo.js";import"./theme.global-j_wjL8sr.js";import{A as $,m as d}from"./index-C20QuurF.js";const a=e=>r.jsx($,{children:r.jsx(y,{$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError,tabIndex:0,onClick:()=>e.onChange&&e.onChange(!e.value),children:r.jsx(k,{layout:!0,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError})})});try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}const b=t`
  ${e=>v(u[e.$size])};
`,v=e=>t`
  height: ${e.height}px;
  width: ${e.width}px;
  padding: ${e.padding}px;
  border-radius: 100px;
`,f=t`
  ${e=>x(u[e.$size])};
`,x=e=>t`
  height: ${e.thumb}px;
  width: ${e.thumb}px;
  border-radius: 100px;
`,y=s(d.div)`
  ${b};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  transition:
    border-color ${e=>e.theme.transition},
    background-color ${e=>e.theme.transition},
    opacity ${e=>e.theme.transition},
    outline 0s;

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

  ${e=>e.$isError&&t`
      border-color: ${e.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${e.theme.colors.danger};
      }
    `};
`,k=s(d.div)`
  ${f};

  transition: box-shadow ${e=>e.theme.transition};

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
`,D={component:a,title:"Component/Toggle",tags:["autodocs"]},z=e=>{const[m,l]=n.useState(!1);return n.useEffect(()=>{l(e.value??!1)},[e.value]),r.jsx(a,{...e,value:m,onChange:h=>l(h)})},o={render:e=>r.jsx(z,{...e}),args:{genre:"product",isDisabled:!1,value:!0,size:"small"}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,D as default};
