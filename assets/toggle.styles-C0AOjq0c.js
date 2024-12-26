import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{l as t,d as a}from"./styled-components.browser.esm-CCP31c1y.js";import{a as n}from"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import{A as l,m as i}from"./index-C20QuurF.js";const r=e=>o.jsx(l,{children:o.jsx(h,{$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError,tabIndex:0,onClick:()=>e.onChange&&e.onChange(!e.value),children:o.jsx(m,{layout:!0,transition:g,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError})})}),g={type:"spring",stiffness:700,damping:30};try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}const c=t`
  ${e=>d(n[e.$size])};
`,d=e=>t`
  height: ${e.height}px;
  width: ${e.width}px;
  padding: ${e.padding}px;
  border-radius: 100px;
`,u=t`
  ${e=>s(n[e.$size])};
`,s=e=>t`
  height: ${e.thumb}px;
  width: ${e.thumb}px;
  border-radius: 100px;
`,h=a(i.div)`
  ${c};

  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  transition:
    border-color ${e=>e.theme.transition.default},
    background-color ${e=>e.theme.transition.default},
    opacity ${e=>e.theme.transition.default},
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
`,m=a(i.div)`
  ${u};

  transition: box-shadow ${e=>e.theme.transition.default};

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
`;export{r as T};
