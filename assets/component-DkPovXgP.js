import{l as n,d as N,n as w,j as i}from"./styled-components.browser.esm-CyaOpMkv.js";import{I as t}from"./component.styles-BbZ0qEuD.js";import{C as k,R as B}from"./component-BejfL9p2.js";import{g as F}from"./component.functions-BGGwQnpg.js";import"./component-D15g8Xja.js";import{a as S,b as E,c as q}from"./style-pCqVTddV.js";import{a as D}from"./style-C2EjhzEB.js";import{K as v}from"./theme-yMIRbExU.js";import"./theme.global-C6REP-xE.js";const I=n`
  ${e=>n`
    background: ${e.theme.colors.button[e.$genre].background.rest};
    border-color: ${e.theme.colors.button[e.$genre].border.rest};
    color: ${e.theme.colors.button[e.$genre].color.rest};
    &:hover {
      ${!e.$isHidden&&n`
        background: ${e.theme.colors.button[e.$genre].background.hover};
        border-color: ${e.theme.colors.button[e.$genre].border.hover};
        color: ${e.theme.colors.button[e.$genre].color.hover};
      `}
    }
  `};
`,O=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,H=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,W=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,C=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,L=N.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${v[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,G=n`
  ${e=>P({...v[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex,$minWidth:e.$minWidth})};
`,P=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${a=>F(e.font,700,a.theme.font.family)};
  padding: 0px ${e.padding}px;

  ${()=>e.isFullSize&&n`
      height: 100%;
      border-radius: 0px;
    `};
  ${()=>e.$flex&&n`
      flex: ${e.$flex};
    `};
  ${e.$width==="asHeight"?n`
        width: ${e.height}px;
        min-width: ${e.height}px;
        padding: 0px;
      `:n`
        width: ${e.$width??"max-content"};
        min-width: ${e.$width?`${e.$width}`:"max-content"};
      `};
  ${e.$minWidth==="asHeight"&&n`
    min-width: ${e.height}px;
  `}
`,R=n`
  border: 1px solid transparent;
`,T=n`
  display: flex;
  align-items: center;
  justify-content: center;
  ${D};
`,_=N.button`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${k};
  ${R};
  ${G};
  ${I};
  ${O};
  ${H};
  ${W};
  ${C};
  ${S};
  ${E};
  ${q};
  ${T};
`,j=e=>{var o,r,d,c,s,m,f,b,h,$,y,g,x;const a=w(),l=i.jsxDEV(t,{size:((o=e.icon)==null?void 0:o.size)??e.size,type:"loading",name:"Line",order:e.loadingOrder},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:19,columnNumber:5},void 0),u=e.icon&&(((r=e.icon)==null?void 0:r.type)==="id"?i.jsxDEV(t,{name:(d=e.icon)==null?void 0:d.name,type:"id",size:((c=e.icon)==null?void 0:c.size)??e.size,turn:e.icon.turn,order:e.icon.order},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:25,columnNumber:7},void 0):((s=e.icon)==null?void 0:s.type)==="checkbox"?i.jsxDEV(t,{name:(m=e.icon)==null?void 0:m.name,type:"checkbox",size:((f=e.icon)==null?void 0:f.size)??e.size,turn:e.icon.turn,order:e.icon.order},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:33,columnNumber:7},void 0):((b=e.icon)==null?void 0:b.type)==="loading"?i.jsxDEV(t,{name:(h=e.icon)==null?void 0:h.name,type:"loading",size:(($=e.icon)==null?void 0:$.size)??e.size,turn:e.icon.turn,order:e.icon.order},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:41,columnNumber:7},void 0):((y=e.icon)==null?void 0:y.type)==="realebail"?i.jsxDEV(t,{name:(g=e.icon)==null?void 0:g.name,type:"realebail",size:((x=e.icon)==null?void 0:x.size)??e.size,turn:e.icon.turn,order:e.icon.order},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:49,columnNumber:7},void 0):null),V=z=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(z)};return i.jsxDEV(_,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$minWidth:e.minWidth,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:V,$sx:e.sx,children:[i.jsxDEV(B,{color:a.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:88,columnNumber:7},void 0),e.isOnlyLoading?e.isLoading?l:i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:98,columnNumber:13},void 0),u]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:97,columnNumber:11},void 0):i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:104,columnNumber:11},void 0),i.jsxDEV(L,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?i.jsxDEV(i.Fragment,{children:e.isLoading&&l},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:111,columnNumber:15},void 0):i.jsxDEV(i.Fragment,{children:[e.isLoading&&l,u]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:113,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:105,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:103,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:65,columnNumber:5},void 0)};try{j.displayName="Button",j.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:'IconPropsByType<"id"> | IconPropsByType<"checkbox"> | IconPropsByType<"loading"> | IconPropsByType<"realebail">'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'},{value:'"Work Sans"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"string | number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; mobile?: CSSObject; tablet?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}}}}}catch{}export{j as B};
