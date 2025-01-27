import{n as ee,j as o,d as c,l as s}from"./theme-DVxtux_W.js";import{r as t}from"./index-CnY36iC1.js";import{B as ne}from"./button-r7mH7ie0.js";import{I as O}from"./icon.styles-PYAkx5Iy.js";import"./typography-BeMVh0jT.js";import{g as W}from"./typography.functions-4q7AKkEp.js";import{r as te}from"./base.styles-eUkWGuSr.js";import{v as q}from"./v4-C6aID195.js";import{A as ie,m as oe}from"./proxy-Dmzr5kG1.js";const re=t.createContext(null),A=e=>{var k,I,$,C,M,L;const u=t.useMemo(()=>e.visibleToasts,[e.visibleToasts]),P=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(k=e==null?void 0:e.default)==null?void 0:k.description]),B=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[(I=e==null?void 0:e.default)==null?void 0:I.title]),H=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[($=e==null?void 0:e.default)==null?void 0:$.button]),V=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(C=e==null?void 0:e.default)==null?void 0:C.hidingTime]),U=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(M=e==null?void 0:e.default)==null?void 0:M.hidingMode]),F=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ce},[(L=e==null?void 0:e.default)==null?void 0:L.genre]),z=t.useMemo(()=>e.position.includes("top"),[e.position]),[D,E]=t.useState([]),[G,S]=t.useState(!1),X=t.useCallback(()=>{S(!0)},[]),g=t.useCallback(()=>{S(!1)},[]),m=t.useCallback(n=>{E(r=>{const d=r.find(i=>i.id===n);if(!d)return r;const a=d.index,l=r.filter(i=>i.id!==n).map(i=>({...i,index:i.index>a?i.index-1:i.index}));return l.length===0&&g(),l})},[g]),f=t.useCallback(n=>{const r=n.id??q(),d=n.hidingTime??V;E(a=>{const l=a.findIndex(x=>x.id===r);let i;if(l!==-1)i=[...a],i[l]={...n,id:r,index:a[l].index};else{i=a.map(h=>({...h,index:h.index+1}));const x={...n,id:r,index:0};i.unshift(x)}return i}),d!==void 0&&setTimeout(()=>{m(r)},d)},[V,m]),Y=t.useCallback((n,r,d)=>{const a=q();return f({...r,id:a,isLoading:!0}),n.then(l=>{f({...d(l,void 0),id:a})}).catch(l=>{f({...d(void 0,l),id:a})})},[f]),J=t.useCallback(n=>{m(n)},[m]),K=ee();return o.jsxDEV(re.Provider,{value:{toast:f,promise:Y,remove:m,contentHistory:D},children:[o.jsxDEV(y,{$position:e.position,$gap:e.gap,onMouseEnter:X,onMouseLeave:g,children:o.jsxDEV(ie,{children:D.map(n=>{const r=n.index,d=u?r>u:!1,a=u?r>u-1:!1,l=u?r==u-1:!1,i=n.genre??F,x=K.colors.sonner[i].button.genre,h=n.hidingMode??U,Q="content"in n?n.content:!1,Z="title"in n?n.title:!1,p="description"in n?n.description:!1;return o.jsxDEV(le,{isMoreThanLastViewIndexPlusOne:d,isMoreThanLastViewIndex:a,isLastViewIndex:l,isTop:z,id:n.id,icon:n.icon,isLoading:n.isLoading,index:r,buttonGenre:x,hidingMode:h,isHovered:G,genre:i,content:Q,title:Z||B,description:p||P,button:n.button??H??ue,handleOnClick:J},n.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:183,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:169,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:163,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:162,columnNumber:5},void 0)},ae=e=>o.jsxDEV(oe.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?b:-100:e.isTop?-100:b},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*de,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${R}px`:"initial",marginBottom:e.isTop?"initial":e.isHovered||e.index===0?"0px":`-${R}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-100:b},transition:{type:"spring",duration:se},children:o.jsxDEV(_,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&o.jsxDEV(v,{children:e.isLoading?o.jsxDEV(O,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:259,columnNumber:15},void 0):e.icon&&o.jsxDEV(O,{name:e.icon,type:"curved",size:"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:261,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:257,columnNumber:11},void 0),o.jsxDEV(N,{children:e.content?e.content:o.jsxDEV(o.Fragment,{children:[e.title&&o.jsxDEV(T,{$genre:e.genre,children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:270,columnNumber:31},void 0),e.description&&o.jsxDEV(j,{$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:272,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:269,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:265,columnNumber:9},void 0),e.button&&e.button.content&&o.jsxDEV(w,{children:o.jsxDEV(ne,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:280,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:279,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:252,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context-sonner.tsx",lineNumber:214,columnNumber:5},void 0),le=t.memo(ae);try{A.displayName="ProviderSonner",A.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const y=c.div`
  position: fixed;
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${te}
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
`,_=c.div`
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
  transition:
    background-color ${e=>e.theme.transition.default},
    box-shadow ${e=>e.theme.transition.default},
    border-color ${e=>e.theme.transition.default};
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
`,N=c.div`
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
`,v=c.div`
  display: contents;
`,T=c.div`
  ${W(12,700,"Inter")}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,j=c.div`
  ${W(8,400,"Inter")}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,w=c.div``;try{y.displayName="SonnerLayout",y.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{_.displayName="SonnerElementWrapper",_.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="SonnerContent",N.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="SonnerIcon",v.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SonnerContentTitle",T.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="SonnerContentDescription",j.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="SonnerButtonWrapper",w.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const de=.04,b=100,se=.3,ce="black",R=60,ue={content:"Undo",onClick:()=>{}};export{A as P,re as S};
