/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'

import {
  FlexContainerProps,
  FlexItemProps,
  FlexShortStylesProps,
  FlexStylesProps,
  JeneseiThemeVariables,
} from '../../main'

const FlexContainer = css<FlexContainerProps>`
  display: flex;
  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ alignContent }) =>
    alignContent &&
    css`
      align-content: ${alignContent};
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`

const FlexItem = css<FlexItemProps>`
  ${({ order }) =>
    order &&
    css`
      order: ${order};
    `}
  ${({ flexGrow }) =>
    flexGrow &&
    css`
      flex-grow: ${flexGrow};
    `}
  ${({ flexShrink }) =>
    flexShrink &&
    css`
      flex-shrink: ${flexShrink};
    `}
  ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `}
  ${({ alignSelf }) =>
    alignSelf &&
    css`
      align-self: ${alignSelf};
    `}
`

const FlexShort = css<FlexShortStylesProps>`
  ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  ${({ mx }) =>
    mx &&
    css`
      margin-left: ${mx};
      margin-right: ${mx};
    `}
  ${({ my }) =>
    my &&
    css`
      margin-top: ${my};
      margin-bottom: ${my};
    `}
  ${({ p }) =>
    p &&
    css`
      padding: ${p};
    `}
  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `}
  ${({ px }) =>
    px &&
    css`
      padding-left: ${px};
      padding-right: ${px};
    `}
  ${({ py }) =>
    py &&
    css`
      padding-top: ${py};
      padding-bottom: ${py};
    `}
  ${({ w }) =>
    w &&
    css`
      width: ${w};
    `}
  ${({ h }) =>
    h &&
    css`
      height: ${h};
    `}
  ${({ minW }) =>
    minW &&
    css`
      min-width: ${minW};
    `}
  ${({ maxW }) =>
    maxW &&
    css`
      max-width: ${maxW};
    `}
  ${({ minH }) =>
    minH &&
    css`
      min-height: ${minH};
    `}
  ${({ maxH }) =>
    maxH &&
    css`
      max-height: ${maxH};
    `}
  ${({ bg }) =>
    bg &&
    css`
      background: ${JeneseiThemeVariables[bg]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${JeneseiThemeVariables[color]};
    `}
`

export const FlexStyles = css<FlexStylesProps>`
  ${FlexContainer}
  ${FlexItem}
`

export const FlexShortStyles = css<FlexStylesProps>`
  ${FlexStyles}
  ${FlexShort}
`

export const JeneseiStack = styled.div<FlexStylesProps>`
  ${FlexShortStyles}
`
