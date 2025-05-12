import styled, { css } from 'styled-components'

import { JeneseiPalette } from '@local/theme/theme'

import { TypographyAllProps, TypographyCSSProps, styledAddSXTypographyProps } from '.'

function toStyledCSS(value: TypographyAllProps) {
  return css`
    ${value.letterSpacing &&
    css`
      letter-spacing: ${value.letterSpacing};
    `};
    ${value.flex &&
    css`
      flex: ${value.flex};
    `};
    ${value.cursor &&
    css`
      cursor: ${value.cursor};
    `};
    ${value.overflow &&
    css`
      overflow: ${value.overflow};
    `};
    ${value.clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${value.clamp};
    `};
    ${value.clampOrient &&
    css`
      -webkit-box-orient: ${value.clampOrient};
    `};
    ${value.family &&
    css`
      font-family: ${value.family};
    `};
    ${'size' in value &&
    value.size &&
    css`
      font-size: ${value.size}px;
    `};
    ${value.weight &&
    css`
      font-weight: ${value.weight};
    `};
    ${value.height &&
    css`
      line-height: ${value.height}px;
    `};
    ${value.color &&
    css`
      color: ${JeneseiPalette[value.color]};
    `};
    ${value.align &&
    css`
      text-align: ${value.align};
    `};
    ${value.wrap &&
    css`
      text-wrap: ${value.wrap};
    `};
    ${value.decoration &&
    css`
      text-decoration: ${value.decoration};
    `};
    ${value.transform &&
    css`
      text-transform: ${value.transform};
    `};
    ${value.isHoverUnderlining &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `};
  `
}
export const addSX = css<styledAddSXTypographyProps>`
  ${props => {
    const rawSX = props.$sx
    if (!rawSX) return null
    return toStyledCSS(rawSX.default)
  }}

  ${props => {
    const rawSX = props.$sx
    if (!rawSX) return null

    return Object.entries(rawSX)
      .filter(([key]) => key !== 'default')
      .map(([deviceKey, value]) => {
        const screenWidth = props.theme.screens[deviceKey as keyof typeof props.theme.screens]?.width
        if (!screenWidth) return null
        return css`
          @media (max-width: ${screenWidth}) {
            ${toStyledCSS(value)}
          }
        `
      })
  }}
`

const TypographyCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${props => props.theme.font.lineHeight};
`

export const TitleFont = styled.span<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleAnchor = styled.a<TypographyCSSProps>`
  ${TypographyCSS}

  ${props =>
    props.$variant === 'h1'
      ? css`
          font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.default}px;
          line-height: ${props => props.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${props => props.theme.screens.tablet.width}) {
            font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${props => props.theme.screens.mobile.width}) {
            font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.mobile}px;
          }
          ${props.$device &&
          css`
            font-size: ${props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault[props.$device]}px;
          `}
        `
      : props.$variant === 'h2'
        ? css`
            font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.default}px;
            line-height: ${props => props.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${props => props.theme.screens.tablet.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${props => props.theme.screens.mobile.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.mobile}px;
            }
            ${props.$device &&
            css`
              font-size: ${props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault[props.$device]}px;
            `}
          `
        : props.$variant === 'h3'
          ? css`
              font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.default}px;
              line-height: ${props => props.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${props => props.theme.screens.tablet.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${props => props.theme.screens.mobile.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.mobile}px;
              }
              ${props.$device &&
              css`
                font-size: ${props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault[props.$device]}px;
              `}
            `
          : props.$variant === 'h4'
            ? css`
                font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.default}px;
                line-height: ${props => props.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${props => props.theme.screens.tablet.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${props => props.theme.screens.mobile.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.mobile}px;
                }
                ${props.$device &&
                css`
                  font-size: ${props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault[props.$device]}px;
                `}
              `
            : props.$variant === 'h5'
              ? css`
                  font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.default}px;
                  line-height: ${props => props.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${props => props.theme.screens.tablet.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${props => props.theme.screens.mobile.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.mobile}px;
                  }
                  ${props.$device &&
                  css`
                    font-size: ${props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault[props.$device]}px;
                  `}
                `
              : props.$variant === 'h6'
                ? css`
                    font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.default}px;
                    line-height: ${props => props.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${props => props.theme.screens.tablet.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${props => props.theme.screens.mobile.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.mobile}px;
                    }
                    ${props.$device &&
                    css`
                      font-size: ${props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault[props.$device]}px;
                    `}
                  `
                : props.$variant === 'h7'
                  ? css`
                      font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
                      line-height: ${props => props.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${props => props.theme.screens.tablet.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${props => props.theme.screens.mobile.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
                      }
                      ${props.$device &&
                      css`
                        font-size: ${props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault[props.$device]}px;
                      `}
                    `
                  : props.$variant === 'h8'
                    ? css`
                        font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
                        line-height: ${props => props.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${props => props.theme.screens.tablet.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${props => props.theme.screens.mobile.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
                        }
                        ${props.$device &&
                        css`
                          font-size: ${props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault[props.$device]}px;
                        `}
                      `
                    : props.$variant === 'h9'
                      ? css`
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
                          line-height: ${props => props.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${props => props.theme.screens.tablet.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${props => props.theme.screens.mobile.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
                          }
                          ${props.$device &&
                          css`
                            font-size: ${props.theme.font.sizeHeading.h9 *
                            props.theme.font.sizeDefault[props.$device]}px;
                          `}
                        `
                      : null}
`

export const TitleParagraph = styled.p<TypographyCSSProps>`
  ${TypographyCSS}

  ${props =>
    props.$variant === 'h1'
      ? css`
          font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.default}px;
          line-height: ${props => props.theme.font.lineHeight};
          margin: 0;
          @media (max-width: ${props => props.theme.screens.tablet.width}) {
            font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.tablet}px;
          }

          @media (max-width: ${props => props.theme.screens.mobile.width}) {
            font-size: ${props => props.theme.font.sizeHeading.h1 * props.theme.font.sizeDefault.mobile}px;
          }
        `
      : props.$variant === 'h2'
        ? css`
            font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.default}px;
            line-height: ${props => props.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${props => props.theme.screens.tablet.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${props => props.theme.screens.mobile.width}) {
              font-size: ${props => props.theme.font.sizeHeading.h2 * props.theme.font.sizeDefault.mobile}px;
            }
          `
        : props.$variant === 'h3'
          ? css`
              font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.default}px;
              line-height: ${props => props.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${props => props.theme.screens.tablet.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${props => props.theme.screens.mobile.width}) {
                font-size: ${props => props.theme.font.sizeHeading.h3 * props.theme.font.sizeDefault.mobile}px;
              }
            `
          : props.$variant === 'h4'
            ? css`
                font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.default}px;
                line-height: ${props => props.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${props => props.theme.screens.tablet.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${props => props.theme.screens.mobile.width}) {
                  font-size: ${props => props.theme.font.sizeHeading.h4 * props.theme.font.sizeDefault.mobile}px;
                }
              `
            : props.$variant === 'h5'
              ? css`
                  font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.default}px;
                  line-height: ${props => props.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${props => props.theme.screens.tablet.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${props => props.theme.screens.mobile.width}) {
                    font-size: ${props => props.theme.font.sizeHeading.h5 * props.theme.font.sizeDefault.mobile}px;
                  }
                `
              : props.$variant === 'h6'
                ? css`
                    font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.default}px;
                    line-height: ${props => props.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${props => props.theme.screens.tablet.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${props => props.theme.screens.mobile.width}) {
                      font-size: ${props => props.theme.font.sizeHeading.h6 * props.theme.font.sizeDefault.mobile}px;
                    }
                  `
                : props.$variant === 'h7'
                  ? css`
                      font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
                      line-height: ${props => props.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${props => props.theme.screens.tablet.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${props => props.theme.screens.mobile.width}) {
                        font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
                      }
                    `
                  : props.$variant === 'h8'
                    ? css`
                        font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
                        line-height: ${props => props.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${props => props.theme.screens.tablet.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${props => props.theme.screens.mobile.width}) {
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
                        }
                      `
                    : props.$variant === 'h9'
                      ? css`
                          font-size: ${props =>
                            props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
                          line-height: ${props => props.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${props => props.theme.screens.tablet.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${props => props.theme.screens.mobile.width}) {
                            font-size: ${props =>
                              props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
                          }
                        `
                      : null}
`

export const TitleH1 = styled.h1<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH2 = styled.h2<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH3 = styled.h3<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH4 = styled.h4<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH5 = styled.h5<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH6 = styled.h6<TypographyCSSProps>`
  ${TypographyCSS}
`

export const TitleH7 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h7 * props.theme.font.sizeDefault.mobile}px;
  }
  ${TypographyCSS};
`

export const TitleH8 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h8 * props.theme.font.sizeDefault.mobile}px;
  }
  ${TypographyCSS};
`

export const TitleH9 = styled.span<TypographyCSSProps>`
  font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.default}px;
  line-height: ${props => props.theme.font.lineHeight};
  margin: 0;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.tablet}px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    font-size: ${props => props.theme.font.sizeHeading.h9 * props.theme.font.sizeDefault.mobile}px;
  }
  ${TypographyCSS};
`
