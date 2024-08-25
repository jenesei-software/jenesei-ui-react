import React, { useCallback } from 'react'

import { Stack } from '@components/flex'

import {
  AccordionDetails,
  AccordionProps,
  AccordionStyledIcon,
  AccordionSummary,
  AccordionSummaryContent,
  AccordionWrapper,
} from '.'

export const Accordion: React.FC<AccordionProps> = (props) => {
  const onClickSummary = useCallback(() => {
    if (props.onClickSummary) props.onClickSummary()
  }, [props.onClickSummary])

  const onClickIcon = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      if (props.onClickIcon) {
        event.stopPropagation()
        props.onClickIcon()
      }
    },
    [props.onClickIcon],
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
              name="Folder"
              primaryColor="black100"
              type="curved"
              size="large"
            />
          )}
        </AccordionSummary>
        <AccordionDetails $expanded={props.expanded}>
          {props.accordionDetails}
        </AccordionDetails>
      </AccordionWrapper>
    </Stack>
  )
}
