import{n as V,j as l,d as A,l as a}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as o}from"./index-CnY36iC1.js";import{E as v,a as E}from"./style-DP4WPrh4.js";import{K as s}from"./theme-D8gwu-FP.js";import{g as x}from"./component.functions-BGGwQnpg.js";import"./component-CXRT2tYE.js";import{d as T,b as q}from"./style-KtjdfyVq.js";import"./theme.global-C6REP-xE.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context.constants-_uES7CTn.js";import"./proxy-BgqLTuwE.js";const m=e=>{const r=V(),f=o.useCallback(n=>{var i,u;if(e.isNoSpaces){const h=n.replace(/\s+/g,"");(i=e.onChange)==null||i.call(e,h)}else(u=e.onChange)==null||u.call(e,n)},[e]),t=o.useRef(null),d=o.useCallback(n=>{if(t.current){const i=s[e.size].height,u=Math.max(s[e.size].height,n);t.current.style.height=`${i}px`;const h=t.current.scrollHeight;let g=n;e.isAutoHeight&&!e.height?g=Math.max(i,Math.min(h,u)):g=Math.max(i,n),t.current.style.height=`${g}px`,t.current.style.minHeight=`${i}px`,t.current.style.maxHeight=`${u}px`,t.current.scrollHeight>u?t.current.style.overflowY="auto":t.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),$=o.useCallback(()=>{if(e.height)d(e.height);else if(e.maxRows){const n=r.font.sizeDefault.default*r.font.lineHeight,i=e.maxRows?n*e.maxRows:n;d(i+s[e.size].padding*2-8)}else d(s[e.size].height)},[d,e.height,e.maxRows,e.size,r.font.lineHeight,r.font.sizeDefault.default]);return o.useEffect(()=>{$()},[$,e.isAutoHeight,e.value]),l.jsxDEV(l.Fragment,{children:[l.jsxDEV(z,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$width:e.width,children:l.jsxDEV(C,{ref:t,$isResize:e.isResize,$error:e.error,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:n=>f(n.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:74,columnNumber:7},void 0),e!=null&&e.error?l.jsxDEV(v,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:111,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:73,columnNumber:5},void 0)};try{m.displayName="TextArea",m.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const z=A.div`
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
`,H=a`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
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
  ${e=>R(s[e.$size])};
`,R=e=>a`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,k=a`
  opacity: ${e=>e.$isDisabled?.5:1};
`,j=a`
  ${e=>e.$isTextAreaEffect&&a`
      box-shadow: ${e.theme.effects.input};
    `}
`,S=a`
  ${e=>!e.$isResize&&a`
      resize: none;
    `}
`,B=a`
  overflow-x: hidden;
  width: 100% !important;
  border: 1px solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-wrap: auto;

  ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};

  ${S};
  ${D};
  ${N};
  ${H};
  ${k};
  ${j};
  ${T};
  ${q};
  ${E};
`,C=A.textarea`
  ${B};
`,X={component:m,title:"Component/TextArea"},M={genre:"blackBorder",size:"largeMedium",error:{errorMessage:"Error",isError:!1,isErrorAbsolute:!1},isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,width:"300px",maxRows:8},_=e=>{const[r,f]=o.useState("");return l.jsxDEV(m,{...e,value:r,onChange:t=>f(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-textarea.stories.tsx",lineNumber:29,columnNumber:10},void 0)},c={render:e=>l.jsxDEV(_,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-textarea.stories.tsx",lineNumber:32,columnNumber:19},void 0),args:{...M,placeholder:"Default"}};var b,y,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    placeholder: 'Default'
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const p=["Default"];export{c as Default,p as __namedExportsOrder,X as default};
