import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{n as v,d as h,l as t}from"./styled-components.browser.esm-CCP31c1y.js";import{K as o}from"./theme-6wvtFABo.js";import{L as T}from"./loading.styles-92ldLbyd.js";import"./typography-3k44A8Yn.js";import{g as m}from"./typography.functions-_Xr-RK7k.js";import"./theme.global-j_wjL8sr.js";import"./index-rCr475hU.js";const g=e=>{const a=v(),$=d.useCallback(l=>{var n,s;if(e.isNoSpaces){const f=l.replace(/\s+/g,"");(n=e.onChange)==null||n.call(e,f)}else(s=e.onChange)==null||s.call(e,l)},[e]),i=d.useRef(null),u=d.useCallback(l=>{if(i.current){const n=o[e.size].height,s=Math.max(o[e.size].height,l);i.current.style.height=`${n}px`;const f=i.current.scrollHeight;let x=l;e.isAutoHeight&&!e.height?x=Math.max(n,Math.min(f,s)):x=Math.max(n,l),i.current.style.height=`${x}px`,i.current.style.minHeight=`${n}px`,i.current.style.maxHeight=`${s}px`,i.current.scrollHeight>s?i.current.style.overflowY="auto":i.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),b=d.useCallback(()=>{if(e.height)u(e.height);else if(e.maxRows){const l=a.defaultFontSize.desktop*a.defaultLineHeight,n=e.maxRows?l*e.maxRows:l;u(n+o[e.size].padding*2-8)}else u(o[e.size].height)},[u,e.height,e.maxRows,e.size,a.defaultFontSize.desktop,a.defaultLineHeight]);return d.useEffect(()=>{b()},[b,e.isAutoHeight,e.value]),r.jsxs(r.Fragment,{children:[r.jsxs(w,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$width:e.width,children:[r.jsx(B,{ref:i,$isResize:e.isResize,$isError:e.isError,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:l=>$(l.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id}),e.isLoading&&r.jsx(j,{$genre:e.genre,$size:e.size,size:e.size,color:a.colors.input[e.genre].color.rest})]}),e.isError&&e.errorMessage&&r.jsx(V,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage})]})};try{g.displayName="TextArea",g.__docgenInfo={description:"",displayName:"TextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isCustomIcon:{defaultValue:null,description:"",name:"isCustomIcon",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const w=h.div`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: ${e=>e.$width??"100%"};
  ${e=>e.$width&&t`
      max-width: ${e.$width};
    `}
`,z=t`
  ${e=>q({...o[e.$size],$isErrorAbsolute:e.$isErrorAbsolute})};
`,q=e=>t`
  ${e.$isErrorAbsolute?t`
        position: absolute;
        padding-top: 6px;
        padding-left: ${e.padding}px;
        color: ${a=>a.theme.colors.danger};
      `:t`
        position: static;
        padding: 0px ${e.padding}px;
        color: ${a=>a.theme.colors.danger};
      `}
`,V=h.div`
  ${m(12,400,"Inter")};
  width: ${e=>e.$width??"100%"};
  ${z}
`,H=t`
  ${e=>e.$isError&&t`
      border-color: ${a=>a.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${a=>a.theme.colors.danger};
      }
    `}
`,S=t`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>m(16,e.$isBold?500:400,"Inter")};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
    line-height: ${e=>e.theme.defaultLineHeightInput};
  }
  &:-ms-input-placeholder {
    ${e=>m(16,e.$isBold?500:400,"Inter")};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
    line-height: ${e=>e.theme.defaultLineHeightInput};
  }
`,R=t`
  ${e=>t`
    background: ${e.theme.colors.input[e.$genre].background.rest};
    border-color: ${e.theme.colors.input[e.$genre].border.rest};
    color: ${e.theme.colors.input[e.$genre].color.rest};
    & span {
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
    & path {
      ${!e.$isCustomIcon&&t`
        fill: ${e.theme.colors.input[e.$genre].color.rest};
      `}
    }
    &:active {
      background: ${e.theme.colors.input[e.$genre].background.rest};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
      & span {
        color: ${e.theme.colors.input[e.$genre].color.rest};
      }
      & path {
        ${!e.$isCustomIcon&&t`
          fill: ${e.theme.colors.input[e.$genre].color.rest};
        `}
      }
    }
    &:hover {
      background: ${e.theme.colors.input[e.$genre].background.hover};
      border-color: ${e.theme.colors.input[e.$genre].border.hover};
      color: ${e.theme.colors.input[e.$genre].color.hover};
      & span {
        color: ${e.theme.colors.input[e.$genre].color.hover};
      }
      & path {
        ${!e.$isCustomIcon&&t`
          fill: ${e.theme.colors.input[e.$genre].color.rest};
        `}
      }
    }
    &:focus-visible {
      outline: 1px solid ${e.theme.colors.focus};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      background: ${e.theme.colors.input[e.$genre].background.rest};

      color: ${e.theme.colors.input[e.$genre].color.rest};
      & span {
        color: ${e.theme.colors.input[e.$genre].color.rest};
      }
      & path {
        ${!e.$isCustomIcon&&t`
          fill: ${e.theme.colors.input[e.$genre].color.rest};
        `}
      }
    }
  `};
`,C=t`
  ${e=>k(o[e.$size])};
`,k=e=>t`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,L=t`
  opacity: ${e=>e.$isDisabled?.5:1};
`,I=t`
  ${e=>e.$isTextAreaEffect&&t`
      box-shadow: ${e.theme.effects.input.default};
    `}
`,M=t`
  ${e=>!e.$isResize&&t`
      resize: none;
    `}
`,D=t`
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100% !important;
  border: 1px inset;
  transition:
    color,
    border,
    background-color ${e=>e.theme.transition},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  text-wrap: auto;

  ${e=>m(16,e.$isBold?500:400,"Inter")};
  line-height: ${e=>e.theme.defaultLineHeightInput};

  ${M};
  ${C};
  ${R};
  ${H};
  ${S};
  ${L};
  ${I};
`,B=h.textarea`
  ${D};
`,F=t`
  ${e=>_(o[e.$size])};
`,_=e=>t`
  padding: ${e.padding-6}px ${e.padding}px ${e.padding-4}px ${e.padding}px;
`,j=h(T)`
  ${F};
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  box-sizing: content-box;
  backdrop-filter: blur(2px);
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
`,X={component:g,title:"Component/TextArea",tags:["autodocs"]},N={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,width:"300px",maxRows:8},O=e=>{const[a,$]=d.useState("");return r.jsx(g,{...e,value:a,onChange:i=>$(i)})},c={render:e=>r.jsx(O,{...e}),args:{...N,errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Default"}};var y,A,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const p=["Default"];export{c as Default,p as __namedExportsOrder,X as default};
