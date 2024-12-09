import React, { FC, useCallback, useLayoutEffect, useMemo, useState } from 'react'

import { DEFAULT_RIPPLE_DURATION, RippleArrayElement, RippleContainer, RippleProps } from '.'

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    // eslint-disable-next-line no-undef
    let bounce: NodeJS.Timeout | null = null
    if (rippleCount > 0) {
      if (bounce) {
        clearTimeout(bounce)
      }

      bounce = setTimeout(() => {
        cleanUpFunction()
        if (bounce) {
          clearTimeout(bounce)
        }
      }, duration * 4)
    }

    return () => {
      if (bounce) {
        clearTimeout(bounce)
      }
    }
  }, [rippleCount, duration, cleanUpFunction])
}

export const Ripple: FC<RippleProps> = props => {
  const color = useMemo(() => props.color, [props.color])
  const duration = useMemo(() => props.duration ?? DEFAULT_RIPPLE_DURATION, [props.duration])

  const [rippleArray, setRippleArray] = useState<RippleArrayElement[]>([])

  useDebouncedRippleCleanUp(rippleArray.length, duration ?? DEFAULT_RIPPLE_DURATION, () => {
    setRippleArray([])
  })

  const addRipple = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rippleContainer = event.currentTarget.getBoundingClientRect()
      const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height
      const x = event.pageX - rippleContainer.x - size / 2
      const y = event.pageY - rippleContainer.y - size / 2
      const newRipple = {
        x,
        y,
        size
      }

      setRippleArray([...rippleArray, newRipple])
    },
    [rippleArray]
  )

  return (
    <RippleContainer $duration={duration} $color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          )
        })}
    </RippleContainer>
  )
}
