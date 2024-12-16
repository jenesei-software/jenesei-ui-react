import{j as y}from"./jsx-runtime-CkxqCPlQ.js";import{g as X,r as g,R as B}from"./index-DJO9vBfz.js";import{P as v}from"./index-C1dzxQ9A.js";import{P as ge}from"./preview.styles-BJp74YF1.js";import{J as oe}from"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import{d as x,l as D}from"./styled-components.browser.esm-CCP31c1y.js";function me(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var le=g,ve=me(le);function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var pe=!!(typeof window<"u"&&window.document&&window.document.createElement);function be(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var u=[],o;function s(){o=e(u.map(function(c){return c.props})),d.canUseDOM?t(o):n&&(o=n(o))}var d=function(c){Te(l,c);function l(){return c.apply(this,arguments)||this}l.peek=function(){return o},l.rewind=function(){if(l.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=o;return o=void 0,u=[],A};var f=l.prototype;return f.UNSAFE_componentWillMount=function(){u.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var A=u.indexOf(this);u.splice(A,1),s()},f.render=function(){return ve.createElement(a,this.props)},l}(le.PureComponent);return ee(d,"displayName","SideEffect("+r(a)+")"),ee(d,"canUseDOM",pe),d}}var ye=be;const Ae=X(ye);var $e=typeof Element<"u",we=typeof Map=="function",Ee=typeof Set=="function",Se=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!L(e[r],t[r]))return!1;return!0}var a;if(we&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!L(r.value[1],t.get(r.value[0])))return!1;return!0}if(Ee&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Se&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if($e&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!L(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var Ce=function(t,n){try{return L(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Oe=X(Ce);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var te=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;function Ie(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Me(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Re=Me()?Object.assign:function(e,t){for(var n,r=Ie(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var u in n)xe.call(n,u)&&(r[u]=n[u]);if(te){i=te(n);for(var o=0;o<i.length;o++)Pe.call(n,i[o])&&(r[i[o]]=n[i[o]])}}return r};const je=X(Re);var I={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(h).map(function(e){return h[e]});var T={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},He=Object.keys(N).reduce(function(e,t){return e[N[t]]=t,e},{}),Be=[h.NOSCRIPT,h.SCRIPT,h.STYLE],C="data-react-helmet",_e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Le=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ne=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},De=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},U=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Fe=function(t){var n=R(t,h.TITLE),r=R(t,_.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=R(t,_.DEFAULT_TITLE);return n||i||void 0},qe=function(t){return R(t,_.ON_CHANGE_CLIENT_STATE)||function(){}},q=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return $({},r,i)},{})},Ue=function(t,n){return n.filter(function(r){return typeof r[h.BASE]<"u"}).map(function(r){return r[h.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),u=0;u<a.length;u++){var o=a[u],s=o.toLowerCase();if(t.indexOf(s)!==-1&&i[s])return r.concat(i)}return r},[])},j=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&Xe("Helmet: "+t+' should be of type "Array". Instead found type "'+_e(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,u){var o={};u.filter(function(f){for(var m=void 0,A=Object.keys(f),w=0;w<A.length;w++){var E=A[w],S=E.toLowerCase();n.indexOf(S)!==-1&&!(m===T.REL&&f[m].toLowerCase()==="canonical")&&!(S===T.REL&&f[S].toLowerCase()==="stylesheet")&&(m=S),n.indexOf(E)!==-1&&(E===T.INNER_HTML||E===T.CSS_TEXT||E===T.ITEM_PROP)&&(m=E)}if(!m||!f[m])return!1;var P=f[m].toLowerCase();return i[m]||(i[m]={}),o[m]||(o[m]={}),i[m][P]?!1:(o[m][P]=!0,!0)}).reverse().forEach(function(f){return a.push(f)});for(var s=Object.keys(o),d=0;d<s.length;d++){var c=s[d],l=je({},i[c],o[c]);i[c]=l}return a},[]).reverse()},R=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},Ge=function(t){return{baseTag:Ue([T.HREF,T.TARGET],t),bodyAttributes:q(I.BODY,t),defer:R(t,_.DEFER),encode:R(t,_.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:q(I.HTML,t),linkTags:j(h.LINK,[T.REL,T.HREF],t),metaTags:j(h.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],t),noscriptTags:j(h.NOSCRIPT,[T.INNER_HTML],t),onChangeClientState:qe(t),scriptTags:j(h.SCRIPT,[T.SRC,T.INNER_HTML],t),styleTags:j(h.STYLE,[T.CSS_TEXT],t),title:Fe(t),titleAttributes:q(I.TITLE,t)}},G=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){G(t)},0)}}(),re=function(t){return clearTimeout(t)},Ve=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:global.requestAnimationFrame||G,Ye=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:global.cancelAnimationFrame||re,Xe=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},H=null,Je=function(t){H&&Ye(H),t.defer?H=Ve(function(){ie(t,function(){H=null})}):(ie(t),H=null)},ie=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,u=t.linkTags,o=t.metaTags,s=t.noscriptTags,d=t.onChangeClientState,c=t.scriptTags,l=t.styleTags,f=t.title,m=t.titleAttributes;V(h.BODY,i),V(h.HTML,a),ze(f,m);var A={baseTag:M(h.BASE,r),linkTags:M(h.LINK,u),metaTags:M(h.META,o),noscriptTags:M(h.NOSCRIPT,s),scriptTags:M(h.SCRIPT,c),styleTags:M(h.STYLE,l)},w={},E={};Object.keys(A).forEach(function(S){var P=A[S],k=P.newTags,F=P.oldTags;k.length&&(w[S]=k),F.length&&(E[S]=A[S].oldTags)}),n&&n(),d(t,w,E)},se=function(t){return Array.isArray(t)?t.join(""):t},ze=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=se(t)),V(h.TITLE,n)},V=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(C),a=i?i.split(","):[],u=[].concat(a),o=Object.keys(n),s=0;s<o.length;s++){var d=o[s],c=n[d]||"";r.getAttribute(d)!==c&&r.setAttribute(d,c),a.indexOf(d)===-1&&a.push(d);var l=u.indexOf(d);l!==-1&&u.splice(l,1)}for(var f=u.length-1;f>=0;f--)r.removeAttribute(u[f]);a.length===u.length?r.removeAttribute(C):r.getAttribute(C)!==o.join(",")&&r.setAttribute(C,o.join(","))}},M=function(t,n){var r=document.head||document.querySelector(h.HEAD),i=r.querySelectorAll(t+"["+C+"]"),a=Array.prototype.slice.call(i),u=[],o=void 0;return n&&n.length&&n.forEach(function(s){var d=document.createElement(t);for(var c in s)if(s.hasOwnProperty(c))if(c===T.INNER_HTML)d.innerHTML=s.innerHTML;else if(c===T.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=s.cssText:d.appendChild(document.createTextNode(s.cssText));else{var l=typeof s[c]>"u"?"":s[c];d.setAttribute(c,l)}d.setAttribute(C,"true"),a.some(function(f,m){return o=m,d.isEqualNode(f)})?a.splice(o,1):u.push(d)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),u.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:u}},ue=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},We=function(t,n,r,i){var a=ue(r),u=se(n);return a?"<"+t+" "+C+'="true" '+a+">"+U(u,i)+"</"+t+">":"<"+t+" "+C+'="true">'+U(u,i)+"</"+t+">"},Qe=function(t,n,r){return n.reduce(function(i,a){var u=Object.keys(a).filter(function(d){return!(d===T.INNER_HTML||d===T.CSS_TEXT)}).reduce(function(d,c){var l=typeof a[c]>"u"?c:c+'="'+U(a[c],r)+'"';return d?d+" "+l:l},""),o=a.innerHTML||a.cssText||"",s=Be.indexOf(t)===-1;return i+"<"+t+" "+C+'="true" '+u+(s?"/>":">"+o+"</"+t+">")},"")},ce=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[N[i]||i]=t[i],r},n)},Ze=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[He[i]||i]=t[i],r},n)},Ke=function(t,n,r){var i,a=(i={key:n},i[C]=!0,i),u=ce(r,a);return[B.createElement(h.TITLE,u,n)]},et=function(t,n){return n.map(function(r,i){var a,u=(a={key:i},a[C]=!0,a);return Object.keys(r).forEach(function(o){var s=N[o]||o;if(s===T.INNER_HTML||s===T.CSS_TEXT){var d=r.innerHTML||r.cssText;u.dangerouslySetInnerHTML={__html:d}}else u[s]=r[o]}),B.createElement(t,u)})},O=function(t,n,r){switch(t){case h.TITLE:return{toComponent:function(){return Ke(t,n.title,n.titleAttributes)},toString:function(){return We(t,n.title,n.titleAttributes,r)}};case I.BODY:case I.HTML:return{toComponent:function(){return ce(n)},toString:function(){return ue(n)}};default:return{toComponent:function(){return et(t,n)},toString:function(){return Qe(t,n,r)}}}},de=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,u=t.linkTags,o=t.metaTags,s=t.noscriptTags,d=t.scriptTags,c=t.styleTags,l=t.title,f=l===void 0?"":l,m=t.titleAttributes;return{base:O(h.BASE,n,i),bodyAttributes:O(I.BODY,r,i),htmlAttributes:O(I.HTML,a,i),link:O(h.LINK,u,i),meta:O(h.META,o,i),noscript:O(h.NOSCRIPT,s,i),script:O(h.SCRIPT,d,i),style:O(h.STYLE,c,i),title:O(h.TITLE,{title:f,titleAttributes:m},i)}},tt=function(t){var n,r;return r=n=function(i){Ne(a,i);function a(){return ke(this,a),De(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(o){return!Oe(this.props,o)},a.prototype.mapNestedChildrenToProps=function(o,s){if(!s)return null;switch(o.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:s};case h.STYLE:return{cssText:s}}throw new Error("<"+o.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(o){var s,d=o.child,c=o.arrayTypeChildren,l=o.newChildProps,f=o.nestedChildren;return $({},c,(s={},s[d.type]=[].concat(c[d.type]||[],[$({},l,this.mapNestedChildrenToProps(d,f))]),s))},a.prototype.mapObjectTypeChildren=function(o){var s,d,c=o.child,l=o.newProps,f=o.newChildProps,m=o.nestedChildren;switch(c.type){case h.TITLE:return $({},l,(s={},s[c.type]=m,s.titleAttributes=$({},f),s));case h.BODY:return $({},l,{bodyAttributes:$({},f)});case h.HTML:return $({},l,{htmlAttributes:$({},f)})}return $({},l,(d={},d[c.type]=$({},f),d))},a.prototype.mapArrayTypeChildrenToProps=function(o,s){var d=$({},s);return Object.keys(o).forEach(function(c){var l;d=$({},d,(l={},l[c]=o[c],l))}),d},a.prototype.warnOnInvalidChildren=function(o,s){return!0},a.prototype.mapChildrenToProps=function(o,s){var d=this,c={};return B.Children.forEach(o,function(l){if(!(!l||!l.props)){var f=l.props,m=f.children,A=ne(f,["children"]),w=Ze(A);switch(d.warnOnInvalidChildren(l,m),l.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:c=d.flattenArrayTypeChildren({child:l,arrayTypeChildren:c,newChildProps:w,nestedChildren:m});break;default:s=d.mapObjectTypeChildren({child:l,newProps:s,newChildProps:w,nestedChildren:m});break}}}),s=this.mapArrayTypeChildrenToProps(c,s),s},a.prototype.render=function(){var o=this.props,s=o.children,d=ne(o,["children"]),c=$({},d);return s&&(c=this.mapChildrenToProps(s,c)),B.createElement(t,c)},Le(a,null,[{key:"canUseDOM",set:function(o){t.canUseDOM=o}}]),a}(B.Component),n.propTypes={base:v.object,bodyAttributes:v.object,children:v.oneOfType([v.arrayOf(v.node),v.node]),defaultTitle:v.string,defer:v.bool,encodeSpecialCharacters:v.bool,htmlAttributes:v.object,link:v.arrayOf(v.object),meta:v.arrayOf(v.object),noscript:v.arrayOf(v.object),onChangeClientState:v.func,script:v.arrayOf(v.object),style:v.arrayOf(v.object),title:v.string,titleAttributes:v.object,titleTemplate:v.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},nt=function(){return null},rt=Ae(Ge,Je,de)(nt),Y=tt(rt);Y.renderStatic=Y.rewind;const it=g.createContext(null),ae=e=>{var J,z,W,Q,Z,K;const{bgColor:t,changeBgColor:n,historyBgColor:r,setDefaultBgColor:i}=ot(e.defaultBgColor),{statusBarColor:a,changeStatusBarColor:u,historyStatusBarColor:o,setDefaultStatusBarColor:s}=lt(e.defaultStatusBarColor),{bgImage:d,changeBgImage:c,historyBgImage:l,setDefaultBgImage:f}=st(e.defaultBgImage||null),{title:m,changeTitle:A,historyTitle:w,setDefaultTitle:E}=ut(e.defaultTitle||null),{description:S,changeDescription:P,historyDescription:k,setDefaultDescription:F}=ct(e.defaultDescription),{changePreview:fe,previewProps:he}=at(e.defaultPreview);return y.jsxs(it.Provider,{value:{changePreview:fe,changeStatusBarColor:u,changeBgColor:n,changeBgImage:c,changeTitle:A,changeDescription:P,historyStatusBarColor:o,historyBgColor:r,historyBgImage:l,historyTitle:w,historyDescription:k,setDefaultStatusBarColor:s,setDefaultBgColor:i,setDefaultBgImage:f,setDefaultTitle:E,setDefaultDescription:F},children:[y.jsxs(Y,{children:[y.jsx("title",{children:m}),y.jsx("meta",{name:"description",content:S}),y.jsx("meta",{name:"theme-color",content:oe[a]}),y.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),y.jsx("meta",{name:"mobile-web-app-capable",content:"yes"})]}),y.jsxs(ge,{...he,children:[y.jsx(dt,{$bgColor:t,$bgImage:d,children:y.jsxs(ht,{$isScrollOutlet:e.isScrollOutlet,$footer:e.footer,$notification:e.notification,$header:e.header,$nav:e.nav,$leftAside:e.leftAside,$rightAside:e.rightAside,children:[y.jsx(mt,{$notification:e.notification,children:((J=e.notification)==null?void 0:J.component)||null}),y.jsx(vt,{$header:e.header,children:((z=e.header)==null?void 0:z.component)||null}),y.jsx(pt,{$nav:e.nav,children:((W=e.nav)==null?void 0:W.component)||null}),y.jsx(bt,{$leftAside:e.leftAside,children:((Q=e.leftAside)==null?void 0:Q.component)||null}),y.jsx(gt,{children:e.children}),y.jsx(yt,{$rightAside:e.rightAside,children:((Z=e.rightAside)==null?void 0:Z.component)||null}),y.jsx(Tt,{$footer:e.footer,children:((K=e.footer)==null?void 0:K.component)||null})]})})," "]})]})},at=e=>{const[t,n]=g.useState(e||{isShow:!1}),r=g.useCallback(i=>{n(i)},[]);return g.useEffect(()=>{e&&n(e)},[e]),{previewProps:t,changePreview:r}},ot=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,u]=g.useState(0),o=g.useCallback(c=>{n(c),i(l=>{const f=[...l.slice(0,a+1),c];return u(f.length-1),f})},[a]),s=g.useCallback(c=>{const l=a+c;l>=0&&l<r.length&&(n(r[l]),u(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),u(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{bgColor:t,changeBgColor:o,historyBgColor:s,setDefaultBgColor:d}},lt=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,u]=g.useState(0),o=g.useCallback(c=>{n(c),i(l=>{const f=[...l.slice(0,a+1),c];return u(f.length-1),f})},[a]),s=g.useCallback(c=>{const l=a+c;l>=0&&l<r.length&&(n(r[l]),u(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),u(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{statusBarColor:t,changeStatusBarColor:o,historyStatusBarColor:s,setDefaultStatusBarColor:d}},st=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,u]=g.useState(0),o=g.useCallback(c=>{n(c),i(l=>{const f=[...l.slice(0,a+1),c];return u(f.length-1),f})},[a]),s=g.useCallback(c=>{const l=a+c;l>=0&&l<r.length&&(n(r[l]),u(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),u(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{bgImage:t,changeBgImage:o,historyBgImage:s,setDefaultBgImage:d}},ut=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,u]=g.useState(0),o=g.useCallback(c=>{n(c),i(l=>{const f=[...l.slice(0,a+1),c];return u(f.length-1),f})},[a]),s=g.useCallback(c=>{const l=a+c;l>=0&&l<r.length&&(n(r[l]),u(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),u(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{title:t,changeTitle:o,historyTitle:s,setDefaultTitle:d}},ct=e=>{const[t,n]=g.useState(e),[r,i]=g.useState([e]),[a,u]=g.useState(0),o=g.useCallback(c=>{n(c),i(l=>{const f=[...l.slice(0,a+1),c];return u(f.length-1),f})},[a]),s=g.useCallback(c=>{const l=a+c;l>=0&&l<r.length&&(n(r[l]),u(l))},[r,a]),d=g.useCallback(()=>{n(e),i([e]),u(0)},[e]);return g.useEffect(()=>{n(e)},[e]),{description:t,changeDescription:o,historyDescription:s,setDefaultDescription:d}};try{ae.displayName="ProviderApp",ae.__docgenInfo={description:`ProviderApp component is a context context that manages various application-level states
such as background color, status bar color, background image, title, and description.
It uses several custom hooks to handle these states and provides them via the AppContext.`,displayName:"ProviderApp",props:{defaultPreview:{defaultValue:null,description:"",name:"defaultPreview",required:!1,type:{name:"PreviewAdditionalProps"}},defaultBgColor:{defaultValue:null,description:"",name:"defaultBgColor",required:!0,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},defaultStatusBarColor:{defaultValue:null,description:"",name:"defaultStatusBarColor",required:!0,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},defaultBgImage:{defaultValue:null,description:"",name:"defaultBgImage",required:!1,type:{name:"string"}},defaultTitle:{defaultValue:null,description:"",name:"defaultTitle",required:!0,type:{name:"string"}},defaultDescription:{defaultValue:null,description:"",name:"defaultDescription",required:!0,type:{name:"string"}},isScrollOutlet:{defaultValue:null,description:"",name:"isScrollOutlet",required:!1,type:{name:"boolean"}},notification:{defaultValue:null,description:"",name:"notification",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; isFixed?: boolean | undefined; } | undefined"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},nav:{defaultValue:null,description:"",name:"nav",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},leftAside:{defaultValue:null,description:"",name:"leftAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}},rightAside:{defaultValue:null,description:"",name:"rightAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}}}}}catch{}const dt=x.div`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  background-color: ${e=>oe[e.$bgColor]};
  background-image: url(${e=>e.$bgImage});
`,ft=e=>{var n,r,i,a,u,o,s,d;let t=`
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `;return t=`
      "notification notification notification"
      "${(n=e.$leftAside)!=null&&n.isTopHeader?"leftAside":"header"} header ${(r=e.$rightAside)!=null&&r.isTopHeader?"rightAside":"header"}"
      "${(i=e.$leftAside)!=null&&i.isTopHeader||(a=e.$leftAside)!=null&&a.isTopNav?"leftAside":"nav"} nav ${(u=e.$rightAside)!=null&&u.isTopHeader||(o=e.$rightAside)!=null&&o.isTopNav?"rightAside":"nav"}"
      "leftAside children rightAside"
      "${(s=e.$leftAside)!=null&&s.isTopFooter?"leftAside":"footer"} footer ${(d=e.$rightAside)!=null&&d.isTopFooter?"rightAside":"footer"}"
    `,t},ht=x.div`
  display: grid;
  width: 100%;
  height: 100%;

  min-height: 100dvh;
  max-height: none;

  transition:
    grid-template-areas ${e=>e.theme.transition.default},
    grid-template-rows ${e=>e.theme.transition.default},
    grid-template-columns ${e=>e.theme.transition.default};

  ${e=>`
    grid-template-areas: ${ft(e)};
  `}

  ${e=>e.$isScrollOutlet&&D`
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
`,p=D`
  opacity: 0;
  visibility: hidden;
  transition:
    opacity ${e=>e.theme.transition.default},
    visibility ${e=>e.theme.transition.default};
`,b=D`
  opacity: 1;
  visibility: visible;
  transition:
    height ${e=>e.theme.transition.default},
    opacity ${e=>e.theme.transition.default},
    visibility ${e=>e.theme.transition.default};
`,gt=x.main`
  grid-area: children;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`,mt=x.section`
  grid-area: notification;
  ${e=>{var t;return((t=e.$notification)==null?void 0:t.isFixed)&&D`
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

  ${e=>{var t;return(t=e.$notification)!=null&&t.height?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$notification)!=null&&t.heightTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$notification)!=null&&t.heightMobile?b:p}}
  }
`,vt=x.header`
  grid-area: header;

  ${e=>{var t;return(t=e.$header)!=null&&t.height?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$header)!=null&&t.heightTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$header)!=null&&t.heightMobile?b:p}}
  }
`,Tt=x.footer`
  grid-area: footer;

  ${e=>{var t;return(t=e.$footer)!=null&&t.height?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$footer)!=null&&t.heightTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$footer)!=null&&t.heightMobile?b:p}}
  }
`,pt=x.nav`
  grid-area: nav;

  ${e=>{var t;return(t=e.$nav)!=null&&t.height?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$nav)!=null&&t.heightTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$nav)!=null&&t.heightMobile?b:p}}
  }
`,bt=x.aside`
  grid-area: leftAside;

  ${e=>{var t;return(t=e.$leftAside)!=null&&t.width?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$leftAside)!=null&&t.widthTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$leftAside)!=null&&t.widthMobile?b:p}}
  }
`,yt=x.aside`
  grid-area: rightAside;

  ${e=>{var t;return(t=e.$rightAside)!=null&&t.width?b:p}}

  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    ${e=>{var t;return(t=e.$rightAside)!=null&&t.widthTablet?b:p}}
  }

  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    ${e=>{var t;return(t=e.$rightAside)!=null&&t.widthMobile?b:p}}
  }
`;export{ae as P};
