import React, { CSSProperties, FC, MouseEventHandler, memo, useCallback, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useTheme } from 'styled-components'

import { Typography } from '@local/components/typography'

import { TooltipArrow, TooltipBox, TooltipContainer, TooltipProps } from '.'

export const Tooltip: FC<TooltipProps> = memo(props => {
  // eslint-disable-next-line react/prop-types
  if (props.isDisabled) return <>{props.children}</>

  return <TooltipContent {...props} />
})

export const TooltipContent: FC<TooltipProps> = props => {
  const theme = useTheme()

  const [visible, setVisible] = useState(false)

  const arrowSize = useMemo(() => 10, [])
  const arrowSizeString = useMemo(() => `${arrowSize}px`, [])
  const arrowLength = useMemo(() => arrowSize, [])

  const refTooltip = useRef<HTMLDivElement>(null)
  const refContainer = useRef<HTMLDivElement>(null)

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    setVisible(true)
  }, [])

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = useCallback(event => {
    const target = event.relatedTarget as Node

    if (
      !(target instanceof Node) ||
      (!refTooltip.current?.contains(target) && !refContainer.current?.contains(target))
    ) {
      setVisible(false)
    }
  }, [])

  const styleTooltip = useMemo(() => {
    if (!refTooltip.current || (!refContainer.current && !visible)) return {}

    const tooltip = refTooltip.current
    const container = refContainer.current

    if (!tooltip || !container) return {}

    const tooltipRect = tooltip.getBoundingClientRect()
    const containerRect = container.children[0].getBoundingClientRect()

    const style: React.CSSProperties = {}
    switch (props.placement) {
      case 'top':
        style.left = `${containerRect.left + containerRect.width / 2 - tooltipRect.width / 2}px`
        style.top = `${containerRect.top - tooltipRect.height - arrowLength}px`
        break

      case 'top-start':
        style.left = `${containerRect.left}px`
        style.top = `${containerRect.top - tooltipRect.height - arrowLength}px`
        break

      case 'top-end':
        style.left = `${containerRect.right - tooltipRect.width}px`
        style.top = `${containerRect.top - tooltipRect.height - arrowLength}px`
        break

      case 'right':
        style.left = `${containerRect.right + arrowLength}px`
        style.top = `${containerRect.top + containerRect.height / 2 - tooltipRect.height / 2}px`
        break

      case 'right-start':
        style.left = `${containerRect.right + arrowLength}px`
        style.top = `${containerRect.top}px`
        break

      case 'right-end':
        style.left = `${containerRect.right + arrowLength}px`
        style.top = `${containerRect.bottom - tooltipRect.height}px`
        break

      case 'bottom':
        style.left = `${containerRect.left + containerRect.width / 2 - tooltipRect.width / 2}px`
        style.top = `${containerRect.bottom + arrowLength}px`
        break

      case 'bottom-start':
        style.left = `${containerRect.left}px`
        style.top = `${containerRect.bottom + arrowLength}px`
        break

      case 'bottom-end':
        style.left = `${containerRect.right - tooltipRect.width}px`
        style.top = `${containerRect.bottom + arrowLength}px`
        break

      case 'left':
        style.left = `${containerRect.left - tooltipRect.width - arrowLength}px`
        style.top = `${containerRect.top + containerRect.height / 2 - tooltipRect.height / 2}px`
        break

      case 'left-start':
        style.left = `${containerRect.left - tooltipRect.width - arrowLength}px`
        style.top = `${containerRect.top}px`
        break

      case 'left-end':
        style.left = `${containerRect.left - tooltipRect.width - arrowLength}px`
        style.top = `${containerRect.bottom - tooltipRect.height}px`
        break

      default:
        break
    }

    return style
  }, [arrowLength, props.placement, visible])

  const styleArrow = useMemo(() => {
    if (!refContainer.current && !visible) return {}

    const container = refContainer.current

    if (!container) return {}

    const containerRect = container.children[0].getBoundingClientRect()

    const style: CSSProperties = {}

    switch (props.placement) {
      case 'right':
        style.left = `${containerRect.right}px`
        style.top = `${containerRect.top + containerRect.height / 2 - 10}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} ${arrowSizeString} 0`
        style.borderColor = `transparent ${theme.palette.grayPatricia} transparent transparent`
        break
      case 'right-start':
        style.left = `${containerRect.right}px`
        style.top = `${containerRect.top + 5}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} ${arrowSizeString} 0`
        style.borderColor = `transparent ${theme.palette.grayPatricia} transparent transparent`
        break

      case 'right-end':
        style.left = `${containerRect.right}px`
        style.top = `${containerRect.top + containerRect.height - 25}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} ${arrowSizeString} 0`
        style.borderColor = `transparent ${theme.palette.grayPatricia} transparent transparent`
        break
      case 'left':
        style.left = `${containerRect.left - 10}px`
        style.top = `${containerRect.top + containerRect.height / 2 - 10}px`
        style.borderWidth = `${arrowSizeString} 0 ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent transparent ${theme.palette.grayPatricia}`
        break

      case 'left-start':
        style.left = `${containerRect.left - 10}px`
        style.top = `${containerRect.top + 5}px`
        style.borderWidth = `${arrowSizeString} 0 ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent transparent ${theme.palette.grayPatricia}`
        break

      case 'left-end':
        style.left = `${containerRect.left - 10}px`
        style.top = `${containerRect.top + containerRect.height - 25}px`
        style.borderWidth = `${arrowSizeString} 0 ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent transparent ${theme.palette.grayPatricia}`
        break
      case 'top':
        style.left = `${containerRect.left + containerRect.width / 2 - 10}px`
        style.top = `${containerRect.top - 10}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} 0 ${arrowSizeString}`
        style.borderColor = `${theme.palette.grayPatricia} transparent transparent transparent`
        break

      case 'top-start':
        style.left = `${containerRect.left + 10}px`
        style.top = `${containerRect.top - 10}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} 0 ${arrowSizeString}`
        style.borderColor = `${theme.palette.grayPatricia} transparent transparent transparent`
        break

      case 'top-end':
        style.left = `${containerRect.right - 30}px`
        style.top = `${containerRect.top - 10}px`
        style.borderWidth = `${arrowSizeString} ${arrowSizeString} 0 ${arrowSizeString}`
        style.borderColor = `${theme.palette.grayPatricia} transparent transparent transparent`
        break
      case 'bottom':
        style.left = `${containerRect.left + containerRect.width / 2 - 10}px`
        style.top = `${containerRect.bottom}px`
        style.borderWidth = `0 ${arrowSizeString} ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent ${theme.palette.grayPatricia}  transparent`
        break

      case 'bottom-start':
        style.left = `${containerRect.left + 10}px`
        style.top = `${containerRect.bottom}px`
        style.borderWidth = `0 ${arrowSizeString} ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent ${theme.palette.grayPatricia}  transparent`
        break

      case 'bottom-end':
        style.left = `${containerRect.right - 30}px`
        style.top = `${containerRect.bottom}px`
        style.borderWidth = `0 ${arrowSizeString} ${arrowSizeString} ${arrowSizeString}`
        style.borderColor = `transparent transparent ${theme.palette.grayPatricia}  transparent`
        break
      default:
        break
    }

    return style
  }, [arrowSizeString, props.placement, theme.palette.grayPatricia, visible])

  return (
    <>
      <TooltipContainer ref={refContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </TooltipContainer>
      {ReactDOM.createPortal(
        <>
          <TooltipArrow $visible={visible} style={styleArrow} />
          <TooltipBox
            ref={refTooltip}
            $maxHeight={props.maxHeight}
            $maxWidth={props.maxWidth}
            $whiteSpace={props.whiteSpace}
            $placement={props.placement ?? 'bottom'}
            $visible={visible}
            onMouseLeave={handleMouseLeave}
            style={styleTooltip}
          >
            {<Typography size={props.size ?? 14}>{props.content}</Typography>}
          </TooltipBox>
        </>,
        document.body
      )}
    </>
  )
}

Tooltip.displayName = 'Tooltip'
