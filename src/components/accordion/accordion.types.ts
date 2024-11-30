import { ReactElement } from 'react'
import { AddDollarSign } from 'src/types'

import { FlexShortStylesProps } from '@components/stack'

export interface AccordionProps {
  wrapperProps: FlexShortStylesProps
  accordionSummary: ReactElement
  accordionDetails: ReactElement
  expanded: boolean
  isAccordionIcon?: boolean
  onClickSummary?: () => void
  onClickIcon?: () => void
  triggerUpdate?: unknown[]
}

export type AccordionStyledIconProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>

export type AccordionSummaryContentProps = AddDollarSign<Pick<AccordionProps, 'isAccordionIcon'>>

export type AccordionDetailsProps = AddDollarSign<Pick<AccordionProps, 'expanded'>>
