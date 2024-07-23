import { css, styled } from 'styled-components'

import { StyledButtonGroupProps } from '.'
import { Button } from '../button'

/****************************************** Position *************************************************/
const ButtonGroupWrapperPositionHorizontal = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ButtonGroupWrapperPositionVertical = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const StyledButtonPositionHorizontal = css`
  &:not(:only-child) {
    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
`

const StyledButtonPositionVertical = css`
  &:not(:only-child) {
    &:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
`

export const ButtonGroupWrapper = styled.div<StyledButtonGroupProps>`
  ${(props) =>
    props.position === 'horizontal'
      ? ButtonGroupWrapperPositionHorizontal
      : ButtonGroupWrapperPositionVertical}
`

export const StyledButtonForButtonGroup = styled(
  Button,
)<StyledButtonGroupProps>`
  ${(props) =>
    props.position === 'horizontal'
      ? StyledButtonPositionHorizontal
      : StyledButtonPositionVertical}
`
