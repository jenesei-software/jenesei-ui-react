import{j as S,l as i,d as w}from"./styled-components.browser.esm-028b5a71.js";import{b as O}from"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import{r as v}from"./index-ff614419.js";import{p as C}from"./index-a1ecae5a.js";const k=e=>S.jsx(ee,{checked:e.value,onChange:()=>e.onChange&&e.onChange(!e.value),disabled:e.isDisabled,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError,tabIndex:0});try{k.displayName="Toggle",k.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}var _={},x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function o(){for(var n="",l=0;l<arguments.length;l++){var u=arguments[l];u&&(n=a(n,t(u)))}return n}function t(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return o.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var l="";for(var u in n)r.call(n,u)&&n[u]&&(l=a(l,u));return l}function a(n,l){return l?n?n+" "+l:n+l:n}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(x);var M=x.exports,m={};Object.defineProperty(m,"__esModule",{value:!0});var P=v,y=D(P);function D(e){return e&&e.__esModule?e:{default:e}}m.default=function(){return y.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},y.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))};var b={};Object.defineProperty(b,"__esModule",{value:!0});var N=v,$=F(N);function F(e){return e&&e.__esModule?e:{default:e}}b.default=function(){return $.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},$.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))};var p={};Object.defineProperty(p,"__esModule",{value:!0});p.pointerCoord=B;function B(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var o=r[0];return{x:o.clientX,y:o.clientY}}var t=e.pageX;if(t!==void 0)return{x:t,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(_,"__esModule",{value:!0});var R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},A=function(){function e(r,o){for(var t=0;t<o.length;t++){var a=o[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,o,t){return o&&e(r.prototype,o),t&&e(r,t),r}}(),T=v,s=d(T),q=M,j=d(q),I=C,c=d(I),z=m,V=d(z),X=b,L=d(X),g=p;function d(e){return e&&e.__esModule?e:{default:e}}function G(e,r){var o={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o}function Y(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function U(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:e}function K(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var f=function(e){K(r,e);function r(o){Y(this,r);var t=U(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!!(o.checked||o.defaultChecked),t.state={checked:!!(o.checked||o.defaultChecked),hasFocus:!1},t}return A(r,[{key:"componentDidUpdate",value:function(t){t.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(t){if(!this.props.disabled){var a=this.input;if(t.target!==a&&!this.moved){this.previouslyChecked=a.checked,t.preventDefault(),a.focus(),a.click();return}var n=this.props.hasOwnProperty("checked")?this.props.checked:a.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(t){this.props.disabled||(this.startX=(0,g.pointerCoord)(t).x,this.activated=!0)}},{key:"handleTouchMove",value:function(t){if(this.activated&&(this.moved=!0,this.startX)){var a=(0,g.pointerCoord)(t).x;this.state.checked&&a+15<this.startX?(this.setState({checked:!1}),this.startX=a,this.activated=!0):a-15>this.startX&&(this.setState({checked:!0}),this.startX=a,this.activated=a<this.startX+5)}}},{key:"handleTouchEnd",value:function(t){if(this.moved){var a=this.input;if(t.preventDefault(),this.startX){var n=(0,g.pointerCoord)(t).x;this.previouslyChecked===!0&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,a.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,a.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(t){var a=this.props.onFocus;a&&a(t),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(t){var a=this.props.onBlur;a&&a(t),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(t){var a=this.props.icons;return a?a[t]===void 0?r.defaultProps.icons[t]:a[t]:null}},{key:"render",value:function(){var t=this,a=this.props,n=a.className;a.icons;var l=G(a,["className","icons"]),u=(0,j.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return s.default.createElement("div",{className:u,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",R({},l,{ref:function(E){t.input=E},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),r}(T.PureComponent),W=_.default=f;f.displayName="Toggle";f.defaultProps={icons:{checked:s.default.createElement(V.default,null),unchecked:s.default.createElement(L.default,null)}};f.propTypes={checked:c.default.bool,disabled:c.default.bool,defaultChecked:c.default.bool,onChange:c.default.func,onFocus:c.default.func,onBlur:c.default.func,className:c.default.string,name:c.default.string,value:c.default.string,id:c.default.string,"aria-labelledby":c.default.string,"aria-label":c.default.string,icons:c.default.oneOfType([c.default.bool,c.default.shape({checked:c.default.node,unchecked:c.default.node})])};const Z=i`
  ${e=>H(O[e.$size])};
`,H=e=>i`
  & .react-toggle-track {
    height: ${e.height}px;
    width: ${e.width}px;
  }
  & .react-toggle-thumb {
    top: ${e.padding}px;
    left: ${e.padding}px;
    height: ${e.thumb}px;
    width: ${e.thumb}px;
  }

  &.react-toggle--checked .react-toggle-thumb {
    left: calc(100% - ${e.thumb+e.padding}px);
  }
`,h=i`
  ${e=>e.$isError&&i`
      border-color: ${r=>r.theme.colors.danger} !important;
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${r=>r.theme.colors.danger} !important;
      }
    `}
`,J=i`
  & div {
    transition:
      all ${e=>e.theme.transition},
      outline 0s;
  }
  &.react-toggle {
    outline: 0;
  }
  &.react-toggle--focus {
    & .react-toggle-track {
    }
    & .react-toggle-thumb {
      box-shadow: none !important;
    }
  }
  & .react-toggle-track-check {
    display: none;
  }
  & .react-toggle-track-x {
    display: none;
  }

  &:focus-visible {
    ${e=>i`
      & .react-toggle-track {
        outline: 1px solid ${e.theme.colors.focus};
      }
    `};
  }

  &.react-toggle--checked {
    & .react-toggle-track {
      background: ${e=>e.theme.colors.toggle[e.$genre].track.rest.active};
      border-color: ${e=>e.theme.colors.toggle[e.$genre].border.rest.active};
    }
    & .react-toggle-thumb {
      background: ${e=>e.theme.colors.toggle[e.$genre].thumb.rest.active};
      border-color: transparent;
    }
  }

  &.react-toggle:focus-visible {
    & .react-toggle-track {
    }
    & .react-toggle-thumb {
    }
  }

  & .react-toggle-thumb {
    ${e=>i`
      background: ${e.theme.colors.toggle[e.$genre].thumb.rest.unActive};
      border-color: transparent;
      box-shadow: ${r=>r.theme.effects.toggle.rest} !important;
    `};
  }
  & .react-toggle-track {
    border: 1px solid transparent;
    border-color: ${e=>e.theme.colors.toggle[e.$genre].border.rest.unActive};
    background: ${e=>e.theme.colors.toggle[e.$genre].track.rest.unActive};
    ${h}
  }

  &.react-toggle:hover:not(.react-toggle--disabled) {
    & .react-toggle-thumb {
      ${e=>i`
        background: ${e.theme.colors.toggle[e.$genre].thumb.hover.unActive};
        border-color: transparent;
        box-shadow: ${r=>r.theme.effects.toggle.hover} !important;
      `};
    }
    & .react-toggle-track {
      border-color: ${e=>e.theme.colors.toggle[e.$genre].border.hover.unActive};
      background: ${e=>e.theme.colors.toggle[e.$genre].track.hover.unActive};
      ${h}
    }
    &.react-toggle--checked {
      & .react-toggle-track {
        background: ${e=>e.theme.colors.toggle[e.$genre].track.hover.active};
        border-color: ${e=>e.theme.colors.toggle[e.$genre].border.hover.active};
        ${h}
      }
      & .react-toggle-thumb {
        background: ${e=>e.theme.colors.toggle[e.$genre].thumb.hover.active};
        border-color: transparent;
      }
    }
  }
  &.react-toggle:active:not(.react-toggle--disabled) {
    & .react-toggle-track {
      border-color: ${e=>e.theme.colors.toggle[e.$genre].border.hover.active};
      ${h}
    }
    & .react-toggle-thumb {
      box-shadow: ${e=>e.theme.effects.toggle.active} !important;
    }
  }
`,Q=i`
  ${e=>e.$isDisabled?i`
          opacity: 0.5;
        `:i`
          opacity: 1;
        `}
`,ee=w(W)`
  position: relative;
  width: fit-content;
  ${J};
  ${Q};
  ${Z};
`;export{k as T};
