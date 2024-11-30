import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as f}from"./index-DJO9vBfz.js";import{l as t,d as F,n as B}from"./styled-components.browser.esm-CCP31c1y.js";import{I as x}from"./icon.styles-ke4R2kUL.js";import{L as V}from"./loading.styles-C9X5Vsl2.js";import{a as C}from"./base.styles-lMUunFc3.js";import"./typography--gcTkdSy.js";import{g as E}from"./typography.functions-_Xr-RK7k.js";import{K as z}from"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";const A=t`
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
`,I=F.div`
  ${e=>e.$isIconGroup?t`
          display: flex;
          gap: ${z[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:t`
          display: contents;
        `}
`,H=t`
  ${e=>P({...z[e.$size],isFullSize:e.$isFullSize,$width:e.$width,$flex:e.$flex,$minWidth:e.$minWidth})};
`,P=e=>t`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${E(e.font,700,"Inter")};
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
`,T=t`
  outline: 1px solid transparent;
  border: 1px solid transparent;
`,W=t`
  display: flex;
  align-items: center;
  justify-content: center;
  ${C};
`,O=F.button`
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

  ${W};
  ${T};
  ${H};
  ${A};
  ${L};
  ${k};
  ${D};
  ${R};
  font-family: ${e=>e.$customFontFamily};
  font-size: ${e=>e.$customFontSize};
  font-weight: ${e=>e.$customFontWeight};
`;function b(e,r,u){if(u||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}var S={wrapper:"Ripple-module_wrapper__hUTT1",ripple:"Ripple-module_ripple__KYPTO"},w="a, button",_=function(){var e=f.useState([]),r=e[0],u=e[1],n=f.useRef(null),o=f.useCallback(function(l){var d,s=n.current;if(s){var m=(d=s.parentElement)===null||d===void 0?void 0:d.closest(w);if(m&&!(!(l.target instanceof HTMLElement)&&!(l.target instanceof SVGElement))){var v=l.target.closest(w);if(v===m&&!(v instanceof HTMLButtonElement&&v.disabled)){var c=m.getBoundingClientRect(),$=2*Math.sqrt(Math.pow(c.width,2)+Math.pow(c.height,2)),g=l.clientX-c.left,h=l.clientY-c.top;u(function(y){return b(b([],y,!0),[{id:l.timeStamp,size:$,x:g,y:h}],!1)})}}}},[]);f.useEffect(function(){return document.body.addEventListener("pointerdown",o),function(){document.body.removeEventListener("pointerdown",o)}},[o]);var i=f.useCallback(function(l){u(function(d){return d.filter(function(s){return s.id!==l})})},[]);return a.jsx("span",{ref:n,className:S.wrapper,children:r.map(function(l){return a.jsx("span",{className:S.ripple,style:{"--Ripple-size":"".concat(l.size,"px"),"--Ripple-x":"".concat(l.x,"px"),"--Ripple-y":"".concat(l.y,"px")},onAnimationEnd:function(){i(l.id)}},l.id)})})};const q=e=>{var o,i,l,d,s,m,v,c,$,g,h;const r=B(),u=a.jsx(V,{size:e.size,color:r.colors.button[e.genre].color.rest,order:e.loadingOrder}),n=y=>{!e.isLoading&&!e.isDisabled&&e.onClick&&e.onClick(y)};return a.jsxs(O,{id:e.id,tabIndex:0,$isFullSize:e.isFullSize,$genre:e.genre,$width:e.width,$minWidth:e.minWidth,$flex:e.flex,$size:e.size,$isDisabled:e.isDisabled,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$customFontFamily:e.customFontFamily,$customFontSize:e.customFontSize,$customFontWeight:e.customFontWeight,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:n,$flexDirection:(o=e.customStyles)==null?void 0:o.flexDirection,$flexWrap:(i=e.customStyles)==null?void 0:i.flexWrap,$justifyContent:(l=e.customStyles)==null?void 0:l.justifyContent,$alignItems:(d=e.customStyles)==null?void 0:d.alignItems,$alignContent:(s=e.customStyles)==null?void 0:s.alignContent,$order:(m=e.customStyles)==null?void 0:m.order,$flexGrow:(v=e.customStyles)==null?void 0:v.flexGrow,$flexShrink:(c=e.customStyles)==null?void 0:c.flexShrink,$flexBasis:($=e.customStyles)==null?void 0:$.flexBasis,$alignSelf:(g=e.customStyles)==null?void 0:g.alignSelf,$gap:(h=e.customStyles)==null?void 0:h.gap,children:[!e.isHidden&&a.jsx(_,{}),e.isOnlyLoading?e.isLoading?u:a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),e.iconName&&a.jsx(x,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{order:0,display:"contents"},children:e.children&&e.children}),a.jsx(I,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:e.iconGroupOrder,children:e.isOnlyLoadingWithGroup?a.jsx(a.Fragment,{children:e.isLoading&&u}):a.jsxs(a.Fragment,{children:[e.isLoading&&u,e.iconName&&a.jsx(x,{name:e.iconName,type:"curved",size:e.size,turn:e.iconTurn,order:e.iconOrder})]})})]})]})};try{q.displayName="Button",q.__docgenInfo={description:"",displayName:"Button",props:{isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Biometry"'},{value:'"QR"'},{value:'"Search"'},{value:'"Folder"'},{value:'"Wallet"'},{value:'"Graph"'},{value:'"Bookmark"'},{value:'"Category"'},{value:'"Home"'},{value:'"Notification"'},{value:'"Chat"'},{value:'"Heart"'},{value:'"Paper"'},{value:'"PaperPlus"'},{value:'"PaperNegative"'},{value:'"PaperFail"'},{value:'"PaperDownload"'},{value:'"PaperUpload"'},{value:'"Send"'},{value:'"Password"'},{value:'"Swap"'},{value:'"Work"'},{value:'"ArrowDownCircle"'},{value:'"ArrowDownSquare"'},{value:'"ArrowDown"'},{value:'"ArrowDown2"'},{value:'"ArrowDown3"'},{value:'"Scan"'},{value:'"Activity"'},{value:'"Calendar"'},{value:'"Message"'},{value:'"Plus"'},{value:'"Chart"'},{value:'"Game"'},{value:'"Bag1"'},{value:'"Bag2"'},{value:'"TicketStar"'},{value:'"MoreCircle"'},{value:'"MoreSquare"'},{value:'"Discount"'},{value:'"Buy"'},{value:'"InfoSquare"'},{value:'"DangerSquare"'},{value:'"DangerTriangle"'},{value:'"CloseSquare"'},{value:'"TickSquare"'},{value:'"ArrowRightCircle"'},{value:'"ArrowRightSquare"'},{value:'"ArrowRight"'},{value:'"ArrowRight2"'},{value:'"ArrowRight3"'},{value:'"Video"'},{value:'"Discovery"'},{value:'"Location"'},{value:'"Document"'},{value:'"Setting"'},{value:'"TimeSquare"'},{value:'"TimeCircle"'},{value:'"VolumeUp"'},{value:'"VolumeDown"'},{value:'"VolumeOff"'},{value:'"Star"'},{value:'"Ticket"'},{value:'"Camera"'},{value:'"Profile"'},{value:'"AddUser"'},{value:'"TwoUser"'},{value:'"ThreeUser"'},{value:'"Login"'},{value:'"Logout"'},{value:'"Download"'},{value:'"Upload"'},{value:'"ArrowUpCircle"'},{value:'"ArrowUpSquare"'},{value:'"ArrowUp"'},{value:'"ArrowUp2"'},{value:'"ArrowUp3"'},{value:'"Voice"'},{value:'"Voice2"'},{value:'"Delete"'},{value:'"Edit"'},{value:'"EditSquare"'},{value:'"Play"'},{value:'"ShieldDone"'},{value:'"ShieldFail"'},{value:'"Show"'},{value:'"Hide"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Image"'},{value:'"Image2"'},{value:'"Call"'},{value:'"Calling"'},{value:'"CallMissed"'},{value:'"CallSilent"'},{value:'"Lock"'},{value:'"Unlock"'},{value:'"ArrowLeftCircle"'},{value:'"ArrowLeftSquare"'},{value:'"ArrowLeft"'},{value:'"ArrowLeft2"'},{value:'"ArrowLeft3"'}]}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},iconTurn:{defaultValue:null,description:"",name:"iconTurn",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isOnlyLoadingWithGroup:{defaultValue:null,description:"",name:"isOnlyLoadingWithGroup",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOrder:{defaultValue:null,description:"",name:"loadingOrder",required:!1,type:{name:"number"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},customFontFamily:{defaultValue:null,description:"",name:"customFontFamily",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},customFontSize:{defaultValue:null,description:"",name:"customFontSize",required:!1,type:{name:"number"}},customFontWeight:{defaultValue:null,description:"",name:"customFontWeight",required:!1,type:{name:"number"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},customStyles:{defaultValue:null,description:"",name:"customStyles",required:!1,type:{name:"FlexContainerAndItemProps"}}}}}catch{}export{q as B,_ as R};
