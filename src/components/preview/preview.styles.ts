import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`

export const PreviewWrapper = styled.div`
  background-color: black;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
    background-size: 200px 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shine} 3s infinite linear;
    position: absolute;
  }
`
