import{r as t,n as h,j as i,R as b,l as n,d,t as g,b as x,h as k,c as $,K as f}from"./iframe-NXvRQG3e.js";import{E as v,a as y}from"./style-Fk9c2Kpi.js";import{I as u}from"./component.styles-BphGMU0u.js";import{d as N,g as j}from"./component-uNoer6cp.js";const c=e=>{const a=t.useCallback(m=>{var o;(o=e.onChange)==null||o.call(e,m)},[e]),s=h(),r=t.useMemo(()=>i.jsxDEV(i.Fragment,{children:[i.jsxDEV(E,{size:e.sizeIcon||e.size,name:e.view,type:"checkbox",order:e.iconOrder,$genre:e.genre,$checked:e.checked},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:21,columnNumber:9},void 0),e.children&&e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:20,columnNumber:7},void 0),[e.checked,e.children,e.genre,e.iconOrder,e.size,e.sizeIcon,e.view]),l=i.jsxDEV(u,{size:e.size,type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:34,columnNumber:28},void 0);return i.jsxDEV(i.Fragment,{children:[i.jsxDEV(q,{type:"button",$genre:e.genre,$error:e.error,$view:e.view,$checked:e.checked,$isWidthAsHeight:e.isWidthAsHeight,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$sx:e.sx,$sxTypography:e.sxTypography,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&a(!e.checked),children:[i.jsxDEV(b,{color:s.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:55,columnNumber:9},void 0),e.isOnlyLoading?e.isLoading?l:r:i.jsxDEV(i.Fragment,{children:[r,e.isLoading&&l]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:63,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:38,columnNumber:7},void 0),e!=null&&e.error?i.jsxDEV(v,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:69,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/checkbox/component.tsx",lineNumber:37,columnNumber:5},void 0)};try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'},{value:'"Arrow"'},{value:'"Heart"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},sizeIcon:{defaultValue:null,description:"",name:"sizeIcon",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const V=n`
  ${e=>D({...f[e.$size],isWidthAsHeight:e.$isWidthAsHeight})};
`,D=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${a=>j(e.font,700,a.theme.font.family)};
  padding: ${e.padding-4}px;
  ${e.isWidthAsHeight&&n`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
`,w=n`
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
`,z=n`
  ${e=>e.$isDisabled?n`
          opacity: 0.5;
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,C=n`
  ${e=>e.$isHiddenBorder&&n`
      border-color: transparent !important;
    `}
`,q=d.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background-color: ${e=>e.$isNotBackground&&"transparent"};

  ${g};
  ${x};
  ${w};
  ${z}
  ${C};
  ${V};
  ${k};
  ${y};
  ${N};
  ${$};
`,E=d(u)`
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
