import ReactLoading from 'react-loading'
import { styled } from 'styled-components'

export const StyledReactLoading = styled(ReactLoading)`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    height: 100% !important;
    width: 100% !important;
  }
`
