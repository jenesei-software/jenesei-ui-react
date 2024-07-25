import styled, { css } from 'styled-components'

import {
  AccordionDetailsProps,
  AccordionStyledIconProps,
  AccordionSummaryContentProps,
} from '.'
import { Icon } from '../../main'

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const AccordionSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const AccordionSummaryContent = styled.div<AccordionSummaryContentProps>`
  width: 100%;

  ${(props) =>
    props.$isAccordionIcon &&
    css`
      width: calc(100% - 26px);
    `}
`
export const AccordionDetails = styled.div<AccordionDetailsProps>`
  transition: height ${(props) => props.theme.transition};
  overflow: hidden;
  ${(props) =>
    props.$expanded
      ? css`
          height: 100%;
        `
      : css`
          height: 0px;
        `}
`
export const AccordionStyledIcon = styled(Icon)<AccordionStyledIconProps>`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${(props) =>
    props.$expanded
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`
