import { CheckboxGenreType } from '.'
import { LibraryCheckboxes } from '../../main'
import { Checkbox } from '@availity/mui-checkbox'
import styled from 'styled-components'

export const StyledCheckbox = styled(Checkbox)<{
  $genre?: CheckboxGenreType
}>`
  margin: 0;
  align-items: flex-start;
  padding: 11px;
  & input {
    z-index: auto;
  }
`
export const StyledIconSquareColorBorder = styled(LibraryCheckboxes.Square)`
  & #center {
    fill: transparent;
  }
  & #not-center {
    stroke: ${(props) => props.theme.colors.product['100']};
  }
  & #center-white {
    fill: transparent;
  }
`
export const StyledCheckedIconSquareColorBorder = styled(
  LibraryCheckboxes.Square
)`
  & #center {
    fill: ${(props) => props.theme.colors.product['100']};
  }
  & #not-center {
    fill: transparent;
    stroke: ${(props) => props.theme.colors.product['100']};
  }
  & #center-white {
    fill: ${(props) => props.theme.colors.white['100']};
  }
`
export const StyledIconCircle = styled(LibraryCheckboxes.Radio)`
  & #check {
    fill: transparent;
  }
`
export const StyledCheckedIconCircle = styled(LibraryCheckboxes.Radio)`
  & #uncheck {
    fill: transparent;
  }
`

export const StyledIconSquare = styled(LibraryCheckboxes.Square)`
  & #center {
    fill: transparent;
  }
  & #not-center {
  }
  & #center-white {
    fill: transparent;
  }
`
export const StyledCheckedIconSquare = styled(LibraryCheckboxes.Square)`
  & #center {
    fill: ${(props) => props.theme.colors.product['100']};
  }
  & #not-center {
    fill: transparent;
  }
  & #center-white {
    fill: ${(props) => props.theme.colors.white['100']};
  }
`
