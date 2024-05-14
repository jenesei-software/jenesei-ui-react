import ReactLoading from 'react-loading'
import { styled } from 'styled-components'

import { ModalLoadingProps } from '.'

export const StyledReactLoading = styled(ReactLoading)<ModalLoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    height: 100% !important;
    width: 100% !important;
  }
`
