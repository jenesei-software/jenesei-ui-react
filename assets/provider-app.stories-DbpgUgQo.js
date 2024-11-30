import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{b as w}from"./typography--gcTkdSy.js";import{g as Z,r as g,R as B}from"./index-DJO9vBfz.js";import{P as v}from"./index-Sqcl8Bte.js";import{P as He}from"./preview.styles-DMp9yFG2.js";import{J as xe}from"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";import{d as P,l as V}from"./styled-components.browser.esm-CCP31c1y.js";import"./index-rCr475hU.js";function Re(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var we=g,ke=Re(we);function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var _e=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ne(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var c=[],o;function s(){o=e(c.map(function(u){return u.props})),d.canUseDOM?t(o):n&&(o=n(o))}var d=function(u){Be(l,u);function l(){return u.apply(this,arguments)||this}l.peek=function(){return o},l.rewind=function(){if(l.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=o;return o=void 0,c=[],A};var h=l.prototype;return h.UNSAFE_componentWillMount=function(){c.push(this),s()},h.componentDidUpdate=function(){s()},h.componentWillUnmount=function(){var A=c.indexOf(this);c.splice(A,1),s()},h.render=function(){return ke.createElement(a,this.props)},l}(we.PureComponent);return se(d,"displayName","SideEffect("+r(a)+")"),se(d,"canUseDOM",_e),d}}var Le=Ne;const De=Z(Le);var Fe=typeof Element<"u",qe=typeof Map=="function",Ue=typeof Set=="function",Ge=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function U(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!U(e[r],t[r]))return!1;return!0}var a;if(qe&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!U(r.value[1],t.get(r.value[0])))return!1;return!0}if(Ue&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Ge&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(Fe&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!U(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var Ve=function(t,n){try{return U(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Ye=Z(Ve);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ce=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;function ze(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function We(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Qe=We()?Object.assign:function(e,t){for(var n,r=ze(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var c in n)Xe.call(n,c)&&(r[c]=n[c]);if(ce){i=ce(n);for(var o=0;o<i.length;o++)Je.call(n,i[o])&&(r[i[o]]=n[i[o]])}}return r};const Ze=Z(Qe);var j={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(e){return f[e]});var T={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},G={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Ke=Object.keys(G).reduce(function(e,t){return e[G[t]]=t,e},{}),et=[f.NOSCRIPT,f.SCRIPT,f.STYLE],C="data-react-helmet",tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},rt=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},it=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ue=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},at=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},J=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ot=function(t){var n=H(t,f.TITLE),r=H(t,_.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=H(t,_.DEFAULT_TITLE);return n||i||void 0},lt=function(t){return H(t,_.ON_CHANGE_CLIENT_STATE)||function(){}},X=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return x({},r,i)},{})},st=function(t,n){return n.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),c=0;c<a.length;c++){var o=a[c],s=o.toLowerCase();if(t.indexOf(s)!==-1&&i[s])return r.concat(i)}return r},[])},R=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&ht("Helmet: "+t+' should be of type "Array". Instead found type "'+tt(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,c){var o={};c.filter(function(h){for(var p=void 0,A=Object.keys(h),$=0;$<A.length;$++){var E=A[$],S=E.toLowerCase();n.indexOf(S)!==-1&&!(p===T.REL&&h[p].toLowerCase()==="canonical")&&!(S===T.REL&&h[S].toLowerCase()==="stylesheet")&&(p=S),n.indexOf(E)!==-1&&(E===T.INNER_HTML||E===T.CSS_TEXT||E===T.ITEM_PROP)&&(p=E)}if(!p||!h[p])return!1;var M=h[p].toLowerCase();return i[p]||(i[p]={}),o[p]||(o[p]={}),i[p][M]?!1:(o[p][M]=!0,!0)}).reverse().forEach(function(h){return a.push(h)});for(var s=Object.keys(o),d=0;d<s.length;d++){var u=s[d],l=Ze({},i[u],o[u]);i[u]=l}return a},[]).reverse()},H=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},ct=function(t){return{baseTag:st([T.HREF,T.TARGET],t),bodyAttributes:X(j.BODY,t),defer:H(t,_.DEFER),encode:H(t,_.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:X(j.HTML,t),linkTags:R(f.LINK,[T.REL,T.HREF],t),metaTags:R(f.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],t),noscriptTags:R(f.NOSCRIPT,[T.INNER_HTML],t),onChangeClientState:lt(t),scriptTags:R(f.SCRIPT,[T.SRC,T.INNER_HTML],t),styleTags:R(f.STYLE,[T.CSS_TEXT],t),title:ot(t),titleAttributes:X(j.TITLE,t)}},z=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){z(t)},0)}}(),de=function(t){return clearTimeout(t)},ut=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||z:global.requestAnimationFrame||z,dt=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||de:global.cancelAnimationFrame||de,ht=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},k=null,ft=function(t){k&&dt(k),t.defer?k=ut(function(){he(t,function(){k=null})}):(he(t),k=null)},he=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,c=t.linkTags,o=t.metaTags,s=t.noscriptTags,d=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,h=t.title,p=t.titleAttributes;W(f.BODY,i),W(f.HTML,a),gt(h,p);var A={baseTag:I(f.BASE,r),linkTags:I(f.LINK,c),metaTags:I(f.META,o),noscriptTags:I(f.NOSCRIPT,s),scriptTags:I(f.SCRIPT,u),styleTags:I(f.STYLE,l)},$={},E={};Object.keys(A).forEach(function(S){var M=A[S],L=M.newTags,Y=M.oldTags;L.length&&($[S]=L),Y.length&&(E[S]=A[S].oldTags)}),n&&n(),d(t,$,E)},$e=function(t){return Array.isArray(t)?t.join(""):t},gt=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=$e(t)),W(f.TITLE,n)},W=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(C),a=i?i.split(","):[],c=[].concat(a),o=Object.keys(n),s=0;s<o.length;s++){var d=o[s],u=n[d]||"";r.getAttribute(d)!==u&&r.setAttribute(d,u),a.indexOf(d)===-1&&a.push(d);var l=c.indexOf(d);l!==-1&&c.splice(l,1)}for(var h=c.length-1;h>=0;h--)r.removeAttribute(c[h]);a.length===c.length?r.removeAttribute(C):r.getAttribute(C)!==o.join(",")&&r.setAttribute(C,o.join(","))}},I=function(t,n){var r=document.head||document.querySelector(f.HEAD),i=r.querySelectorAll(t+"["+C+"]"),a=Array.prototype.slice.call(i),c=[],o=void 0;return n&&n.length&&n.forEach(function(s){var d=document.createElement(t);for(var u in s)if(s.hasOwnProperty(u))if(u===T.INNER_HTML)d.innerHTML=s.innerHTML;else if(u===T.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=s.cssText:d.appendChild(document.createTextNode(s.cssText));else{var l=typeof s[u]>"u"?"":s[u];d.setAttribute(u,l)}d.setAttribute(C,"true"),a.some(function(h,p){return o=p,d.isEqualNode(h)})?a.splice(o,1):c.push(d)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),c.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:c}},Ee=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},mt=function(t,n,r,i){var a=Ee(r),c=$e(n);return a?"<"+t+" "+C+'="true" '+a+">"+J(c,i)+"</"+t+">":"<"+t+" "+C+'="true">'+J(c,i)+"</"+t+">"},pt=function(t,n,r){return n.reduce(function(i,a){var c=Object.keys(a).filter(function(d){return!(d===T.INNER_HTML||d===T.CSS_TEXT)}).reduce(function(d,u){var l=typeof a[u]>"u"?u:u+'="'+J(a[u],r)+'"';return d?d+" "+l:l},""),o=a.innerHTML||a.cssText||"",s=et.indexOf(t)===-1;return i+"<"+t+" "+C+'="true" '+c+(s?"/>":">"+o+"</"+t+">")},"")},Se=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[G[i]||i]=t[i],r},n)},vt=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Ke[i]||i]=t[i],r},n)},Tt=function(t,n,r){var i,a=(i={key:n},i[C]=!0,i),c=Se(r,a);return[B.createElement(f.TITLE,c,n)]},bt=function(t,n){return n.map(function(r,i){var a,c=(a={key:i},a[C]=!0,a);return Object.keys(r).forEach(function(o){var s=G[o]||o;if(s===T.INNER_HTML||s===T.CSS_TEXT){var d=r.innerHTML||r.cssText;c.dangerouslySetInnerHTML={__html:d}}else c[s]=r[o]}),B.createElement(t,c)})},O=function(t,n,r){switch(t){case f.TITLE:return{toComponent:function(){return Tt(t,n.title,n.titleAttributes)},toString:function(){return mt(t,n.title,n.titleAttributes,r)}};case j.BODY:case j.HTML:return{toComponent:function(){return Se(n)},toString:function(){return Ee(n)}};default:return{toComponent:function(){return bt(t,n)},toString:function(){return pt(t,n,r)}}}},Ce=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,c=t.linkTags,o=t.metaTags,s=t.noscriptTags,d=t.scriptTags,u=t.styleTags,l=t.title,h=l===void 0?"":l,p=t.titleAttributes;return{base:O(f.BASE,n,i),bodyAttributes:O(j.BODY,r,i),htmlAttributes:O(j.HTML,a,i),link:O(f.LINK,c,i),meta:O(f.META,o,i),noscript:O(f.NOSCRIPT,s,i),script:O(f.SCRIPT,d,i),style:O(f.STYLE,u,i),title:O(f.TITLE,{title:h,titleAttributes:p},i)}},yt=function(t){var n,r;return r=n=function(i){it(a,i);function a(){return nt(this,a),at(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(o){return!Ye(this.props,o)},a.prototype.mapNestedChildrenToProps=function(o,s){if(!s)return null;switch(o.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:s};case f.STYLE:return{cssText:s}}throw new Error("<"+o.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(o){var s,d=o.child,u=o.arrayTypeChildren,l=o.newChildProps,h=o.nestedChildren;return x({},u,(s={},s[d.type]=[].concat(u[d.type]||[],[x({},l,this.mapNestedChildrenToProps(d,h))]),s))},a.prototype.mapObjectTypeChildren=function(o){var s,d,u=o.child,l=o.newProps,h=o.newChildProps,p=o.nestedChildren;switch(u.type){case f.TITLE:return x({},l,(s={},s[u.type]=p,s.titleAttributes=x({},h),s));case f.BODY:return x({},l,{bodyAttributes:x({},h)});case f.HTML:return x({},l,{htmlAttributes:x({},h)})}return x({},l,(d={},d[u.type]=x({},h),d))},a.prototype.mapArrayTypeChildrenToProps=function(o,s){var d=x({},s);return Object.keys(o).forEach(function(u){var l;d=x({},d,(l={},l[u]=o[u],l))}),d},a.prototype.warnOnInvalidChildren=function(o,s){return!0},a.prototype.mapChildrenToProps=function(o,s){var d=this,u={};return B.Children.forEach(o,function(l){if(!(!l||!l.props)){var h=l.props,p=h.children,A=ue(h,["children"]),$=vt(A);switch(d.warnOnInvalidChildren(l,p),l.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:u=d.flattenArrayTypeChildren({child:l,arrayTypeChildren:u,newChildProps:$,nestedChildren:p});break;default:s=d.mapObjectTypeChildren({child:l,newProps:s,newChildProps:$,nestedChildren:p});break}}}),s=this.mapArrayTypeChildrenToProps(u,s),s},a.prototype.render=function(){var o=this.props,s=o.children,d=ue(o,["children"]),u=x({},d);return s&&(u=this.mapChildrenToProps(s,u)),B.createElement(t,u)},rt(a,null,[{key:"canUseDOM",set:function(o){t.canUseDOM=o}}]),a}(B.Component),n.propTypes={base:v.object,bodyAttributes:v.object,children:v.oneOfType([v.arrayOf(v.node),v.node]),defaultTitle:v.string,defer:v.bool,encodeSpecialCharacters:v.bool,htmlAttributes:v.object,link:v.arrayOf(v.object),meta:v.arrayOf(v.object),noscript:v.arrayOf(v.object),onChangeClientState:v.func,script:v.arrayOf(v.object),style:v.arrayOf(v.object),title:v.string,titleAttributes:v.object,titleTemplate:v.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},At=function(){return null},xt=De(ct,ft,Ce)(At),Q=yt(xt);Q.renderStatic=Q.rewind;const wt=g.createContext(null),N=e=>{var ne,re,ie,ae,oe,le;const{bgColor:t,changeBgColor:n,historyBgColor:r,setDefaultBgColor:i}=Et(e.defaultBgColor),{statusBarColor:a,changeStatusBarColor:c,historyStatusBarColor:o,setDefaultStatusBarColor:s}=St(e.defaultStatusBarColor),{bgImage:d,changeBgImage:u,historyBgImage:l,setDefaultBgImage:h}=Ct(e.defaultBgImage||null),{title:p,changeTitle:A,historyTitle:$,setDefaultTitle:E}=Ot(e.defaultTitle||null),{description:S,changeDescription:M,historyDescription:L,setDefaultDescription:Y}=Pt(e.defaultDescription),{changePreview:je,previewProps:Ie}=$t(e.defaultPreview);return m.jsxs(wt.Provider,{value:{changePreview:je,changeStatusBarColor:c,changeBgColor:n,changeBgImage:u,changeTitle:A,changeDescription:M,historyStatusBarColor:o,historyBgColor:r,historyBgImage:l,historyTitle:$,historyDescription:L,setDefaultStatusBarColor:s,setDefaultBgColor:i,setDefaultBgImage:h,setDefaultTitle:E,setDefaultDescription:Y},children:[m.jsxs(Q,{children:[m.jsx("title",{children:p}),m.jsx("meta",{name:"description",content:S}),m.jsx("meta",{name:"theme-color",content:xe[a]}),m.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),m.jsx("meta",{name:"mobile-web-app-capable",content:"yes"})]}),m.jsxs(He,{...Ie,children:[m.jsx(Mt,{$bgColor:t,$bgImage:d,children:m.jsxs(It,{$isScrollOutlet:e.isScrollOutlet,$footer:e.footer,$notification:e.notification,$header:e.header,$nav:e.nav,$leftAside:e.leftAside,$rightAside:e.rightAside,children:[m.jsx(Rt,{$notification:e.notification,children:((ne=e.notification)==null?void 0:ne.component)||null}),m.jsx(kt,{$header:e.header,children:((re=e.header)==null?void 0:re.component)||null}),m.jsx(_t,{$nav:e.nav,children:((ie=e.nav)==null?void 0:ie.component)||null}),m.jsx(Nt,{$leftAside:e.leftAside,children:((ae=e.leftAside)==null?void 0:ae.component)||null}),m.jsx(Ht,{children:e.children}),m.jsx(Lt,{$rightAside:e.rightAside,children:((oe=e.rightAside)==null?void 0:oe.component)||null}),m.jsx(Bt,{$footer:e.footer,children:((le=e.footer)==null?void 0:le.component)||null})]})})," "]})]})},$t=e=>{const[t,n]=g.useState(e||{isShow:!1}),r=g.useCallback(i=>{n(i)},[]);return g.useEffect(()=>{e&&n(e)},[e]),{previewProps:t,changePreview:r}},Et=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,c]=g.useState(0),o=g.useCallback(u=>{n(u),i(l=>{const h=[...l.slice(0,a+1),u];return c(h.length-1),h})},[a]),s=g.useCallback(u=>{const l=a+u;l>=0&&l<r.length&&(n(r[l]),c(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),c(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{bgColor:t,changeBgColor:o,historyBgColor:s,setDefaultBgColor:d}},St=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,c]=g.useState(0),o=g.useCallback(u=>{n(u),i(l=>{const h=[...l.slice(0,a+1),u];return c(h.length-1),h})},[a]),s=g.useCallback(u=>{const l=a+u;l>=0&&l<r.length&&(n(r[l]),c(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),c(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{statusBarColor:t,changeStatusBarColor:o,historyStatusBarColor:s,setDefaultStatusBarColor:d}},Ct=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,c]=g.useState(0),o=g.useCallback(u=>{n(u),i(l=>{const h=[...l.slice(0,a+1),u];return c(h.length-1),h})},[a]),s=g.useCallback(u=>{const l=a+u;l>=0&&l<r.length&&(n(r[l]),c(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),c(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{bgImage:t,changeBgImage:o,historyBgImage:s,setDefaultBgImage:d}},Ot=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,c]=g.useState(0),o=g.useCallback(u=>{n(u),i(l=>{const h=[...l.slice(0,a+1),u];return c(h.length-1),h})},[a]),s=g.useCallback(u=>{const l=a+u;l>=0&&l<r.length&&(n(r[l]),c(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),c(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{title:t,changeTitle:o,historyTitle:s,setDefaultTitle:d}},Pt=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,c]=g.useState(0),o=g.useCallback(u=>{n(u),i(l=>{const h=[...l.slice(0,a+1),u];return c(h.length-1),h})},[a]),s=g.useCallback(u=>{const l=a+u;l>=0&&l<r.length&&(n(r[l]),c(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),c(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{description:t,changeDescription:o,historyDescription:s,setDefaultDescription:d}};try{N.displayName="ProviderApp",N.__docgenInfo={description:`ProviderApp component is a context provider that manages various application-level states
such as background color, status bar color, background image, title, and description.
It uses several custom hooks to handle these states and provides them via the AppContext.`,displayName:"ProviderApp",props:{defaultPreview:{defaultValue:null,description:"",name:"defaultPreview",required:!1,type:{name:"PreviewAdditionalProps"}},defaultBgColor:{defaultValue:null,description:"",name:"defaultBgColor",required:!0,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green25"'},{value:'"green10"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red25"'},{value:'"red10"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},defaultStatusBarColor:{defaultValue:null,description:"",name:"defaultStatusBarColor",required:!0,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green25"'},{value:'"green10"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red25"'},{value:'"red10"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},defaultBgImage:{defaultValue:null,description:"",name:"defaultBgImage",required:!1,type:{name:"string"}},defaultTitle:{defaultValue:null,description:"",name:"defaultTitle",required:!0,type:{name:"string"}},defaultDescription:{defaultValue:null,description:"",name:"defaultDescription",required:!0,type:{name:"string"}},isScrollOutlet:{defaultValue:null,description:"",name:"isScrollOutlet",required:!1,type:{name:"boolean"}},notification:{defaultValue:null,description:"",name:"notification",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; isFixed?: boolean | undefined; } | undefined"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},nav:{defaultValue:null,description:"",name:"nav",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},leftAside:{defaultValue:null,description:"",name:"leftAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}},rightAside:{defaultValue:null,description:"",name:"rightAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}}}}}catch{}const Mt=P.div`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  background-color: ${e=>xe[e.$bgColor]};
  background-image: url(${e=>e.$bgImage});
`,jt=e=>{var n,r,i,a,c,o,s,d;let t=`
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `;return t=`
      "notification notification notification"
      "${(n=e.$leftAside)!=null&&n.isTopHeader?"leftAside":"header"} header ${(r=e.$rightAside)!=null&&r.isTopHeader?"rightAside":"header"}"
      "${(i=e.$leftAside)!=null&&i.isTopHeader||(a=e.$leftAside)!=null&&a.isTopNav?"leftAside":"nav"} nav ${(c=e.$rightAside)!=null&&c.isTopHeader||(o=e.$rightAside)!=null&&o.isTopNav?"rightAside":"nav"}"
      "leftAside children rightAside"
      "${(s=e.$leftAside)!=null&&s.isTopFooter?"leftAside":"footer"} footer ${(d=e.$rightAside)!=null&&d.isTopFooter?"rightAside":"footer"}"
    `,t},It=P.div`
  display: grid;
  width: 100%;
  height: 100%;

  min-height: 100dvh;
  max-height: none;

  transition:
    grid-template-areas ${e=>e.theme.transition},
    grid-template-rows ${e=>e.theme.transition},
    grid-template-columns ${e=>e.theme.transition};

  ${e=>`
    grid-template-areas: ${jt(e)};
  `}

  ${e=>e.$isScrollOutlet&&V`
      max-height: 100dvh;
    `}

    grid-template-columns: ${e=>`${e.$leftAside?e.$leftAside.width:"0px"} 1fr ${e.$rightAside?e.$rightAside.width:"0px"}`};

  grid-template-rows: ${e=>`${e.$notification?e.$notification.height:"0px"} ${e.$header?e.$header.height:"0px"} ${e.$nav?e.$nav.height:"0px"} 1fr ${e.$footer?e.$footer.height:"0px"}`};

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    grid-template-columns: ${e=>`${e.$leftAside&&e.$leftAside.widthTablet?e.$leftAside.widthTablet:"0px"} 1fr ${e.$rightAside&&e.$rightAside.widthTablet?e.$rightAside.widthTablet:"0px"}`};

    grid-template-rows: ${e=>`${e.$notification&&e.$notification.heightTablet?e.$notification.heightTablet:"0px"} ${e.$header&&e.$header.heightTablet?e.$header.heightTablet:"0px"} ${e.$nav&&e.$nav.heightTablet?e.$nav.heightTablet:"0px"} 1fr ${e.$footer&&e.$footer.heightTablet?e.$footer.heightTablet:"0px"}`};
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    grid-template-columns: ${e=>`${e.$leftAside&&e.$leftAside.widthMobile?e.$leftAside.widthMobile:"0px"} 1fr ${e.$rightAside&&e.$rightAside.widthMobile?e.$rightAside.widthMobile:"0px"}`};

    grid-template-rows: ${e=>`${e.$notification&&e.$notification.heightMobile?e.$notification.heightMobile:"0px"} ${e.$header&&e.$header.heightMobile?e.$header.heightMobile:"0px"} ${e.$nav&&e.$nav.heightMobile?e.$nav.heightMobile:"0px"} 1fr ${e.$footer&&e.$footer.heightMobile?e.$footer.heightMobile:"0px"}`};
  }
`,b=V`
  opacity: 0;
  visibility: hidden;
  transition:
    opacity ${e=>e.theme.transition},
    visibility ${e=>e.theme.transition};
`,y=V`
  opacity: 1;
  visibility: visible;
  transition:
    height ${e=>e.theme.transition},
    opacity ${e=>e.theme.transition},
    visibility ${e=>e.theme.transition};
`,Ht=P.main`
  grid-area: children;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`,Rt=P.section`
  grid-area: notification;
  ${e=>{var t;return((t=e.$notification)==null?void 0:t.isFixed)&&V`
      position: fixed;
      width: 100%;
      height: ${e.$notification.height};
      @media (max-width: ${n=>n.theme.screens.tablet.width}) {
        height: ${e.$notification.heightTablet?e.$notification.heightTablet:"0px"};
      }

      @media (max-width: ${n=>n.theme.screens.mobile.width}) {
        height: ${e.$notification&&e.$notification.heightMobile?e.$notification.heightMobile:"0px"};
      }
    `}}

  ${e=>{var t;return(t=e.$notification)!=null&&t.height?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$notification)!=null&&t.heightTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$notification)!=null&&t.heightMobile?y:b}}
  }
`,kt=P.header`
  grid-area: header;

  ${e=>{var t;return(t=e.$header)!=null&&t.height?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$header)!=null&&t.heightTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$header)!=null&&t.heightMobile?y:b}}
  }
`,Bt=P.footer`
  grid-area: footer;

  ${e=>{var t;return(t=e.$footer)!=null&&t.height?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$footer)!=null&&t.heightTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$footer)!=null&&t.heightMobile?y:b}}
  }
`,_t=P.nav`
  grid-area: nav;

  ${e=>{var t;return(t=e.$nav)!=null&&t.height?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$nav)!=null&&t.heightTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$nav)!=null&&t.heightMobile?y:b}}
  }
`,Nt=P.aside`
  grid-area: leftAside;

  ${e=>{var t;return(t=e.$leftAside)!=null&&t.width?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$leftAside)!=null&&t.widthTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$leftAside)!=null&&t.widthMobile?y:b}}
  }
`,Lt=P.aside`
  grid-area: rightAside;

  ${e=>{var t;return(t=e.$rightAside)!=null&&t.width?y:b}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$rightAside)!=null&&t.widthTablet?y:b}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$rightAside)!=null&&t.widthMobile?y:b}}
  }
`,Wt={component:N,title:"Provider/App"},Dt=m.jsx("div",{style:{backgroundColor:"darkgoldenrod",padding:"2px",height:"100%",width:"100%"},children:m.jsx(w,{variant:"h8",textWrap:"nowrap",children:"Notification"})}),K=m.jsx("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"100%",width:"100%"},children:m.jsx(w,{variant:"h1",textWrap:"nowrap",children:"Header"})}),ee=m.jsx("div",{style:{backgroundColor:"lightcoral",padding:"10px",height:"100%",width:"100%"},children:m.jsx(w,{variant:"h1",children:"Footer"})}),Oe=m.jsx("div",{style:{backgroundColor:"lightgreen",padding:"10px",height:"100%",width:"100%"},children:m.jsx(w,{variant:"h6",children:"Left Aside"})}),Pe=m.jsx("div",{style:{backgroundColor:"lightyellow",padding:"10px",height:"100%",width:"100%"},children:m.jsx(w,{variant:"h6",children:"Right Aside"})}),Me=m.jsx("div",{style:{backgroundColor:"beige",padding:"10px",height:"100%",width:"100%"},children:m.jsx(w,{children:"Nav"})}),te=m.jsxs("div",{style:{backgroundColor:"white",padding:"10px",height:"600px",width:"100%"},children:[m.jsx(w,{variant:"h1",children:"Title H1"}),m.jsx(w,{variant:"h2",children:"Title H2"}),m.jsx(w,{variant:"h3",children:"Title H3"}),m.jsx(w,{variant:"h4",children:"Title H4"}),m.jsx(w,{variant:"h5",children:"Title H5"}),m.jsx(w,{variant:"h6",children:"Title H6"})]}),D={args:{defaultPreview:{time:1e3},defaultBgColor:"black40",isScrollOutlet:!1,defaultTitle:"Storybook?",defaultDescription:"Description from Storybook?",notification:{component:Dt,height:"30px",heightTablet:"20px",heightMobile:"20px",isFixed:!1},header:{component:K,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:Oe,width:"80px",widthTablet:"60px"},nav:{component:Me,height:"80px",heightTablet:"60px",heightMobile:"40px"},rightAside:{component:Pe,width:"80px",widthTablet:"60px"},footer:{component:ee,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:te}},F={render:e=>m.jsx(N,{...e}),args:{defaultBgColor:"black40",isScrollOutlet:!0,header:{component:K,height:"80px",heightTablet:"60px",heightMobile:"40px"},nav:{component:Me,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:Oe,width:"80px",widthTablet:"60px",isTopNav:!0},rightAside:{component:Pe,width:"80px",widthTablet:"60px",isTopFooter:!0,isTopHeader:!0},footer:{component:ee,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:te}},q={render:e=>m.jsx(N,{...e}),args:{defaultBgColor:"black50",isScrollOutlet:!1,header:{component:K,height:"80px",heightTablet:"60px",heightMobile:"40px"},footer:{component:ee,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:te}};var fe,ge,me;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    defaultPreview: {
      time: 1000
    },
    defaultBgColor: 'black40',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      height: '30px',
      heightTablet: '20px',
      heightMobile: '20px',
      isFixed: false
    },
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(me=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var pe,ve,Te;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(Te=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var be,ye,Ae;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(Ae=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};const Qt=["Default","AsideDifferentTop","WithoutAsides"];export{F as AsideDifferentTop,D as Default,q as WithoutAsides,Qt as __namedExportsOrder,Wt as default};
