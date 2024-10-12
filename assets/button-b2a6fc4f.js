import{l as t,d as q,j as a,n as B}from"./styled-components.browser.esm-028b5a71.js";import{r as f}from"./index-ff614419.js";import{F as V,I as b}from"./icon.styles-6515b290.js";import{M as C}from"./modal-loading.styles-b2147eb5.js";import"./typography-eb8d59f5.js";import{g as E}from"./typography.functions-dcbec177.js";import{K as z}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";const A=t`
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
`,k=t`
  ${e=>e.$isHiddenBorder&&t`
      border: 0px transparent !important;
    `}
`,D=t`
  ${e=>e.$isRadius&&t`
      border-radius: 100px;
    `}
`,R=t`
  ${e=>e.$isPlaystationEffect&&t`
      box-shadow: ${e.theme.effects.button.playstation};
    `}
`,I=q.div`
  ${e=>e.$isIconGroup?t`
          display: flex;
          gap: ${z[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:t`
          display: contents;
        `}
`,P=t`
  ${e=>T({...z[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex})};
`,T=e=>t`
  height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${E(e.font,700,"Inter")};
  padding: 0px ${e.padding}px;

  ${()=>e.isFullSize&&t`
      height: 100%;
      border-radius: 0px;
    `}
  ${()=>e.$flex&&t`
      flex: ${e.$flex};
    `}
  ${e.$width==="asHeight"?t`
        width: ${e.height}px;
        min-width: ${e.height}px;
        padding: 0px;
      `:t`
        width: ${e.$width??"max-content"};
        min-width: ${e.$width??"max-content"};
      `}
`,H=t`
  outline: 1px solid transparent;
  border: 1px solid transparent;
`,O=t`
  display: flex;
  align-items: center;
  justify-content: center;
  ${V};
`,_=q.button`
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
  ${H};
  ${P};
  ${A};
  ${L};
  ${k};
  ${D};
  ${R};
  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
`;function x(e,r,u){if(u||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}var S={wrapper:"Ripple-module_wrapper__hUTT1",ripple:"Ripple-module_ripple__KYPTO"},w="a, button",j=function(){var e=f.useState([]),r=e[0],u=e[1],n=f.useRef(null),o=f.useCallback(function(l){var d,s=n.current;if(s){var m=(d=s.parentElement)===null||d===void 0?void 0:d.closest(w);if(m&&!(!(l.target instanceof HTMLElement)&&!(l.target instanceof SVGElement))){var v=l.target.closest(w);if(v===m&&!(v instanceof HTMLButtonElement&&v.disabled)){var c=m.getBoundingClientRect(),g=2*Math.sqrt(Math.pow(c.width,2)+Math.pow(c.height,2)),$=l.clientX-c.left,y=l.clientY-c.top;u(function(h){return x(x([],h,!0),[{id:l.timeStamp,size:g,x:$,y}],!1)})}}}},[]);f.useEffect(function(){return document.body.addEventListener("pointerdown",o),function(){document.body.removeEventListener("pointerdown",o)}},[o]);var i=f.useCallback(function(l){u(function(d){return d.filter(function(s){return s.id!==l})})},[]);return a.jsx("span",{ref:n,className:S.wrapper,children:r.map(function(l){return a.jsx("span",{className:S.ripple,style:{"--Ripple-size":"".concat(l.size,"px"),"--Ripple-x":"".concat(l.x,"px"),"--Ripple-y":"".concat(l.y,"px")},onAnimationEnd:function(){i(l.id)}},l.id)})})};const F=e=>{var o,i,l,d,s,m,v,c,g,$,y;const r=B(),u=a.jsx(C,{size:e.size,color:r.colors.button[e.genre].color.rest,order:e.loadingOrder}),n=h=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(h)};return a.jsxs(_,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:n,$flexDirection:(o=e.customStyles)==null?void 0:o.flexDirection,$flexWrap:(i=e.customStyles)==null?void 0:i.flexWrap,$justifyContent:(l=e.customStyles)==null?void 0:l.justifyContent,$alignItems:(d=e.customStyles)==null?void 0:d.alignItems,$alignContent:(s=e.customStyles)==null?void 0:s.alignContent,$order:(m=e.customStyles)==null?void 0:m.order,$flexGrow:(v=e.customStyles)==null?void 0:v.flexGrow,$flexShrink:(c=e.customStyles)==null?void 0:c.flexShrink,$flexBasis:(g=e.customStyles)==null?void 0:g.flexBasis,$alignSelf:($=e.customStyles)==null?void 0:$.alignSelf,$gap:(y=e.customStyles)==null?void 0:y.gap,children:[!e.isHidden&&a.jsx(j,{}),e.isOnlyLoading?e.isLoading?u:a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),e.iconName&&a.jsx(b,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),a.jsx(I,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?a.jsx(a.Fragment,{children:e.isLoading&&u}):a.jsxs(a.Fragment,{children:[e.isLoading&&u,e.iconName&&a.jsx(b,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]})})]})]})};try{F.displayName="Button",F.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Biometry"'},{value:'"QR"'},{value:'"Search"'},{value:'"Folder"'},{value:'"Wallet"'},{value:'"Graph"'},{value:'"Bookmark"'},{value:'"Category"'},{value:'"Home"'},{value:'"Notification"'},{value:'"Chat"'},{value:'"Heart"'},{value:'"Paper"'},{value:'"PaperPlus"'},{value:'"PaperNegative"'},{value:'"PaperFail"'},{value:'"PaperDownload"'},{value:'"PaperUpload"'},{value:'"Send"'},{value:'"Password"'},{value:'"Swap"'},{value:'"Work"'},{value:'"ArrowDownCircle"'},{value:'"ArrowDownSquare"'},{value:'"ArrowDown"'},{value:'"ArrowDown2"'},{value:'"ArrowDown3"'},{value:'"Scan"'},{value:'"Activity"'},{value:'"Calendar"'},{value:'"Message"'},{value:'"Plus"'},{value:'"Chart"'},{value:'"Game"'},{value:'"Bag1"'},{value:'"Bag2"'},{value:'"TicketStar"'},{value:'"MoreCircle"'},{value:'"MoreSquare"'},{value:'"Discount"'},{value:'"Buy"'},{value:'"InfoSquare"'},{value:'"DangerSquare"'},{value:'"DangerTriangle"'},{value:'"CloseSquare"'},{value:'"TickSquare"'},{value:'"ArrowRightCircle"'},{value:'"ArrowRightSquare"'},{value:'"ArrowRight"'},{value:'"ArrowRight2"'},{value:'"ArrowRight3"'},{value:'"Video"'},{value:'"Discovery"'},{value:'"Location"'},{value:'"Document"'},{value:'"Setting"'},{value:'"TimeSquare"'},{value:'"TimeCircle"'},{value:'"VolumeUp"'},{value:'"VolumeDown"'},{value:'"VolumeOff"'},{value:'"Star"'},{value:'"Ticket"'},{value:'"Camera"'},{value:'"Profile"'},{value:'"AddUser"'},{value:'"TwoUser"'},{value:'"ThreeUser"'},{value:'"Login"'},{value:'"Logout"'},{value:'"Download"'},{value:'"Upload"'},{value:'"ArrowUpCircle"'},{value:'"ArrowUpSquare"'},{value:'"ArrowUp"'},{value:'"ArrowUp2"'},{value:'"ArrowUp3"'},{value:'"Voice"'},{value:'"Voice2"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"EditSquare"'},{value:'"Play"'},{value:'"ShieldDone"'},{value:'"ShieldFail"'},{value:'"Show"'},{value:'"Hide"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Image"'},{value:'"Image2"'},{value:'"Call"'},{value:'"Calling"'},{value:'"CallMissed"'},{value:'"CallSilent"'},{value:'"Lock"'},{value:'"Unlock"'},{value:'"ArrowLeftCircle"'},{value:'"ArrowLeftSquare"'},{value:'"ArrowLeft"'},{value:'"ArrowLeft2"'},{value:'"ArrowLeft3"'}]}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},iconTurn:{defaultValue:null,description:"",name:"iconTurn",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"FlexContainerAndItemProps"}}}}}catch{}export{F as B,j as R};
