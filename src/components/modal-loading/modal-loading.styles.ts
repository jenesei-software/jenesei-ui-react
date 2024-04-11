import ReactLoading from 'react-loading'
import { styled } from 'styled-components'

import { ModalLoadingProps } from '.'

export const StyledReactLoading = styled(ReactLoading)<ModalLoadingProps>`
  & svg {
    height: 100% !important;
    width: 100% !important;
  }
`
StyledReactLoading.defaultProps = {
  color: '#fff',
  type: 'spinningBubbles',
  height: '34px',
  width: '34px',
}
