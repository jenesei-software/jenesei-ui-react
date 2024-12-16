import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{n as v,d as f,l as t}from"./styled-components.browser.esm-CCP31c1y.js";import{K as o}from"./theme-3X06DcYZ.js";import{L as T}from"./loading.styles-_WGkLspa.js";import"./typography-DCobQ7y0.js";import{g as m}from"./typography.functions-CeSMEUjp.js";import"./theme.global-3OPldRDj.js";import"./index-rCr475hU.js";const g=e=>{const a=v(),h=d.useCallback(i=>{var r,s;if(e.isNoSpaces){const $=i.replace(/\s+/g,"");(r=e.onChange)==null||r.call(e,$)}else(s=e.onChange)==null||s.call(e,i)},[e]),l=d.useRef(null),u=d.useCallback(i=>{if(l.current){const r=o[e.size].height,s=Math.max(o[e.size].height,i);l.current.style.height=`${r}px`;const $=l.current.scrollHeight;let x=i;e.isAutoHeight&&!e.height?x=Math.max(r,Math.min($,s)):x=Math.max(r,i),l.current.style.height=`${x}px`,l.current.style.minHeight=`${r}px`,l.current.style.maxHeight=`${s}px`,l.current.scrollHeight>s?l.current.style.overflowY="auto":l.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),b=d.useCallback(()=>{if(e.height)u(e.height);else if(e.maxRows){const i=a.font.sizeDefault.default*a.font.lineHeight,r=e.maxRows?i*e.maxRows:i;u(r+o[e.size].padding*2-8)}else u(o[e.size].height)},[u,e.height,e.maxRows,e.size,a.font.lineHeight,a.font.sizeDefault.default]);return d.useEffect(()=>{b()},[b,e.isAutoHeight,e.value]),n.jsxs(n.Fragment,{children:[n.jsxs(w,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$width:e.width,children:[n.jsx(L,{ref:l,$isResize:e.isResize,$isError:e.isError,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:i=>h(i.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id}),e.isLoading&&n.jsx(F,{$genre:e.genre,$size:e.size,size:e.size,color:a.colors.input[e.genre].color.rest})]}),e.isError&&e.errorMessage&&n.jsx(V,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage})]})};try{g.displayName="TextArea",g.__docgenInfo={description:"",displayName:"TextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isCustomIcon:{defaultValue:null,description:"",name:"isCustomIcon",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const w=f.div`
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
`,V=f.div`
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
  }
  &:-ms-input-placeholder {
    ${e=>m(16,e.$isBold?500:400,"Inter")};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
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
`,D=t`
  opacity: ${e=>e.$isDisabled?.5:1};
`,M=t`
  ${e=>e.$isTextAreaEffect&&t`
      box-shadow: ${e.theme.effects.input};
    `}
`,B=t`
  ${e=>!e.$isResize&&t`
      resize: none;
    `}
`,I=t`
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100% !important;
  border: 1px inset;
  transition:
    color,
    border,
    background-color ${e=>e.theme.transition.default},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  text-wrap: auto;

  ${e=>m(16,e.$isBold?500:400,"Inter")};
  line-height: ${e=>e.theme.font.lineHeight};

  ${B};
  ${C};
  ${R};
  ${H};
  ${S};
  ${D};
  ${M};
`,L=f.textarea`
  ${I};
`,_=t`
  ${e=>j(o[e.$size])};
`,j=e=>t`
  padding: ${e.padding-6}px ${e.padding}px ${e.padding-4}px ${e.padding}px;
`,F=f(T)`
  ${_};
  position: absolute;
  display: flex;
  align-items: center;
  right: 0px;
  box-sizing: content-box;
  backdrop-filter: blur(2px);
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
`,X={component:g,title:"Component/TextArea"},N={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,width:"300px",maxRows:8},O=e=>{const[a,h]=d.useState("");return n.jsx(g,{...e,value:a,onChange:l=>h(l)})},c={render:e=>n.jsx(O,{...e}),args:{...N,errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Default"}};var y,A,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const p=["Default"];export{c as Default,p as __namedExportsOrder,X as default};
