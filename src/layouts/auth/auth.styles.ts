import { motion } from 'framer-motion'
import Image from 'react-image-webp'
import styled from 'styled-components'

export const AuthLayoutWrapper = styled(motion.div)`
  display: grid;
  width: 100%;
  height: 100dvh;
  position: relative;
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    padding: 0px 100px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
  }
`

export const AuthLayoutWrapperChildren = styled.svg`
  background-color: ${props => props.theme.palette.whiteStandard};
  z-index: 0;
`

export const AuthLayoutWrapperChildrenWrapper = styled(motion.div)`
  background-color: ${props => props.theme.palette.whiteStandard};
  z-index: 0;
  padding: 80px;
  display: flex;
  align-items: center;
  overflow-y: auto;
  justify-content: flex-start;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 100px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`

export const AuthLayoutWrapperBackgroundSVG = styled(motion.svg)`
  z-index: 1;
`

export const AuthLayoutWrapperBackgroundText = styled(motion.div)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    display: none;
  }
`
