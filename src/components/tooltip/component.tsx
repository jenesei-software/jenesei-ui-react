import { FC, Ref, memo } from 'react'

import { Typography } from '@local/components/typography'

import {
  DEFAULT_TOOLTIP_OFFSET_FALLBACK,
  DEFAULT_TOOLTIP_PLACEMENT_FALLBACK,
  TooltipBox,
  TooltipContainer,
  TooltipProps
} from '.'
import { usePopover } from '../popover'

export const Tooltip: FC<TooltipProps> = memo(props => {
  if (props.isDisabled) return <>{props.children}</>

  return <TooltipContent {...props} />
})

export const TooltipContent: FC<TooltipProps> = props => {
  const { isOpen, reference, floating, floatingStyles } = usePopover({
    placement: props.placement ?? DEFAULT_TOOLTIP_PLACEMENT_FALLBACK,
    offset: props.offset ?? DEFAULT_TOOLTIP_OFFSET_FALLBACK,
    mode: 'hover',
    isClickOutside: true,
    isFloatingHover: true
  })
  return (
    <>
      <TooltipContainer sx={props.sx} ref={reference as Ref<HTMLDivElement | null>}>
        {props.children}
      </TooltipContainer>
      <TooltipBox
        size={props.size}
        isOpen={isOpen}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={floating}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
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
    </>
  )
}

Tooltip.displayName = 'Tooltip'
