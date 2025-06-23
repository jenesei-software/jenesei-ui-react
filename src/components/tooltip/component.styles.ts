import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { TooltipBoxProps } from '.'
import { Popover } from '../popover'

export const TooltipContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: fit-content;
`

/****************************************** TooltipBox Size *************************************************/
export const addTooltipBoxSize = css<TooltipBoxProps>`
  ${props =>
    addTooltipBoxSizeConstructor({
      ...KEY_SIZE_DATA[props.$size ?? 'medium']
    })};
`
export const addTooltipBoxSizeConstructor = (props: IJeneseiThemeSize) => css`
  display: flex;
  border-radius: ${props.radius}px;
  padding: ${props.padding}px ${props.padding}px 0px ${props.padding}px;
  gap: ${props.padding - 2}px;
  :after {
    content: '';
    display: block;
    height: ${props.padding}px;
    width: 100%;
  }
`

/****************************************** TooltipBox *************************************************/
export const TooltipBox = styled(Popover)<TooltipBoxProps>`
  background-color: ${props => props.theme.palette.grayPatricia};
  color: ${props => props.theme.palette.whiteStandard};
  box-shadow: ${props => props.theme.effects.button};
  white-space: ${props => props.$whiteSpace ?? 'normal'};
  overflow: auto;
  ${addTooltipBoxSize};
`
