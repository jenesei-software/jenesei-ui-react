import{n as b,j as r,d as x,l as a}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as u}from"./index-CnY36iC1.js";import{E as y,a as v}from"./style-DFpQ9kAZ.js";import{K as d}from"./theme.global-CNBZeL1_.js";import{g as f}from"./component.functions-BGGwQnpg.js";import"./component-Dmjj1I2f.js";import{d as V,b as A}from"./style-KtjdfyVq.js";import{a as T}from"./style-CHwZntvm.js";const g=e=>{const o=b(),$=u.useCallback(t=>{var l,i;if(e.isNoSpaces){const c=t.replace(/\s+/g,"");(l=e.onChange)==null||l.call(e,c)}else(i=e.onChange)==null||i.call(e,t)},[e]),n=u.useRef(null),s=u.useCallback(t=>{if(n.current){const l=d[e.size].height,i=Math.max(d[e.size].height,t);n.current.style.height=`${l}px`;const c=n.current.scrollHeight;let m=t;e.isAutoHeight&&!e.height?m=Math.max(l,Math.min(c,i)):m=Math.max(l,t),n.current.style.height=`${m}px`,n.current.style.minHeight=`${l}px`,n.current.style.maxHeight=`${i}px`,n.current.scrollHeight>i?n.current.style.overflowY="auto":n.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),h=u.useCallback(()=>{if(e.height)s(e.height);else if(e.maxRows){const t=o.font.sizeDefault.default*o.font.lineHeight,l=e.maxRows?t*e.maxRows:t;s(l+d[e.size].padding*2-8)}else s(d[e.size].height)},[s,e.height,e.maxRows,e.size,o.font.lineHeight,o.font.sizeDefault.default]);return u.useEffect(()=>{h()},[h,e.isAutoHeight,e.value]),r.jsxDEV(r.Fragment,{children:[r.jsxDEV(q,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$sx:e.sx,children:r.jsxDEV(D,{ref:n,$isResize:e.isResize,$error:e.error,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:t=>$(t.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:74,columnNumber:7},void 0),e!=null&&e.error?r.jsxDEV(y,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:111,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:73,columnNumber:5},void 0)};try{g.displayName="TextArea",g.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; tablet?: CSSObject; mobile?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const q=x.div`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  ${T};
`,E=a`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>f(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${e=>f(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
`,w=a`
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
`,z=a`
  ${e=>H(d[e.$size])};
`,H=e=>a`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,S=a`
  opacity: ${e=>e.$isDisabled?.5:1};
`,N=a`
  ${e=>e.$isTextAreaEffect&&a`
      box-shadow: ${e.theme.effects.input};
    `}
`,R=a`
  ${e=>!e.$isResize&&a`
      resize: none;
    `}
`,j=a`
  overflow-x: hidden;
  width: 100% !important;
  border: 1px solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-wrap: auto;

  ${e=>f(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};

  ${R};
  ${z};
  ${w};
  ${E};
  ${S};
  ${N};
  ${V};
  ${A};
  ${v};
`,D=x.textarea`
  ${j};
`;export{g as T};
