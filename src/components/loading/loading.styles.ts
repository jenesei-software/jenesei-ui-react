import ReactLoading from 'react-loading'
import { styled } from 'styled-components'

import { StyledReactLoadingProps } from '.'

export const StyledReactLoading = styled(ReactLoading)<StyledReactLoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${props => props.$order ?? 'initial'};
  & svg {
    height: 100% !important;
    width: 100% !important;
  }
`
