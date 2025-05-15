import{l as n,d,n as f,j as a}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as b}from"./index-CnY36iC1.js";import{I as l}from"./component.styles-HSoMfZk7.js";import{C as y,R as h}from"./component-BejfL9p2.js";import{g as $}from"./component.functions-BGGwQnpg.js";import{b as g}from"./component-CXRT2tYE.js";import{a as x,b as p}from"./style-KtjdfyVq.js";import{a as v}from"./style-C2EjhzEB.js";import{K as o}from"./theme-D8gwu-FP.js";import"./theme.global-C6REP-xE.js";const j=n`
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
`,N=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,z=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,B=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,V=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,k=d.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${o[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,S=n`
  ${e=>E({...o[e.$size],isFullSize:e.$isFullSize,isWidthAsHeight:e.$isWidthAsHeight})};
`,E=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${u=>$(e.font,700,u.theme.font.family)};
  padding: 0px ${e.padding}px;

  ${()=>e.isFullSize&&n`
      height: 100%;
      width: 100%;
      border-radius: 0px;
    `};
  ${e.isWidthAsHeight&&n`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
`,H=n`
  border: 1px solid transparent;
`,D=n`
  display: flex;
  align-items: center;
  justify-content: center;
`,I=d.button`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${y};
  ${H};
  ${S};
  ${j};
  ${N};
  ${z};
  ${B};
  ${V};
  ${D};
  ${x};
  ${p};
  ${g};
  ${v};
`,s=e=>{const u=f(),m=b.useMemo(()=>{var i;return(i=e.icons)==null?void 0:i.map((t,r)=>(t==null?void 0:t.type)==="id"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"id",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order,sx:{default:{}}},r,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:22,columnNumber:11},void 0):(t==null?void 0:t.type)==="checkbox"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"checkbox",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},r,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:34,columnNumber:11},void 0):(t==null?void 0:t.type)==="loading"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"loading",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},r,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:43,columnNumber:11},void 0):(t==null?void 0:t.type)==="realebail"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"realebail",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},r,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:52,columnNumber:11},void 0):null)},[e.icons,e.size]),c=i=>{!e.isDisabled&&e.onClick&&e.onClick(i)};return a.jsxDEV(I,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$size:e.size,$isDisabled:e.isDisabled,$isWidthAsHeight:e.isWidthAsHeight,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$sxTypography:e.sxTypography,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:c,$sx:e.sx,children:[a.jsxDEV(h,{color:u.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:91,columnNumber:7},void 0),a.jsxDEV(a.Fragment,{children:[!e.isOnlyIcon&&a.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:97,columnNumber:31},void 0),a.jsxDEV(k,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:"iconGroupOrder"in e?e.iconGroupOrder:void 0,children:m},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:98,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:96,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:72,columnNumber:5},void 0)};try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:'(IconPropsByType<"id"> | IconPropsByType<"checkbox"> | IconPropsByType<"loading"> | IconPropsByType<"realebail">)[]'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyIcon:{defaultValue:null,description:"",name:"isOnlyIcon",required:!1,type:{name:"boolean"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; mobile?: CSSObject; tablet?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}}}}}catch{}export{s as B};
