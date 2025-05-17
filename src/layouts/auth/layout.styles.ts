import { motion } from 'framer-motion'
import Image from 'react-image-webp'
import styled from 'styled-components'

export const AuthLayoutWrapper = styled(motion.div)`
  display: grid;
  width: 100dvw;
  height: 100dvh;
  position: relative;
  align-items: stretch;
  justify-items: stretch;
  overflow: hidden;
  justify-items: stretch;
`
export const AuthStyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: left;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.palette.black100};
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    height: 100%;
    width: 100%;
    object-position: bottom;
  }
`

export const AuthLayoutWrapperBackground = styled(motion.div)`
  grid-area: picture;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  justify-self: stretch;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    padding: 0px 100px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
  }
`

export const AuthLayoutWrapperChildren = styled.div`
  grid-area: children;
  background-color: ${props => props.theme.palette.whiteStandard};
  width: 100%;
  height: 100%;
  z-index: 0;
  justify-self: stretch;
  display: flex;
  align-items: stretch;
  flex-grow: 1;
`

export const AuthLayoutWrapperChildrenWrapper = styled(motion.div)`
  flex-grow: 1;
`

export const AuthLayoutWrapperBackgroundSVG = styled.svg`
  z-index: 1;
`

export const AuthLayoutWrapperBackgroundText = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    display: none;
  }
`
