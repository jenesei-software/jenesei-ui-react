import { styled } from 'styled-components'

import { StyledButtonGroupProps } from '.'
import { Button } from '../button'

export const ButtonGroupWrapper = styled.div<StyledButtonGroupProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const StyledButton = styled(Button)`
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
