import { useCallback, useRef } from 'react'

import { Stack } from '@components/flex'

import {
  AccordionDetails,
  AccordionProps,
  AccordionStyledIcon,
  AccordionSummary,
  AccordionSummaryContent,
  AccordionWrapper,
} from '.'

export const Accordion = (props: AccordionProps) => {
  const accordionDetailsRef = useRef<HTMLDivElement>(null)

  const onClickSummary = useCallback(() => {
    if (props.onClickSummary) props.onClickSummary()
  }, [props])

  const onClickIcon = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      if (props.onClickIcon) {
        event.stopPropagation()
        props.onClickIcon()
      }
    },
    [props],
  )

  return (
    <Stack {...props.wrapperProps}>
      <AccordionWrapper>
        <AccordionSummary onClick={onClickSummary}>
          <AccordionSummaryContent $isAccordionIcon={props.isAccordionIcon}>
            {props.accordionSummary}
          </AccordionSummaryContent>
          {props.isAccordionIcon && (
            <AccordionStyledIcon
              $expanded={props.expanded}
              onClick={onClickIcon}
              icon="ArrowDown"
              color="black100"
              size="large"
            />
          )}
        </AccordionSummary>
        <AccordionDetails $expanded={props.expanded} ref={accordionDetailsRef}>
          {props.accordionDetails}
        </AccordionDetails>
      </AccordionWrapper>
    </Stack>
  )
}
