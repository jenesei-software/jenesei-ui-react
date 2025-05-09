import { FC } from 'react'

import { StackMotionProps, StackProps, StyledStack, StyledStackMotion } from '.'

export const Stack: FC<StackProps> = props => {
  return (
    <StyledStack
      onClick={props.onClick}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      className={props.className}
      $sx={props.sx}
      $isHover={props.isHover}
    >
      {props.children}
    </StyledStack>
  )
}

export const StackMotion: FC<StackMotionProps> = props => {
  return (
    <StyledStackMotion
      layout={props.layout}
      initial={props.initial}
      animate={props.animate}
      exit={props.exit}
      transition={props.transition}
      onClick={props.onClick}
      className={props.className}
      $sx={props.sx}
      $isHover={props.isHover}
    >
      {props.children}
    </StyledStackMotion>
  )
}
