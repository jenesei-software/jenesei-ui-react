import { JeneseiTheme } from '../main'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const UIReactLoading = styled(ReactLoading)``
UIReactLoading.defaultProps = {
  color: '#fff',
  type: 'spinningBubbles',
  height: '34px',
  width: '34px',
}

export const UIReactLoadingMin = styled(ReactLoading)``
UIReactLoadingMin.defaultProps = {
  color: JeneseiTheme.colors.product[100],
  type: 'spinningBubbles',
  height: '24px',
  width: '24px',
}
