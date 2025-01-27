import{l as a,J as pe,d as z,j as d}from"./theme-DVxtux_W.js";import{j as Ie}from"./jsx-runtime-uV6E1Fxi.js";import{r as o}from"./index-CnY36iC1.js";import{r as Pe,M as Me}from"./index-Dyxk8dpP.js";import{i as qe}from"./tiny-invariant-DKC21gSL.js";import{m as q,A as $e}from"./proxy-Dmzr5kG1.js";const H=a`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;
  line-height: ${e=>e.theme.font.lineHeight};

  ${e=>e.$flex&&a`
      flex: ${e.$flex};
    `};
  ${e=>e.$cursor&&a`
      cursor: ${e.$cursor};
    `};
  ${e=>e.$overflow&&a`
     overflow ${e.$overflow};
    `};
  ${e=>e.$clamp&&a`
      display: -webkit-box;
      -webkit-line-clamp: ${e.$clamp};
    `};
  ${e=>e.$clampOrient&&a`
      -webkit-box-orient: ${e.$clampOrient};
    `};
  ${e=>e.$family&&a`
      font-family: ${e.$family};
    `};
  ${e=>e.$size&&a`
      font-size: ${e.$size}px;
      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
        font-size: ${e.$sizeTablet}px;
      }
      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
        font-size: ${e.$sizeMobile}px;
      }
    `};
  ${e=>e.$weight&&a`
      font-weight: ${e.$weight};
    `};
  ${e=>e.$height&&a`
      line-height: ${e.$height}px;
    `};
  ${e=>e.$color&&a`
      color: ${pe[e.$color]};
    `};
  ${e=>e.$align&&a`
      text-align: ${e.$align};
    `};
  ${e=>e.$wrap&&a`
      text-wrap: ${e.$wrap};
    `};
  ${e=>e.$decoration&&a`
      text-decoration: ${e.$decoration};
    `};
  ${e=>e.$transform&&a`
      text-transform: ${e.$transform};
    `};
  ${e=>e.$isHoverUnderlining&&a`
      &:hover {
        text-decoration: underline;
      }
    `};
`,se=z.span`
  ${H}
`,T=z.a`
  ${H}

  ${e=>e.$variant==="h1"?a`
          font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
          line-height: ${t=>t.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
          }
          ${e.$device&&a`
            font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
          `}
        `:e.$variant==="h2"?a`
            font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
            }
            ${e.$device&&a`
              font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
            `}
          `:e.$variant==="h3"?a`
              font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
              }
              ${e.$device&&a`
                font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
              `}
            `:e.$variant==="h4"?a`
                font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                }
                ${e.$device&&a`
                  font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
                `}
              `:e.$variant==="h5"?a`
                  font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                  }
                  ${e.$device&&a`
                    font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
                  `}
                `:e.$variant==="h6"?a`
                    font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                    }
                    ${e.$device&&a`
                      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
                    `}
                  `:e.$variant==="h7"?a`
                      font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                      }
                      ${e.$device&&a`
                        font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
                      `}
                    `:e.$variant==="h8"?a`
                        font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                        }
                        ${e.$device&&a`
                          font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
                        `}
                      `:e.$variant==="h9"?a`
                          font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                          }
                          ${e.$device&&a`
                            font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
                          `}
                        `:null}
`,O=z.p`
  ${H}

  ${e=>e.$variant==="h1"?a`
          font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
          line-height: ${t=>t.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
          }
          ${e.$device&&a`
            font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
          `}
        `:e.$variant==="h2"?a`
            font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
            }
            ${e.$device&&a`
              font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
            `}
          `:e.$variant==="h3"?a`
              font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
              }
              ${e.$device&&a`
                font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
              `}
            `:e.$variant==="h4"?a`
                font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                }
                ${e.$device&&a`
                  font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
                `}
              `:e.$variant==="h5"?a`
                  font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                  }
                  ${e.$device&&a`
                    font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
                  `}
                `:e.$variant==="h6"?a`
                    font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                    }
                    ${e.$device&&a`
                      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
                    `}
                  `:e.$variant==="h7"?a`
                      font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                      }
                      ${e.$device&&a`
                        font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
                      `}
                    `:e.$variant==="h8"?a`
                        font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                        }
                        ${e.$device&&a`
                          font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
                        `}
                      `:e.$variant==="h9"?a`
                          font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                          }
                          ${e.$device&&a`
                            font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
                          `}
                        `:null}
`,We=z.h1`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h1*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ge=z.h2`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h2*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ue=z.h3`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h3*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ke=z.h4`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h4*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Fe=z.h5`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h5*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Be=z.h6`
  ${H}
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h6*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Xe=z.span`
  font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault.mobile}px;
  }
  ${H};
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h7*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Je=z.span`
  font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault.mobile}px;
  }
  ${H};
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h8*e.theme.font.sizeDefault[e.$device]}px;
    `}
`,Ye=z.span`
  font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.default}px;
  line-height: ${e=>e.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    font-size: ${e=>e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault.mobile}px;
  }
  ${H};
  ${e=>e.$device&&a`
      font-size: ${e.theme.font.sizeHeading.h9*e.theme.font.sizeDefault[e.$device]}px;
    `}
`;function Qe(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Ze="Error preloading route! ☝️";function et(e){return typeof e=="function"}function fe(e,t){return et(e)?e(t):e}function ye(e,t){if(e===t)return e;const n=t,r=he(e)&&he(n);if(r||I(e)&&I(n)){const u=r?e:Object.keys(e),c=u.length,h=r?n:Object.keys(n),_=h.length,D=r?[]:{};let m=0;for(let g=0;g<_;g++){const s=r?g:h[g];(!r&&u.includes(s)||r)&&e[s]===void 0&&n[s]===void 0?(D[s]=void 0,m++):(D[s]=ye(e[s],n[s]),D[s]===e[s]&&e[s]!==void 0&&m++)}return c===_&&m===c?e:D}return n}function I(e){if(!ce(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!ce(n)||!n.hasOwnProperty("isPrototypeOf"))}function ce(e){return Object.prototype.toString.call(e)==="[object Object]"}function he(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function me(e,t){let n=Object.keys(e);return t&&(n=n.filter(r=>e[r]!==void 0)),n}function Y(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(I(e)&&I(t)){const r=(n==null?void 0:n.ignoreUndefined)??!0,u=me(e,r),c=me(t,r);return!(n!=null&&n.partial)&&u.length!==c.length?!1:c.every(h=>Y(e[h],t[h],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((r,u)=>!Y(r,t[u],n)):!1}function P(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function tt(e,t,n){return P(e,n)===P(t,n)}var ve={exports:{}},ze={},be={exports:{}},we={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(i,l){return i===l&&(i!==0||1/i===1/l)||i!==i&&l!==l}function t(i,l){g||u.startTransition===void 0||(g=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var $=l();if(!s){var x=l();c($,x)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),s=!0)}x=h({inst:{value:$,getSnapshot:l}});var w=x[0].inst,k=x[1];return D(function(){w.value=$,w.getSnapshot=l,n(w)&&k({inst:w})},[i,$,l]),_(function(){return n(w)&&k({inst:w}),i(function(){n(w)&&k({inst:w})})},[i]),m($),$}function n(i){var l=i.getSnapshot;i=i.value;try{var $=l();return!c(i,$)}catch{return!0}}function r(i,l){return l()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var u=o,c=typeof Object.is=="function"?Object.is:e,h=u.useState,_=u.useEffect,D=u.useLayoutEffect,m=u.useDebugValue,g=!1,s=!1,f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r:t;we.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:f,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();be.exports=we;var nt=be.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(m,g){return m===g&&(m!==0||1/m===1/g)||m!==m&&g!==g}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=o,n=nt,r=typeof Object.is=="function"?Object.is:e,u=n.useSyncExternalStore,c=t.useRef,h=t.useEffect,_=t.useMemo,D=t.useDebugValue;ze.useSyncExternalStoreWithSelector=function(m,g,s,f,i){var l=c(null);if(l.current===null){var $={hasValue:!1,value:null};l.current=$}else $=l.current;l=_(function(){function w(N){if(!k){if(k=!0,j=N,N=f(N),i!==void 0&&$.hasValue){var E=$.value;if(i(E,N))return b=E}return b=N}if(E=b,r(j,N))return E;var R=f(N);return i!==void 0&&i(E,R)?(j=N,E):(j=N,b=R)}var k=!1,j,b,S=s===void 0?null:s;return[function(){return w(g())},S===null?void 0:function(){return w(S())}]},[g,s,f,i]);var x=u(m,l[0],l[1]);return h(function(){$.hasValue=!0,$.value=x},[x]),D(x),x},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();ve.exports=ze;var it=ve.exports;function at(e,t=n=>n){return it.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,rt)}function rt(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,u]of e)if(!t.has(r)||!Object.is(u,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}const J=o.createContext(null);function lt(){return typeof document>"u"?J:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=J,J)}function De(e){const t=o.useContext(lt());return Qe(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function Q(e){const t=De({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,r=o.useRef(void 0);return at(n.__store,u=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const c=ye(r.current,e.select(u));return r.current=c,c}return e.select(u)}return u})}const ut=o.createContext(void 0),ot=o.createContext(void 0);function dt(e){const t=o.useContext(e.from?ot:ut);return Q({select:r=>{const u=r.matches.find(c=>e.from?e.from===c.routeId:c.id===t);if(qe(!((e.shouldThrow??!0)&&!u),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),u!==void 0)return e.select?e.select(u):u},structuralSharing:e.structuralSharing})}const st=typeof window<"u"?o.useLayoutEffect:o.useEffect;function ft(e,t,n={},r={}){const u=o.useRef(typeof IntersectionObserver=="function"),c=o.useRef(null);return o.useEffect(()=>{if(!(!e.current||!u.current||r.disabled))return c.current=new IntersectionObserver(([h])=>{t(h)},n),c.current.observe(e.current),()=>{var h;(h=c.current)==null||h.disconnect()}},[t,n,r.disabled,e]),c.current}function ct(e){const t=o.useRef(null);return o.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function ht(e,t){const n=De(),[r,u]=o.useState(!1),c=o.useRef(!1),h=ct(t),{activeProps:_=()=>({className:"active"}),inactiveProps:D=()=>({}),activeOptions:m,to:g,preload:s,preloadDelay:f,hashScrollIntoView:i,replace:l,startTransition:$,resetScroll:x,viewTransition:w,children:k,target:j,disabled:b,style:S,className:N,onClick:E,onFocus:R,onMouseEnter:W,onMouseLeave:G,onTouchStart:U,ignoreBlocker:je,...Ee}=e,{params:Ht,search:jt,hash:Et,state:Tt,mask:kt,reloadDocument:Ot,...ae}=Ee,re=o.useMemo(()=>{try{return new URL(`${g}`),"external"}catch{}return"internal"},[g]),Te=Q({select:y=>y.location.search,structuralSharing:!0});e={from:dt({strict:!1,select:y=>y.pathname}),...e};const V=o.useMemo(()=>n.buildLocation(e),[n,e,Te]),A=o.useMemo(()=>e.reloadDocument?!1:s??n.options.defaultPreload,[n.options.defaultPreload,s,e.reloadDocument]),ke=f??n.options.defaultPreloadDelay??0,K=Q({select:y=>{if(m!=null&&m.exact){if(!tt(y.location.pathname,V.pathname,n.basepath))return!1}else{const v=P(y.location.pathname,n.basepath).split("/");if(!P(V.pathname,n.basepath).split("/").every((Ae,Ce)=>Ae===v[Ce]))return!1}return((m==null?void 0:m.includeSearch)??!0)&&!Y(y.location.search,V.search,{partial:!(m!=null&&m.exact),ignoreUndefined:!(m!=null&&m.explicitUndefined)})?!1:m!=null&&m.includeHash?y.location.hash===V.hash:!0}}),L=o.useCallback(()=>{n.preloadRoute(e).catch(y=>{console.warn(y),console.warn(Ze)})},[e,n]),Oe=o.useCallback(y=>{y!=null&&y.isIntersecting&&L()},[L]);if(ft(h,Oe,{rootMargin:"100px"},{disabled:!!b||A!=="viewport"}),st(()=>{c.current||!b&&A==="render"&&(L(),c.current=!0)},[b,L,A]),re==="external")return{...ae,ref:h,type:re,href:g,...k&&{children:k},...j&&{target:j},...b&&{disabled:b},...S&&{style:S},...N&&{className:N},...E&&{onClick:E},...R&&{onFocus:R},...W&&{onMouseEnter:W},...G&&{onMouseLeave:G},...U&&{onTouchStart:U}};const Ve=y=>{if(!b&&!gt(y)&&!y.defaultPrevented&&(!j||j==="_self")&&y.button===0){y.preventDefault(),Pe.flushSync(()=>{u(!0)});const v=n.subscribe("onResolved",()=>{v(),u(!1)});return n.navigate({...e,replace:l,resetScroll:x,hashScrollIntoView:i,startTransition:$,viewTransition:w,ignoreBlocker:je})}},le=y=>{b||A&&L()},Se=le,Re=y=>{if(b)return;const v=y.target||{};if(A){if(v.preloadTimeout)return;v.preloadTimeout=setTimeout(()=>{v.preloadTimeout=null,L()},ke)}},Le=y=>{if(b)return;const v=y.target||{};v.preloadTimeout&&(clearTimeout(v.preloadTimeout),v.preloadTimeout=null)},C=y=>v=>{var X;(X=v.persist)==null||X.call(v),y.filter(Boolean).forEach(de=>{v.defaultPrevented||de(v)})},F=K?fe(_,{})??{}:{},B=K?{}:fe(D,{}),ue=[N,F.className,B.className].filter(Boolean).join(" "),oe={...S,...F.style,...B.style};return{...ae,...F,...B,href:b?void 0:V.maskedLocation?n.history.createHref(V.maskedLocation.href):n.history.createHref(V.href),ref:h,onClick:C([E,Ve]),onFocus:C([R,le]),onMouseEnter:C([W,Re]),onMouseLeave:C([G,Le]),onTouchStart:C([U,Se]),disabled:!!b,target:j,...Object.keys(oe).length&&{style:oe},...ue&&{className:ue},...b&&{role:"link","aria-disabled":!0},...K&&{"data-status":"active","aria-current":"page"},...r&&{"data-transitioning":"transitioning"}}}function _e(e){return o.forwardRef(function(n,r){return Ie.jsx(mt,{...n,_asChild:e,ref:r})})}const mt=o.forwardRef((e,t)=>{const{_asChild:n,...r}=e,{type:u,ref:c,...h}=ht(r,t),_=typeof r.children=="function"?r.children({isActive:h["data-status"]==="active"}):r.children;return typeof n>"u"&&delete h.disabled,o.createElement(n||"a",{...h,ref:c},_)});function gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const xt=z.div`
  display: contents;
`,$t=z(q.div)`
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
  transition: opacity ${e=>e.theme.transition.default};
`;z.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity ${e=>e.theme.transition.default};
`;const Z=e=>{const t=o.useRef(null);return o.useEffect(()=>{const n=r=>{t.current&&!t.current.contains(r.target)&&e.onOutsideClick()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[e]),d.jsxDEV("div",{style:{display:"contents"},ref:t,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/outside/outside.tsx",lineNumber:23,columnNumber:5},void 0)};try{Z.displayName="Outside",Z.__docgenInfo={description:"",displayName:"Outside",props:{onOutsideClick:{defaultValue:null,description:"",name:"onOutsideClick",required:!0,type:{name:"() => void"}}}}}catch{}const yt=o.createContext(null),ge=e=>{var m,g;const[t,n]=o.useState([]),r=o.useCallback(s=>{n(f=>{const i=f.find(x=>x.id===s);if(!i)return f;const l=i.index;return f.filter(x=>x.id!==s).map(x=>({...x,index:x.index>l?x.index-1:x.index}))})},[]),u=o.useCallback(s=>{const f=s.id;n(i=>{const l=i.findIndex(x=>x.id===f);let $;if(l!==-1)$=[...i],$[l]={...s,id:f,index:i[l].index};else{$=i.map(w=>({...w,index:w.index+1}));const x={...s,id:f,index:0};$.unshift(x)}return $})},[]),c=o.useMemo(()=>t.length,[t.length]),h=o.useMemo(()=>e.zIndex,[e.zIndex]),_=o.useMemo(()=>{var s;return(s=e==null?void 0:e.default)==null?void 0:s.maxHeight},[(m=e==null?void 0:e.default)==null?void 0:m.maxHeight]),D=o.useMemo(()=>{var s;return(s=e==null?void 0:e.default)==null?void 0:s.maxWidth},[(g=e==null?void 0:e.default)==null?void 0:g.maxWidth]);return d.jsxDEV(yt.Provider,{value:{add:u,remove:r,dialogHistory:t},children:[d.jsxDEV($e,{children:c&&d.jsxDEV(ee,{$zIndex:h,initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{type:"spring",duration:ie},children:t.map(s=>{const f=s.index,i=s.content,l=s.id,$=s.maxWidth||D||Dt,x=s.maxHeight||_||wt;return d.jsxDEV(zt,{index:f,content:i,id:l,maxWidth:$,maxHeight:x,remove:()=>r(l)},l,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:102,columnNumber:17},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:82,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:80,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:79,columnNumber:5},void 0)},vt=e=>d.jsxDEV(Z,{onOutsideClick:()=>e.remove(),children:d.jsxDEV(te,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{type:"spring",duration:bt,delay:ie},style:{zIndex:-e.index},$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,children:e.content},e.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:125,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-dialog/context-dialog.tsx",lineNumber:124,columnNumber:5},void 0),zt=o.memo(vt);try{ge.displayName="ProviderDialog",ge.__docgenInfo={description:"",displayName:"ProviderDialog",props:{zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Pick<DialogContentProps, "maxWidth" | "maxHeight">'}}}}}catch{}const ee=z(q.div)`
  position: fixed;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.palette.black50};
  z-index: ${e=>e.$zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,te=z(q.div)`
  max-width: ${e=>e.$maxWidth};
  max-height: ${e=>e.$maxHeight};
  width: 100%;
  height: fit-content;
  background: ${e=>e.theme.palette.whiteStandard};
  border-radius: 12px;
  border-style: solid;
  border-color: ${e=>e.theme.palette.grayKaren};
  border-width: 1px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`,xe=z(q.div)``;try{ee.displayName="DialogLayout",ee.__docgenInfo={description:"",displayName:"DialogLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{te.displayName="DialogElementWrapper",te.__docgenInfo={description:"",displayName:"DialogElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{xe.displayName="DialogContent",xe.__docgenInfo={description:"",displayName:"DialogContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const bt=.3,ie=.4,wt="245px",Dt="300px",M=o.memo(e=>e.isDisabled?d.jsxDEV(d.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:12,columnNumber:32},void 0):d.jsxDEV(_t,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:14,columnNumber:10},void 0)),_t=e=>{const[t,n]=o.useState(!1),r=o.useMemo(()=>10,[]),u=o.useMemo(()=>r,[r]),c=o.useRef(null),h=o.useRef(null),_=o.useCallback(()=>{n(!0)},[]),D=o.useCallback(g=>{var f,i;const s=g.relatedTarget;(!(s instanceof Node)||!((f=c.current)!=null&&f.contains(s))&&!((i=h.current)!=null&&i.contains(s)))&&n(!1)},[]),m=o.useMemo(()=>{if(!c.current||!h.current&&!t)return{};const g=c.current,s=h.current;if(!g||!s)return{};const f=g.getBoundingClientRect(),i=s.children[0].getBoundingClientRect(),l={};switch(e.placement){case"top":l.left=`${i.left+i.width/2-f.width/2}px`,l.top=`${i.top-f.height-u}px`;break;case"top-start":l.left=`${i.left}px`,l.top=`${i.top-f.height-u}px`;break;case"top-end":l.left=`${i.right-f.width}px`,l.top=`${i.top-f.height-u}px`;break;case"right":l.left=`${i.right+u}px`,l.top=`${i.top+i.height/2-f.height/2}px`;break;case"right-start":l.left=`${i.right+u}px`,l.top=`${i.top}px`;break;case"right-end":l.left=`${i.right+u}px`,l.top=`${i.bottom-f.height}px`;break;case"bottom":l.left=`${i.left+i.width/2-f.width/2}px`,l.top=`${i.bottom+u}px`;break;case"bottom-start":l.left=`${i.left}px`,l.top=`${i.bottom+u}px`;break;case"bottom-end":l.left=`${i.right-f.width}px`,l.top=`${i.bottom+u}px`;break;case"left":l.left=`${i.left-f.width-u}px`,l.top=`${i.top+i.height/2-f.height/2}px`;break;case"left-start":l.left=`${i.left-f.width-u}px`,l.top=`${i.top}px`;break;case"left-end":l.left=`${i.left-f.width-u}px`,l.top=`${i.bottom-f.height}px`;break}return l},[u,e.placement,t]);return d.jsxDEV(d.Fragment,{children:[d.jsxDEV(xt,{ref:h,onMouseEnter:_,onMouseLeave:D,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:224,columnNumber:7},void 0),Me.createPortal(d.jsxDEV($e,{children:d.jsxDEV($t,{ref:c,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,onMouseLeave:D,style:m,transition:{type:"spring",duration:ie},children:d.jsxDEV(Nt,{size:e.size??14,children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:241,columnNumber:14},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:230,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:228,columnNumber:9},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/tooltip.tsx",lineNumber:223,columnNumber:5},void 0)};M.displayName="Tooltip";try{M.displayName="Tooltip",M.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const p=o.forwardRef((e,t)=>{const n={$clamp:e.clamp,$clampOrient:e.clampOrient,$color:e.color,$family:e.family,$overflow:e.overflow,$align:e.align,$wrap:e.wrap,$decoration:e.decoration,$transform:e.transform,$weight:e.weight,$height:e.height,$flex:e.flex,$cursor:e.cursor,$isHoverUnderlining:e.isHoverUnderlining,$device:e.device,$size:"size"in e?e.size:void 0,$sizeMobile:"sizeMobile"in e?e.sizeMobile:void 0,$sizeTablet:"sizeTablet"in e?e.sizeTablet:void 0,$variant:"variant"in e?e.variant:void 0,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}};if("variant"in e){if(e.variant==="h1")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:57,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:61,columnNumber:9},void 0):d.jsxDEV(We,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:65,columnNumber:9},void 0);if(e.variant==="h2")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:71,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:75,columnNumber:9},void 0):d.jsxDEV(Ge,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:79,columnNumber:9},void 0);if(e.variant==="h3")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:85,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:89,columnNumber:9},void 0):d.jsxDEV(Ue,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:93,columnNumber:9},void 0);if(e.variant==="h4")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:99,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:103,columnNumber:9},void 0):d.jsxDEV(Ke,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:107,columnNumber:9},void 0);if(e.variant==="h5")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:113,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:117,columnNumber:9},void 0):d.jsxDEV(Fe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:121,columnNumber:9},void 0);if(e.variant==="h6")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:127,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:131,columnNumber:9},void 0):d.jsxDEV(Be,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:135,columnNumber:9},void 0);if(e.variant==="h7")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:141,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:145,columnNumber:9},void 0):d.jsxDEV(Xe,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:149,columnNumber:9},void 0);if(e.variant==="h8")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:155,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:159,columnNumber:9},void 0):d.jsxDEV(Je,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:163,columnNumber:9},void 0);if(e.variant==="h9")return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:169,columnNumber:9},void 0):e.isParagraph?d.jsxDEV(O,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:173,columnNumber:9},void 0):d.jsxDEV(Ye,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:177,columnNumber:9},void 0)}return e.isAnchor?d.jsxDEV(T,{ref:t,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:186,columnNumber:7},void 0):"size"in e?d.jsxDEV(se,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:194,columnNumber:7},void 0):d.jsxDEV(se,{ref:t,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:201,columnNumber:5},void 0)}),Nt=e=>d.jsxDEV(p,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:208,columnNumber:10},void 0),Ne=o.forwardRef((e,t)=>d.jsxDEV(p,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:212,columnNumber:10},void 0)),He=o.forwardRef((e,t)=>d.jsxDEV(p,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:216,columnNumber:10},void 0));_e(Ne);_e(He);const ne=o.memo(e=>{const[t,n]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const u=()=>{r.current&&n(r.current.scrollWidth>r.current.clientWidth)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[e.children]),d.jsxDEV(M,{isDisabled:!t,content:e.children,...e.tooltip,children:d.jsxDEV(p,{ref:r,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:238,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/typography.tsx",lineNumber:237,columnNumber:5},void 0)});ne.displayName="TypographyTooltip";p.displayName="TypographyWithRef";Ne.displayName="TypographyVariantIsAnchor";He.displayName="TypographySizeIsAnchor";try{ne.displayName="TypographyTooltip",ne.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{clamp:{defaultValue:null,description:"",name:"clamp",required:!1,type:{name:"number"}},device:{defaultValue:null,description:"",name:"device",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"mobile"'},{value:'"tablet"'}]}},clampOrient:{defaultValue:null,description:"",name:"clampOrient",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"block-axis"'},{value:'"inline-axis"'}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"Overflow"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"currentColor"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}},family:{defaultValue:null,description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"Inter"'},{value:'"Roboto"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"left"'},{value:'"right"'},{value:'"-webkit-match-parent"'},{value:'"justify"'},{value:'"match-parent"'}]}},decoration:{defaultValue:null,description:"",name:"decoration",required:!1,type:{name:"TextDecoration<string | number>"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"none"'},{value:'"full-width"'},{value:'"capitalize"'},{value:'"full-size-kana"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"balance"'},{value:'"nowrap"'},{value:'"wrap"'},{value:'"stable"'},{value:'"pretty"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"Cursor"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:"100"},{value:"300"},{value:"400"},{value:"500"},{value:"700"},{value:"900"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},isHoverUnderlining:{defaultValue:null,description:"",name:"isHoverUnderlining",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},sizeMobile:{defaultValue:null,description:"",name:"sizeMobile",required:!1,type:{name:"number"}},sizeTablet:{defaultValue:null,description:"",name:"sizeTablet",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"h8"'},{value:'"h9"'}]}}}}}catch{}export{yt as D,ge as P,Nt as T,M as a};
