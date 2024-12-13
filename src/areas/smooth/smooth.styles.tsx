import styled from 'styled-components'

import { Stack } from '@local/components/stack'

export const StyledSmooth = styled(Stack)`
  overflow: hidden;
  transition:
    height ${props => props.theme.transition},
    width ${props => props.theme.transition};
`
