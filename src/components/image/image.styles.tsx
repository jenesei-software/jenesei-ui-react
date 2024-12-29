import styled from 'styled-components'

import { ImageIMGProps } from '.'

export const ImageIMG = styled.img<ImageIMGProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.$isPending ? 0 : 1)};
  transition: all ${props => props.theme.transition.default};
`