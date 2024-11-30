import { FC } from 'react'

import { FlexShortStylesProps, StyledStack } from '.'

export const Stack: FC<FlexShortStylesProps> = props => {
  return (
    <StyledStack
      onClick={props.onClick}
      className={props.className}
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
      $br={props.br}
      $bs={props.bs}
      $maxTransition={props.maxTransition}
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
      $isHover={props.isHover}
      style={props.style}
    >
      {props.children}
    </StyledStack>
  )
}
