import{n as u,j as o,l as n,d as r}from"./styled-components.browser.esm-028b5a71.js";import{r as s}from"./index-ff614419.js";import{M as l}from"./modal-loading.styles-b2147eb5.js";import{I as m}from"./icon.styles-d3024de5.js";import"./typography-62fdeef1.js";import{g as h}from"./typography.functions-dcbec177.js";import{K as $}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";const i=e=>{const c=s.useCallback(d=>{e.onChange&&e.onChange(d)},[e]),t=u(),a=o.jsxs(o.Fragment,{children:[o.jsx(y,{size:e.size,name:e.view,type:"checkbox",$genre:e.genre,$checked:e.checked}),e.children&&e.children]});return o.jsx(v,{$genre:e.genre,$view:e.view,$checked:e.checked,$width:e.width,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&c(!e.checked),children:e.isOnlyLoading?e.isLoading?o.jsx(l,{size:e.size,color:t.colors.checkbox[e.genre].color.rest}):a:o.jsxs(o.Fragment,{children:[a,e.isLoading&&o.jsx(l,{size:e.size,color:t.colors.checkbox[e.genre].color.rest})]})})};try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}}}}}catch{}const g=n`
  ${e=>b($[e.$size])};
`,b=e=>n`
  height: ${e.height}px;
  border-radius: ${e.radius+12}px;
  gap: ${e.padding-2}px;
  ${h(e.font,700,"Inter")};
  padding: 0px ${e.padding-4}px;
`,k=n`
  ${e=>n`
    background: ${e.theme.colors.checkbox[e.$genre].background.rest};
    border-color: ${e.theme.colors.checkbox[e.$genre].border.rest};
    color: ${e.theme.colors.checkbox[e.$genre].color.rest};
    & span {
      color: ${e.theme.colors.checkbox[e.$genre].color.rest};
    }
    &:focus-visible {
      outline: 1px solid ${e.theme.colors.focus};
    }
    &:hover {
      background: ${e.theme.colors.checkbox[e.$genre].background.hover};
      border-color: ${e.theme.colors.checkbox[e.$genre].border.hover};
      color: ${e.theme.colors.checkbox[e.$genre].color.hover};
      & span {
        color: ${e.theme.colors.checkbox[e.$genre].color.hover};
      }
    }
  `};
`,x=n`
  ${e=>e.$isDisabled?n`
          opacity: 0.5;
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
          & span {
            color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
          }
        `:n`
          opacity: 1;
        `}
`,f=n`
  ${e=>e.$isHiddenBorder&&n`
      border-color: transparent !important;
    `}
`,v=r.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition: all ${e=>e.theme.transition};

  & {
    user-select: none;
  }
  cursor: pointer;

  ${k};
  ${x}
  ${f};
  ${g};

  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
  width: ${e=>e.$width??"max-content"};
  min-width: ${e=>e.$width??"max-content"};
  background-color: ${e=>e.$isNotBackground&&"transparent"};
`,y=r(m)`
  ${e=>e.$checked?n`
          & #check {
            fill: ${e.theme.colors.checkbox[e.$genre].color.rest};
          }
          & #uncheck {
            fill: transparent;
          }
        `:n`
          & #check {
            fill: transparent;
          }
          & #uncheck {
            fill: ${e.theme.colors.checkbox[e.$genre].color.rest};
          }
        `}
`;export{i as C};
