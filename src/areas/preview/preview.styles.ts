import styled, { keyframes } from 'styled-components'

const loader1 = keyframes`
  	0%, 100% {
		transform: none;
	}
	
	25% {
		transform: translateX(-100%);
	}
	
	50% {
		transform: translateX(-100%) translateY(-100%);
	}
	
	75% {
		transform: translateY(-100%);
	}
`

const loader2 = keyframes`
  0%, 100% {
		transform: none;
	}
	
	25% {
		transform: translateX(100%);
	}
	
	50% {
		transform: translateX(100%) translateY(100%);
	}
	
	75% {
		transform: translateY(100%);
	}
`

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
  transition:
    opacity ${props => props.theme.transition.default},
    transform ${props => props.theme.transition.default};
`

export const PreviewChildren = styled.div<{ $visible: boolean }>`
  opacity: ${props => (props.$visible ? 1 : 0)};
  transition:
    opacity ${props => props.theme.transition.default},
    transform ${props => props.theme.transition.default};
`

export const PreviewLoading = styled.div`
  &:before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
  }

  &::before,
  &::after {
    width: 3vmin;
    height: 3vmin;
    background-color: ${props => props.theme.palette.blueFocus};
  }

  &::before {
    top: calc(50% - 3vmin);
    left: calc(50% - 3vmin);
    animation: ${loader2} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  &::after {
    top: 50%;
    left: 50%;
    animation: ${loader1} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }
  mation-delay: 0.12s;
`

export const PreviewContent = styled.div`
  position: relative;
  margin-top: calc(18vmin);
  z-index: 1;
  transition:
    opacity ${props => props.theme.transition.default},
    transform ${props => props.theme.transition.default};
`
