import { AnimatePresence } from 'framer-motion'

import { ToggleCenter, ToggleProps, ToggleWrapper } from '.'

export const Toggle = (props: ToggleProps) => {
  return (
    <AnimatePresence>
      <ToggleWrapper
        $genre={props.genre}
        $isDisabled={props.isDisabled}
        $value={props.value}
        $size={props.size}
        $isError={props.isError}
        tabIndex={0}
        onClick={() => props.onChange && props.onChange(!props.value)}
      >
        <ToggleCenter
          layout
          $genre={props.genre}
          $isDisabled={props.isDisabled}
          $value={props.value}
          $size={props.size}
          $isError={props.isError}
        />
      </ToggleWrapper>
    </AnimatePresence>
  )
}
