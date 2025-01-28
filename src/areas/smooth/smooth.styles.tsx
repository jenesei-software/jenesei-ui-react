import styled from 'styled-components'

import { Stack } from '@local/components/stack'
import { addTransition } from '@local/styles/base'

export const StyledSmooth = styled(Stack)`
  overflow: hidden;
  ${addTransition};
`
