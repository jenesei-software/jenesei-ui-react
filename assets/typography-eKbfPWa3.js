import{l as i,J as Oe,d as x,j as o}from"./theme-DVxtux_W.js";import{j as Ve}from"./jsx-runtime-uV6E1Fxi.js";import{r as f}from"./index-CnY36iC1.js";import{r as Se,M as Re}from"./index-Dyxk8dpP.js";import{i as Le}from"./tiny-invariant-DKC21gSL.js";import{a as se}from"./add.styles-B_8-z0Fm.js";import{m as Ae}from"./proxy-BgqLTuwE.js";import{a as Ce}from"./context-dialog.constants-Blzdygk7.js";import{A as Pe}from"./index-Blb9MfSb.js";const _=i`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${e=>e.theme.font.lineHeight};

  ${e=>e.$flex&&i`
      flex: ${e.$flex};
    `};
  ${e=>e.$cursor&&i`
      cursor: ${e.$cursor};
    `};
  ${e=>e.$overflow&&i`
     overflow ${e.$overflow};
    `};
  ${e=>e.$clamp&&i`
      display: -webkit-box;
      -webkit-line-clamp: ${e.$clamp};
    `};
  ${e=>e.$clampOrient&&i`
      -webkit-box-orient: ${e.$clampOrient};
    `};
  ${e=>e.$family&&i`
      font-family: ${e.$family};
    `};
  ${e=>e.$size&&i`
      font-size: ${e.$size}px;
    `};
  ${e=>e.$sizeTablet&&i`
      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
        font-size: ${e.$sizeTablet}px;
      }
    `};
  ${e=>e.$sizeMobile&&i`
      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
        font-size: ${e.$sizeMobile}px;
      }
    `};
  ${e=>e.$weight&&i`
      font-weight: ${e.$weight};
    `};
  ${e=>e.$height&&i`
      line-height: ${e.$height}px;
    `};
  ${e=>e.$color&&i`
      color: ${Oe[e.$color]};
    `};
  ${e=>e.$align&&i`
      text-align: ${e.$align};
    `};
  ${e=>e.$wrap&&i`
      text-wrap: ${e.$wrap};
    `};
  ${e=>e.$decoration&&i`
      text-decoration: ${e.$decoration};
    `};
  ${e=>e.$transform&&i`
      text-transform: ${e.$transform};
    `};
  ${e=>e.$isHoverUnderlining&&i`
      &:hover {
        text-decoration: underline;
      }
    `};
`,re=x.span`
  ${_}
`,T=x.a`
  ${_}

  ${e=>e.$variant==="h1"?i`
          font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
          line-height: ${t=>t.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
          }
          ${e.$device&&i`
            font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
          `}
        `:e.$variant==="h2"?i`
            font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
            }
            ${e.$device&&i`
              font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
            `}
          `:e.$variant==="h3"?i`
              font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
              }
              ${e.$device&&i`
                font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
              `}
            `:e.$variant==="h4"?i`
                font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                }
                ${e.$device&&i`
                  font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
                `}
              `:e.$variant==="h5"?i`
                  font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                  }
                  ${e.$device&&i`
                    font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
                  `}
                `:e.$variant==="h6"?i`
                    font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                    }
                    ${e.$device&&i`
                      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
                    `}
                  `:e.$variant==="h7"?i`
                      font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                      }
                      ${e.$device&&i`
                        font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
                      `}
                    `:e.$variant==="h8"?i`
                        font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                        }
                        ${e.$device&&i`
                          font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
                        `}
                      `:e.$variant==="h9"?i`
                          font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                          }
                          ${e.$device&&i`
                            font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
                          `}
                        `:null}
`,O=x.p`
  ${_}

  ${e=>e.$variant==="h1"?i`
          font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
          line-height: ${t=>t.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
          }
          ${e.$device&&i`
            font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
          `}
        `:e.$variant==="h2"?i`
            font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
            }
            ${e.$device&&i`
              font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
            `}
          `:e.$variant==="h3"?i`
              font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
              }
              ${e.$device&&i`
                font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
              `}
            `:e.$variant==="h4"?i`
                font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                }
                ${e.$device&&i`
                  font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
                `}
              `:e.$variant==="h5"?i`
                  font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                  }
                  ${e.$device&&i`
                    font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
                  `}
                `:e.$variant==="h6"?i`
                    font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                    }
                    ${e.$device&&i`
                      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
                    `}
                  `:e.$variant==="h7"?i`
                      font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                      }
                      ${e.$device&&i`
                        font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
                      `}
                    `:e.$variant==="h8"?i`
                        font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                        }
                        ${e.$device&&i`
                          font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
                        `}
                      `:e.$variant==="h9"?i`
                          font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                          }
                          ${e.$device&&i`
                            font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
                          `}
                        `:null}
`,Me=x.h1`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ie=x.h2`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,qe=x.h3`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,pe=x.h4`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ge=x.h5`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ke=x.h6`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ue=x.span`
  font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.mobile}px;
  }
  ${_};
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,We=x.span`
  font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.mobile}px;
  }
  ${_};
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Fe=x.span`
  font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.mobile}px;
  }
  ${_};
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
    `}
`;function Be(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Je="Error preloading route! ☝️";function Xe(e){return typeof e=="function"}function le(e,t){return Xe(e)?e(t):e}function he(e,t){if(e===t)return e;const n=t,a=oe(e)&&oe(n);if(a||M(e)&&M(n)){const l=a?e:Object.keys(e),s=l.length,h=a?n:Object.keys(n),N=h.length,b=a?[]:{};let c=0;for(let g=0;g<N;g++){const d=a?g:h[g];(!a&&l.includes(d)||a)&&e[d]===void 0&&n[d]===void 0?(b[d]=void 0,c++):(b[d]=he(e[d],n[d]),b[d]===e[d]&&e[d]!==void 0&&c++)}return s===N&&c===s?e:b}return n}function M(e){if(!ue(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!ue(n)||!n.hasOwnProperty("isPrototypeOf"))}function ue(e){return Object.prototype.toString.call(e)==="[object Object]"}function oe(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function fe(e,t){let n=Object.keys(e);return t&&(n=n.filter(a=>e[a]!==void 0)),n}function X(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(M(e)&&M(t)){const a=(n==null?void 0:n.ignoreUndefined)??!0,l=fe(e,a),s=fe(t,a);return!(n!=null&&n.partial)&&l.length!==s.length?!1:s.every(h=>X(e[h],t[h],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((a,l)=>!X(a,t[l],n)):!1}function I(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function Ye(e,t,n){return I(e,n)===I(t,n)}var de={exports:{}},ce={},me={exports:{}},$e={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(r,u){return r===u&&(r!==0||1/r===1/u)||r!==r&&u!==u}function t(r,u){g||l.startTransition===void 0||(g=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var v=u();if(!d){var H=u();s(v,H)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),d=!0)}H=h({inst:{value:v,getSnapshot:u}});var w=H[0].inst,k=H[1];return b(function(){w.value=v,w.getSnapshot=u,n(w)&&k({inst:w})},[r,v,u]),N(function(){return n(w)&&k({inst:w}),r(function(){n(w)&&k({inst:w})})},[r]),c(v),v}function n(r){var u=r.getSnapshot;r=r.value;try{var v=u();return!s(r,v)}catch{return!0}}function a(r,u){return u()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var l=f,s=typeof Object.is=="function"?Object.is:e,h=l.useState,N=l.useEffect,b=l.useLayoutEffect,c=l.useDebugValue,g=!1,d=!1,m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?a:t;$e.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:m,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();me.exports=$e;var Qe=me.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(c,g){return c===g&&(c!==0||1/c===1/g)||c!==c&&g!==g}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=f,n=Qe,a=typeof Object.is=="function"?Object.is:e,l=n.useSyncExternalStore,s=t.useRef,h=t.useEffect,N=t.useMemo,b=t.useDebugValue;ce.useSyncExternalStoreWithSelector=function(c,g,d,m,r){var u=s(null);if(u.current===null){var v={hasValue:!1,value:null};u.current=v}else v=u.current;u=N(function(){function w(D){if(!k){if(k=!0,j=D,D=m(D),r!==void 0&&v.hasValue){var E=v.value;if(r(E,D))return z=E}return z=D}if(E=z,a(j,D))return E;var R=m(D);return r!==void 0&&r(E,R)?(j=D,E):(j=D,z=R)}var k=!1,j,z,S=d===void 0?null:d;return[function(){return w(g())},S===null?void 0:function(){return w(S())}]},[g,d,m,r]);var H=l(c,u[0],u[1]);return h(function(){v.hasValue=!0,v.value=H},[H]),b(H),H},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();de.exports=ce;var Ze=de.exports;function et(e,t=n=>n){return Ze.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,tt)}function tt(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[a,l]of e)if(!t.has(a)||!Object.is(l,t.get(a)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const a of e)if(!t.has(a))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Object.is(e[n[a]],t[n[a]]))return!1;return!0}const J=f.createContext(null);function nt(){return typeof document>"u"?J:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=J,J)}function ge(e){const t=f.useContext(nt());return Be(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function Y(e){const t=ge({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,a=f.useRef(void 0);return et(n.__store,l=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const s=he(a.current,e.select(l));return a.current=s,s}return e.select(l)}return l})}const it=f.createContext(void 0),at=f.createContext(void 0);function rt(e){const t=f.useContext(e.from?at:it);return Y({select:a=>{const l=a.matches.find(s=>e.from?e.from===s.routeId:s.id===t);if(Le(!((e.shouldThrow??!0)&&!l),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),l!==void 0)return e.select?e.select(l):l},structuralSharing:e.structuralSharing})}const lt=typeof window<"u"?f.useLayoutEffect:f.useEffect;function ut(e,t,n={},a={}){const l=f.useRef(typeof IntersectionObserver=="function"),s=f.useRef(null);return f.useEffect(()=>{if(!(!e.current||!l.current||a.disabled))return s.current=new IntersectionObserver(([h])=>{t(h)},n),s.current.observe(e.current),()=>{var h;(h=s.current)==null||h.disconnect()}},[t,n,a.disabled,e]),s.current}function ot(e){const t=f.useRef(null);return f.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function ft(e,t){const n=ge(),[a,l]=f.useState(!1),s=f.useRef(!1),h=ot(t),{activeProps:N=()=>({className:"active"}),inactiveProps:b=()=>({}),activeOptions:c,to:g,preload:d,preloadDelay:m,hashScrollIntoView:r,replace:u,startTransition:v,resetScroll:H,viewTransition:w,children:k,target:j,disabled:z,style:S,className:D,onClick:E,onFocus:R,onMouseEnter:p,onMouseLeave:G,onTouchStart:K,ignoreBlocker:xe,...be}=e,{params:gt,search:yt,hash:vt,state:zt,mask:xt,reloadDocument:bt,...Z}=be,ee=f.useMemo(()=>{try{return new URL(`${g}`),"external"}catch{}return"internal"},[g]),we=Y({select:$=>$.location.search,structuralSharing:!0});e={from:rt({strict:!1,select:$=>$.pathname}),...e};const V=f.useMemo(()=>n.buildLocation(e),[n,e,we]),A=f.useMemo(()=>e.reloadDocument?!1:d??n.options.defaultPreload,[n.options.defaultPreload,d,e.reloadDocument]),De=m??n.options.defaultPreloadDelay??0,U=Y({select:$=>{if(c!=null&&c.exact){if(!Ye($.location.pathname,V.pathname,n.basepath))return!1}else{const y=I($.location.pathname,n.basepath).split("/");if(!I(V.pathname,n.basepath).split("/").every((Te,ke)=>Te===y[ke]))return!1}return((c==null?void 0:c.includeSearch)??!0)&&!X($.location.search,V.search,{partial:!(c!=null&&c.exact),ignoreUndefined:!(c!=null&&c.explicitUndefined)})?!1:c!=null&&c.includeHash?$.location.hash===V.hash:!0}}),L=f.useCallback(()=>{n.preloadRoute(e).catch($=>{console.warn($),console.warn(Je)})},[e,n]),Ne=f.useCallback($=>{$!=null&&$.isIntersecting&&L()},[L]);if(ut(h,Ne,{rootMargin:"100px"},{disabled:!!z||A!=="viewport"}),lt(()=>{s.current||!z&&A==="render"&&(L(),s.current=!0)},[z,L,A]),ee==="external")return{...Z,ref:h,type:ee,href:g,...k&&{children:k},...j&&{target:j},...z&&{disabled:z},...S&&{style:S},...D&&{className:D},...E&&{onClick:E},...R&&{onFocus:R},...p&&{onMouseEnter:p},...G&&{onMouseLeave:G},...K&&{onTouchStart:K}};const He=$=>{if(!z&&!ht($)&&!$.defaultPrevented&&(!j||j==="_self")&&$.button===0){$.preventDefault(),Se.flushSync(()=>{l(!0)});const y=n.subscribe("onResolved",()=>{y(),l(!1)});return n.navigate({...e,replace:u,resetScroll:H,hashScrollIntoView:r,startTransition:v,viewTransition:w,ignoreBlocker:xe})}},te=$=>{z||A&&L()},_e=te,je=$=>{if(z)return;const y=$.target||{};if(A){if(y.preloadTimeout)return;y.preloadTimeout=setTimeout(()=>{y.preloadTimeout=null,L()},De)}},Ee=$=>{if(z)return;const y=$.target||{};y.preloadTimeout&&(clearTimeout(y.preloadTimeout),y.preloadTimeout=null)},C=$=>y=>{var B;(B=y.persist)==null||B.call(y),$.filter(Boolean).forEach(ae=>{y.defaultPrevented||ae(y)})},W=U?le(N,{})??{}:{},F=U?{}:le(b,{}),ne=[D,W.className,F.className].filter(Boolean).join(" "),ie={...S,...W.style,...F.style};return{...Z,...W,...F,href:z?void 0:V.maskedLocation?n.history.createHref(V.maskedLocation.href):n.history.createHref(V.href),ref:h,onClick:C([E,He]),onFocus:C([R,te]),onMouseEnter:C([p,je]),onMouseLeave:C([G,Ee]),onTouchStart:C([K,_e]),disabled:!!z,target:j,...Object.keys(ie).length&&{style:ie},...ne&&{className:ne},...z&&{role:"link","aria-disabled":!0},...U&&{"data-status":"active","aria-current":"page"},...a&&{"data-transitioning":"transitioning"}}}function ye(e){return f.forwardRef(function(n,a){return Ve.jsx(st,{...n,_asChild:e,ref:a})})}const st=f.forwardRef((e,t)=>{const{_asChild:n,...a}=e,{type:l,ref:s,...h}=ft(a,t),N=typeof a.children=="function"?a.children({isActive:h["data-status"]==="active"}):a.children;return typeof n>"u"&&delete h.disabled,f.createElement(n||"a",{...h,ref:s},N)});function ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const dt=x.div`
  display: contents;
`,ct=x(Ae.div)`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  width: auto;
  min-width: 0;

  padding: 8px;
  border-radius: 6px;

  background-color: ${e=>e.theme.palette.grayPatricia};
  color: ${e=>e.theme.palette.whiteStandard};

  white-space: ${e=>e.$whiteSpace??"normal"};
  max-width: ${e=>e.$maxWidth??"300px"};
  max-height: ${e=>e.$maxHeight??"200px"};

  opacity: ${e=>e.$visible?"1":"0"};
  ${se};
`;x.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  ${se};
`;const q=f.memo(e=>e.isDisabled?o.jsxDEV(o.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:12,columnNumber:32},void 0):o.jsxDEV(mt,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:14,columnNumber:10},void 0)),mt=e=>{const[t,n]=f.useState(!1),a=f.useMemo(()=>10,[]),l=f.useMemo(()=>a,[a]),s=f.useRef(null),h=f.useRef(null),N=f.useCallback(()=>{n(!0)},[]),b=f.useCallback(g=>{var m,r;const d=g.relatedTarget;(!(d instanceof Node)||!((m=s.current)!=null&&m.contains(d))&&!((r=h.current)!=null&&r.contains(d)))&&n(!1)},[]),c=f.useMemo(()=>{if(!s.current||!h.current&&!t)return{};const g=s.current,d=h.current;if(!g||!d)return{};const m=g.getBoundingClientRect(),r=d.children[0].getBoundingClientRect(),u={};switch(e.placement){case"top":u.left=`${r.left+r.width/2-m.width/2}px`,u.top=`${r.top-m.height-l}px`;break;case"top-start":u.left=`${r.left}px`,u.top=`${r.top-m.height-l}px`;break;case"top-end":u.left=`${r.right-m.width}px`,u.top=`${r.top-m.height-l}px`;break;case"right":u.left=`${r.right+l}px`,u.top=`${r.top+r.height/2-m.height/2}px`;break;case"right-start":u.left=`${r.right+l}px`,u.top=`${r.top}px`;break;case"right-end":u.left=`${r.right+l}px`,u.top=`${r.bottom-m.height}px`;break;case"bottom":u.left=`${r.left+r.width/2-m.width/2}px`,u.top=`${r.bottom+l}px`;break;case"bottom-start":u.left=`${r.left}px`,u.top=`${r.bottom+l}px`;break;case"bottom-end":u.left=`${r.right-m.width}px`,u.top=`${r.bottom+l}px`;break;case"left":u.left=`${r.left-m.width-l}px`,u.top=`${r.top+r.height/2-m.height/2}px`;break;case"left-start":u.left=`${r.left-m.width-l}px`,u.top=`${r.top}px`;break;case"left-end":u.left=`${r.left-m.width-l}px`,u.top=`${r.bottom-m.height}px`;break}return u},[l,e.placement,t]);return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(dt,{ref:h,onMouseEnter:N,onMouseLeave:b,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:224,columnNumber:7},void 0),Re.createPortal(o.jsxDEV(Pe,{children:o.jsxDEV(ct,{ref:s,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,onMouseLeave:b,style:c,transition:{type:"spring",duration:Ce},children:o.jsxDEV($t,{size:e.size??14,children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:241,columnNumber:14},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:230,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:228,columnNumber:9},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:223,columnNumber:5},void 0)};q.displayName="Tooltip";try{q.displayName="Tooltip",q.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const P=f.forwardRef((e,t)=>{const n={$clamp:e.clamp,$clampOrient:e.clampOrient,$color:e.color,$family:e.family,$overflow:e.overflow,$align:e.align,$wrap:e.wrap,$decoration:e.decoration,$transform:e.transform,$weight:e.weight,$height:e.height,$flex:e.flex,$cursor:e.cursor,$isHoverUnderlining:e.isHoverUnderlining,$device:e.device,$size:"size"in e?e.size:void 0,$sizeMobile:"sizeMobile"in e?e.sizeMobile:void 0,$sizeTablet:"sizeTablet"in e?e.sizeTablet:void 0,$variant:"variant"in e?e.variant:void 0,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}};if("variant"in e){if(e.variant==="h1")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:57,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:61,columnNumber:9},void 0):o.jsxDEV(Me,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:65,columnNumber:9},void 0);if(e.variant==="h2")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:71,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:75,columnNumber:9},void 0):o.jsxDEV(Ie,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:79,columnNumber:9},void 0);if(e.variant==="h3")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:85,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:89,columnNumber:9},void 0):o.jsxDEV(qe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:93,columnNumber:9},void 0);if(e.variant==="h4")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:99,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:103,columnNumber:9},void 0):o.jsxDEV(pe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:107,columnNumber:9},void 0);if(e.variant==="h5")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:113,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:117,columnNumber:9},void 0):o.jsxDEV(Ge,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:121,columnNumber:9},void 0);if(e.variant==="h6")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:127,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:131,columnNumber:9},void 0):o.jsxDEV(Ke,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:135,columnNumber:9},void 0);if(e.variant==="h7")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:141,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:145,columnNumber:9},void 0):o.jsxDEV(Ue,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:149,columnNumber:9},void 0);if(e.variant==="h8")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:155,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:159,columnNumber:9},void 0):o.jsxDEV(We,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:163,columnNumber:9},void 0);if(e.variant==="h9")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:169,columnNumber:9},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:173,columnNumber:9},void 0):o.jsxDEV(Fe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:177,columnNumber:9},void 0)}return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:186,columnNumber:7},void 0):"size"in e?o.jsxDEV(re,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:194,columnNumber:7},void 0):o.jsxDEV(re,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:201,columnNumber:5},void 0)}),$t=e=>o.jsxDEV(P,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:208,columnNumber:10},void 0),ve=f.forwardRef((e,t)=>o.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:212,columnNumber:10},void 0)),ze=f.forwardRef((e,t)=>o.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:216,columnNumber:10},void 0));ye(ve);ye(ze);const Q=f.memo(e=>{const[t,n]=f.useState(!1),a=f.useRef(null);return f.useEffect(()=>{const l=()=>{a.current&&n(a.current.scrollWidth>a.current.clientWidth)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[e.children]),o.jsxDEV(q,{isDisabled:!t,content:e.children,...e.tooltip,children:o.jsxDEV(P,{ref:a,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:238,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:237,columnNumber:5},void 0)});Q.displayName="TypographyTooltip";P.displayName="TypographyWithRef";ve.displayName="TypographyVariantIsAnchor";ze.displayName="TypographySizeIsAnchor";try{Q.displayName="TypographyTooltip",Q.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{clamp:{defaultValue:null,description:"",name:"clamp",required:!1,type:{name:"number"}},device:{defaultValue:null,description:"",name:"device",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"mobile"'},{value:'"tablet"'}]}},clampOrient:{defaultValue:null,description:"",name:"clampOrient",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block-axis"'},{value:'"inline-axis"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"Overflow"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'},{value:'"currentColor"'}]}},family:{defaultValue:null,description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}},decoration:{defaultValue:null,description:"",name:"decoration",required:!1,type:{name:"TextDecoration<string | number>"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"none"'},{value:'"full-width"'},{value:'"capitalize"'},{value:'"full-size-kana"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"balance"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"stable"'},{value:'"pretty"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"Cursor"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"100"},{value:"300"},{value:"400"},{value:"500"},{value:"700"},{value:"900"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isHoverUnderlining:{defaultValue:null,description:"",name:"isHoverUnderlining",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},sizeMobile:{defaultValue:null,description:"",name:"sizeMobile",required:!1,type:{name:"number"}},sizeTablet:{defaultValue:null,description:"",name:"sizeTablet",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'}]}}}}}catch{}export{$t as T,q as a};
