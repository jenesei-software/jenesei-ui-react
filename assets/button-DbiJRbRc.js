import{d as y,l as n,j as i,K as C,n as q}from"./theme-DVxtux_W.js";import{I as N}from"./icon.styles-iJHhMYxF.js";import{r as d}from"./index-CnY36iC1.js";import{g as k}from"./typography.functions-CWlWgfdK.js";import"./typography-eKbfPWa3.js";import{a as F,c as _}from"./add.styles-B_8-z0Fm.js";import{a as E}from"./base.styles-D8Oz2lRG.js";import"./theme.global-C_7ReLae.js";const V=600,D="JENESEI_RIPPLE",h=y.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,b=y.span`
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: ${e=>e.$color};
  animation-name: ripple;
  animation-duration: ${e=>e.$duration}ms;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`,B=n`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  & *:not(#${D}) {
    user-select: none;
    pointer-events: none;
  }
`;try{h.displayName="RippleContainer",h.__docgenInfo={description:"",displayName:"RippleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="RippleSpan",b.__docgenInfo={description:"",displayName:"RippleSpan",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const I=(e,r,u)=>{d.useLayoutEffect(()=>{let t=null;return e>0&&(t&&clearTimeout(t),t=setTimeout(()=>{u(),t&&clearTimeout(t)},r*4)),()=>{t&&clearTimeout(t)}},[e,r,u])},g=e=>{const r=d.useMemo(()=>e.color,[e.color]),u=d.useMemo(()=>e.duration??V,[e.duration]),[t,s]=d.useState([]);I(t.length,u??V,()=>{s([])});const c=d.useCallback(a=>{const l=a.currentTarget.getBoundingClientRect(),o=l.width>l.height?l.width:l.height,m=a.pageX-l.x-o/2,f=a.pageY-l.y-o/2,v={x:m,y:f,size:o};s([...t,v])},[t]);return e.isDisabled||e.isHidden?null:i.jsxDEV(h,{id:D,$duration:u,$color:r,onMouseDown:c,children:t.length>0&&t.map((a,l)=>i.jsxDEV(b,{$duration:u,$color:r,style:{top:a.y,left:a.x,width:a.size,height:a.size}},"span"+l,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/ripple.tsx",lineNumber:70,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/ripple.tsx",lineNumber:66,columnNumber:5},void 0)};try{g.displayName="Ripple",g.__docgenInfo={description:"",displayName:"Ripple",props:{duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}}}}}catch{}const z=n`
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
`,T=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,R=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,P=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,L=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,W=y.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${C[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,H=n`
  ${e=>A({...C[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex,$minWidth:e.$minWidth})};
`,A=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${k(e.font,700,"Inter")};
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
        min-width: ${e.$width?`${e.$width}px`:"max-content"};
      `};
  ${e.$minWidth==="asHeight"&&n`
    min-width: ${e.height}px;
  `}
`,M=n`
  border: 1px solid transparent;
`,O=n`
  display: flex;
  align-items: center;
  justify-content: center;
  ${E};
`,G=y.button`
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  ${B};
  ${O};
  ${M};
  ${H};
  ${z};
  ${T};
  ${R};
  ${P};
  ${L};
  ${F};
  ${_};

  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
`,S=e=>{var c,a,l,o,m,f,v,$,x,p,w;const r=q(),u=i.jsxDEV(N,{size:e.size,type:"loading",name:"Line",order:e.loadingOrder},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:12,columnNumber:28},void 0),t=e.iconName&&i.jsxDEV(N,{name:e.iconName,type:"id",size:e.size,turn:e.iconTurn,order:e.iconOrder},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:15,columnNumber:5},void 0),s=j=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(j)};return i.jsxDEV(G,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$minWidth:e.minWidth,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:s,$flexDirection:(c=e.styleCustom)==null?void 0:c.flexDirection,$flexWrap:(a=e.styleCustom)==null?void 0:a.flexWrap,$justifyContent:(l=e.styleCustom)==null?void 0:l.justifyContent,$alignItems:(o=e.styleCustom)==null?void 0:o.alignItems,$alignContent:(m=e.styleCustom)==null?void 0:m.alignContent,$order:(f=e.styleCustom)==null?void 0:f.order,$flexGrow:(v=e.styleCustom)==null?void 0:v.flexGrow,$flexShrink:($=e.styleCustom)==null?void 0:$.flexShrink,$flexBasis:(x=e.styleCustom)==null?void 0:x.flexBasis,$alignSelf:(p=e.styleCustom)==null?void 0:p.alignSelf,$gap:(w=e.styleCustom)==null?void 0:w.gap,style:e.styleCSS,children:[i.jsxDEV(g,{color:r.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:59,columnNumber:7},void 0),e.isOnlyLoading?e.isLoading?u:i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:69,columnNumber:13},void 0),t]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:68,columnNumber:11},void 0):i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:75,columnNumber:11},void 0),i.jsxDEV(W,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?i.jsxDEV(i.Fragment,{children:e.isLoading&&u},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:82,columnNumber:15},void 0):i.jsxDEV(i.Fragment,{children:[e.isLoading&&u,t]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:84,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:76,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:74,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:25,columnNumber:5},void 0)};try{S.displayName="Button",S.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Biometry"'},{value:'"QR"'},{value:'"Search"'},{value:'"Folder"'},{value:'"Wallet"'},{value:'"Graph"'},{value:'"Bookmark"'},{value:'"Category"'},{value:'"Home"'},{value:'"Notification"'},{value:'"Chat"'},{value:'"Heart"'},{value:'"Paper"'},{value:'"PaperPlus"'},{value:'"PaperNegative"'},{value:'"PaperFail"'},{value:'"PaperDownload"'},{value:'"PaperUpload"'},{value:'"Send"'},{value:'"PasswordMini"'},{value:'"Swap"'},{value:'"Work"'},{value:'"Arrow1"'},{value:'"Arrow2"'},{value:'"Arrow3"'},{value:'"Arrow4"'},{value:'"ArrowMini1"'},{value:'"ArrowMini2"'},{value:'"Scan"'},{value:'"Activity"'},{value:'"Calendar"'},{value:'"Message"'},{value:'"PlusMini"'},{value:'"ChartMini"'},{value:'"Game"'},{value:'"Bag1"'},{value:'"Bag2"'},{value:'"TicketStar"'},{value:'"MoreCircle"'},{value:'"MoreSquare"'},{value:'"Discount"'},{value:'"Buy"'},{value:'"InfoMini"'},{value:'"DangerMini"'},{value:'"DangerTriangle"'},{value:'"CloseMini"'},{value:'"TickMini"'},{value:'"Video"'},{value:'"Discovery"'},{value:'"Location"'},{value:'"Document"'},{value:'"Setting"'},{value:'"TimeSquare"'},{value:'"TimeCircle"'},{value:'"VolumeUp"'},{value:'"VolumeDown"'},{value:'"VolumeOff"'},{value:'"Star"'},{value:'"Select"'},{value:'"Ticket"'},{value:'"Camera"'},{value:'"Profile"'},{value:'"AddUser"'},{value:'"TwoUser"'},{value:'"ThreeUser"'},{value:'"Login"'},{value:'"Logout"'},{value:'"Download"'},{value:'"Upload"'},{value:'"Voice"'},{value:'"Voice2"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"EditSquare"'},{value:'"PlayMini"'},{value:'"ShieldDone"'},{value:'"ShieldFail"'},{value:'"Show"'},{value:'"Hide"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Image"'},{value:'"Image2"'},{value:'"Call"'},{value:'"Calling"'},{value:'"CallMissed"'},{value:'"CallSilent"'},{value:'"Lock"'},{value:'"Unlock"'}]}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},iconTurn:{defaultValue:null,description:"",name:"iconTurn",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},styleCustom:{defaultValue:null,description:"",name:"styleCustom",required:!1,type:{name:"FlexContainerAndItemProps"}},styleCSS:{defaultValue:null,description:"",name:"styleCSS",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{S as B,g as R};
