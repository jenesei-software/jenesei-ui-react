import styled from 'styled-components'

import { addTransition } from '@local/styles/base'

export const PreviewWrapper = styled.div<{ $visible: boolean }>`
  background-color: ${props => props.theme.palette.whiteStandard};

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.$visible ? 0 : 1)};
  ${addTransition};
`

export const PreviewChildren = styled.div<{ $visible: boolean }>`
  opacity: ${props => (props.$visible ? 1 : 0)};
  ${addTransition};
`

export const LoadingWrapper = styled.div`
  position: absolute;
  width: 8vmin;
  height: 8vmin;
`

export const PreviewContent = styled.div`
  position: relative;
  margin-top: calc(18vmin);
  z-index: 1;
  ${addTransition};
`
