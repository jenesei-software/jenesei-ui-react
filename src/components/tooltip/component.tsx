import { AnimatePresence } from 'framer-motion'
import React, { FC, memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { Typography } from '@local/components/typography'

import { DEFAULT_TOOLTIP_DURATION, DEFAULT_TOOLTIP_PADDING, TooltipBox, TooltipContainer, TooltipProps } from '.'

export const Tooltip: FC<TooltipProps> = memo(props => {
  if (props.isDisabled) return <>{props.children}</>

  return <TooltipContent {...props} />
})

export const TooltipContent: FC<TooltipProps> = props => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const padding = useMemo(() => props.padding ?? DEFAULT_TOOLTIP_PADDING, [props.padding])

  const refTooltip = useRef<HTMLDivElement>(null)
  const refContainer = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return

    const handleGlobalMouseMove = (e: MouseEvent, padding: number) => {
      const tooltip = refTooltip.current
      const container = refContainer.current?.children[0] as HTMLElement

      if (!tooltip || !container) return

      const tooltipRect = tooltip.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const mouseX = e.clientX
      const mouseY = e.clientY

      const isInsideTooltip =
        mouseX >= tooltipRect.left - padding &&
        mouseX <= tooltipRect.right + padding &&
        mouseY >= tooltipRect.top - padding &&
        mouseY <= tooltipRect.bottom + padding

      const isInsideContainer =
        mouseX >= containerRect.left - padding &&
        mouseX <= containerRect.right + padding &&
        mouseY >= containerRect.top - padding &&
        mouseY <= containerRect.bottom + padding

      if (!isInsideTooltip && !isInsideContainer) {
        setVisible(false)
      }
    }

    document.addEventListener('mousemove', e => handleGlobalMouseMove(e, padding))
    return () => {
      document.removeEventListener('mousemove', e => handleGlobalMouseMove(e, padding))
    }
  }, [padding, visible])

  useLayoutEffect(() => {
    if (!visible || !isMounted) {
      setPosition(null)
      return
    }

    const tooltip = refTooltip.current
    const container = refContainer.current?.children[0] as HTMLElement
    if (!tooltip || !container) return

    const tooltipRect = tooltip.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    const placements: NonNullable<TooltipProps['placement']>[] = [
      props.placement ?? 'bottom',
      'top',
      'right',
      'left',
      'bottom-start',
      'bottom-end',
      'top-start',
      'top-end',
      'right-start',
      'right-end',
      'left-start',
      'left-end'
    ]

    const computeStyle = (placement: string) => {
      const style: React.CSSProperties = {}
      switch (placement) {
        case 'top':
          style.left = containerRect.left + containerRect.width / 2 - tooltipRect.width / 2
          style.top = containerRect.top - tooltipRect.height - padding
          break
        case 'top-start':
          style.left = containerRect.left
          style.top = containerRect.top - tooltipRect.height - padding
          break
        case 'top-end':
          style.left = containerRect.right - tooltipRect.width
          style.top = containerRect.top - tooltipRect.height - padding
          break
        case 'right':
          style.left = containerRect.right + padding
          style.top = containerRect.top + containerRect.height / 2 - tooltipRect.height / 2
          break
        case 'right-start':
          style.left = containerRect.right + padding
          style.top = containerRect.top
          break
        case 'right-end':
          style.left = containerRect.right + padding
          style.top = containerRect.bottom - tooltipRect.height
          break
        case 'bottom':
          style.left = containerRect.left + containerRect.width / 2 - tooltipRect.width / 2
          style.top = containerRect.bottom + padding
          break
        case 'bottom-start':
          style.left = containerRect.left
          style.top = containerRect.bottom + padding
          break
        case 'bottom-end':
          style.left = containerRect.right - tooltipRect.width
          style.top = containerRect.bottom + padding
          break
        case 'left':
          style.left = containerRect.left - tooltipRect.width - padding
          style.top = containerRect.top + containerRect.height / 2 - tooltipRect.height / 2
          break
        case 'left-start':
          style.left = containerRect.left - tooltipRect.width - padding
          style.top = containerRect.top
          break
        case 'left-end':
          style.left = containerRect.left - tooltipRect.width - padding
          style.top = containerRect.bottom - tooltipRect.height
          break
      }

      return {
        left: Math.round(Number(style.left) || 0),
        top: Math.round(Number(style.top) || 0),
        placement
      }
    }

    const isInViewport = (style: { left: number; top: number }) => {
      const { left, top } = style
      return (
        left >= 0 &&
        top >= 0 &&
        left + tooltipRect.width <= window.innerWidth &&
        top + tooltipRect.height <= window.innerHeight
      )
    }

    const adjustToViewport = (style: { left: number; top: number }) => {
      const left = Math.min(Math.max(style.left, 0), window.innerWidth - tooltipRect.width)
      const top = Math.min(Math.max(style.top, 0), window.innerHeight - tooltipRect.height)
      return { left, top }
    }

    const fallback = computeStyle(props.placement ?? 'bottom')
    const result = placements.map(computeStyle).find(isInViewport) || adjustToViewport(fallback)
    setPosition({ top: result.top, left: result.left })
  }, [visible, padding, props.placement, isMounted])

  useEffect(() => {
    if (visible) {
      setIsMounted(true)
    }
  }, [visible])
  return (
    <>
      <TooltipContainer ref={refContainer} onMouseEnter={handleMouseEnter}>
        {props.children}
      </TooltipContainer>
      {isMounted &&
        ReactDOM.createPortal(
          <AnimatePresence
            onExitComplete={() => {
              if (!visible) {
                setIsMounted(false)
              }
            }}
          >
            {visible && (
              <TooltipBox
                ref={refTooltip}
                $size={props.size}
                $maxHeight={props.maxHeight}
                $maxWidth={props.maxWidth}
                $whiteSpace={props.whiteSpace}
                $placement={props.placement ?? 'bottom'}
                $visible={visible}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  top: position ? position.top : 'auto',
                  left: position ? position.left : 'auto',
                  visibility: position ? 'visible' : 'hidden',
                  pointerEvents: position ? 'auto' : 'none'
                }}
                transition={{ type: 'spring', duration: DEFAULT_TOOLTIP_DURATION }}
              >
                <Typography
                  sx={
                    props.sxTypography ?? {
                      default: {
                        size: 14
                      }
                    }
                  }
                >
                  {props.content}
                </Typography>
              </TooltipBox>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}

Tooltip.displayName = 'Tooltip'
