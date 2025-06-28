import{t as b,b as h,h as y,c as $,d as o,K as m,l as n,n as g,r as x,j as a,R as v}from"./iframe-NXvRQG3e.js";import{I as r}from"./component.styles-BphGMU0u.js";import{d as z,g as N}from"./component-uNoer6cp.js";const j=n`
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
`,V=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,p=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,k=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,B=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,E=o.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${m[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,H=n`
  ${e=>D({...m[e.$size],isFullSize:e.$isFullSize,isWidthAsHeight:e.$isWidthAsHeight})};
`,D=e=>n`
  /* height: ${e.height}px; */
  height: fit-content;
  min-height: ${e.height}px;
  max-height: fit-content;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${u=>N(e.font,700,u.theme.font.family)};
  padding: 2px ${e.padding}px;

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
`,I=n`
  border: 1px solid transparent;
`,q=n`
  display: flex;
  align-items: center;
  justify-content: center;
`,S=o.button`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${I};
  ${H};
  ${j};
  ${V};
  ${p};
  ${k};
  ${B};
  ${q};
  ${b};
  ${h};
  ${y};
  ${z};
  ${$};
`,d=e=>{const u=g(),c=x.useMemo(()=>{var l,s;return(s=(l=e.icons??[])==null?void 0:l.filter(t=>!t.isHidden))==null?void 0:s.map((t,i)=>(t==null?void 0:t.type)==="id"?a.jsxDEV(r,{name:t==null?void 0:t.name,type:"id",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:25,columnNumber:13},void 0):(t==null?void 0:t.type)==="logo"?a.jsxDEV(r,{name:t==null?void 0:t.name,type:"logo",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:34,columnNumber:13},void 0):(t==null?void 0:t.type)==="checkbox"?a.jsxDEV(r,{name:t==null?void 0:t.name,type:"checkbox",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:43,columnNumber:13},void 0):(t==null?void 0:t.type)==="loading"?a.jsxDEV(r,{name:t==null?void 0:t.name,type:"loading",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:52,columnNumber:13},void 0):(t==null?void 0:t.type)==="realebail"?a.jsxDEV(r,{name:t==null?void 0:t.name,type:"realebail",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},i,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:61,columnNumber:13},void 0):null)},[e.icons,e.size]),f=l=>{!e.isDisabled&&e.onClick&&e.onClick(l)};return a.jsxDEV(S,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$size:e.size,$isDisabled:e.isDisabled,$isWidthAsHeight:e.isWidthAsHeight,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$sxTypography:e.sxTypography,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:f,ref:e.ref,$sx:e.sx,children:[a.jsxDEV(v,{color:u.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:101,columnNumber:7},void 0),a.jsxDEV(a.Fragment,{children:[!e.isOnlyIcon&&a.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:107,columnNumber:31},void 0),a.jsxDEV(E,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:"iconGroupOrder"in e?e.iconGroupOrder:void 0,children:c},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:108,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:106,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/component.tsx",lineNumber:81,columnNumber:5},void 0)};try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:'((Omit<IconItemProps<"id">, "size"> & { isHidden?: boolean; size?: TJeneseiThemeSize | "100%"; }) | (Omit<IconItemProps<...>, "size"> & { ...; }) | (Omit<...> & { ...; }) | (Omit<...> & { ...; }) | (Omit<...> & { ...; }))[] | undefined'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyIcon:{defaultValue:null,description:"",name:"isOnlyIcon",required:!1,type:{name:"boolean"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}}}}}catch{}export{d as B};
