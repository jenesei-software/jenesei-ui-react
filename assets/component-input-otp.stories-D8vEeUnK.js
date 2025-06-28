import{r as s,j as m,c as S,d as V,K as B,l as w}from"./iframe-NXvRQG3e.js";import{E as _}from"./style-Fk9c2Kpi.js";import{b as P}from"./component.styles-B4aaW5CP.js";import"./component-uNoer6cp.js";import"./index-CpXWg0wM.js";import"./motion-Cx9e5g0b.js";const h=e=>{const[f,v]=s.useState(new Array(e.length).fill("")),o=s.useRef([]),g=s.useRef(null),D=s.useCallback((n,t)=>{t.preventDefault();const a=t.clipboardData.getData("Text").replace(/\D/g,"").split("");a.length&&v(l=>{var p,C;const u=[...l];let c=n;for(let i=0;i<a.length&&c<u.length;i++)u[c]=a[i],c++;const y=u.join("");return(p=e.onChange)==null||p.call(e,y),u.every(i=>i!=="")&&((C=e.onComplete)==null||C.call(e,y)),setTimeout(()=>{var x,b;const i=u.findIndex(z=>z==="");i!==-1?(x=o.current[i])==null||x.focus():c<u.length&&((b=o.current[c])==null||b.focus())},0),u})},[e]),E=s.useCallback((n,t)=>{/^\d*$/.test(t)&&v(r=>{var l;const a=[...r];return a[n]=t.slice(-1),e.onChange&&e.onChange(a.join("")),a.every(u=>u!=="")&&((l=e.onComplete)==null||l.call(e,a.join(""))),t&&n<r.length-1&&setTimeout(()=>{var u;(u=o.current[n+1])==null||u.focus()},0),a})},[e]),N=(n,t)=>{const r=o.current[n];if(r){if(t.key==="ArrowRight"){const a=n<f.length-1?n+1:0,l=o.current[a];l&&(l.focus(),setTimeout(()=>l.setSelectionRange(0,l.value.length),0))}if(t.key==="ArrowLeft"){const a=n>0?n-1:f.length-1,l=o.current[a];l&&(l.focus(),setTimeout(()=>l.setSelectionRange(0,l.value.length),0))}t.key==="Backspace"&&(r.value?setTimeout(()=>r.setSelectionRange(0,r.value.length),0):n>0&&setTimeout(()=>{const a=o.current[n-1];a&&(a.focus(),a.setSelectionRange(0,a.value.length))},0))}},k=s.useCallback(n=>{setTimeout(()=>n.target.setSelectionRange(0,n.target.value.length),0)},[]);return m.jsxDEV(m.Fragment,{children:[m.jsxDEV(q,{$error:e.error,$size:e.size,id:e.id,ref:g,onBlur:n=>{setTimeout(()=>{var t;g.current&&!g.current.contains(document.activeElement)&&((t=e.onBlur)==null||t.call(e,n))},0)},$sx:e.sx,children:f.map((n,t)=>m.jsxDEV(P,{isWidthAsHeight:!0,tabIndex:t+1,ref:r=>{o.current[t]=r},variety:"standard",type:"text",inputMode:"numeric",maxLength:1,value:n,onFocus:k,onPaste:r=>D(t,r),onChange:r=>E(t,r),onKeyDown:r=>N(t,r),genre:e.genre,size:e.size},t,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input-otp/component.tsx",lineNumber:142,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input-otp/component.tsx",lineNumber:127,columnNumber:7},void 0),e!=null&&e.error?m.jsxDEV(_,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input-otp/component.tsx",lineNumber:163,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/input-otp/component.tsx",lineNumber:126,columnNumber:5},void 0)};try{h.displayName="InputOTP",h.__docgenInfo={description:"",displayName:"InputOTP",props:{length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"((otp: string) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}}}}}catch{}const R=w`
  ${e=>O({...B[e.$size],...e})};
`,O=e=>w`
  gap: ${e.padding-2}px;
  width: 100%;
`,q=V.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${R};
  ${S};
`,W={component:h,title:"Component/InputOTP"},$={genre:"blackBorder",size:"largeMedium"},d={args:{...$,length:6,sx:{default:{width:"320px"}},onComplete(e){console.log("onComplete",e)},onBlur(e){console.log("onBlur",e)},onChange(e){console.log("onChange",e)}}};var j,I,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    length: 6,
    sx: {
      default: {
        width: '320px'
      }
    },
    onComplete(otp) {
      console.log('onComplete', otp);
    },
    onBlur(e) {
      console.log('onBlur', e);
    },
    onChange(value) {
      console.log('onChange', value);
    }
  }
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const X=["Default"];export{d as Default,X as __namedExportsOrder,W as default};
