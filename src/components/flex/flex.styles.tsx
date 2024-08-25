/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'

import { JeneseiThemeVariables } from '@theme/index'

import {
  FlexContainerProps,
  FlexItemProps,
  FlexShortStylesNormalizedPropsNormalized,
  FlexContainerAndItemAndBasicProps,
  FlexContainerAndItemProps,
  FlexBasicProps,
} from '.'

const FlexContainer = css<FlexContainerProps>`
  display: flex;
  ${({ $flexDirection }) =>
    $flexDirection &&
    css`
      flex-direction: ${$flexDirection};
    `}
  ${({ $flexWrap }) =>
    $flexWrap &&
    css`
      flex-wrap: ${$flexWrap};
    `}
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
  ${({ $alignItems }) =>
    $alignItems &&
    css`
      align-items: ${$alignItems};
    `}
  ${({ $alignContent }) =>
    $alignContent &&
    css`
      align-content: ${$alignContent};
    `}
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap};
    `}
`

const FlexItem = css<FlexItemProps>`
  ${({ $order }) =>
    $order &&
    css`
      order: ${$order};
    `}
  ${({ $flexGrow }) =>
    $flexGrow &&
    css`
      flex-grow: ${$flexGrow};
    `}
  ${({ $flexShrink }) =>
    $flexShrink &&
    css`
      flex-shrink: ${$flexShrink};
    `}
  ${({ $flexBasis }) =>
    $flexBasis &&
    css`
      flex-basis: ${$flexBasis};
    `}
  ${({ $alignSelf }) =>
    $alignSelf &&
    css`
      align-self: ${$alignSelf};
    `}
`

const FlexBasic = css<FlexBasicProps>`
  ${({ $m }) =>
    $m &&
    css`
      margin: ${$m};
    `}
  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: ${$mt};
    `}
  ${({ $mr }) =>
    $mr &&
    css`
      margin-right: ${$mr};
    `}
  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${$mb};
    `}
  ${({ $ml }) =>
    $ml &&
    css`
      margin-left: ${$ml};
    `}
  ${({ $mx }) =>
    $mx &&
    css`
      margin-left: ${$mx};
      margin-right: ${$mx};
    `}
  ${({ $my }) =>
    $my &&
    css`
      margin-top: ${$my};
      margin-bottom: ${$my};
    `}
  ${({ $p }) =>
    $p &&
    css`
      padding: ${$p};
    `}
  ${({ $pt }) =>
    $pt &&
    css`
      padding-top: ${$pt};
    `}
  ${({ $pr }) =>
    $pr &&
    css`
      padding-right: ${$pr};
    `}
  ${({ $pb }) =>
    $pb &&
    css`
      padding-bottom: ${$pb};
    `}
  ${({ $pl }) =>
    $pl &&
    css`
      padding-left: ${$pl};
    `}
  ${({ $px }) =>
    $px &&
    css`
      padding-left: ${$px};
      padding-right: ${$px};
    `}
  ${({ $py }) =>
    $py &&
    css`
      padding-top: ${$py};
      padding-bottom: ${$py};
    `}
  ${({ $w }) =>
    $w &&
    css`
      width: ${$w};
    `}
  ${({ $h }) =>
    $h &&
    css`
      height: ${$h};
    `}
  ${({ $minW }) =>
    $minW &&
    css`
      min-width: ${$minW};
    `}
  ${({ $maxW }) =>
    $maxW &&
    css`
      max-width: ${$maxW};
    `}
  ${({ $minH }) =>
    $minH &&
    css`
      min-height: ${$minH};
    `}
  ${({ $maxH }) =>
    $maxH &&
    css`
      max-height: ${$maxH};
    `}
  ${({ $bg }) =>
    $bg &&
    css`
      background: ${JeneseiThemeVariables[$bg]};
    `}
  ${({ $color }) =>
    $color &&
    css`
      color: ${JeneseiThemeVariables[$color]};
    `}
`

export const FlexContainerAndItem = css<FlexContainerAndItemProps>`
  ${FlexContainer}
  ${FlexItem}
`

export const FlexContainerAndItemAndBasic = css<FlexContainerAndItemAndBasicProps>`
  ${FlexContainerAndItem}
  ${FlexBasic}
`

const StyledStack = styled.div<FlexContainerAndItemAndBasicProps>`
  ${FlexContainerAndItemAndBasic}
`

export const Stack: React.FC<FlexShortStylesNormalizedPropsNormalized> = (props) => {
  return (
    <StyledStack
      $flexDirection={props.flexDirection}
      $flexWrap={props.flexWrap}
      $justifyContent={props.justifyContent}
      $alignItems={props.alignItems}
      $alignContent={props.alignContent}
      
      $order={props.order}
      $flexGrow={props.flexGrow}
      $flexShrink={props.flexShrink}
      $flexBasis={props.flexBasis}
      $alignSelf={props.alignSelf}
      $gap={props.gap}

      $m={props.m}
      $mt={props.mt}
      $mr={props.mr}
      $mb={props.mb}
      $ml={props.ml}
      $mx={props.mx}
      $my={props.my}
      $p={props.p}
      $pt={props.pt}
      $pr={props.pr}
      $pb={props.pb}
      $pl={props.pl}
      $px={props.px}
      $py={props.py}
      $w={props.w}
      $h={props.h}
      $minW={props.minW}
      $maxW={props.maxW}
      $minH={props.minH}
      $maxH={props.maxH}
      $bg={props.bg}
      $color={props.color}
      style={props.style}
    >
      {props.children}
    </StyledStack>
  )
}
