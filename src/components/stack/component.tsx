import { FC } from 'react'

import { StackMotionProps, StackProps, StyledStack, StyledStackMotion } from '.'

export const Stack: FC<StackProps> = props => {
  return (
    <StyledStack
      ref={props.ref}
      onClick={props.onClick}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      className={props.className}
      $sx={props.sx}
      $isHover={props.isHover}
      $isRipple={props.isRipple}
    >
      {props.children}
    </StyledStack>
  )
}

export const StackMotion: FC<StackMotionProps> = props => {
  return (
    <StyledStackMotion
      ref={props.ref}
      layout={props.layout}
      initial={props.initial}
      animate={props.animate}
      exit={props.exit}
      transition={props.transition}
      onClick={props.onClick}
      className={props.className}
      $sx={props.sx}
      $isHover={props.isHover}
      $isRipple={props.isRipple}
    >
      {props.children}
    </StyledStackMotion>
  )
}
