import{n as w,K as o,j as i,d as A,l as a}from"./theme-DVxtux_W.js";import{r as s}from"./index-CnY36iC1.js";import{E as V}from"./error.styles-C-xkUJAX.js";import{g as x}from"./typography.functions-CWlWgfdK.js";import"./typography-eKbfPWa3.js";import{e as v,c as q,b as T}from"./add.styles-B_8-z0Fm.js";import"./theme.global-C_7ReLae.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./proxy-BgqLTuwE.js";import"./context-dialog.constants-Blzdygk7.js";import"./index-Blb9MfSb.js";const m=e=>{const l=w(),f=s.useCallback(n=>{var r,u;if(e.isNoSpaces){const h=n.replace(/\s+/g,"");(r=e.onChange)==null||r.call(e,h)}else(u=e.onChange)==null||u.call(e,n)},[e]),t=s.useRef(null),d=s.useCallback(n=>{if(t.current){const r=o[e.size].height,u=Math.max(o[e.size].height,n);t.current.style.height=`${r}px`;const h=t.current.scrollHeight;let g=n;e.isAutoHeight&&!e.height?g=Math.max(r,Math.min(h,u)):g=Math.max(r,n),t.current.style.height=`${g}px`,t.current.style.minHeight=`${r}px`,t.current.style.maxHeight=`${u}px`,t.current.scrollHeight>u?t.current.style.overflowY="auto":t.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),$=s.useCallback(()=>{if(e.height)d(e.height);else if(e.maxRows){const n=l.font.sizeDefault.default*l.font.lineHeight,r=e.maxRows?n*e.maxRows:n;d(r+o[e.size].padding*2-8)}else d(o[e.size].height)},[d,e.height,e.maxRows,e.size,l.font.lineHeight,l.font.sizeDefault.default]);return s.useEffect(()=>{$()},[$,e.isAutoHeight,e.value]),i.jsxDEV(i.Fragment,{children:[i.jsxDEV(H,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$width:e.width,children:i.jsxDEV(B,{ref:t,$isResize:e.isResize,$isError:e.isError,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:n=>f(n.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:74,columnNumber:7},void 0),i.jsxDEV(V,{isError:e.isError,errorMessage:e.errorMessage,size:e.size,width:e.width,isErrorAbsolute:e.isErrorAbsolute},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:111,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:73,columnNumber:5},void 0)};try{m.displayName="TextArea",m.__docgenInfo={description:"",displayName:"TextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const H=A.div`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: ${e=>e.$width??"100%"};
  ${e=>e.$width&&a`
      max-width: ${e.$width};
    `}
`,z=a`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,"Inter",e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,"Inter",e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
`,N=a`
  ${e=>a`
    background: ${e.theme.colors.input[e.$genre].background.rest};
    border-color: ${e.theme.colors.input[e.$genre].border.rest};
    color: ${e.theme.colors.input[e.$genre].color.rest};

    &:active {
      background: ${e.theme.colors.input[e.$genre].background.rest};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
    &:hover {
      background: ${e.theme.colors.input[e.$genre].background.hover};
      border-color: ${e.theme.colors.input[e.$genre].border.hover};
      color: ${e.theme.colors.input[e.$genre].color.hover};
    }
    &:focus-visible {
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      background: ${e.theme.colors.input[e.$genre].background.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
  `};
`,D=a`
  ${e=>R(o[e.$size])};
`,R=e=>a`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,j=a`
  opacity: ${e=>e.$isDisabled?.5:1};
`,k=a`
  ${e=>e.$isTextAreaEffect&&a`
      box-shadow: ${e.theme.effects.input};
    `}
`,S=a`
  ${e=>!e.$isResize&&a`
      resize: none;
    `}
`,M=a`
  overflow-x: hidden;
  width: 100% !important;
  border: 1px inset;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-wrap: auto;

  ${e=>x(16,e.$isBold?500:400,"Inter",e.theme.font.lineHeight)};

  ${v};
  ${q};
  ${T};
  ${S};
  ${D};
  ${N};
  ${z};
  ${j};
  ${k};
`,B=A.textarea`
  ${M};
`,X={component:m,title:"Component/TextArea"},C={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,width:"300px",maxRows:8},_=e=>{const[l,f]=s.useState("");return i.jsxDEV(m,{...e,value:l,onChange:t=>f(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.stories.tsx",lineNumber:25,columnNumber:10},void 0)},c={render:e=>i.jsxDEV(_,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.stories.tsx",lineNumber:28,columnNumber:19},void 0),args:{...C,errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Default"}};var b,y,E;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const p=["Default"];export{c as Default,p as __namedExportsOrder,X as default};
