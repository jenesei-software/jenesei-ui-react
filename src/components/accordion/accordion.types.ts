import { ReactElement } from 'react'

import { FlexShortStylesProps } from '@components/flex'

export interface AccordionProps {
  wrapperProps: FlexShortStylesProps
  accordionSummary: ReactElement
  accordionDetails: ReactElement
  expanded: boolean
  isAccordionIcon?: boolean
  onClickSummary?: () => void
  onClickIcon?: () => void
}

export interface AccordionStyledIconProps {
  $expanded: boolean
}

export interface AccordionSummaryContentProps {
  $isAccordionIcon?: boolean
}

export interface AccordionDetailsProps {
  $expanded: boolean
}
