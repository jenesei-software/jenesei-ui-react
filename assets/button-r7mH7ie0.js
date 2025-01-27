import{j as t,d as h,l as n,K as j,n as k}from"./theme-DVxtux_W.js";import{I as N}from"./icon.styles-PYAkx5Iy.js";import{r as d}from"./index-CnY36iC1.js";import"./typography-BeMVh0jT.js";import{g as q}from"./typography.functions-4q7AKkEp.js";import{a as _}from"./base.styles-eUkWGuSr.js";import"./theme.global-wZO4Grut.js";const E=(e,r,u)=>{d.useLayoutEffect(()=>{let i=null;return e>0&&(i&&clearTimeout(i),i=setTimeout(()=>{u(),i&&clearTimeout(i)},r*4)),()=>{i&&clearTimeout(i)}},[e,r,u])},g=e=>{const r=d.useMemo(()=>e.color,[e.color]),u=d.useMemo(()=>e.duration??S,[e.duration]),[i,s]=d.useState([]);E(i.length,u??S,()=>{s([])});const c=d.useCallback(a=>{const l=a.currentTarget.getBoundingClientRect(),o=l.width>l.height?l.width:l.height,m=a.pageX-l.x-o/2,f=a.pageY-l.y-o/2,v={x:m,y:f,size:o};s([...i,v])},[i]);return t.jsxDEV(b,{id:D,$duration:u,$color:r,onMouseDown:c,children:i.length>0&&i.map((a,l)=>t.jsxDEV(y,{$duration:u,$color:r,style:{top:a.y,left:a.x,width:a.size,height:a.size}},"span"+l,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/ripple.tsx",lineNumber:69,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/ripple/ripple.tsx",lineNumber:65,columnNumber:5},void 0)};try{g.displayName="Ripple",g.__docgenInfo={description:"",displayName:"Ripple",props:{duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const b=h.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,y=h.span`
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
`;try{b.displayName="RippleContainer",b.__docgenInfo={description:"",displayName:"RippleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{y.displayName="RippleSpan",y.__docgenInfo={description:"",displayName:"RippleSpan",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const S=600,D="JENESEI_RIPPLE",B=n`
  ${e=>n`
    background: ${e.theme.colors.button[e.$genre].background.rest};
    border-color: ${e.theme.colors.button[e.$genre].border.rest};
    color: ${e.theme.colors.button[e.$genre].color.rest};
    &:focus-visible {
      outline: 1px solid ${e.theme.colors.focus};
    }
    &:hover {
      ${!e.$isHidden&&n`
        background: ${e.theme.colors.button[e.$genre].background.hover};
        border-color: ${e.theme.colors.button[e.$genre].border.hover};
        color: ${e.theme.colors.button[e.$genre].color.hover};
      `}
    }
  `};
`,C=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,I=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,z=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,T=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,R=h.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${j[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,L=n`
  ${e=>P({...j[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex,$minWidth:e.$minWidth})};
`,P=e=>n`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${q(e.font,700,"Inter")};
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
`,W=n`
  outline: 1px solid transparent;
  border: 1px solid transparent;
`,A=n`
  display: flex;
  align-items: center;
  justify-content: center;
  ${_};
`,M=h.button`
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    all ${e=>e.theme.transition.default},
    outline 0s;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  user-select: none;

  & *:not(#${D}) {
    user-select: none;
    pointer-events: none;
  }
  ${A};
  ${W};
  ${L};
  ${B};
  ${C};
  ${I};
  ${z};
  ${T};
  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
`,V=e=>{var c,a,l,o,m,f,v,$,x,p,w;const r=k(),u=t.jsxDEV(N,{size:e.size,type:"loading",name:"Line",order:e.loadingOrder},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:12,columnNumber:28},void 0),i=e.iconName&&t.jsxDEV(N,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:15,columnNumber:5},void 0),s=F=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(F)};return t.jsxDEV(M,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$minWidth:e.minWidth,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:s,$flexDirection:(c=e.customStyles)==null?void 0:c.flexDirection,$flexWrap:(a=e.customStyles)==null?void 0:a.flexWrap,$justifyContent:(l=e.customStyles)==null?void 0:l.justifyContent,$alignItems:(o=e.customStyles)==null?void 0:o.alignItems,$alignContent:(m=e.customStyles)==null?void 0:m.alignContent,$order:(f=e.customStyles)==null?void 0:f.order,$flexGrow:(v=e.customStyles)==null?void 0:v.flexGrow,$flexShrink:($=e.customStyles)==null?void 0:$.flexShrink,$flexBasis:(x=e.customStyles)==null?void 0:x.flexBasis,$alignSelf:(p=e.customStyles)==null?void 0:p.alignSelf,$gap:(w=e.customStyles)==null?void 0:w.gap,children:[!e.isHidden&&t.jsxDEV(g,{color:r.colors.button[e.genre].color.rest},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:58,columnNumber:27},void 0),e.isOnlyLoading?e.isLoading?u:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:64,columnNumber:13},void 0),i]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:63,columnNumber:11},void 0):t.jsxDEV(t.Fragment,{children:[t.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:70,columnNumber:11},void 0),t.jsxDEV(R,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?t.jsxDEV(t.Fragment,{children:e.isLoading&&u},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:77,columnNumber:15},void 0):t.jsxDEV(t.Fragment,{children:[e.isLoading&&u,i]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:79,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:69,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button/button.tsx",lineNumber:25,columnNumber:5},void 0)};try{V.displayName="Button",V.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Biometry"'},{value:'"QR"'},{value:'"Search"'},{value:'"Folder"'},{value:'"Wallet"'},{value:'"Graph"'},{value:'"Bookmark"'},{value:'"Category"'},{value:'"Home"'},{value:'"Notification"'},{value:'"Chat"'},{value:'"Heart"'},{value:'"Paper"'},{value:'"PaperPlus"'},{value:'"PaperNegative"'},{value:'"PaperFail"'},{value:'"PaperDownload"'},{value:'"PaperUpload"'},{value:'"Send"'},{value:'"PasswordMini"'},{value:'"Swap"'},{value:'"Work"'},{value:'"Arrow1"'},{value:'"Arrow2"'},{value:'"Arrow3"'},{value:'"Arrow4"'},{value:'"ArrowMini1"'},{value:'"ArrowMini2"'},{value:'"Scan"'},{value:'"Activity"'},{value:'"Calendar"'},{value:'"Message"'},{value:'"PlusMini"'},{value:'"ChartMini"'},{value:'"Game"'},{value:'"Bag1"'},{value:'"Bag2"'},{value:'"TicketStar"'},{value:'"MoreCircle"'},{value:'"MoreSquare"'},{value:'"Discount"'},{value:'"Buy"'},{value:'"InfoMini"'},{value:'"DangerMini"'},{value:'"DangerTriangle"'},{value:'"CloseMini"'},{value:'"TickMini"'},{value:'"Video"'},{value:'"Discovery"'},{value:'"Location"'},{value:'"Document"'},{value:'"Setting"'},{value:'"TimeSquare"'},{value:'"TimeCircle"'},{value:'"VolumeUp"'},{value:'"VolumeDown"'},{value:'"VolumeOff"'},{value:'"Star"'},{value:'"Select"'},{value:'"Ticket"'},{value:'"Camera"'},{value:'"Profile"'},{value:'"AddUser"'},{value:'"TwoUser"'},{value:'"ThreeUser"'},{value:'"Login"'},{value:'"Logout"'},{value:'"Download"'},{value:'"Upload"'},{value:'"Voice"'},{value:'"Voice2"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"EditSquare"'},{value:'"PlayMini"'},{value:'"ShieldDone"'},{value:'"ShieldFail"'},{value:'"Show"'},{value:'"Hide"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Image"'},{value:'"Image2"'},{value:'"Call"'},{value:'"Calling"'},{value:'"CallMissed"'},{value:'"CallSilent"'},{value:'"Lock"'},{value:'"Unlock"'}]}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},iconTurn:{defaultValue:null,description:"",name:"iconTurn",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"FlexContainerAndItemProps"}}}}}catch{}export{V as B,g as R};
