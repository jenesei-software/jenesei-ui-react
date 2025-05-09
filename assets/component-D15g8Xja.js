import{l as i,d as b,j as o}from"./styled-components.browser.esm-CyaOpMkv.js";import{j as Oe}from"./jsx-runtime-uV6E1Fxi.js";import{r as f}from"./index-CnY36iC1.js";import{r as Se,M as Ve}from"./index-Dyxk8dpP.js";import{i as Re}from"./tiny-invariant-DKC21gSL.js";import{J as Le}from"./theme-yMIRbExU.js";import{a as se}from"./style-pCqVTddV.js";import{m as Ae}from"./proxy-BgqLTuwE.js";import{A as Ce,a as Pe}from"./context.constants-DH1WXOXG.js";const _=i`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${e=>e.theme.font.lineHeight};

  ${e=>e.$letterSpacing&&i`
      letter-spacing: ${e.$letterSpacing};
    `};
  ${e=>e.$flex&&i`
      flex: ${e.$flex};
    `};
  ${e=>e.$cursor&&i`
      cursor: ${e.$cursor};
    `};
  ${e=>e.$overflow&&i`
      overflow: ${e.$overflow};
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
      color: ${Le[e.$color]};
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
`,le=b.span`
  ${_}
`,T=b.a`
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
`,O=b.p`
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
`,Me=b.h1`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ie=b.h2`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,qe=b.h3`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ke=b.h4`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ge=b.h5`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ue=b.h6`
  ${_}
  ${e=>e.$device&&i`
      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,We=b.span`
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
`,Fe=b.span`
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
`,Be=b.span`
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
`;function Je(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Xe="Error preloading route! ☝️";function Ye(e){return typeof e=="function"}function re(e,t){return Ye(e)?e(t):e}function ce(e,t){if(e===t)return e;const n=t,a=oe(e)&&oe(n);if(a||M(e)&&M(n)){const r=a?e:Object.keys(e),s=r.length,c=a?n:Object.keys(n),N=c.length,y=a?[]:{};let h=0;for(let g=0;g<N;g++){const d=a?g:c[g];(!a&&r.includes(d)||a)&&e[d]===void 0&&n[d]===void 0?(y[d]=void 0,h++):(y[d]=ce(e[d],n[d]),y[d]===e[d]&&e[d]!==void 0&&h++)}return s===N&&h===s?e:y}return n}function M(e){if(!ue(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!ue(n)||!n.hasOwnProperty("isPrototypeOf"))}function ue(e){return Object.prototype.toString.call(e)==="[object Object]"}function oe(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function fe(e,t){let n=Object.keys(e);return t&&(n=n.filter(a=>e[a]!==void 0)),n}function Y(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(M(e)&&M(t)){const a=(n==null?void 0:n.ignoreUndefined)??!0,r=fe(e,a),s=fe(t,a);return!(n!=null&&n.partial)&&r.length!==s.length?!1:s.every(c=>Y(e[c],t[c],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((a,r)=>!Y(a,t[r],n)):!1}function I(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function Qe(e,t,n){return I(e,n)===I(t,n)}var de={exports:{}},he={},me={exports:{}},$e={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(l,u){return l===u&&(l!==0||1/l===1/u)||l!==l&&u!==u}function t(l,u){g||r.startTransition===void 0||(g=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var z=u();if(!d){var H=u();s(z,H)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),d=!0)}H=c({inst:{value:z,getSnapshot:u}});var w=H[0].inst,k=H[1];return y(function(){w.value=z,w.getSnapshot=u,n(w)&&k({inst:w})},[l,z,u]),N(function(){return n(w)&&k({inst:w}),l(function(){n(w)&&k({inst:w})})},[l]),h(z),z}function n(l){var u=l.getSnapshot;l=l.value;try{var z=u();return!s(l,z)}catch{return!0}}function a(l,u){return u()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var r=f,s=typeof Object.is=="function"?Object.is:e,c=r.useState,N=r.useEffect,y=r.useLayoutEffect,h=r.useDebugValue,g=!1,d=!1,m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?a:t;$e.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:m,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();me.exports=$e;var Ze=me.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(h,g){return h===g&&(h!==0||1/h===1/g)||h!==h&&g!==g}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=f,n=Ze,a=typeof Object.is=="function"?Object.is:e,r=n.useSyncExternalStore,s=t.useRef,c=t.useEffect,N=t.useMemo,y=t.useDebugValue;he.useSyncExternalStoreWithSelector=function(h,g,d,m,l){var u=s(null);if(u.current===null){var z={hasValue:!1,value:null};u.current=z}else z=u.current;u=N(function(){function w(D){if(!k){if(k=!0,j=D,D=m(D),l!==void 0&&z.hasValue){var E=z.value;if(l(E,D))return x=E}return x=D}if(E=x,a(j,D))return E;var R=m(D);return l!==void 0&&l(E,R)?(j=D,E):(j=D,x=R)}var k=!1,j,x,V=d===void 0?null:d;return[function(){return w(g())},V===null?void 0:function(){return w(V())}]},[g,d,m,l]);var H=r(h,u[0],u[1]);return c(function(){z.hasValue=!0,z.value=H},[H]),y(H),H},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();de.exports=he;var pe=de.exports;function et(e,t=n=>n){return pe.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,tt)}function tt(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[a,r]of e)if(!t.has(a)||!Object.is(r,t.get(a)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const a of e)if(!t.has(a))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Object.is(e[n[a]],t[n[a]]))return!1;return!0}const X=f.createContext(null);function nt(){return typeof document>"u"?X:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=X,X)}function ge(e){const t=f.useContext(nt());return Je(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function Q(e){const t=ge({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,a=f.useRef(void 0);return et(n.__store,r=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const s=ce(a.current,e.select(r));return a.current=s,s}return e.select(r)}return r})}const it=f.createContext(void 0),at=f.createContext(void 0);function lt(e){const t=f.useContext(e.from?at:it);return Q({select:a=>{const r=a.matches.find(s=>e.from?e.from===s.routeId:s.id===t);if(Re(!((e.shouldThrow??!0)&&!r),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),r!==void 0)return e.select?e.select(r):r},structuralSharing:e.structuralSharing})}const rt=typeof window<"u"?f.useLayoutEffect:f.useEffect;function ut(e,t,n={},a={}){const r=f.useRef(typeof IntersectionObserver=="function"),s=f.useRef(null);return f.useEffect(()=>{if(!(!e.current||!r.current||a.disabled))return s.current=new IntersectionObserver(([c])=>{t(c)},n),s.current.observe(e.current),()=>{var c;(c=s.current)==null||c.disconnect()}},[t,n,a.disabled,e]),s.current}function ot(e){const t=f.useRef(null);return f.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function ft(e,t){const n=ge(),[a,r]=f.useState(!1),s=f.useRef(!1),c=ot(t),{activeProps:N=()=>({className:"active"}),inactiveProps:y=()=>({}),activeOptions:h,to:g,preload:d,preloadDelay:m,hashScrollIntoView:l,replace:u,startTransition:z,resetScroll:H,viewTransition:w,children:k,target:j,disabled:x,style:V,className:D,onClick:E,onFocus:R,onMouseEnter:K,onMouseLeave:G,onTouchStart:U,ignoreBlocker:be,...ye}=e,{params:gt,search:vt,hash:zt,state:xt,mask:bt,reloadDocument:yt,...p}=ye,ee=f.useMemo(()=>{try{return new URL(`${g}`),"external"}catch{}return"internal"},[g]),we=Q({select:$=>$.location.search,structuralSharing:!0});e={from:lt({strict:!1,select:$=>$.pathname}),...e};const S=f.useMemo(()=>n.buildLocation(e),[n,e,we]),A=f.useMemo(()=>e.reloadDocument?!1:d??n.options.defaultPreload,[n.options.defaultPreload,d,e.reloadDocument]),De=m??n.options.defaultPreloadDelay??0,W=Q({select:$=>{if(h!=null&&h.exact){if(!Qe($.location.pathname,S.pathname,n.basepath))return!1}else{const v=I($.location.pathname,n.basepath).split("/");if(!I(S.pathname,n.basepath).split("/").every((Te,ke)=>Te===v[ke]))return!1}return((h==null?void 0:h.includeSearch)??!0)&&!Y($.location.search,S.search,{partial:!(h!=null&&h.exact),ignoreUndefined:!(h!=null&&h.explicitUndefined)})?!1:h!=null&&h.includeHash?$.location.hash===S.hash:!0}}),L=f.useCallback(()=>{n.preloadRoute(e).catch($=>{console.warn($),console.warn(Xe)})},[e,n]),Ne=f.useCallback($=>{$!=null&&$.isIntersecting&&L()},[L]);if(ut(c,Ne,{rootMargin:"100px"},{disabled:!!x||A!=="viewport"}),rt(()=>{s.current||!x&&A==="render"&&(L(),s.current=!0)},[x,L,A]),ee==="external")return{...p,ref:c,type:ee,href:g,...k&&{children:k},...j&&{target:j},...x&&{disabled:x},...V&&{style:V},...D&&{className:D},...E&&{onClick:E},...R&&{onFocus:R},...K&&{onMouseEnter:K},...G&&{onMouseLeave:G},...U&&{onTouchStart:U}};const He=$=>{if(!x&&!ct($)&&!$.defaultPrevented&&(!j||j==="_self")&&$.button===0){$.preventDefault(),Se.flushSync(()=>{r(!0)});const v=n.subscribe("onResolved",()=>{v(),r(!1)});return n.navigate({...e,replace:u,resetScroll:H,hashScrollIntoView:l,startTransition:z,viewTransition:w,ignoreBlocker:be})}},te=$=>{x||A&&L()},_e=te,je=$=>{if(x)return;const v=$.target||{};if(A){if(v.preloadTimeout)return;v.preloadTimeout=setTimeout(()=>{v.preloadTimeout=null,L()},De)}},Ee=$=>{if(x)return;const v=$.target||{};v.preloadTimeout&&(clearTimeout(v.preloadTimeout),v.preloadTimeout=null)},C=$=>v=>{var J;(J=v.persist)==null||J.call(v),$.filter(Boolean).forEach(ae=>{v.defaultPrevented||ae(v)})},F=W?re(N,{})??{}:{},B=W?{}:re(y,{}),ne=[D,F.className,B.className].filter(Boolean).join(" "),ie={...V,...F.style,...B.style};return{...p,...F,...B,href:x?void 0:S.maskedLocation?n.history.createHref(S.maskedLocation.href):n.history.createHref(S.href),ref:c,onClick:C([E,He]),onFocus:C([R,te]),onMouseEnter:C([K,je]),onMouseLeave:C([G,Ee]),onTouchStart:C([U,_e]),disabled:!!x,target:j,...Object.keys(ie).length&&{style:ie},...ne&&{className:ne},...x&&{role:"link","aria-disabled":!0},...W&&{"data-status":"active","aria-current":"page"},...a&&{"data-transitioning":"transitioning"}}}function ve(e){return f.forwardRef(function(n,a){return Oe.jsx(st,{...n,_asChild:e,ref:a})})}const st=f.forwardRef((e,t)=>{const{_asChild:n,...a}=e,{type:r,ref:s,...c}=ft(a,t),N=typeof a.children=="function"?a.children({isActive:c["data-status"]==="active"}):a.children;return typeof n>"u"&&delete c.disabled,f.createElement(n||"a",{...c,ref:s},N)});function ct(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const dt=b.div`
  display: contents;
`,ht=b(Ae.div)`
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
`;b.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  ${se};
`;const q=f.memo(e=>e.isDisabled?o.jsxDEV(o.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:12,columnNumber:32},void 0):o.jsxDEV(mt,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:14,columnNumber:10},void 0)),mt=e=>{const[t,n]=f.useState(!1),a=f.useMemo(()=>10,[]),r=f.useMemo(()=>a,[a]),s=f.useRef(null),c=f.useRef(null),N=f.useCallback(()=>{n(!0)},[]),y=f.useCallback(g=>{var m,l;const d=g.relatedTarget;(!(d instanceof Node)||!((m=s.current)!=null&&m.contains(d))&&!((l=c.current)!=null&&l.contains(d)))&&n(!1)},[]),h=f.useMemo(()=>{if(!s.current||!c.current&&!t)return{};const g=s.current,d=c.current;if(!g||!d)return{};const m=g.getBoundingClientRect(),l=d.children[0].getBoundingClientRect(),u={};switch(e.placement){case"top":u.left=`${l.left+l.width/2-m.width/2}px`,u.top=`${l.top-m.height-r}px`;break;case"top-start":u.left=`${l.left}px`,u.top=`${l.top-m.height-r}px`;break;case"top-end":u.left=`${l.right-m.width}px`,u.top=`${l.top-m.height-r}px`;break;case"right":u.left=`${l.right+r}px`,u.top=`${l.top+l.height/2-m.height/2}px`;break;case"right-start":u.left=`${l.right+r}px`,u.top=`${l.top}px`;break;case"right-end":u.left=`${l.right+r}px`,u.top=`${l.bottom-m.height}px`;break;case"bottom":u.left=`${l.left+l.width/2-m.width/2}px`,u.top=`${l.bottom+r}px`;break;case"bottom-start":u.left=`${l.left}px`,u.top=`${l.bottom+r}px`;break;case"bottom-end":u.left=`${l.right-m.width}px`,u.top=`${l.bottom+r}px`;break;case"left":u.left=`${l.left-m.width-r}px`,u.top=`${l.top+l.height/2-m.height/2}px`;break;case"left-start":u.left=`${l.left-m.width-r}px`,u.top=`${l.top}px`;break;case"left-end":u.left=`${l.left-m.width-r}px`,u.top=`${l.bottom-m.height}px`;break}return u},[r,e.placement,t]);return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(dt,{ref:c,onMouseEnter:N,onMouseLeave:y,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:224,columnNumber:7},void 0),Ve.createPortal(o.jsxDEV(Ce,{children:o.jsxDEV(ht,{ref:s,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,onMouseLeave:y,style:h,transition:{type:"spring",duration:Pe},children:o.jsxDEV($t,{size:e.size??14,children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:241,columnNumber:14},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:230,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:228,columnNumber:9},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:223,columnNumber:5},void 0)};q.displayName="Tooltip";try{q.displayName="Tooltip",q.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const P=f.forwardRef((e,t)=>{const n={$clamp:e.clamp,$clampOrient:e.clampOrient,$color:e.color,$family:e.family,$overflow:e.overflow,$align:e.align,$wrap:e.wrap,$decoration:e.decoration,$transform:e.transform,$weight:e.weight,$letterSpacing:e.letterSpacing,$height:e.height,$flex:e.flex,$cursor:e.cursor,$isHoverUnderlining:e.isHoverUnderlining,$device:e.device,$size:"size"in e?e.size:void 0,$sizeMobile:"sizeMobile"in e?e.sizeMobile:void 0,$sizeTablet:"sizeTablet"in e?e.sizeTablet:void 0,$variant:"variant"in e?e.variant:void 0,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}};if("variant"in e){if(e.variant==="h1")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:56,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:60,columnNumber:11},void 0):o.jsxDEV(Me,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:64,columnNumber:11},void 0);if(e.variant==="h2")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:70,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:74,columnNumber:11},void 0):o.jsxDEV(Ie,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:78,columnNumber:11},void 0);if(e.variant==="h3")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:84,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:88,columnNumber:11},void 0):o.jsxDEV(qe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:92,columnNumber:11},void 0);if(e.variant==="h4")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:98,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:102,columnNumber:11},void 0):o.jsxDEV(Ke,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:106,columnNumber:11},void 0);if(e.variant==="h5")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:112,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:116,columnNumber:11},void 0):o.jsxDEV(Ge,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:120,columnNumber:11},void 0);if(e.variant==="h6")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:126,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:130,columnNumber:11},void 0):o.jsxDEV(Ue,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:134,columnNumber:11},void 0);if(e.variant==="h7")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:140,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:144,columnNumber:11},void 0):o.jsxDEV(We,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:148,columnNumber:11},void 0);if(e.variant==="h8")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:154,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:158,columnNumber:11},void 0):o.jsxDEV(Fe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:162,columnNumber:11},void 0);if(e.variant==="h9")return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:168,columnNumber:11},void 0):e.isParagraph?o.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:172,columnNumber:11},void 0):o.jsxDEV(Be,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:176,columnNumber:11},void 0)}return e.isAnchor?o.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:185,columnNumber:9},void 0):"size"in e?o.jsxDEV(le,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:193,columnNumber:9},void 0):o.jsxDEV(le,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:200,columnNumber:7},void 0)}),$t=e=>o.jsxDEV(P,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:208,columnNumber:10},void 0),ze=f.forwardRef((e,t)=>o.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:212,columnNumber:10},void 0)),xe=f.forwardRef((e,t)=>o.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:216,columnNumber:10},void 0));ve(ze);ve(xe);const Z=f.memo(e=>{const[t,n]=f.useState(!1),a=f.useRef(null);return f.useEffect(()=>{const r=()=>{a.current&&n(a.current.scrollWidth>a.current.clientWidth)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e.children]),o.jsxDEV(q,{isDisabled:!t,content:e.children,...e.tooltip,children:o.jsxDEV(P,{ref:a,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:238,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:237,columnNumber:5},void 0)});Z.displayName="TypographyTooltip";P.displayName="TypographyWithRef";ze.displayName="TypographyVariantIsAnchor";xe.displayName="TypographySizeIsAnchor";try{Z.displayName="TypographyTooltip",Z.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{clamp:{defaultValue:null,description:"",name:"clamp",required:!1,type:{name:"number"}},device:{defaultValue:null,description:"",name:"device",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"mobile"'},{value:'"tablet"'}]}},clampOrient:{defaultValue:null,description:"",name:"clampOrient",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block-axis"'},{value:'"inline-axis"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"Overflow"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"blackHelena"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"grayAdriana"'},{value:'"greenGoogle"'},{value:'"grayBarbara"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"whiteJanice"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"blueKaren"'},{value:'"blueMonica"'},{value:'"amnezia"'},{value:'"currentColor"'}]}},family:{defaultValue:null,description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'},{value:'"Work Sans"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}},decoration:{defaultValue:null,description:"",name:"decoration",required:!1,type:{name:"TextDecoration<string | number>"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"none"'},{value:'"full-width"'},{value:'"capitalize"'},{value:'"full-size-kana"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"initial"'},{value:'"inherit"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"balance"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"stable"'},{value:'"pretty"'}]}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"Cursor"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"100"},{value:"300"},{value:"400"},{value:"500"},{value:"700"},{value:"900"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isHoverUnderlining:{defaultValue:null,description:"",name:"isHoverUnderlining",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},sizeMobile:{defaultValue:null,description:"",name:"sizeMobile",required:!1,type:{name:"number"}},sizeTablet:{defaultValue:null,description:"",name:"sizeTablet",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'}]}}}}}catch{}export{$t as T,q as a};
