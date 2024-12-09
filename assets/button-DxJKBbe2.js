import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{l as t,d as h,n as C}from"./styled-components.browser.esm-CCP31c1y.js";import{I as w}from"./icon.styles-ig3CQChh.js";import{L as z}from"./loading.styles-92ldLbyd.js";import{r as s}from"./index-DJO9vBfz.js";import"./typography-3k44A8Yn.js";import{g as B}from"./typography.functions-_Xr-RK7k.js";import{a as A}from"./base.styles-BarGonPG.js";import{K as F}from"./theme-6wvtFABo.js";import"./theme.global-j_wjL8sr.js";const D=t`
  ${e=>t`
    background: ${e.theme.colors.button[e.$genre].background.rest};
    border-color: ${e.theme.colors.button[e.$genre].border.rest};
    color: ${e.theme.colors.button[e.$genre].color.rest};
    & span {
      color: ${e.theme.colors.button[e.$genre].color.rest};
    }
    & path {
      fill: ${e.theme.colors.button[e.$genre].color.rest};
    }

    &:focus-visible {
      outline: 1px solid ${e.theme.colors.focus};
    }
    &:hover {
      ${!e.$isHidden&&t`
        background: ${e.theme.colors.button[e.$genre].background.hover};
        border-color: ${e.theme.colors.button[e.$genre].border.hover};
        color: ${e.theme.colors.button[e.$genre].color.hover};
        & span {
          color: ${e.theme.colors.button[e.$genre].color.hover};
        }
        & path {
          fill: ${e.theme.colors.button[e.$genre].color.hover};
        }
      `}
    }
  `};
`,L=t`
  ${e=>e.$isHidden?t`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;

          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
          & span {
            color: ${e.theme.colors.button[e.$genre].color.rest} !important;
          }
          & path {
            fill: ${e.theme.colors.button[e.$genre].color.rest} !important;
          }
        `:t`
          opacity: 1;
        `}
`,R=t`
  ${e=>e.$isHiddenBorder&&t`
      border: 0px transparent !important;
    `}
`,_=t`
  ${e=>e.$isRadius&&t`
      border-radius: 100px;
    `}
`,k=t`
  ${e=>e.$isPlaystationEffect&&t`
      box-shadow: ${e.theme.effects.button.playstation};
    `}
`,I=h.div`
  ${e=>e.$isIconGroup?t`
          display: flex;
          gap: ${F[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:t`
          display: contents;
        `}
`,T=t`
  ${e=>W({...F[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex,$minWidth:e.$minWidth})};
`,W=e=>t`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${B(e.font,700,"Inter")};
  padding: 0px ${e.padding}px;

  ${()=>e.isFullSize&&t`
      height: 100%;
      border-radius: 0px;
    `};
  ${()=>e.$flex&&t`
      flex: ${e.$flex};
    `};
  ${e.$width==="asHeight"?t`
        width: ${e.height}px;
        min-width: ${e.height}px;
        padding: 0px;
      `:t`
        width: ${e.$width??"max-content"};
        min-width: ${e.$width?`${e.$width}px`:"max-content"};
      `};
  ${e.$minWidth==="asHeight"&&t`
    min-width: ${e.height}px;
  `}
`,P=t`
  outline: 1px solid transparent;
  border: 1px solid transparent;
`,O=t`
  display: flex;
  align-items: center;
  justify-content: center;
  ${A};
`,j=h.button`
  outline: 1px solid transparent;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  user-select: none;
  transition:
    all ${e=>e.theme.transition},
    outline 0s;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  ${O};
  ${P};
  ${T};
  ${D};
  ${L};
  ${R};
  ${_};
  ${k};
  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
`,E=(e,r,o)=>{s.useLayoutEffect(()=>{let l=null;return e>0&&(l&&clearTimeout(l),l=setTimeout(()=>{o(),l&&clearTimeout(l)},r*4)),()=>{l&&clearTimeout(l)}},[e,r,o])},g=e=>{const r=s.useMemo(()=>e.color,[e.color]),o=s.useMemo(()=>e.duration??S,[e.duration]),[l,d]=s.useState([]);E(l.length,o??S,()=>{d([])});const c=s.useCallback(n=>{const i=n.currentTarget.getBoundingClientRect(),u=i.width>i.height?i.width:i.height,m=n.pageX-i.x-u/2,f=n.pageY-i.y-u/2,v={x:m,y:f,size:u};d([...l,v])},[l]);return a.jsx($,{$duration:o,$color:r,onMouseDown:c,children:l.length>0&&l.map((n,i)=>a.jsx("span",{style:{top:n.y,left:n.x,width:n.size,height:n.size}},"span"+i))})};try{g.displayName="Ripple",g.__docgenInfo={description:"",displayName:"Ripple",props:{duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const $=h.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${e=>e.$color};
    animation-name: ripple;
    animation-duration: ${e=>e.$duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;try{$.displayName="RippleContainer",$.__docgenInfo={description:"",displayName:"RippleContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const S=600,q=e=>{var d,c,n,i,u,m,f,v,y,b,x;const r=C(),o=a.jsx(z,{size:e.size,color:r.colors.button[e.genre].color.rest,order:e.loadingOrder}),l=V=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(V)};return a.jsxs(j,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$minWidth:e.minWidth,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:l,$flexDirection:(d=e.customStyles)==null?void 0:d.flexDirection,$flexWrap:(c=e.customStyles)==null?void 0:c.flexWrap,$justifyContent:(n=e.customStyles)==null?void 0:n.justifyContent,$alignItems:(i=e.customStyles)==null?void 0:i.alignItems,$alignContent:(u=e.customStyles)==null?void 0:u.alignContent,$order:(m=e.customStyles)==null?void 0:m.order,$flexGrow:(f=e.customStyles)==null?void 0:f.flexGrow,$flexShrink:(v=e.customStyles)==null?void 0:v.flexShrink,$flexBasis:(y=e.customStyles)==null?void 0:y.flexBasis,$alignSelf:(b=e.customStyles)==null?void 0:b.alignSelf,$gap:(x=e.customStyles)==null?void 0:x.gap,children:[!e.isHidden&&a.jsx(g,{color:r.colors.button[e.genre].color.rest}),e.isOnlyLoading?e.isLoading?o:a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),e.iconName&&a.jsx(w,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),a.jsx(I,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?a.jsx(a.Fragment,{children:e.isLoading&&o}):a.jsxs(a.Fragment,{children:[e.isLoading&&o,e.iconName&&a.jsx(w,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]})})]})]})};try{q.displayName="Button",q.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Biometry"'},{value:'"QR"'},{value:'"Search"'},{value:'"Folder"'},{value:'"Wallet"'},{value:'"Graph"'},{value:'"Bookmark"'},{value:'"Category"'},{value:'"Home"'},{value:'"Notification"'},{value:'"Chat"'},{value:'"Heart"'},{value:'"Paper"'},{value:'"PaperPlus"'},{value:'"PaperNegative"'},{value:'"PaperFail"'},{value:'"PaperDownload"'},{value:'"PaperUpload"'},{value:'"Send"'},{value:'"Password"'},{value:'"Swap"'},{value:'"Work"'},{value:'"ArrowDownCircle"'},{value:'"ArrowDownSquare"'},{value:'"ArrowDown"'},{value:'"ArrowDown2"'},{value:'"ArrowDown3"'},{value:'"Scan"'},{value:'"Activity"'},{value:'"Calendar"'},{value:'"Message"'},{value:'"Plus"'},{value:'"Chart"'},{value:'"Game"'},{value:'"Bag1"'},{value:'"Bag2"'},{value:'"TicketStar"'},{value:'"MoreCircle"'},{value:'"MoreSquare"'},{value:'"Discount"'},{value:'"Buy"'},{value:'"InfoSquare"'},{value:'"DangerSquare"'},{value:'"DangerTriangle"'},{value:'"CloseSquare"'},{value:'"TickSquare"'},{value:'"ArrowRightCircle"'},{value:'"ArrowRightSquare"'},{value:'"ArrowRight"'},{value:'"ArrowRight2"'},{value:'"ArrowRight3"'},{value:'"Video"'},{value:'"Discovery"'},{value:'"Location"'},{value:'"Document"'},{value:'"Setting"'},{value:'"TimeSquare"'},{value:'"TimeCircle"'},{value:'"VolumeUp"'},{value:'"VolumeDown"'},{value:'"VolumeOff"'},{value:'"Star"'},{value:'"Ticket"'},{value:'"Camera"'},{value:'"Profile"'},{value:'"AddUser"'},{value:'"TwoUser"'},{value:'"ThreeUser"'},{value:'"Login"'},{value:'"Logout"'},{value:'"Download"'},{value:'"Upload"'},{value:'"ArrowUpCircle"'},{value:'"ArrowUpSquare"'},{value:'"ArrowUp"'},{value:'"ArrowUp2"'},{value:'"ArrowUp3"'},{value:'"Voice"'},{value:'"Voice2"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"EditSquare"'},{value:'"Play"'},{value:'"ShieldDone"'},{value:'"ShieldFail"'},{value:'"Show"'},{value:'"Hide"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Image"'},{value:'"Image2"'},{value:'"Call"'},{value:'"Calling"'},{value:'"CallMissed"'},{value:'"CallSilent"'},{value:'"Lock"'},{value:'"Unlock"'},{value:'"ArrowLeftCircle"'},{value:'"ArrowLeftSquare"'},{value:'"ArrowLeft"'},{value:'"ArrowLeft2"'},{value:'"ArrowLeft3"'}]}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},iconTurn:{defaultValue:null,description:"",name:"iconTurn",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"FlexContainerAndItemProps"}}}}}catch{}export{q as B,g as R};
