import{n as ne,j as o,d as c,l as s}from"./theme-DVxtux_W.js";import{r as t}from"./index-CnY36iC1.js";import{B as te}from"./button-LVoatZ0h.js";import{I as q}from"./icon.styles-C6s2g-s7.js";import{g as P}from"./typography.functions-CWlWgfdK.js";import"./typography-eKbfPWa3.js";import{d as ie,a as oe}from"./add.styles-B_8-z0Fm.js";import{v as A}from"./v4-C6aID195.js";import{A as re}from"./index-Blb9MfSb.js";import{m as ae}from"./proxy-BgqLTuwE.js";const b=t.createContext(null),R=e=>{var I,$,C,M,L,O;const u=t.useMemo(()=>e.visibleToasts,[e.visibleToasts]),B=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(I=e==null?void 0:e.default)==null?void 0:I.description]),H=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[($=e==null?void 0:e.default)==null?void 0:$.title]),U=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(C=e==null?void 0:e.default)==null?void 0:C.button]),S=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(M=e==null?void 0:e.default)==null?void 0:M.hidingTime]),F=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(L=e==null?void 0:e.default)==null?void 0:L.hidingMode]),z=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ue},[(O=e==null?void 0:e.default)==null?void 0:O.genre]),G=t.useMemo(()=>e.position.includes("top"),[e.position]),[D,E]=t.useState([]),[X,k]=t.useState(!1),Y=t.useCallback(()=>{k(!0)},[]),g=t.useCallback(()=>{k(!1)},[]),m=t.useCallback(n=>{E(r=>{const d=r.find(i=>i.id===n);if(!d)return r;const a=d.index,l=r.filter(i=>i.id!==n).map(i=>({...i,index:i.index>a?i.index-1:i.index}));return l.length===0&&g(),l})},[g]),f=t.useCallback(n=>{const r=n.id??A(),d=n.hidingTime??S;E(a=>{const l=a.findIndex(x=>x.id===r);let i;if(l!==-1)i=[...a],i[l]={...n,id:r,index:a[l].index};else{i=a.map(h=>({...h,index:h.index+1}));const x={...n,id:r,index:0};i.unshift(x)}return i}),d!==void 0&&setTimeout(()=>{m(r)},d)},[S,m]),J=t.useCallback((n,r,d)=>{const a=A();return f({...r,id:a,isLoading:!0}),n.then(l=>{f({...d(l,void 0),id:a})}).catch(l=>{f({...d(void 0,l),id:a})})},[f]),K=t.useCallback(n=>{m(n)},[m]),Q=ne();return o.jsxDEV(b.Provider,{value:{toast:f,promise:J,remove:m,contentHistory:D},children:[o.jsxDEV(_,{$position:e.position,$gap:e.gap,onMouseEnter:Y,onMouseLeave:g,children:o.jsxDEV(re,{children:D.map(n=>{const r=n.index,d=u?r>u:!1,a=u?r>u-1:!1,l=u?r==u-1:!1,i=n.genre??z,x=Q.colors.sonner[i].button.genre,h=n.hidingMode??F,Z="content"in n?n.content:!1,p="title"in n?n.title:!1,ee="description"in n?n.description:!1;return o.jsxDEV(de,{isMoreThanLastViewIndexPlusOne:d,isMoreThanLastViewIndex:a,isLastViewIndex:l,isTop:G,id:n.id,icon:n.icon,isLoading:n.isLoading,index:r,buttonGenre:x,hidingMode:h,isHovered:X,genre:i,content:Z,title:p||H,description:ee||B,button:n.button??U??me,handleOnClick:K},n.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:183,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:169,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:163,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:162,columnNumber:5},void 0)},le=e=>o.jsxDEV(ae.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?y:-100:e.isTop?-100:y},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*se,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${W}px`:"initial",marginBottom:e.isTop?"initial":e.isHovered||e.index===0?"0px":`-${W}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-100:y},transition:{type:"spring",duration:ce},children:o.jsxDEV(N,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&o.jsxDEV(T,{children:e.isLoading?o.jsxDEV(q,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:259,columnNumber:15},void 0):e.icon&&o.jsxDEV(q,{name:e.icon,type:"id",size:"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:261,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:257,columnNumber:11},void 0),o.jsxDEV(v,{children:e.content?e.content:o.jsxDEV(o.Fragment,{children:[e.title&&o.jsxDEV(j,{$genre:e.genre,children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:270,columnNumber:31},void 0),e.description&&o.jsxDEV(w,{$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:272,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:269,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:265,columnNumber:9},void 0),e.button&&e.button.content&&o.jsxDEV(V,{children:o.jsxDEV(te,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:280,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:279,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:252,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:214,columnNumber:5},void 0),de=t.memo(le);try{b.displayName="SonnerContext",b.__docgenInfo={description:"",displayName:"SonnerContext",props:{}}}catch{}try{R.displayName="ProviderSonner",R.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const _=c.div`
  position: fixed;
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${ie}
  ${e=>e.$position==="bottom-center"?s`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?s`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?s`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?s`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?s`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?s`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:s``}
`,N=c.div`
  background: ${e=>e.theme.colors.sonner[e.$genre].wrapper.background};
  color: ${e=>e.theme.colors.sonner[e.$genre].icon.color};
  border-radius: 12px;
  border-style: solid;
  border-color: ${e=>e.theme.colors.sonner[e.$genre].wrapper.borderColor};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex-shrink: 1;
  min-width: 320px;
  min-height: 64px;
  transform-origin: center center;
  box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadow};
  overflow: visible;
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
  ${oe};
`,v=c.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;
  position: relative;
  overflow: hidden;
`,T=c.div`
  display: contents;
`,j=c.div`
  ${P(12,700,"Inter")}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,w=c.div`
  ${P(8,400,"Inter")}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,V=c.div``;try{_.displayName="SonnerLayout",_.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="SonnerElementWrapper",N.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="SonnerContent",v.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SonnerIcon",T.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="SonnerContentTitle",j.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="SonnerContentDescription",w.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="SonnerButtonWrapper",V.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const se=.04,y=100,ce=.3,ue="black",W=60,me={content:"Undo",onClick:()=>{}};export{R as P,b as S};
