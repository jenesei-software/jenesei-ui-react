import { ReactElement } from 'react'

import { FlexShortStylesNormalizedPropsNormalized } from '@components/flex'

export interface AccordionProps {
  wrapperProps: FlexShortStylesNormalizedPropsNormalized
  accordionSummary: ReactElement
  accordionDetails: ReactElement
  expanded: boolean
  isAccordionIcon?: boolean
  onClickSummary?: () => void
  onClickIcon?: () => void
  triggerUpdate?: unknown[]
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
