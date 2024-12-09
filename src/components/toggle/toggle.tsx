import { AnimatePresence, motion } from 'framer-motion'

import { StyledReactToggle, ToggleCenter, ToggleProps, ToggleWrapper } from '.'

export const Toggle = (props: ToggleProps) => {
  return (
    <AnimatePresence>
      <ToggleWrapper tabIndex={0}>
        <ToggleCenter layout />
      </ToggleWrapper>
    </AnimatePresence>

    // <StyledReactToggle
    //   checked={props.value}
    //   onChange={() => props.onChange && props.onChange(!props.value)}
    //   disabled={props.isDisabled}
    //   $genre={props.genre}
    //   $isDisabled={props.isDisabled}
    //   $value={props.value}
    //   $size={props.size}
    //   $isError={props.isError}
    //   tabIndex={0}
    // />
  )
}
