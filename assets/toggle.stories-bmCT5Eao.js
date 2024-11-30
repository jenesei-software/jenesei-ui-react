import{j as b}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{p as M}from"./index-Sqcl8Bte.js";import{l as i,d as P}from"./styled-components.browser.esm-CCP31c1y.js";import{a as N}from"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";const v=e=>b.jsx(oe,{checked:e.value,onChange:()=>e.onChange&&e.onChange(!e.value),disabled:e.isDisabled,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$isError:e.isError,tabIndex:0});try{v.displayName="Toggle",v.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}var w={},O={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function a(){for(var n="",c=0;c<arguments.length;c++){var s=arguments[c];s&&(n=o(n,t(s)))}return n}function t(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return a.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var c="";for(var s in n)r.call(n,s)&&n[s]&&(c=o(c,s));return c}function o(n,c){return c?n?n+" "+c:n+c:n}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(O);var F=O.exports,k={};Object.defineProperty(k,"__esModule",{value:!0});var B=d,_=R(B);function R(e){return e&&e.__esModule?e:{default:e}}k.default=function(){return _.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},_.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))};var y={};Object.defineProperty(y,"__esModule",{value:!0});var j=d,x=A(j);function A(e){return e&&e.__esModule?e:{default:e}}y.default=function(){return x.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},x.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.pointerCoord=q;function q(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var a=r[0];return{x:a.clientX,y:a.clientY}}var t=e.pageX;if(t!==void 0)return{x:t,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(w,"__esModule",{value:!0});var z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},I=function(){function e(r,a){for(var t=0;t<a.length;t++){var o=a[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}return function(r,a,t){return a&&e(r.prototype,a),t&&e(r,t),r}}(),C=d,u=h(C),V=F,X=h(V),L=M,l=h(L),G=k,W=h(G),Y=y,U=h(Y),p=$;function h(e){return e&&e.__esModule?e:{default:e}}function K(e,r){var a={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a}function Z(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function H(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:e}function J(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var m=function(e){J(r,e);function r(a){Z(this,r);var t=H(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!!(a.checked||a.defaultChecked),t.state={checked:!!(a.checked||a.defaultChecked),hasFocus:!1},t}return I(r,[{key:"componentDidUpdate",value:function(t){t.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(t){if(!this.props.disabled){var o=this.input;if(t.target!==o&&!this.moved){this.previouslyChecked=o.checked,t.preventDefault(),o.focus(),o.click();return}var n=this.props.hasOwnProperty("checked")?this.props.checked:o.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(t){this.props.disabled||(this.startX=(0,p.pointerCoord)(t).x,this.activated=!0)}},{key:"handleTouchMove",value:function(t){if(this.activated&&(this.moved=!0,this.startX)){var o=(0,p.pointerCoord)(t).x;this.state.checked&&o+15<this.startX?(this.setState({checked:!1}),this.startX=o,this.activated=!0):o-15>this.startX&&(this.setState({checked:!0}),this.startX=o,this.activated=o<this.startX+5)}}},{key:"handleTouchEnd",value:function(t){if(this.moved){var o=this.input;if(t.preventDefault(),this.startX){var n=(0,p.pointerCoord)(t).x;this.previouslyChecked===!0&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,o.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,o.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(t){var o=this.props.onFocus;o&&o(t),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(t){var o=this.props.onBlur;o&&o(t),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(t){var o=this.props.icons;return o?o[t]===void 0?r.defaultProps.icons[t]:o[t]:null}},{key:"render",value:function(){var t=this,o=this.props,n=o.className;o.icons;var c=K(o,["className","icons"]),s=(0,X.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return u.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},u.default.createElement("div",{className:"react-toggle-track"},u.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),u.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),u.default.createElement("div",{className:"react-toggle-thumb"}),u.default.createElement("input",z({},c,{ref:function(D){t.input=D},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),r}(C.PureComponent),Q=w.default=m;m.displayName="Toggle";m.defaultProps={icons:{checked:u.default.createElement(W.default,null),unchecked:u.default.createElement(U.default,null)}};m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])};const ee=i`
  ${e=>te(N[e.$size])};
`,te=e=>i`
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
`,f=i`
  ${e=>e.$isError&&i`
      border-color: ${r=>r.theme.colors.danger} !important;
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${r=>r.theme.colors.danger} !important;
      }
    `}
`,re=i`
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
    ${f}
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
      ${f}
    }
    &.react-toggle--checked {
      & .react-toggle-track {
        background: ${e=>e.theme.colors.toggle[e.$genre].track.hover.active};
        border-color: ${e=>e.theme.colors.toggle[e.$genre].border.hover.active};
        ${f}
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
      ${f}
    }
    & .react-toggle-thumb {
      box-shadow: ${e=>e.theme.effects.toggle.active} !important;
    }
  }
`,ae=i`
  ${e=>e.$isDisabled?i`
          opacity: 0.5;
        `:i`
          opacity: 1;
        `}
`,oe=P(Q)`
  position: relative;
  width: fit-content;
  ${re};
  ${ae};
  ${ee};
`,fe={component:v,title:"Component/Toggle",tags:["autodocs"]},ne=e=>{const[r,a]=d.useState(!1);return d.useEffect(()=>{a(e.value??!1)},[e.value]),b.jsx(v,{...e,value:r,onChange:t=>a(t)})},g={render:e=>b.jsx(ne,{...e}),args:{genre:"product",isDisabled:!1,value:!0,size:"small"}};var T,E,S;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}`,...(S=(E=g.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const ge=["Default"];export{g as Default,ge as __namedExportsOrder,fe as default};
