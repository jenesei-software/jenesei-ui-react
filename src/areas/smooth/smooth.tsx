import { FC, useEffect, useRef, useState } from 'react'

import { FlexShortStylesProps } from '@local/components/stack'

import { StyledSmooth } from '.'

export const Smooth: FC<Omit<FlexShortStylesProps, 'w' | 'h'>> = props => {
  const hiddenContentRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const measureContent = () => {
      if (hiddenContentRef.current) {
        const { offsetWidth, offsetHeight } = hiddenContentRef.current
        setDimensions({ width: offsetWidth, height: offsetHeight })
      }
    }

    measureContent()
  }, [props.children])
  return (
    <>
      <StyledSmooth
        {...props}
        style={{ display: 'inline-block' }}
        w={dimensions.width ? `${dimensions.width}px` : 'auto'}
        h={dimensions.height ? `${dimensions.height}px` : 'auto'}
      >
        {props.children}
      </StyledSmooth>
      <div
        ref={hiddenContentRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          overflow: 'visible'
        }}
      >
        {props.children}
      </div>
    </>
  )
}
