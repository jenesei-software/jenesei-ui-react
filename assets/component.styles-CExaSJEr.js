import{n as h,j as i,l as n,d}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as l}from"./index-CnY36iC1.js";import{E as b,a as g}from"./style-DP4WPrh4.js";import{I as u}from"./component.styles-HSoMfZk7.js";import{g as f}from"./component.functions-BGGwQnpg.js";import{b as x}from"./component-CXRT2tYE.js";import{a as k,b as $}from"./style-KtjdfyVq.js";import{a as y}from"./style-C2EjhzEB.js";import{K as v}from"./theme-D8gwu-FP.js";import"./theme.global-C6REP-xE.js";import{R as j}from"./component-BejfL9p2.js";const c=e=>{const r=l.useCallback(m=>{var o;(o=e.onChange)==null||o.call(e,m)},[e]),s=h(),a=l.useMemo(()=>i.jsxDEV(i.Fragment,{children:[i.jsxDEV(S,{size:e.sizeIcon||e.size,name:e.view,type:"checkbox",order:e.iconOrder,$genre:e.genre,$checked:e.checked},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:21,columnNumber:9},void 0),e.children&&e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:20,columnNumber:7},void 0),[e.checked,e.children,e.genre,e.iconOrder,e.size,e.sizeIcon,e.view]),t=i.jsxDEV(u,{size:e.size,type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:34,columnNumber:28},void 0);return i.jsxDEV(i.Fragment,{children:[i.jsxDEV(z,{type:"button",$genre:e.genre,$error:e.error,$view:e.view,$checked:e.checked,$isWidthAsHeight:e.isWidthAsHeight,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$sx:e.sx,$sxTypography:e.sxTypography,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&r(!e.checked),children:[i.jsxDEV(j,{color:s.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:55,columnNumber:9},void 0),e.isOnlyLoading?e.isLoading?t:a:i.jsxDEV(i.Fragment,{children:[a,e.isLoading&&t]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:63,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:38,columnNumber:7},void 0),e!=null&&e.error?i.jsxDEV(b,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:69,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:37,columnNumber:5},void 0)};try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'},{value:'"Arrow"'},{value:'"Heart"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},sizeIcon:{defaultValue:null,description:"",name:"sizeIcon",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; mobile?: CSSObject; tablet?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const N=n`
  ${e=>V({...v[e.$size],isWidthAsHeight:e.$isWidthAsHeight})};
`,V=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${r=>f(e.font,700,r.theme.font.family)};
  padding: ${e.padding-4}px;
  ${e.isWidthAsHeight&&n`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
`,C=n`
  ${e=>n`
    background: ${e.theme.colors.checkbox[e.$genre].background.rest};
    border-color: ${e.theme.colors.checkbox[e.$genre].border.rest};
    color: ${e.theme.colors.checkbox[e.$genre].color.rest};
    &:hover {
      background: ${e.theme.colors.checkbox[e.$genre].background.hover};
      border-color: ${e.theme.colors.checkbox[e.$genre].border.hover};
      color: ${e.theme.colors.checkbox[e.$genre].color.hover};
    }
  `};
`,w=n`
  ${e=>e.$isDisabled?n`
          opacity: 0.5;
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,D=n`
  ${e=>e.$isHiddenBorder&&n`
      border-color: transparent !important;
    `}
`,z=d.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;

  & *:not(#Ripple):not(:has(a)):not(a) {
    user-select: none;
    pointer-events: none;
  }
  cursor: pointer;

  ${k};
  ${C};
  ${w}
  ${D};
  ${N};
  ${$};
  ${g};
  ${x};
  ${y};
  background-color: ${e=>e.$isNotBackground&&"transparent"};
`,S=d(u)`
  ${e=>e.$checked?n`
          & #check {
            color: inherit;
          }
          & #uncheck {
            color: transparent;
          }
        `:n`
          & #check {
            color: transparent;
          }
          & #uncheck {
            color: inherit;
          }
        `}
`;export{c as C};
